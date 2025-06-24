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
  FileText,
  LogOut,
  Library,
  BookOpenCheck,
  Settings,
  LifeBuoy,
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const menuItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/courses', icon: GraduationCap, label: 'Course Catalog' },
  { href: '/library', icon: Library, label: 'Academic Research' },
  { href: '/docs', icon: BookOpenCheck, label: 'Documentations' },
];

const footerMenuItems = [
  { href: '/help', icon: LifeBuoy, label: 'Help & Support' },
  { href: '#', icon: Settings, label: 'Settings' },
  { href: '/', icon: LogOut, label: 'Logout' },
];

export function DashboardLeftSidebar() {
  const { state, setOpen } = useSidebar();
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
      <SidebarFooter className="flex flex-col gap-4 p-2 pb-20">
        <Separator />
        <SidebarMenu>
        {footerMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                href={item.href}
                asChild
                tooltip={item.label}
                isActive={pathname === item.href}
                 variant="ghost"
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-5 -right-4 h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hidden md:flex"
          onClick={() => setOpen(state === 'collapsed')}
        />
    </Sidebar>
  );
}
