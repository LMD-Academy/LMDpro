'use server';
/**
 * @fileOverview An AI agent for generating professional resume content.
 *
 * - generateResumeText - A function that generates a professional summary and experience bullet points.
 * - GenerateResumeTextInput - The input type for the generateResumeText function.
 * - GenerateResumeTextOutput - The return type for the generateResumeText function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const GenerateResumeTextInputSchema = z.object({
  jobTitle: z.string().describe("The user's current or desired job title."),
  yearsOfExperience: z
    .number()
    .describe("The user's years of experience in the role."),
  skills: z.array(z.string()).describe("A list of the user's key skills."),
  jobDescription: z
    .string()
    .optional()
    .describe('A specific job description to tailor the resume for.'),
  previousRoles: z
    .array(
      z.object({
        title: z.string(),
        company: z.string(),
        responsibilities: z.string(),
      })
    )
    .describe("Details about the user's previous roles."),
  education: z
    .array(
      z.object({
        degree: z.string(),
        institution: z.string(),
      })
    )
    .optional()
    .describe("Details about the user's education."),
});
export type GenerateResumeTextInput = z.infer<
  typeof GenerateResumeTextInputSchema
>;

export const GenerateResumeTextOutputSchema = z.object({
  professionalSummary: z
    .string()
    .describe('A professionally written, concise professional summary.'),
  experienceBullets: z
    .array(
      z.object({
        id: z.number(),
        bullets: z.array(z.string()),
      })
    )
    .describe(
      'An array of objects, each containing professionally written, achievement-oriented bullet points for a corresponding previous role.'
    ),
});
export type GenerateResumeTextOutput = z.infer<
  typeof GenerateResumeTextOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'generateResumeTextPrompt',
  model: 'googleai/gemini-2.0-flash',
  input: { schema: GenerateResumeTextInputSchema },
  output: { schema: GenerateResumeTextOutputSchema },
  prompt: `You are an expert career coach and professional resume writer. Your task is to generate compelling resume content based on the user's provided information.

    **User Information:**
    - Desired Job Title: {{{jobTitle}}}
    - Years of Experience: {{{yearsOfExperience}}}
    - Key Skills: {{{skills}}}
    {{#if education}}
    - Education:
    {{#each education}}
      - {{this.degree}} at {{this.institution}}
    {{/each}}
    {{/if}}
    {{#if jobDescription}}- Target Job Description: {{{jobDescription}}}{{/if}}
    - Previous Roles:
    {{#each previousRoles}}
      - Role ID: {{@index}}
        Title: {{this.title}} at {{this.company}}
        Responsibilities: {{this.responsibilities}}
    {{/each}}

    **Your Tasks:**

    1.  **Generate Professional Summary:**
        - Write a concise, impactful professional summary (3-4 sentences) that highlights the user's key strengths, experience, and career goals, tailored to their desired job title. If a target job description is provided, align the summary with its requirements.

    2.  **Generate Experience Bullet Points:**
        - For each role provided in "Previous Roles", rewrite their responsibilities into 3-4 achievement-oriented bullet points.
        - Use the STAR (Situation, Task, Action, Result) method. Start each bullet with a strong action verb.
        - Quantify achievements with metrics wherever possible (e.g., "Increased sales by 15%", "Reduced processing time by 30%").
        - If the responsibilities are vague, infer typical achievements for that role and title.
        - The output for the experience section must be an array of objects. Each object must have an "id" that corresponds to the index of the role in the input, and a "bullets" array containing the generated strings.

    Ensure your entire output is a single, valid JSON object matching the specified output schema.
    `,
});

const generateResumeTextFlow = ai.defineFlow(
  {
    name: 'generateResumeTextFlow',
    inputSchema: GenerateResumeTextInputSchema,
    outputSchema: GenerateResumeTextOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate resume content.');
    }
    return output;
  }
);

export async function generateResumeText(
  input: GenerateResumeTextInput
): Promise<GenerateResumeTextOutput> {
  return generateResumeTextFlow(input);
}
