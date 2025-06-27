'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LogoIcon } from './LogoIcon';

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2', className)}
      aria-label="LMDpro homepage"
    >
      <LogoIcon />
      {showText && (
        <span className="text-xl font-bold tracking-tighter">LMDpro</span>
      )}
    </Link>
  );
}
