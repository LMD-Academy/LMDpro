
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Certificate } from '@/components/dashboard/Certificate';
import { Button } from '@/components/ui/button';
import { certificatesData } from '@/lib/certificates-data';
import { ArrowLeft, Printer } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function CertificatePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const certificate = certificatesData.find((c) => c.slug === slug);

  const handlePrint = () => {
    window.print();
  };

  if (!certificate) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <Alert variant="destructive" className="max-w-md">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Certificate Not Found</AlertTitle>
            <AlertDescription>
                The certificate you are looking for does not exist or could not be loaded.
            </AlertDescription>
        </Alert>
        <Button onClick={() => router.back()} variant="outline" className="mt-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 print:p-0">
      <div className="w-full max-w-4xl no-print">
        <div className="mb-6 flex justify-between items-center">
            <Button onClick={() => router.back()} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to My Certificates
            </Button>
             <h1 className="text-2xl font-bold tracking-tight text-center">Certificate Preview</h1>
            <Button onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" /> Print Certificate
            </Button>
        </div>
      </div>
      
      <Certificate
        recipientName={certificate.user}
        achievementTitle={certificate.title}
        achievementDate={certificate.date}
        achievementType={certificate.type}
      />
    </div>
  );
}
