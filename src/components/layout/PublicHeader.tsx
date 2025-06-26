'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { User, ChevronDown, Bot, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const courses = [
  {
    title: 'AI for Business',
    description:
      'Understand how to leverage AI to drive business growth and innovation.',
    href: '/module/ai-for-business',
  },
  {
    title: 'Intro to Business & Management',
    description:
      'Learn the foundational principles of modern business and management.',
    href: '/module/intro-to-business-management',
  },
  {
    title: 'Agile Methodologies',
    description:
      'Master frameworks like Scrum and Kanban for adaptive project management.',
    href: '/module/agile-methodologies',
  },
  {
    title: 'Foundations of Effective Leadership',
    description: 'Explore leadership styles, motivation, and team communication.',
    href: '/module/foundations-of-effective-leadership',
  },
  {
    title: 'Data Science Specialization',
    description: 'Learn core Python libraries, data analysis, and machine learning.',
    href: '/courses',
  },
  {
    title: 'Cybersecurity Specialization',
    description:
      'Build a foundation in threat analysis, network security, and cryptography.',
    href: '/courses',
  },
];

export function PublicHeader() {
  return (
    <header className="container w-full">
      <div className="flex h-20 items-center justify-between">
        {/* Left Side: Logo */}
        <div className="md:flex-1">
          <Logo />
        </div>

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border bg-background/95 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Explore Courses <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[400px]">
              {courses.map((course) => (
                <DropdownMenuItem key={course.title} asChild>
                  <Link
                    href={course.href}
                    className="flex flex-col items-start whitespace-normal"
                  >
                    <p className="font-semibold">{course.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {course.description}
                    </p>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  className="w-full animated-gradient-button"
                  size="sm"
                  asChild
                >
                  <Link href="#">
                    <Bot className="mr-2" /> Can&apos;t find a course? Build it!
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" asChild>
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Documentations</Link>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Sign Up Free</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side: Get Started Button (Desktop) */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            href="/register"
            className={cn(buttonVariants({ size: 'default' }))}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    href="/courses"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'justify-start'
                    )}
                  >
                    Explore Courses
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'justify-start'
                    )}
                  >
                    Pricing
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/docs"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'justify-start'
                    )}
                  >
                    Documentations
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/dev"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'justify-start'
                    )}
                  >
                    For Developers
                  </Link>
                </SheetClose>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2 px-3">
                  <SheetClose asChild>
                    <Button asChild>
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
