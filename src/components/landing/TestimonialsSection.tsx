import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Product Manager',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    quote: 'LMDpro\'s AI-driven learning path was a game-changer for my career transition. I felt prepared and confident for my new role in weeks!',
  },
  {
    name: 'David C.',
    role: 'Software Engineer',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    quote: 'The automated resume builder is pure magic. It perfectly translated my completed courses into skills that got past every ATS.',
  },
  {
    name: 'Maria G.',
    role: 'Marketing Director',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'person portrait',
    quote: 'The quality of the AI-generated video content is astounding. It made complex topics easy to understand and engaging.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Loved by Professionals Worldwide
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Hear what our users have to say about their learning experience with LMDpro.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col">
            <CardContent className="flex-1 p-6">
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
            </CardContent>
            <CardHeader className="flex-row items-center gap-4 p-6 pt-0">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
