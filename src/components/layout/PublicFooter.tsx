import { Logo } from '@/components/shared/Logo';
import Link from 'next/link';

export function PublicFooter() {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-10">
        <div className="text-center">
            <div className="inline-block rounded-full border bg-card/50 px-4 py-1.5 text-sm shadow-md backdrop-blur-sm">
                <span>from JORDAN with ❤️</span>
            </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} LMDpro. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
