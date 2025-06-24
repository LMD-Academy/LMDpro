'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
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
  FileText,
  LifeBuoy,
  Settings,
  LogOut,
  Library,
  BookOpenCheck,
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/courses', icon: GraduationCap, label: 'Course Catalog' },
  { href: '/resume', icon: FileText, label: 'Resume Builder' },
  { href: '/library', icon: Library, label: 'Academic Research' },
  { href: '/docs', icon: BookOpenCheck, label: 'Documentations' },
];

const helpMenuItems = [
  { href: '/help', icon: LifeBuoy, label: 'Help & Support' },
  { href: '#', icon: Settings, label: 'Settings' },
];

export function DashboardLeftSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-2">
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
        <div className='h-px w-full bg-border group-data-[state=expanded]:hidden'/>
        <div className="p-2 flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://placehold.co/100x100.png"
              alt="User"
              data-ai-hint="user avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate group-data-[state=collapsed]:hidden">
            <p className="truncate text-sm font-semibold">User Name</p>
            <p className="truncate text-xs text-muted-foreground">
              user@example.com
            </p>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 group-data-[state=collapsed]:hidden" asChild>
            <Link href="/">
                <LogOut className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
