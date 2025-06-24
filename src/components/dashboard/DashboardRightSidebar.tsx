'use client';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { BrainCircuit, FileText, Bot } from 'lucide-react';

const aiTools = [
  { icon: BrainCircuit, label: 'Learning Path Generator' },
  { icon: FileText, label: 'Resume Builder' },
  { icon: Bot, label: 'Content Creator' },
];

export function DashboardRightSidebar() {
  return (
    <Sidebar side="right" variant="inset" collapsible="icon">
      <SidebarHeader>
        <h3 className="text-lg font-semibold">AI Toolkit</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {aiTools.map((tool) => (
            <SidebarMenuItem key={tool.label}>
              <SidebarMenuButton tooltip={tool.label}>
                <tool.icon />
                <span>{tool.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
