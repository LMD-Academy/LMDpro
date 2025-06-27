'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  FileText,
  Linkedin,
  Wand2,
  Trash2,
  PlusCircle,
  Printer,
  Loader2,
  BrainCircuit,
} from 'lucide-react';
import { ResumePreview } from '@/components/dashboard/resume/ResumePreview';
import type { ResumeData } from '@/components/dashboard/resume/ResumePreview';
import { generateResumeText, GenerateResumeTextInput } from '@/ai/flows/resume-builder-flow';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
  },
  summary: '',
  experience: [
    { id: 1, title: '', company: '', duration: '', responsibilities: '', bullets: [] },
  ],
  education: [{ id: 1, degree: '', institution: '', duration: '' }],
  skills: [''],
  completedCourses: [],
};

const sampleResumeData: ResumeData = {
    personalInfo: {
        name: 'Alex Johnson',
        jobTitle: 'Senior Software Engineer',
        email: 'alex.johnson@email.com',
        phone: '123-456-7890',
        location: 'San Francisco, CA',
    },
    summary: "Experienced Senior Software Engineer with over 8 years of expertise in full-stack development, specializing in building scalable web applications with React, Node.js, and cloud-native technologies on AWS. Proven track record of leading development teams, mentoring junior engineers, and delivering high-quality software on time. Passionate about clean code, agile methodologies, and leveraging AI to solve complex problems.",
    experience: [
        { id: 1, title: 'Senior Software Engineer', company: 'Innovatech Solutions', duration: '2020 - Present', responsibilities: 'Lead developer on the flagship SaaS product. Responsible for architecture design, feature implementation, and mentoring a team of 4 junior developers. Worked with React, TypeScript, Node.js, and AWS services.', bullets: [] },
        { id: 2, title: 'Software Engineer', company: 'TechGurus Inc.', duration: '2016 - 2020', responsibilities: 'Full-stack developer for various client projects. Built responsive user interfaces and robust backend APIs. Contributed to database design and maintenance.', bullets: [] },
    ],
    education: [
        { id: 1, degree: 'B.S. in Computer Science', institution: 'University of Technology', duration: '2012 - 2016' },
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'SQL', 'NoSQL', 'Agile Methodologies'],
    completedCourses: [
      'Advanced Data Analysis',
      'AI for Business',
    ],
};

const completedCoursesData = [
    'Advanced Data Analysis',
    'Project Management for Tech',
    'Cloud Fundamentals',
    'Strategic Communication',
    'AI for Business',
    'Executive Leadership'
];


