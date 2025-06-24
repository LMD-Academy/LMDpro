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
    title: 'Strategic Communication for Leaders',
    category: 'Communication',
    duration: '4 hours',
    level: 'Intermediate',
    progress: 75,
  },
  {
    title: 'Advanced Executive Leadership',
    category: 'Leadership',
    duration: '8 hours',
    level: 'Advanced',
    progress: 100,
  },
  {
    title: 'AI Fundamentals for Business Professionals',
    category: 'Technology',
    duration: '6 hours',
    level: 'Beginner',
    progress: 0,
  },
    {
    title: 'Data Science with Python',
    category: 'Technology',
    duration: '12 hours',
    level: 'Intermediate',
    progress: 25,
  },
  {
    title: 'Agile Project Management',
    category: 'Project Management',
    duration: '5 hours',
    level: 'Beginner',
    progress: 0,
  },
  {
    title: 'Financial Modeling & Valuation',
    category: 'Finance',
    duration: '10 hours',
    level: 'Advanced',
    progress: 50,
  },
];

export default function CourseCatalogPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-4 sm:p-6 lg:p-8">
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
                    <h4 className="font-semibold">Category</h4>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="cat-tech" />
                            <Label htmlFor="cat-tech">Technology</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="cat-leadership" />
                            <Label htmlFor="cat-leadership">Leadership</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="cat-comm" />
                            <Label htmlFor="cat-comm">Communication</Label>
                        </div>
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
                                    <Link href="#">
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
