import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    title: 'Strategic Communication',
    description: 'Master the art of effective communication for leadership roles.',
    badge: 'Popular'
  },
  {
    title: 'Executive Leadership',
    description: 'Develop the core skills required to lead teams and organizations.',
    badge: 'New'
  },
  {
    title: 'AI for Business',
    description: 'Understand how to leverage AI to drive business growth and innovation.',
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
          <div key={course.title} className="paper-cut-box">
             <div className="flex justify-end mb-4">
                {course.badge && <Badge>{course.badge}</Badge>}
              </div>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="mt-2 text-muted-foreground">{course.description}</p>
              <div className="mt-6">
                <Button asChild className="w-full">
                    <Link href="#">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
