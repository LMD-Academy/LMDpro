'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const learningData = [
  { name: 'Jan', minutes: 120 },
  { name: 'Feb', minutes: 180 },
  { name: 'Mar', minutes: 240 },
  { name: 'Apr', minutes: 200 },
  { name: 'May', minutes: 300 },
  { name: 'Jun', minutes: 280 },
];

const courses = [
  {
    title: 'Strategic Communication',
    status: 'In Progress',
    progress: 75,
  },
  {
    title: 'Executive Leadership',
    status: 'Completed',
    progress: 100,
  },
  {
    title: 'AI for Business',
    status: 'Not Started',
    progress: 0,
  },
];

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

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome back, User!</CardTitle>
          <CardDescription>
            Ready to continue your learning journey? Your personalized dashboard awaits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Continue Learning <ArrowRight className="ml-2" /></Button>
        </CardContent>
      </Card>
      
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Learning Activity</CardTitle>
                    <CardDescription>Your learning time over the last 6 months.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={learningData}>
                        <XAxis
                        dataKey="name"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        />
                        <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value} min`}
                        />
                        <Tooltip
                            cursor={{ fill: 'hsl(var(--muted))' }}
                            contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                        />
                        <Bar dataKey="minutes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>My Courses</CardTitle>
                    <CardDescription>
                    Track your progress and continue your learning.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Course</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progress</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses.map((course) => (
                        <TableRow key={course.title}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>
                            <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
                                {course.status}
                            </Badge>
                            </TableCell>
                            <TableCell>
                            <Progress value={course.progress} className="h-2 w-full" />
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-2">
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
        </div>
      </div>
    </div>
  );
}
