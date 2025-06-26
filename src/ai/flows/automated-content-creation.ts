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
  audioDataUri: z.string().describe('Data URI of the generated audio narration.'),
});

export type CreateEducationalContentOutput = z.infer<typeof CreateEducationalContentOutputSchema>;

export async function createEducationalContent(
  input: CreateEducationalContentInput
): Promise<CreateEducationalContentOutput> {
  return createEducationalContentFlow(input);
}

// New schema for structured research output
const ResearchOutputSchema = z.object({
  summary: z.string().describe('A detailed summary of the researched topic.'),
});

const researchTopicPrompt = ai.definePrompt({
  name: 'researchTopicPrompt',
  model: 'googleai/gemini-2.0-flash',
  input: {schema: CreateEducationalContentInputSchema},
  output: {schema: ResearchOutputSchema}, // Use structured output
  prompt: `Research the topic of "{{topic}}". Provide a detailed summary. Focus on information that can be used to make an educational video.

Respond with a valid JSON object matching this schema:
\`\`\`json
{
  "summary": "string"
}
\`\`\``,
});

// New schema for structured script output
const ScriptOutputSchema = z.object({
  script: z.string().describe('The generated script for the educational video.'),
});

const scriptWritingPrompt = ai.definePrompt({
  name: 'scriptWritingPrompt',
  model: 'googleai/gemini-2.0-flash',
  input: {schema: z.object({researchSummary: z.string(), scriptLength: z.string().optional()})},
  output: {schema: ScriptOutputSchema}, // Use structured output
  prompt: `Based on the following research summary:\n\n{{researchSummary}}\n\nWrite a script for an educational video. The video script should be engaging and informative. The desired script length is {{scriptLength}}.

Respond with a valid JSON object matching this schema:
\`\`\`json
{
  "script": "string"
}
\`\`\``,
});

const createEducationalContentFlow = ai.defineFlow(
  {
    name: 'createEducationalContentFlow',
    inputSchema: CreateEducationalContentInputSchema,
    outputSchema: CreateEducationalContentOutputSchema,
  },
  async input => {
    // Add a guard for empty topic
    if (!input.topic) {
        throw new Error('Topic cannot be empty.');
    }

    const researchResult = await researchTopicPrompt(input);
    const researchSummary = researchResult.output?.summary;

    if (!researchSummary) {
      throw new Error('Failed to generate research summary.');
    }

    const scriptResult = await scriptWritingPrompt({
      researchSummary: researchSummary,
      scriptLength: input.scriptLength ?? 'medium',
    });

    const script = scriptResult.output?.script;

    if (!script) {
        throw new Error('Failed to generate script.');
    }

    const tts = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: script,
    });

    if (!tts.media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      tts.media.url.substring(tts.media.url.indexOf(',') + 1),
      'base64'
    );
    const audioDataUri = 'data:audio/wav;base64,' + (await toWav(audioBuffer));

    return {
      script,
      audioDataUri,
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
