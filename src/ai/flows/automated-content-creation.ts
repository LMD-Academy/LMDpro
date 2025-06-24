'use server';

/**
 * @fileOverview AI flow for automated educational content creation, including researching topics,
 * writing scripts, and generating 3D animated videos.
 *
 * - createEducationalContent - A function that handles the content creation process.
 * - CreateEducationalContentInput - The input type for the createEducationalContent function.
 * - CreateEducationalContentOutput - The return type for the createEducationalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const CreateEducationalContentInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate educational content.'),
  scriptLength: z
    .string()
    .optional()
    .describe('Desired length of the script (short, medium, long).'),
});

export type CreateEducationalContentInput = z.infer<typeof CreateEducationalContentInputSchema>;

const CreateEducationalContentOutputSchema = z.object({
  script: z.string().describe('The generated script for the educational content.'),
  videoDataUri: z.string().describe('Data URI of the generated 3D animated video.'),
});

export type CreateEducationalContentOutput = z.infer<typeof CreateEducationalContentOutputSchema>;

export async function createEducationalContent(
  input: CreateEducationalContentInput
): Promise<CreateEducationalContentOutput> {
  return createEducationalContentFlow(input);
}

const researchTopicPrompt = ai.definePrompt({
  name: 'researchTopicPrompt',
  input: {schema: CreateEducationalContentInputSchema},
  output: {schema: z.string()},
  prompt: `Research the topic of "{{topic}}". Provide a detailed summary. Focus on information that can be used to make educational video.`,
});

const scriptWritingPrompt = ai.definePrompt({
  name: 'scriptWritingPrompt',
  input: {schema: z.object({researchSummary: z.string(), scriptLength: z.string().optional()})},
  output: {schema: z.string()},
  prompt: `Based on the following research summary:\n\n{{researchSummary}}\n\nWrite a script for an educational video.  The video script should be engaging and informative.  The desired script length is {{scriptLength}}.`,
});

const ttsPrompt = ai.definePrompt({
  name: 'ttsPrompt',
  input: {schema: z.string()},
  output: {schema: z.any()},
  prompt: `{{script}}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const createEducationalContentFlow = ai.defineFlow(
  {
    name: 'createEducationalContentFlow',
    inputSchema: CreateEducationalContentInputSchema,
    outputSchema: CreateEducationalContentOutputSchema,
  },
  async input => {
    const researchResult = await researchTopicPrompt(input);
    const script = await scriptWritingPrompt({
      researchSummary: researchResult.output!,
      scriptLength: input.scriptLength ?? 'medium',
    });

    const tts = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: script.output!,
    });

    if (!tts.media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      tts.media.url.substring(tts.media.url.indexOf(',') + 1),
      'base64'
    );
    const media = {
      media: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
    };

    // Image generation - Gemini 2.0 Flash only.
    const image = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: script.output!,
      config: {responseModalities: ['TEXT', 'IMAGE']},
    });

    return {
      script: script.output!,
      videoDataUri: image.media!.url,
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
