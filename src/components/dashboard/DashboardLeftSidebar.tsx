
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
  Award,
  FileText
} from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/courses', icon: GraduationCap, label: 'Course Catalog' },
  { href: '/library', icon: Library, label: 'Academic Research' },
  { href: '/resume', icon: FileText, label: 'Resume Builder' },
  { href: '/certificates', icon: Award, label: 'My Certificates' },
  { href: '/docs', icon: BookOpenCheck, label: 'Documentations' },
];

export function DashboardLeftSidebar() {
  const { state } = useSidebar();
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
                isActive={pathname.startsWith(item.href) && (item.href !== '/dashboard' || pathname === '/dashboard')}
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
          {state === 'expanded' && (
            <SidebarMenuItem>
              <SidebarMenuButton href="/" asChild tooltip="Logout" variant="ghost">
                <Link href="/">
                  <LogOut />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
