'use server';
/**
 * @fileOverview An AI agent for generating personalized learning paths.
 *
 * - generateLearningPath - A function that generates a learning path based on user profile, skill gaps, and performance.
 * - GenerateLearningPathInput - The input type for the generateLearningPath function.
 * - GenerateLearningPathOutput - The return type for the generateLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLearningPathInputSchema = z.object({
  userProfile: z.string().describe('The user profile, including current skills and experience.'),
  skillGaps: z.string().describe('The identified skill gaps for the user.'),
  performanceData: z.string().describe('The user performance data on previous courses or assessments.'),
});
export type GenerateLearningPathInput = z.infer<typeof GenerateLearningPathInputSchema>;

const LearningPathItemSchema = z.object({
  courseName: z.string().describe('The name of the course.'),
  skillCovered: z.string().describe('The primary skill covered by the course.'),
  reasoning: z.string().describe('Why this course is recommended based on the user profile and skill gaps.'),
});

const GenerateLearningPathOutputSchema = z.object({
  learningPath: z.array(LearningPathItemSchema).describe('A list of courses recommended for the user, in order.'),
  summary: z.string().describe('A summary of the generated learning path and its benefits for the user.'),
});
export type GenerateLearningPathOutput = z.infer<typeof GenerateLearningPathOutputSchema>;

export async function generateLearningPath(input: GenerateLearningPathInput): Promise<GenerateLearningPathOutput> {
  return generateLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLearningPathPrompt',
  model: 'googleai/gemini-2.0-flash',
  input: {schema: GenerateLearningPathInputSchema},
  output: {schema: GenerateLearningPathOutputSchema},
  prompt: `You are an AI learning path generator. You take into account the user's profile, skill gaps, and performance data to generate a personalized learning path.

User Profile: {{{userProfile}}}
Skill Gaps: {{{skillGaps}}}
Performance Data: {{{performanceData}}}

Based on this information, generate a learning path consisting of courses that will help the user acquire new skills and bridge their skill gaps. Provide a short reasoning for each course.

Output the learning path as a JSON array of courses, each containing the course name, the skill covered, and the reasoning.
Also, provide a short summary of the generated learning path and its benefits for the user.
`,
});

const generateLearningPathFlow = ai.defineFlow(
  {
    name: 'generateLearningPathFlow',
    inputSchema: GenerateLearningPathInputSchema,
    outputSchema: GenerateLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
