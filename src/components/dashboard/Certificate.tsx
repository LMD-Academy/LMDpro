
'use client';
import { Logo } from '@/components/shared/Logo';
import { CertificateType } from '@/lib/certificates-data';
import { cn } from '@/lib/utils';
import { Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface CertificateProps {
  recipientName: string;
  achievementTitle: string;
  achievementDate: string;
  achievementType: CertificateType;
}

export function Certificate({
  recipientName,
  achievementTitle,
  achievementDate,
  achievementType,
}: CertificateProps) {
  return (
    <div
      className={cn(
        'w-full aspect-[1.414_/_1] max-w-4xl p-8 bg-card text-card-foreground border-4 relative overflow-hidden flex flex-col',
        'border-primary/50'
      )}
    >
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5 dark:opacity-[0.02]"
        style={{ backgroundImage: 'url("/LMDpro Logo Black.svg")', backgroundSize: '100px 100px' }}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <header className="flex justify-between items-start pb-4 border-b-2 border-primary/30">
          <Logo />
          <div className="text-right">
            <h2 className="text-xl font-bold tracking-tighter text-primary">Certificate of Completion</h2>
            <p className="text-sm text-muted-foreground">Issued on: {new Date(achievementDate).toLocaleDateString()}</p>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <Award className="h-24 w-24 text-accent mb-6" strokeWidth={1} />
            <p className="text-lg text-muted-foreground mb-2">This certificate is proudly presented to</p>
            <h1 className="text-5xl font-bold font-headline text-primary">{recipientName}</h1>
            <p className="text-lg text-muted-foreground mt-8">For successfully completing the</p>
            <p className="text-2xl font-semibold mt-1">{achievementType}</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2">{achievementTitle}</h2>
        </main>
        
        <footer className="flex justify-between items-end pt-4 border-t-2 border-primary/30">
          <div className="text-left w-1/3">
            <p className="text-sm font-semibold border-b border-foreground/50 pb-1">Dr. Evelyn Reed</p>
            <p className="text-xs text-muted-foreground">Chief Learning Officer</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-primary/70 mb-2"/>
            <p className="text-xs text-muted-foreground">LMDpro Verified Achievement</p>
          </div>
          <div className="text-right w-1/3">
            <p className="text-sm font-semibold border-b border-foreground/50 pb-1">AI Agent #42</p>
            <p className="text-xs text-muted-foreground">Issuing Authority</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
