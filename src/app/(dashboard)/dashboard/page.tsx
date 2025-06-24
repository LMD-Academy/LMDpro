
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
import { ArrowRight, BookCheck, Certificate, Sparkles } from 'lucide-react';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const courseStatusData = [
  { name: 'Completed', value: 8, color: 'hsl(var(--primary))' },
  { name: 'In Progress', value: 4, color: 'hsl(var(--accent))' },
  { name: 'Not Started', value: 12, color: 'hsl(var(--muted))' },
];

const recentCourses = [
  {
    title: 'Strategic Communication',
    status: 'In Progress',
    progress: 75,
    slug: 'strategic-communication',
  },
  {
    title: 'Executive Leadership',
    status: 'Completed',
    progress: 100,
    slug: 'executive-leadership',
  },
  {
    title: 'AI for Business',
    status: 'Not Started',
    progress: 0,
    slug: 'ai-for-business',
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
    title: 'Cloud Fundamentals',
    description: 'A popular choice for your role.',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, User!</h1>
        <p className="text-muted-foreground">
          Here&apos;s a snapshot of your learning journey.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Courses in Progress
            </CardTitle>
            <BookCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Keep up the great work!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <Certificate className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Badges Earned
            </CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
             <p className="text-xs text-muted-foreground">New "Agile Leader" badge!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Course Progress Overview</CardTitle>
            <CardDescription>
              A summary of all your enrolled courses.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Legend />
                <Pie
                  data={courseStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label={(entry) => entry.value}
                >
                  {courseStatusData.map((entry) => (
                    <Cell key={`cell-${entry.name}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
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

      <Card>
        <CardHeader>
          <CardTitle>Recently Accessed Courses</CardTitle>
          <CardDescription>
            Pick up where you left off.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[150px]">Progress</TableHead>
                <TableHead className="w-[150px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCourses.map((course) => (
                <TableRow key={course.title}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        course.status === 'Completed' ? 'default' : 'secondary'
                      }
                    >
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Progress value={course.progress} className="h-2 w-full" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm">
                       <Link href={`/module/${course.slug}`}>
                        {course.status === 'Not Started' ? 'Start' : 'Continue'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
