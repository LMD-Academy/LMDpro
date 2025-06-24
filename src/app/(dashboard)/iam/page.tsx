import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, BookUser, Target, PlusCircle, Eye } from "lucide-react";

const teamMembers = [
    { name: 'Alice Johnson', role: 'Software Engineer', coursesAssigned: 5, coursesCompleted: 4, progress: 80 },
    { name: 'Bob Williams', role: 'Product Manager', coursesAssigned: 3, coursesCompleted: 3, progress: 100 },
    { name: 'Charlie Brown', role: 'UX Designer', coursesAssigned: 4, coursesCompleted: 1, progress: 25 },
    { name: 'Diana Miller', role: 'Data Analyst', coursesAssigned: 6, coursesCompleted: 5, progress: 83 },
]

export default function IamPage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Admin / IAM Dashboard</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Manage your team&apos;s learning and development.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Eye className="mr-2"/> View as Learner</Button>
                    <Button><PlusCircle className="mr-2"/> Create Course</Button>
                </div>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 since last month</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Courses Assigned</CardTitle>
                        <BookUser className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45</div>
                         <p className="text-xs text-muted-foreground">in 8 active learning paths</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Team Completion Rate</CardTitle>
                        <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78%</div>
                        <p className="text-xs text-muted-foreground">Trending up by 5%</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Team Progress</CardTitle>
                    <CardDescription>Monitor and track training for all team members.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Member</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Progress</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teamMembers.map(member => (
                                <TableRow key={member.name}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{member.role}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{member.coursesCompleted} / {member.coursesAssigned} completed</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Progress value={member.progress} className="h-2"/>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Manage</Button>
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
