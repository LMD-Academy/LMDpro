
'use client';

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, BookUser, Target, PlusCircle, MoreVertical, Award, Edit, Trash2, TrendingUp, BarChartHorizontal } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

type TeamMember = {
    id: number;
    name: string;
    role: string;
    email: string;
    joinDate: string;
    coursesAssigned: number;
    coursesCompleted: number;
    progress: number;
};

const initialTeamMembers: TeamMember[] = [
    { id: 1, name: 'Alice Johnson', role: 'Software Engineer', email: 'alice@example.com', joinDate: '2023-01-15', coursesAssigned: 5, coursesCompleted: 4, progress: 80 },
    { id: 2, name: 'Bob Williams', role: 'Product Manager', email: 'bob@example.com', joinDate: '2022-11-20', coursesAssigned: 3, coursesCompleted: 3, progress: 100 },
    { id: 3, name: 'Charlie Brown', role: 'UX Designer', email: 'charlie@example.com', joinDate: '2023-05-10', coursesAssigned: 4, coursesCompleted: 1, progress: 25 },
    { id: 4, name: 'Diana Miller', role: 'Data Analyst', email: 'diana@example.com', joinDate: '2023-09-01', coursesAssigned: 6, coursesCompleted: 5, progress: 83 },
    { id: 5, name: 'Ethan Davis', role: 'Marketing Specialist', email: 'ethan@example.com', joinDate: '2024-02-20', coursesAssigned: 2, coursesCompleted: 0, progress: 0 },
];

const availableCourses = [
    'Advanced Data Analysis',
    'Project Management for Tech',
    'Cloud Fundamentals',
    'Strategic Communication',
    'AI for Business',
    'Executive Leadership'
];

const availableCertificates = [
    'Certificate of Completion - Agile Methodologies',
    'Certificate of Specialization - AI for Business',
    'Certificate of Field Study - Leadership'
];


export default function IamPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
    const [selectedUser, setSelectedUser] = useState<TeamMember | null>(null);
    
    const [isAssignCourseOpen, setAssignCourseOpen] = useState(false);
    const [isIssueCertificateOpen, setIssueCertificateOpen] = useState(false);
    const [isAddLearnerOpen, setAddLearnerOpen] = useState(false);
    const [isViewProfileOpen, setViewProfileOpen] = useState(false);

    const handleSelectUserForAction = (user: TeamMember, action: 'assign' | 'issue' | 'profile') => {
        setSelectedUser(user);
        if (action === 'assign') setAssignCourseOpen(true);
        if (action === 'issue') setIssueCertificateOpen(true);
        if (action === 'profile') setViewProfileOpen(true);
    };

    const avgProgress = teamMembers.length > 0 
        ? Math.round(teamMembers.reduce((acc, member) => acc + member.progress, 0) / teamMembers.length)
        : 0;
    
    const totalCertsIssued = 12; // Example static data

    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Admin / IAM Dashboard</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Manage your team's learning and development.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><PlusCircle className="mr-2"/> Create Course</Button>
                    <Dialog open={isAddLearnerOpen} onOpenChange={setAddLearnerOpen}>
                        <DialogTrigger asChild>
                            <Button><Users className="mr-2"/> Add Learner</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New Learner</DialogTitle>
                                <DialogDescription>Enter the details for the new team member.</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="e.g. John Doe"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="e.g. john.doe@example.com"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input id="role" placeholder="e.g. Software Engineer"/>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setAddLearnerOpen(false)}>Cancel</Button>
                                <Button onClick={() => setAddLearnerOpen(false)}>Add Learner</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Members</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{teamMembers.length}</div>
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
                        <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{avgProgress}%</div>
                        <p className="text-xs text-muted-foreground">Trending up by 5%</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalCertsIssued}</div>
                        <p className="text-xs text-muted-foreground">+3 this quarter</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                 <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Team Progress</CardTitle>
                        <CardDescription>Monitor and manage training for all team members.</CardDescription>
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
                                    <TableRow key={member.id} className="cursor-pointer hover:bg-muted/50" onClick={() => handleSelectUserForAction(member, 'profile')}>
                                        <TableCell className="font-medium">{member.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{member.role}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{member.coursesCompleted} / {member.coursesAssigned} completed</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Progress value={member.progress} className="h-2"/>
                                        </TableCell>
                                        <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreVertical className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem onSelect={() => handleSelectUserForAction(member, 'profile')}>
                                                        <Edit className="mr-2 h-4 w-4" /> View/Edit Profile
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={() => handleSelectUserForAction(member, 'assign')}>
                                                        <BookUser className="mr-2 h-4 w-4" /> Assign Course
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={() => handleSelectUserForAction(member, 'issue')}>
                                                        <Award className="mr-2 h-4 w-4" /> Issue Certificate
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">
                                                        <Trash2 className="mr-2 h-4 w-4" /> Remove User
                                                    </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Team Completion Overview</CardTitle>
                        <CardDescription>Progress distribution across the team.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={teamMembers} layout="vertical" margin={{ left: 10 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                                <Tooltip cursor={{fill: 'hsl(var(--muted))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}/>
                                <Bar dataKey="progress" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                 </Card>
            </div>

            {/* Dialogs for actions */}
             <Dialog open={isViewProfileOpen} onOpenChange={setViewProfileOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>{selectedUser?.name}</DialogTitle>
                        <DialogDescription>{selectedUser?.role} - Joined on {selectedUser?.joinDate}</DialogDescription>
                    </DialogHeader>
                     <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="profile-name">Name</Label>
                            <Input id="profile-name" defaultValue={selectedUser?.name} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profile-email">Email</Label>
                            <Input id="profile-email" type="email" defaultValue={selectedUser?.email} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profile-role">Role</Label>
                            <Input id="profile-role" defaultValue={selectedUser?.role} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setViewProfileOpen(false)}>Cancel</Button>
                        <Button onClick={() => setViewProfileOpen(false)}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
             </Dialog>

             <Dialog open={isAssignCourseOpen} onOpenChange={setAssignCourseOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Assign Course to {selectedUser?.name}</DialogTitle>
                        <DialogDescription>Select a course from the catalog to assign to this learner.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                         <Label htmlFor="course-select">Course</Label>
                         <Select>
                            <SelectTrigger id="course-select">
                                <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableCourses.map(course => (
                                    <SelectItem key={course} value={course}>{course}</SelectItem>
                                ))}
                            </SelectContent>
                         </Select>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setAssignCourseOpen(false)}>Cancel</Button>
                        <Button onClick={() => setAssignCourseOpen(false)}>Assign Course</Button>
                    </DialogFooter>
                </DialogContent>
             </Dialog>

             <Dialog open={isIssueCertificateOpen} onOpenChange={setIssueCertificateOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Issue Certificate to {selectedUser?.name}</DialogTitle>
                        <DialogDescription>Select a certificate to issue for a completed major or field of study.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                         <Label htmlFor="cert-select">Certificate</Label>
                         <Select>
                            <SelectTrigger id="cert-select">
                                <SelectValue placeholder="Select a certificate" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableCertificates.map(cert => (
                                    <SelectItem key={cert} value={cert}>{cert}</SelectItem>
                                ))}
                            </SelectContent>
                         </Select>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIssueCertificateOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIssueCertificateOpen(false)}>Issue Certificate</Button>
                    </DialogFooter>
                </DialogContent>
             </Dialog>
        </div>
    );
}
