import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { cn } from '@/lib/utils';

export function PublicHeader() {
  return (
    <header className="w-full">
      <div className="container mt-4 flex h-16 items-center rounded-full border border-border/40 bg-background/95 px-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mr-auto">
          <Logo />
        </div>
        <nav className="hidden items-center gap-2 sm:gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Documentations</Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
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
            className={cn(
              buttonVariants(),
              'animated-gradient-button font-semibold text-primary-foreground'
            )}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
