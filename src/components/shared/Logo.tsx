'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
      {/* Render both logos and use Tailwind's dark: variant to toggle visibility */}
      <Image
        src="/LMDpro Logo Black.svg"
        alt="LMDpro Logo"
        width={28}
        height={28}
        className="h-7 w-7 dark:hidden"
      />
      <Image
        src="/LMDpro Logo White.svg"
        alt="LMDpro Logo"
        width={28}
        height={28}
        className="h-7 w-7 hidden dark:block"
      />

      {showText && (
        <span className="text-xl font-bold tracking-tighter">LMDpro</span>
      )}
    </Link>
  );
}
