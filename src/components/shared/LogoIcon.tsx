'use client';
import Image from 'next/image';

export function LogoIcon() {
  return (
    <>
      <Image
        src="/LMDpro Logo Black.svg"
        alt="LMDpro Logo"
        width={28}
        height={28}
        className="h-7 w-7 dark:hidden"
        priority
      />
      <Image
        src="/LMDpro Logo White.svg"
        alt="LMDpro Logo"
        width={28}
        height={28}
        className="h-7 w-7 hidden dark:block"
        priority
      />
    </>
  );
}
