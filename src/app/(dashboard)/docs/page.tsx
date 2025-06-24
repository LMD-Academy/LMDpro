
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Bot, Share2, Wrench } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Find everything you need to know about LMDpro features, courses, and AI tools.
        </p>
      </header>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText />General Platform</CardTitle>
            <CardDescription>An overview of the LMDpro platform, its structure, and core features.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is LMDpro?</AccordionTrigger>
                <AccordionContent>
                  LMDpro is an AI-powered eLearning academy designed to help you enhance your professional skills through personalized learning paths, dynamically generated course content, and a suite of intelligent learning tools.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Course Structure</AccordionTrigger>
                <AccordionContent>
                  Courses are organized in a hierarchy: Fields (broad subject areas) > Standalone Courses > Sub-Courses (Modules). This structure allows for both broad exploration and deep specialization. The platform contains a mix of curated and AI-generated content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Assessment Structure</AccordionTrigger>
                <AccordionContent>
                  Assessments are designed to align with learning objectives and vary in complexity based on the course level (from Beginner to Executive). They include a mix of formative quizzes and summative exams to reinforce learning and evaluate comprehension.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bot /> AI Features Explained</CardTitle>
            <CardDescription>Learn about the powerful AI tools and capabilities integrated into the platform.</CardDescription>
          </CardHeader>
          <CardContent>
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>AI-Generated Courses & Search</AccordionTrigger>
                <AccordionContent>
                  If you search for a topic not in our catalog, our AI agent dynamically generates a new course outline based on your query and our pedagogical framework. This includes a new Field, a Standalone Course, and several Sub-Course (Module) overviews, which are then integrated into the Course Catalog.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>AI Assistant & Research Companion</AccordionTrigger>
                <AccordionContent>
                  The AI Assistant provides conversational support and can explain concepts or summarize content. In the Library, the AI Research Companion can find relevant publications and identify trends based on your keywords, leveraging Google Search grounding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>AI-Enhanced Module View</AccordionTrigger>
                <AccordionContent>
                  Within the module view, you can use AI to generate audio narrations and relevant illustrations for each paragraph, enhancing your learning experience through multiple modalities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Wrench /> AEM Format Specification</CardTitle>
            <CardDescription>For developers and content creators: a look at our Advanced Educational Markdown (AEM) format.</CardDescription>
          </CardHeader>
          <CardContent>
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is AEM?</AccordionTrigger>
                <AccordionContent>
                  The LMDpro Advanced Educational Markdown (AEM) format is a superset of CommonMark designed for creating robust, interactive, and AI-parsable learning content. It combines comprehensive YAML front matter for metadata with a custom block syntax for interactive components like quizzes and charts.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-2">
                <AccordionTrigger>Key Features</AccordionTrigger>
                <AccordionContent>
                  AEM features mandatory YAML front matter to control content parameters, and a consistent custom block syntax (`::: type`) for embedding complex components like quizzes, code challenges, and branching scenarios directly within the narrative flow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
