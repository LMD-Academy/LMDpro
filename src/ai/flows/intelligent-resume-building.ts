'use server';

/**
 * @fileOverview This file implements the Genkit flow for intelligent resume building, providing AI assistance in creating resume descriptions and optimizing them with industry-standard keywords.
 *
 * - intelligentResumeBuilding - A function that handles the resume building process.
 * - IntelligentResumeBuildingInput - The input type for the intelligentResumeBuilding function.
 * - IntelligentResumeBuildingOutput - The return type for the intelligentResumeBuilding function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentResumeBuildingInputSchema = z.object({
  linkedinProfileData: z
    .string()
    .describe('The LinkedIn profile data to import.'),
  skills: z
    .array(z.string())
    .describe('The skills to be included in the resume.'),
});
export type IntelligentResumeBuildingInput = z.infer<
  typeof IntelligentResumeBuildingInputSchema
>;

const IntelligentResumeBuildingOutputSchema = z.object({
  resumeDescription: z
    .string()
    .describe('The AI-generated resume description.'),
  optimizedKeywords: z
    .array(z.string())
    .describe('The industry-standard keywords optimized for the resume.'),
});
export type IntelligentResumeBuildingOutput = z.infer<
  typeof IntelligentResumeBuildingOutputSchema
>;

export async function intelligentResumeBuilding(
  input: IntelligentResumeBuildingInput
): Promise<IntelligentResumeBuildingOutput> {
  return intelligentResumeBuildingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentResumeBuildingPrompt',
  input: {schema: IntelligentResumeBuildingInputSchema},
  output: {schema: IntelligentResumeBuildingOutputSchema},
  prompt: `You are an AI resume expert. You will take the LinkedIn profile data and a list of skills and generate a resume description and a list of industry-standard keywords optimized for the resume.

LinkedIn Profile Data: {{{linkedinProfileData}}}
Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}`,
});

const intelligentResumeBuildingFlow = ai.defineFlow(
  {
    name: 'intelligentResumeBuildingFlow',
    inputSchema: IntelligentResumeBuildingInputSchema,
    outputSchema: IntelligentResumeBuildingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
