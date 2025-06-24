
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ListFilter, Search } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: 'Intro to Business & Management',
    category: 'General Core Studies L1',
    slug: 'intro-to-business-management',
    duration: '3-4 hours',
    level: 'Beginner',
    progress: 75,
  },
  {
    title: 'Fundamentals of Professional Communication',
    category: 'General Core Studies L1',
    slug: 'fundamentals-of-professional-communication',
    duration: '3-4 hours',
    level: 'Beginner',
    progress: 100,
  },
    {
    title: 'Agile Methodologies & Frameworks',
    category: 'Professional Specializations L3',
    slug: 'agile-methodologies-frameworks',
    duration: '7-9 hours',
    level: 'Professional',
    progress: 0,
  },
  {
    title: 'Product Ownership & Backlog Management',
    category: 'Professional Specializations L3',
    slug: 'product-ownership-backlog-management',
    duration: '6-8 hours',
    level: 'Professional',
    progress: 25,
  },
  {
    title: 'Foundations of Autonomous AI Agents',
    category: 'AI Specialization',
    slug: 'foundations-of-autonomous-ai-agents',
    duration: '5-7 hours',
    level: 'Advanced',
    progress: 50,
  },
  {
    title: 'Designing Agentic Architectures',
    category: 'AI Specialization',
    slug: 'designing-agentic-architectures',
    duration: '5-7 hours',
    level: 'Advanced',
    progress: 0,
  },
];

const fields = [
    { id: 'field-core-1', label: 'Core Studies L1' },
    { id: 'field-prof-3', label: 'Professional Specializations L3' },
    { id: 'field-ai', label: 'AI Specialization' },
    { id: 'field-tech', label: 'Technology Development' },
    { id: 'field-lead', label: 'Leadership Fundamentals' },
    { id: 'field-agile', label: 'Agile & Project Management' },
]

export default function CourseCatalogPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            <aside className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-9" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><ListFilter size={18}/> Filters</h3>
                    <Separator />
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Field</h4>
                    <div className="space-y-2">
                        {fields.map(field => (
                             <div key={field.id} className="flex items-center space-x-2">
                                <Checkbox id={field.id} />
                                <Label htmlFor={field.id}>{field.label}</Label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold">Level</h4>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="lvl-beginner" />
                            <Label htmlFor="lvl-beginner">Beginner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="lvl-intermediate" />
                            <Label htmlFor="lvl-intermediate">Intermediate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="lvl-advanced" />
                            <Label htmlFor="lvl-advanced">Advanced</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <Checkbox id="lvl-professional" />
                            <Label htmlFor="lvl-professional">Professional</Label>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <h1 className="text-3xl font-bold tracking-tight mb-6">Course Catalog</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Card key={course.title} className="flex flex-col">
                            <CardHeader>
                                <CardDescription>{course.category} • {course.duration}</CardDescription>
                                <CardTitle>{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                {course.progress > 0 && (
                                    <div className="space-y-2">
                                        <Progress value={course.progress} className="h-2" />
                                        <p className="text-xs text-muted-foreground">{course.progress}% complete</p>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild>
                                    <Link href={`/module/${course.slug}`}>
                                        {course.progress > 0 ? 'Continue Learning' : 'Start Course'} 
                                        <ArrowRight className="ml-2" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
