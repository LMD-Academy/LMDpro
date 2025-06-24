'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  GraduationCap,
  LogOut,
  Library,
  BookOpenCheck,
  PanelLeftClose, 
  PanelLeftOpen
} from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/courses', icon: GraduationCap, label: 'Course Catalog' },
  { href: '/library', icon: Library, label: 'Academic Research' },
  { href: '/docs', icon: BookOpenCheck, label: 'Documentations' },
];

export function DashboardLeftSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo showText={state === 'expanded'} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                href={item.href}
                asChild
                tooltip={item.label}
                isActive={pathname === item.href}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="absolute -right-4 bottom-[33%] hidden md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={toggleSidebar}
            aria-label={state === 'expanded' ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {state === 'expanded' ? <PanelLeftClose /> : <PanelLeftOpen />}
          </Button>
        </div>
        
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" asChild tooltip="Logout" variant="ghost">
              <Link href="/">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
