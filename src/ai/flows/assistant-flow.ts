'use server';
/**
 * @fileOverview A general-purpose conversational AI flow for the assistant.
 *
 * - assistant - A function that handles conversational interactions.
 * - AssistantInput - The input type for the assistant function.
 * - AssistantOutput - The return type for the assistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistantInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({text: z.string()})),
  })).optional().describe('The conversation history.'),
  message: z.string().describe('The user message.'),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

const AssistantOutputSchema = z.object({
  message: z.string().describe('The AI response.'),
});
export type AssistantOutput = z.infer<typeof AssistantOutputSchema>;

export async function assistant(input: AssistantInput): Promise<AssistantOutput> {
  const model = ai.getModel('googleai/gemini-2.0-flash');
  const response = await model.generate({
    history: input.history,
    prompt: input.message,
  });

  return { message: response.text };
}
