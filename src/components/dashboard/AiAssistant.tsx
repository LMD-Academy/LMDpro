'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Bot, User, Send } from 'lucide-react';
import Image from 'next/image';
import { assistant, AssistantInput } from '@/ai/flows/assistant-flow';
import { cn } from '@/lib/utils';
import { Message } from 'genkit';

type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

export function AiAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I am LMDpro's AI assistant. Ask me to generate a learning path, create course content, or help with your resume!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history: Message[] = messages.map(msg => ({
        role: msg.role,
        content: [{ text: msg.text }],
      }));

      const assistantInput: AssistantInput = {
        history: history,
        message: input,
      };
      
      const response = await assistant(assistantInput);
      const aiMessage: ChatMessage = { role: 'model', text: response.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI assistant error:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Bot size={20} /> AI Assistant
        </h3>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 -m-4">
          <div ref={scrollAreaRef} className="p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn('flex items-start gap-4', {
                  'justify-end': message.role === 'user',
                })}
              >
                {message.role === 'model' && (
                  <div className="p-2 rounded-full bg-primary text-primary-foreground shrink-0">
                    <Bot size={20} />
                  </div>
                )}
                <div
                  className={cn(
                    'p-3 rounded-lg max-w-sm',
                    {
                      'bg-muted': message.role === 'model',
                      'bg-primary text-primary-foreground':
                        message.role === 'user',
                    }
                  )}
                >
                  <p className="font-bold capitalize">{message.role}</p>
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.role === 'user' && (
                  <div className="p-2 rounded-full bg-muted text-muted-foreground shrink-0">
                    <User size={20} />
                  </div>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Bot size={20} />
                </div>
                 <div className="bg-muted p-3 rounded-lg">
                   <Image 
                      src="/BG-Loading.gif" 
                      alt="AI is thinking" 
                      width={40} 
                      height={20}
                      unoptimized={true} 
                    />
                 </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask LMDpro AI..."
            className="bg-background"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
