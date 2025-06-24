import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2', className)}
      aria-label="LMDpro homepage"
    >
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tighter">LMDpro</span>
    </Link>
  );
}
