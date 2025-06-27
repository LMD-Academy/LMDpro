'use client';

import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Bot } from 'lucide-react';
import Image from 'next/image';

export function AiAssistant() {
  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Bot size={20} /> AI Assistant
        </h3>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 -m-4">
          <div className="p-4 space-y-4 h-full flex flex-col justify-center items-center">
            <Image 
              src="/BG-Loading.gif" 
              alt="AI is thinking" 
              width={80} 
              height={80}
              unoptimized={true} 
            />
            <div className="text-xs text-center text-muted-foreground p-3 rounded-lg bg-muted max-w-xs">
              Ask me to generate a learning path, create course content, or help
              with your resume!
            </div>
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            placeholder="Ask LMDpro AI..."
            className="bg-background"
          />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}
