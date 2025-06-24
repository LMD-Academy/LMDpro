
'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Bot, FileText, LifeBuoy } from 'lucide-react';
import { AiAssistant } from './AiAssistant';
import { Notepad } from './Notepad';
import Link from 'next/link';
import { NotepadIcon } from '../icons/NotepadIcon';

const toolbarItems = [
  {
    icon: Bot,
    label: 'AI Assistant',
    content: <AiAssistant />,
    popoverWidth: 'w-[320px] h-[500px]',
  },
  {
    icon: NotepadIcon,
    label: 'Notepad',
    content: <Notepad />,
    popoverWidth: 'w-[320px] h-[500px]',
  },
  {
    icon: LifeBuoy,
    label: 'Help & Support',
    content: (
      <div className="flex flex-col h-full bg-card">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <LifeBuoy size={20} /> Help & Support
          </h3>
        </div>
        <div className="p-4 text-center flex-1 flex flex-col justify-center items-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need assistance? Visit our full support center for FAQs,
            documentation, and contact options.
          </p>
          <Button asChild>
            <Link href="/help">Open Full Support Page</Link>
          </Button>
        </div>
      </div>
    ),
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
