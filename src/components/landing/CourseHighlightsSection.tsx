import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Strategic Communication',
    description: 'Master the art of effective communication for leadership roles.',
    image: 'https://placehold.co/600x400.png',
    hint: 'business communication',
    badge: 'Popular'
  },
  {
    title: 'Executive Leadership',
    description: 'Develop the core skills required to lead teams and organizations.',
    image: 'https://placehold.co/600x400.png',
    hint: 'leadership conference',
    badge: 'New'
  },
  {
    title: 'AI for Business',
    description: 'Understand how to leverage AI to drive business growth and innovation.',
    image: 'https://placehold.co/600x400.png',
    hint: 'artificial intelligence',
    badge: ''
  },
];

export function CourseHighlightsSection() {
  return (
    <section id="courses" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Courses
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Explore our AI-curated courses designed to give you a competitive edge
          in your career.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.title} className="overflow-hidden transition-transform hover:scale-105">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint={course.hint}
                />
                {course.badge && <Badge className="absolute right-3 top-3">{course.badge}</Badge>}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>{course.title}</CardTitle>
              <CardDescription className="mt-2">{course.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href="#">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
