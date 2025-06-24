'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" asChild tooltip="Logout">
              <Link href="/">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="h-px w-full bg-border" />

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
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
