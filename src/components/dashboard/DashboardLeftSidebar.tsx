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
  User,
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const menuItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '#', icon: GraduationCap, label: 'My Courses' },
  { href: '#', icon: FileText, label: 'Resume' },
];

const helpMenuItems = [
  { href: '#', icon: LifeBuoy, label: 'Support' },
  { href: '#', icon: Settings, label: 'Settings' },
];

export function DashboardLeftSidebar() {
  const { state } = useSidebar();
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
                isActive={item.href === '/dashboard'}
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
          {helpMenuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton href={item.href} asChild tooltip={item.label}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            {state === 'collapsed' ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" asChild className="h-10 w-10 rounded-full p-0">
                     <Avatar className="h-9 w-9">
                      <AvatarImage
                        src="https://placehold.co/100x100.png"
                        alt="User"
                        data-ai-hint="user avatar"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3 px-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src="https://placehold.co/100x100.png"
                    alt="User"
                    data-ai-hint="user avatar"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <p className="truncate text-sm font-semibold">User Name</p>
                  <p className="truncate text-xs text-muted-foreground">
                    user@example.com
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
