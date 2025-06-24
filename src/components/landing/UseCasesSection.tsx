import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Building2, Rocket, Github } from 'lucide-react';

const useCases = [
  {
    icon: <School className="h-10 w-10 text-primary" />,
    title: 'For Academia',
    description:
      'Integrate LMDpro as a white-labeled platform for your university or college. Provide students with AI-powered personalized learning, career development tools, and course content that adapts to modern industry needs.',
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: 'For Enterprises',
    description:
      'Upskill and reskill your workforce at scale. Deploy a custom-branded LMDpro instance to deliver targeted training, manage employee development paths, and ensure your teams stay ahead of the technology curve.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'For Startups',
    description:
      'Give your small team a competitive edge. LMDpro offers an affordable, powerful solution to accelerate learning and development without the need for a large L&D department. Build a skilled team, fast.',
  },
  {
    icon: <Github className="h-10 w-10 text-primary" />,
    title: 'For Developers',
    description:
      'LMDpro is open-source. Fork the repository, contribute to the project, or deploy your own instance. Customize the platform to fit your specific needs and explore the future of AI-driven education.',
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Integrate LMDpro into Your Organization
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          A flexible, powerful eLearning platform designed to be adapted for
          institutions, enterprises, and individual developers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {useCases.map((useCase) => (
          <div key={useCase.title} className="paper-cut-box flex flex-col items-center text-center">
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold">{useCase.title}</h3>
              <p className="mt-2 text-muted-foreground">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