export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState<Record<string, boolean>>({});

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [id]: value },
    }));
  };
  
  const handleSummaryChange = (e: React.ChangeEvent<Textarea>) => {
    setResumeData((prev) => ({ ...prev, summary: e.target.value }));
  };

  const handleExperienceChange = (id: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
        ...prev,
        experience: prev.experience.map(exp => exp.id === id ? {...exp, [name]: value} : exp)
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
        ...prev,
        experience: [...prev.experience, {id: Date.now(), title: '', company: '', duration: '', responsibilities: '', bullets: [] }]
    }));
  };

  const removeExperience = (id: number) => {
    setResumeData(prev => ({
        ...prev,
        experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };
  
  const handlePrint = () => {
    window.print();
  };

  const handleSimulateImport = () => {
    setResumeData(sampleResumeData);
    toast({
        title: "LinkedIn Data Imported",
        description: "Sample data has been loaded into the form.",
    });
  }

  const handleGenerateContent = async (section: 'summary' | 'experience', expId?: number) => {
      const uniqueId = expId ? `exp-${expId}` : 'summary';
      setIsGenerating(prev => ({...prev, [uniqueId]: true}));
      
      try {
          const input: GenerateResumeTextInput = {
              jobTitle: resumeData.personalInfo.jobTitle,
              yearsOfExperience: 8, // Example static value
              skills: resumeData.skills.filter(s => s.trim() !== ''),
              previousRoles: resumeData.experience.map(exp => ({
                  title: exp.title,
                  company: exp.company,
                  responsibilities: exp.responsibilities
              }))
          };

          const result = await generateResumeText(input);

          if (section === 'summary') {
              setResumeData(prev => ({ ...prev, summary: result.professionalSummary }));
          } else if (section === 'experience' && expId) {
                const relevantBullets = result.experienceBullets.find(b => b.id === resumeData.experience.findIndex(e => e.id === expId));
                if (relevantBullets) {
                     setResumeData(prev => ({
                        ...prev,
                        experience: prev.experience.map(exp => exp.id === expId ? {...exp, bullets: relevantBullets.bullets} : exp)
                    }));
                }
          }

          toast({
              title: "AI Content Generated!",
              description: `The ${section} section has been updated.`,
          });

      } catch (error) {
          console.error("AI Generation Error:", error);
          toast({
              title: "Error",
              description: "Failed to generate AI content. Please try again.",
              variant: "destructive",
          });
      } finally {
        setIsGenerating(prev => ({...prev, [uniqueId]: false}));
      }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-4rem)]">
      {/* Left Side: Form */}
      <div className="flex flex-col h-full">
        <header className="p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <FileText /> Resume Builder
          </h1>
          <div className='flex gap-2'>
            <Button variant="outline" size="sm" onClick={handleSimulateImport}>
              <Linkedin className="mr-2 h-4 w-4" /> Import from LinkedIn
            </Button>
            <Button size="sm" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" /> Print
            </Button>
          </div>
        </header>
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={resumeData.personalInfo.name} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" value={resumeData.personalInfo.jobTitle} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={resumeData.personalInfo.email} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value={resumeData.personalInfo.location} onChange={handlePersonalInfoChange} />
                </div>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Professional Summary</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => handleGenerateContent('summary')} disabled={isGenerating['summary']}>
                        {isGenerating['summary'] ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Wand2 className="mr-2 h-4 w-4" />}
                        Generate with AI
                    </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="A brief summary of your career..." value={resumeData.summary} onChange={handleSummaryChange} rows={5}/>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {resumeData.experience.map((exp, index) => (
                        <div key={exp.id} className="p-4 border rounded-lg space-y-3 relative">
                             <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeExperience(exp.id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                             </Button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
                                    <Input id={`title-${exp.id}`} name="title" value={exp.title} onChange={(e) => handleExperienceChange(exp.id, e)} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor={`company-${exp.id}`}>Company</Label>
                                    <Input id={`company-${exp.id}`} name="company" value={exp.company} onChange={(e) => handleExperienceChange(exp.id, e)} />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`duration-${exp.id}`}>Duration</Label>
                                <Input id={`duration-${exp.id}`} name="duration" placeholder="e.g., Jan 2020 - Present" value={exp.duration} onChange={(e) => handleExperienceChange(exp.id, e)} />
                            </div>
                             <div className="space-y-1">
                                <Label htmlFor={`responsibilities-${exp.id}`}>Responsibilities / Raw Notes</Label>
                                <Textarea id={`responsibilities-${exp.id}`} name="responsibilities" value={exp.responsibilities} onChange={(e) => handleExperienceChange(exp.id, e)} rows={4} placeholder="List your key responsibilities, projects, or achievements here. The AI will use this to generate professional bullet points."/>
                             </div>
                             <Button variant="secondary" size="sm" className="w-full" onClick={() => handleGenerateContent('experience', exp.id)} disabled={isGenerating[`exp-${exp.id}`]}>
                                {isGenerating[`exp-${exp.id}`] ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <BrainCircuit className="mr-2 h-4 w-4" />}
                                Generate AI Bullet Points for this Role
                             </Button>
                             {exp.bullets && exp.bullets.length > 0 && (
                                <div className="pt-2">
                                    <h4 className="text-sm font-semibold text-muted-foreground">Generated Bullet Points (Editable in Preview):</h4>
                                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-muted-foreground">
                                        {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                                    </ul>
                                </div>
                             )}
                        </div>
                    ))}
                    <Button variant="outline" onClick={addExperience} className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4"/> Add Experience
                    </Button>
                </CardContent>
            </Card>

          </div>
        </ScrollArea>
      </div>

      {/* Right Side: Preview */}
      <div className="bg-muted hidden lg:block overflow-hidden h-full">
        <ScrollArea className="h-full">
            <div className="p-8 print-container">
                 <ResumePreview data={resumeData} />
            </div>
        </ScrollArea>
      </div>
    </div>
  );
}
