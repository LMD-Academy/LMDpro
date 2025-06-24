import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DocsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Documentations</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Find everything you need to know about LMDpro features, courses, and AI tools.
        </p>
      </header>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>An overview of the LMDpro platform and how to make the most of it.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is LMDpro?</AccordionTrigger>
                <AccordionContent>
                  LMDpro is an AI-powered eLearning academy designed to help you enhance your professional skills through personalized learning paths, AI-generated content, and an intelligent resume builder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the AI Learning Path work?</AccordionTrigger>
                <AccordionContent>
                  Our AI analyzes your profile, identifies skill gaps, and considers your career goals to generate a custom learning path with courses tailored specifically for you. It adapts as you progress to ensure you're always on the most effective track.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Navigating your Dashboard</AccordionTrigger>
                <AccordionContent>
                  Your dashboard is your central hub. Here you can track your learning activity, view your course progress, and access your AI-generated learning path. The sidebars provide access to all major features of the platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Toolkit</CardTitle>
            <CardDescription>Learn about the powerful AI tools at your disposal.</CardDescription>
          </CardHeader>
          <CardContent>
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Intelligent Resume Builder</AccordionTrigger>
                <AccordionContent>
                  Import your LinkedIn profile or start from scratch. As you complete courses, the associated skills are automatically added to your resume. Our AI helps you craft compelling descriptions and optimizes your resume with industry-standard keywords to get past applicant tracking systems (ATS).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>AI Academic Research Agent</AccordionTrigger>
                <AccordionContent>
                  Located in the Library section, this AI agent allows you to research topics, ask questions about course material, and engage in deep-dive conversations on any subject. It's like having a personal research assistant available 24/7.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Notepad with AI Features</AccordionTrigger>
                <AccordionContent>
                  The notepad in the right-hand toolbar lets you take notes that persist across the application. Use the "Ask AI" button to get insights, summaries, or further explanations on the content of your notes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
