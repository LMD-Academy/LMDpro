
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, FileQuestion, MessageSquare, BookOpen } from "lucide-react";
import Image from 'next/image';

// This is a placeholder page. In a real app, you'd fetch module content based on the slug.
export default function ModulePage({ params }: { params: { slug: string } }) {
  const { toast } = useToast();
  
  const formattedTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const paragraphs = [
    "Welcome to the start of your new learning module. This introductory paragraph sets the stage for the key concepts you will explore. The content is designed to be engaging and informative.",
    "As you move through the material, consider how these principles apply to real-world scenarios. Each paragraph is a building block, constructing a comprehensive understanding of the subject matter.",
    "Interactive elements are designed to enhance your learning. Use the AI tools provided to delve deeper into topics that pique your interest or clarify points of confusion.",
    "This paragraph focuses on a critical aspect of the module. Notice the structure and the way information is presented to maximize retention and comprehension. This is where you might use the AI illustration feature.",
    "Finally, we conclude by summarizing the key takeaways. Reflect on what you've learned and how you can apply this knowledge in your professional life. Congratulations on completing this section!"
  ];

  const [currentParagraph, setCurrentParagraph] = React.useState(0);
  const progress = ((currentParagraph + 1) / paragraphs.length) * 100;

  const handleNext = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  const handlePrev = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  const handleAiAction = (action: string) => {
    toast({
      title: "AI Action Triggered",
      description: `The AI is now generating the ${action}. Please wait.`,
    })
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">{formattedTitle}</h1>
        <p className="text-muted-foreground">An interactive learning module</p>
      </header>

      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <Progress value={progress} className="h-2" />
          <CardDescription className="text-center mt-2">
            Paragraph {currentParagraph + 1} of {paragraphs.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-6 text-center">
            <p className="text-lg leading-relaxed max-w-prose">
                {paragraphs[currentParagraph]}
            </p>
        </CardContent>
        <CardFooter className="flex-col gap-4">
            <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" onClick={() => handleAiAction('illustration')}>Generate Illustration</Button>
                <Button variant="outline" size="lg" onClick={() => handleAiAction('audio narration')}>Generate Audio</Button>
            </div>
            <div className="flex justify-between items-center w-full">
                <Button variant="ghost" onClick={handlePrev} disabled={currentParagraph === 0}>
                    <ChevronLeft className="mr-2"/> Prev
                </Button>
                <div className="flex gap-2">
                    <Button variant="secondary"><FileQuestion className="mr-2"/> Ask AI about Module</Button>
                    <Button variant="secondary"><BookOpen className="mr-2"/> Open in Library</Button>
                </div>
                <Button variant="ghost" onClick={handleNext} disabled={currentParagraph === paragraphs.length - 1}>
                    Next <ChevronRight className="ml-2"/>
                </Button>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
