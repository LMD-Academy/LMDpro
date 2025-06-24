import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <div className="container flex h-full flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full border bg-card/50 px-4 py-1.5 text-sm shadow-md backdrop-blur-sm">
          <span className="font-medium text-primary">New!</span> The future of
          learning is here.
        </div>
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
          <span className="animated-gradient-text">AI-Powered</span> eLearning
          <br />
          Academy
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Go from student to professional with personalized learning paths,
          AI-generated content, and an intelligent resume builder that lands you
          the job.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/register">Start Your Learning Path</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
