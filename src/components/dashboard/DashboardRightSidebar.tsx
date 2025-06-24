'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Bot, Contact, FileText, MessageCircleQuestion } from 'lucide-react';
import { AiAssistant } from './AiAssistant';
import { Notepad } from './Notepad';

const toolbarItems = [
  {
    icon: Bot,
    label: 'AI Assistant',
    content: <AiAssistant />,
    popoverWidth: 'w-[320px] h-[500px]',
  },
  {
    icon: FileText,
    label: 'Notepad',
    content: <Notepad />,
    popoverWidth: 'w-[320px] h-[500px]',
  },
  {
    icon: MessageCircleQuestion,
    label: 'FAQ & Docs',
    content: <div className="p-4 text-sm">FAQ & Docs content goes here. The full documentation page can provide more detailed information.</div>,
    popoverWidth: 'w-[320px]',
  },
  {
    icon: Contact,
    label: 'Contact Us',
    content: <div className="p-4 text-sm">Contact Us form goes here. For urgent matters, please use the support page.</div>,
    popoverWidth: 'w-[320px]',
  },
];

export function DashboardRightSidebar() {
  return (
    <TooltipProvider>
      <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[56px] border-l bg-card flex flex-col items-center py-2 gap-2 z-40">
        {toolbarItems.map((item) => (
          <Popover key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg" aria-label={item.label}>
                    <item.icon className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
            <PopoverContent side="left" align="start" className={`p-0 overflow-hidden ${item.popoverWidth}`}>
              {item.content}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </TooltipProvider>
  );
}
