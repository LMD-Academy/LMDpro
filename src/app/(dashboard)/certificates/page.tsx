
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { certificatesData, CertificateType } from '@/lib/certificates-data';
import { Award, GraduationCap, Building, Ribbon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function getIconForType(type: CertificateType) {
    switch(type) {
        case CertificateType.COURSE:
            return <GraduationCap className="h-8 w-8 text-primary" />;
        case CertificateType.FIELD:
            return <Building className="h-8 w-8 text-primary" />;
        case CertificateType.MAJOR:
            return <Ribbon className="h-8 w-8 text-primary" />;
        default:
            return <Award className="h-8 w-8 text-primary" />;
    }
}

export default function CertificatesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">My Certificates</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          A record of your completed courses, fields, and specializations.
        </p>
      </header>

      {certificatesData.length === 0 ? (
        <div className="text-center py-16 border-dashed border-2 rounded-lg">
            <h2 className="text-xl font-semibold">No Certificates Yet</h2>
            <p className="text-muted-foreground mt-2">Complete a course or learning path to earn your first certificate.</p>
            <Button asChild className="mt-4">
                <Link href="/courses">Explore Courses</Link>
            </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
                <Card key={cert.id} className="flex flex-col">
                    <CardHeader className="flex-row items-center gap-4">
                        <div>
                            {getIconForType(cert.type)}
                        </div>
                        <div>
                             <CardDescription>{cert.type}</CardDescription>
                             <CardTitle className="text-xl">{cert.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground">
                            Awarded on: {new Date(cert.date).toLocaleDateString()}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" asChild>
                            <Link href={`/certificates/${cert.slug}`}>
                                View Certificate <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      )}
    </div>
  );
}

