import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const pathItems = [
  {
    title: 'Advanced Data Analysis',
    description: 'Bridge your analytics skill gap.',
  },
  {
    title: 'Project Management for Tech',
    description: 'Based on your recent performance.',
  },
  {
    title: 'Cloud fundamentals',
    description: 'A popular choice for your role.',
  },
];

export function LearningPath() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Learning Path</CardTitle>
        <CardDescription>
          Your personalized path to success, generated just for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {pathItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <Button variant="outline" className="mt-4 w-full">
          Regenerate Path
        </Button>
      </CardContent>
    </Card>
  );
}
