'use server';
/**
 * @fileOverview An intelligent, tool-using AI flow for the main assistant.
 *
 * - assistant - A function that handles conversational interactions and uses tools.
 * - AssistantInput - The input type for the assistant function.
 * - AssistantOutput - The return type for the assistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { learningPathTool } from './ai-powered-learning-path';
import { contentCreationTool } from './automated-content-creation';

const AssistantInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model', 'tool']),
    content: z.array(z.object({
      text: z.string().optional(),
      toolRequest: z.any().optional(),
      toolResponse: z.any().optional(),
    })),
  })).optional().describe('The conversation history.'),
  message: z.string().describe('The user message.'),
});
export type AssistantInput = z.infer<typeof AssistantInputSchema>;

const AssistantOutputSchema = z.object({
  message: z.string().describe('The AI response.'),
});
export type AssistantOutput = z.infer<typeof AssistantOutputSchema>;

const systemPrompt = `You are LMDpro's AI assistant. Your role is to help users with their professional learning journey. You are helpful, friendly, and an expert in education and professional development.

You have access to the following tools:
- generateLearningPath: Use this tool when a user asks for a personalized learning path. You need to ask them for their profile, skill gaps, and performance data if not provided.
- createEducationalContent: Use this tool when a user asks you to create a course or video script on a specific topic.

When a user asks a general question, provide a helpful and informative response. When they ask something that requires one of your tools, use the tool and then summarize the result in a conversational way. Do not just return raw JSON from the tools.`;

export const assistantFlow = ai.defineFlow(
  {
    name: 'assistantFlow',
    inputSchema: AssistantInputSchema,
    outputSchema: AssistantOutputSchema,
  },
  async (input) => {
    const model = ai.getModel('googleai/gemini-2.0-flash', {
      tools: [learningPathTool, contentCreationTool],
    });

    const response = await model.generate({
      system: systemPrompt,
      history: input.history,
      prompt: input.message,
    });
    
    return { message: response.text };
  }
);

export async function assistant(input: AssistantInput): Promise<AssistantOutput> {
    return assistantFlow(input);
}
