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
import { User, ChevronDown, Bot } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const courses = [
  {
    title: 'AI for Business',
    description: 'Understand how to leverage AI to drive business growth and innovation.',
  },
  {
    title: 'Intro to Business & Management',
    description: 'Learn the foundational principles of modern business and management.',
  },
  {
    title: 'Agile Methodologies',
    description: 'Master frameworks like Scrum and Kanban for adaptive project management.',
  },
];


export function PublicHeader() {
  return (
    <header className="w-full">
      <div className="container mt-4 flex h-16 items-center rounded-full border border-border/40 bg-background/95 px-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mr-auto">
          <Logo />
        </div>
        <nav className="hidden items-center gap-2 sm:gap-4 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Explore Courses <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              {courses.map((course) => (
                 <DropdownMenuItem key={course.title} asChild>
                    <Link href="#" className="flex flex-col items-start whitespace-normal">
                      <p className='font-semibold'>{course.title}</p>
                      <p className='text-xs text-muted-foreground'>{course.description}</p>
                    </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator/>
               <DropdownMenuItem asChild>
                 <Button className="w-full animated-gradient-button" size="sm" asChild>
                    <Link href="#">
                      <Bot className="mr-2"/> Can't find a course? Build it!
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
           <Button variant="ghost" asChild>
            <Link href="/dev">For Developers</Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
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
          <Link
            href="/register"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Get Started
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
