
import { Logo } from '@/components/shared/Logo';
import Link from 'next/link';

export function PublicFooter() {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Developers', href: '/dev' },
    { name: 'Contact', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
  ];
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">
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
      <div className="container flex items-center justify-center border-t border-border/20 py-4">
        <div className="inline-block rounded-full border bg-card/50 px-4 py-1.5 text-sm shadow-md backdrop-blur-sm">
            <span>from JORDAN with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
