
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
import { Users, BookUser, Target, PlusCircle, MoreVertical, Award, Edit, Trash2 } from "lucide-react";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    coursesAssigned: number;
    coursesCompleted: number;
    progress: number;
};

const initialTeamMembers: TeamMember[] = [
    { id: 1, name: 'Alice Johnson', role: 'Software Engineer', coursesAssigned: 5, coursesCompleted: 4, progress: 80 },
    { id: 2, name: 'Bob Williams', role: 'Product Manager', coursesAssigned: 3, coursesCompleted: 3, progress: 100 },
    { id: 3, name: 'Charlie Brown', role: 'UX Designer', coursesAssigned: 4, coursesCompleted: 1, progress: 25 },
    { id: 4, name: 'Diana Miller', role: 'Data Analyst', coursesAssigned: 6, coursesCompleted: 5, progress: 83 },
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


    const handleSelectUserForAction = (user: TeamMember, action: 'assign' | 'issue') => {
        setSelectedUser(user);
        if (action === 'assign') setAssignCourseOpen(true);
        if (action === 'issue') setIssueCertificateOpen(true);
    };

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

            <div className="grid gap-4 md:grid-cols-3">
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
                                <TableRow key={member.id}>
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
                                           <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreVertical className="h-4 w-4" />
                                                    <span className="sr-only">Open menu</span>
                                                </Button>
                                           </DropdownMenuTrigger>
                                           <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onSelect={() => handleSelectUserForAction(member, 'assign')}>
                                                    <BookUser className="mr-2 h-4 w-4" /> Assign Course
                                                </DropdownMenuItem>
                                                 <DropdownMenuItem onSelect={() => handleSelectUserForAction(member, 'issue')}>
                                                    <Award className="mr-2 h-4 w-4" /> Issue Certificate
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" /> Edit Role
                                                </DropdownMenuItem>
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

            {/* Dialogs for actions */}
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
