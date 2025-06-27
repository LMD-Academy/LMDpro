'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Bot, User, Send } from "lucide-react";
import Image from 'next/image';
import { assistant, AssistantInput } from '@/ai/flows/assistant-flow';
import { cn } from '@/lib/utils';
import { Message } from 'genkit';

const majors = ["Technology", "Business", "Leadership", "Creative Arts", "Data Science"];
const topics = ["Artificial Intelligence", "Web Development", "Marketing", "Project Management"];
const modules = ["Introduction to AI", "React Fundamentals", "SEO Basics", "Agile Methodologies"];

type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

export default function LibraryPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentTopic, setCurrentTopic] = useState('Artificial Intelligence');
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([
            {
                role: 'model',
                text: `Hello! I am your AI Research Agent. How can I help you with "${currentTopic}" today? You can ask for summaries, explanations, or related concepts.`
            }
        ]);
    }, [currentTopic]);


    useEffect(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth',
          });
        }
    }, [messages, isLoading]);

    const handleTopicSelect = (topic: string) => {
        setCurrentTopic(topic);
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
          const history: Message[] = messages.map(msg => ({
            role: msg.role as 'user' | 'model',
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
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-[calc(100vh-4rem)]">
            <aside className="border-r p-4 flex flex-col gap-6">
                <div>
                    <h2 className="text-xl font-bold tracking-tight mb-4">Library Navigator</h2>
                    <p className="text-muted-foreground text-sm">
                        Select a topic to start a conversation with the AI Research Agent.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Majors</h3>
                    <div className="flex flex-wrap gap-2">
                        {majors.map(major => <Button key={major} variant="outline" size="sm" onClick={() => handleTopicSelect(major)}>{major}</Button>)}
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {topics.map(topic => <Button key={topic} variant="outline" size="sm" onClick={() => handleTopicSelect(topic)}>{topic}</Button>)}
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold">Modules</h3>
                    <div className="flex flex-wrap gap-2">
                        {modules.map(module => <Button key={module} variant="outline" size="sm" onClick={() => handleTopicSelect(module)}>{module}</Button>)}
                    </div>
                </div>
            </aside>
            <main className="flex flex-col h-full">
                <header className="p-4 border-b">
                     <h1 className="text-2xl font-bold tracking-tight">AI Academic Research Agent</h1>
                     <p className="text-muted-foreground">Topic: {currentTopic}</p>
                </header>
                <div className="flex-1 p-4 overflow-y-auto">
                    <ScrollArea className="h-full">
                        <div ref={scrollAreaRef} className="space-y-6 pr-4">
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
                                    'p-3 rounded-lg max-w-lg',
                                    {
                                    'bg-muted': message.role === 'model',
                                    'bg-primary text-primary-foreground':
                                        message.role === 'user',
                                    }
                                )}
                                >
                                <p className="font-bold capitalize">{message.role}</p>
                                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
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
                </div>
                <footer className="p-4 border-t">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <Input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a follow-up question..."
                            disabled={isLoading}
                        />
                        <Button type="submit" disabled={isLoading}><Send size={16}/></Button>
                    </form>
                </footer>
            </main>
        </div>
    );
}
