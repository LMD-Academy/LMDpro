import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';

export function PublicHeader() {
  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="container flex h-16 items-center rounded-full border border-border/40 bg-background/95 px-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mr-auto">
            <Logo />
        </div>
        <nav className="hidden items-center gap-2 sm:gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Documentations</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/register">Get Started</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
