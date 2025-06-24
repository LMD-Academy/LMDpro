import { BrainCircuit, FileText, Video, BotIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Personalized Learning',
    description: 'AI-generated curriculum tailored to your skill gaps and career goals for maximum efficiency.',
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: 'AI Content Creation',
    description: 'Automated 3D animated videos and course materials generated from research by our AI agents.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Intelligent Resume Builder',
    description: 'Import your LinkedIn profile and let AI craft and optimize your resume as you complete courses.',
  },
  {
    icon: <BotIcon className="h-10 w-10 text-primary" />,
    title: '24/7 AI Support',
    description: 'Get instant help with technical, billing, or navigational questions from our AI chatbot.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          A Smarter Way to Learn
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          LMDpro leverages cutting-edge AI to provide a truly dynamic and
          personalized educational experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="paper-cut-box flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
