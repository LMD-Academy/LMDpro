'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to handle 'system' theme preference correctly.
  const logoSrc =
    resolvedTheme === 'dark'
      ? '/LMDpro Logo White.svg'
      : '/LMDpro Logo Black.svg';

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2', className)}
      aria-label="LMDpro homepage"
    >
      {mounted ? (
        <Image
          src={logoSrc}
          alt="LMDpro Logo"
          width={28}
          height={28}
          className="h-7 w-7"
        />
      ) : (
        // Skeleton or placeholder to prevent layout shift and match size
        <div className="h-7 w-7 rounded-full bg-muted"></div>
      )}
      {showText && (
        <span className="text-xl font-bold tracking-tighter">LMDpro</span>
      )}
    </Link>
  );
}
