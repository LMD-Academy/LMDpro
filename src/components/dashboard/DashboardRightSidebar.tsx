'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Bot, Contact, MessageSquareQuestion } from 'lucide-react';
import { AiAssistant } from './AiAssistant';
import { Notepad } from './Notepad';

export function DashboardRightSidebar() {
  return (
    <div className="fixed right-0 top-0 h-full w-[280px] border-l bg-card flex flex-col z-20">
      <div className="flex-1 flex flex-col min-h-0">
        <div className='p-4 border-b'>
          <h3 className="font-semibold text-lg flex items-center gap-2"><Bot size={20}/> AI Assistant</h3>
        </div>
        <AiAssistant />
      </div>
      <Separator />
      <div className="flex-1 flex flex-col min-h-0">
        <Notepad />
      </div>
      <Separator />
      <div className="p-4 space-y-2">
         <h3 className="font-semibold text-sm">Help & Support</h3>
         <Button variant="outline" size="sm" className='w-full justify-start'>
            <MessageSquareQuestion className='mr-2' /> FAQ & Docs
         </Button>
         <Button variant="outline" size="sm" className='w-full justify-start'>
            <Contact className='mr-2' /> Contact Us
         </Button>
      </div>
    </div>
  );
}
