
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Clock, FileQuestion, BookOpen, VolumeX, AlertTriangle, Loader2 } from "lucide-react";

// Data mapping slugs to module titles and their corresponding audio files.
// In a real app, this would be fetched from a CMS or database.
const modulesData: { [key: string]: { title: string; audioSrc: string; paragraphs: any[] } } = {
  'strategic-communication': {
    title: "Strategic Communication",
    audioSrc: "/uploads/audio/module_2_2_content.mp3", 
    paragraphs: [ { type: 'p', text: 'This module covers advanced skills for delivering impactful presentations, professional report writing, managing difficult conversations, core negotiation principles, conflict resolution, and navigating cross-cultural communication challenges.'} ]
  },
  'executive-leadership': {
    title: "Executive Leadership",
    audioSrc: "/uploads/audio/module_5_1_GM_content.mp3", 
    paragraphs: [ { type: 'p', text: 'This capstone module explores synthesizing global trends into corporate strategy, managing complex business portfolios, leading large-scale transformations, and mastering executive communication with key stakeholders like the Board of Directors.'} ]
  },
  'ai-for-business': {
    title: "AI for Business",
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3", 
    paragraphs: [ { type: 'p', text: 'This module introduces the foundational concepts of AI in a business context, exploring how AI-driven agents and systems are architected and how they can be leveraged to create value and drive innovation.'} ]
  },
  'intro-to-business-management': {
    title: "Introduction to Business & Management Principles",
    audioSrc: "/uploads/audio/module_1_1_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. Introduction: The World of Business' },
        { type: 'p', text: "Welcome to the foundational module of your journey into the dynamic world of business and management. In today's interconnected global economy, understanding how organizations operate, create value, and navigate challenges is more crucial than ever. This module serves as your gateway, introducing the core concepts that underpin all commercial activity and organizational success." },
        { type: 'h2', text: '2. Defining Business: Purpose and Value Creation' },
        { type: 'p', text: "The fundamental purpose of any business entity revolves around the concept of value creation. Businesses identify unmet needs or desires in the marketplace and develop offerings – products or services – designed to satisfy them. This process involves acquiring resources (like raw materials, labor, capital, and information), transforming these resources through operational processes, and delivering the final output to the customer." },
        { type: 'h3', text: 'Stakeholders in Business' },
        { type: 'ul', items: ["Customers: Receive solutions to their problems.","Employees: Gain employment and opportunities for skill development.","Suppliers: Secure a market for their goods and services.","Owners/Shareholders: Receive a return on their investment.","Society: Benefits from innovation and economic progress."] },
        { type: 'h2', text: '3. Management vs. Leadership: Defining the Roles' },
        { type: 'p', text: "While often used interchangeably, management and leadership represent distinct, though often overlapping, sets of skills. Management is about coping with complexity—ensuring the organization runs efficiently. Leadership, conversely, is about coping with change—setting a direction and inspiring people to achieve a vision." }
    ]
  },
  'fundamentals-of-professional-communication': {
    title: "Fundamentals of Professional Communication",
    audioSrc: "/uploads/audio/module_1_2_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. Introduction: The Cornerstone of Professional Success' },
        { type: 'p', text: "Communication is the lifeblood of any organization and a fundamental skill for individual success in the professional world. It is the process through which information is exchanged, ideas are shared, relationships are built, and work gets done. This module focuses on the essential principles and practices of professional communication, equipping you with the foundational skills needed to interact effectively in any workplace setting." },
        { type: 'h2', text: '2. Types of Communication: Verbal, Non-Verbal, Written' },
        { type: 'p', text: "Professional communication occurs through various channels. Verbal communication involves spoken words. Non-verbal communication encompasses body language, facial expressions, and posture. Written communication involves conveying messages through written words, such as emails, reports, and memos." },
        { type: 'h2', text: '3. Active Listening: The Art of Understanding' },
        { type: 'p', text: "Active listening requires conscious effort to fully concentrate on, understand, respond to, and remember what is being said. Key techniques include paying full attention, paraphrasing to confirm understanding, and deferring judgment until the speaker has finished." }
    ]
  },
  'agile-methodologies-frameworks': {
    title: "Agile Methodologies & Frameworks",
    audioSrc: "/uploads/audio/module_3_1_AB_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. The Agile Manifesto' },
        { type: 'p', text: "The Agile Manifesto prioritizes individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan." },
        { type: 'h2', text: '2. The Scrum Framework' },
        { type: 'p', text: "Scrum is a lightweight framework for developing complex products, founded on empirical process control theory (Transparency, Inspection, Adaptation). It consists of roles (Product Owner, Scrum Master, Developers), events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), and artifacts (Product Backlog, Sprint Backlog, Increment)." },
        { type: 'h2', text: '3. Kanban Principles' },
        { type: 'p', text: "Kanban is a method for managing knowledge work with an emphasis on improving flow. Its core practices are: Visualize Workflow, Limit Work-in-Progress (WIP), Manage Flow, Make Policies Explicit, Implement Feedback Loops, and Improve Collaboratively." }
    ]
  },
  'product-ownership-backlog-management': {
    title: "Product Ownership & Backlog Management",
    audioSrc: "/uploads/audio/module_3_2_AB_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. The Product Owner Role' },
        { type: 'p', text: "The Product Owner (PO) is accountable for maximizing the value of the product resulting from the work of the Development Team. The PO is the sole person responsible for managing the Product Backlog, which includes creating, communicating, and ordering backlog items." },
        { type: 'h2', text: '2. Product Backlog Refinement' },
        { type: 'p', text: "This is the ongoing process of adding detail, estimates, and order to items in the Product Backlog. Effective user stories, often written in the 'As a [user], I want [goal], so that [benefit]' format and meeting INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable), are crucial." },
        { type: 'h2', text: '3. Prioritization Techniques' },
        { type: 'p', text: "POs use various techniques to order the backlog, such as MoSCoW (Must have, Should have, Could have, Won't have), Value vs. Effort analysis, and the Kano Model, which categorizes features based on their ability to satisfy customers." }
    ]
  },
  'foundations-of-autonomous-ai-agents': {
    title: "Foundations of Autonomous AI Agents",
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. Evolution from Automation to Autonomy' },
        { type: 'p', text: "Modern AI agents represent a paradigm shift from rigid automation scripts to intelligent, goal-oriented entities capable of independent decision-making and proactive execution. This evolution is largely driven by advancements in Large Language Models (LLMs)." },
        { type: 'h2', text: '2. Core Architectural Pillars' },
        { type: 'p', text: "Advanced AI agents are built upon five interconnected pillars: the LLM as the 'Brain' or reasoning engine; Perception to sense and interpret the environment (textual, visual, structured); Planning to devise strategies; Action (Tool Use) to interact with the environment; and Memory (short-term and long-term) to maintain context and learn." }
    ]
  },
  'designing-agentic-architectures': {
    title: "Designing Agentic Architectures",
    audioSrc: "/uploads/audio/ai_module_2_architectures_content.mp3",
    paragraphs: [
        { type: 'h2', text: '1. Essential System Components' },
        { type: 'p', text: "A robust agentic system includes a User Interface, a Core Agent Loop (Perceive-Plan-Act-Observe), a Tool Abstraction Layer to standardize tool use, State Management to track progress, and a dedicated Memory Module." },
        { type: 'h2', text: '2. Architectural Patterns' },
        { type: 'p', text: "Common patterns include single-agent vs. multi-agent systems (MAS), hierarchical planning architectures, and event-driven vs. goal-driven agents. Frameworks like LangChain, LlamaIndex, and AutoGen provide pre-built components to accelerate development." }
    ]
  },
};


export default function ModulePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';
  
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const moduleData = modulesData[slug] || null;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setAudioError(false); // Reset error on successful data load
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);
    
    const handleError = (e: Event) => {
      console.error(`Audio Player Error for source ${audio.src}: The audio could not be loaded.`);
      setAudioError(true);
    };

    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    
    // Set initial playback rate
    audio.playbackRate = playbackRate;

    // Clean up event listeners on component unmount or when key changes
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [slug, playbackRate]); // This effect now correctly depends on slug

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio && !audioError) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => {
            console.error("Play error:", e);
            setAudioError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handlePlaybackRateChange = (rate: string) => {
      const newRate = parseFloat(rate);
      setPlaybackRate(newRate);
      if (audioRef.current) {
          audioRef.current.playbackRate = newRate;
      }
  }
  
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current && !audioError) {
        const newTime = value[0];
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }
  }

  if (!isClient) {
    return (
        <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Loading module...</p>
        </div>
    );
  }

  if (!moduleData) {
      return (
        <div className="flex items-center justify-center h-full">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <p className="ml-4 text-destructive">Module not found.</p>
        </div>
      );
  }

  return (
    <div className="flex flex-col h-full">
      <header className="mb-4 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">{moduleData.title}</h1>
            <p className="text-muted-foreground">An interactive learning module</p>
        </div>
        <div className="flex gap-2">
            <Button variant="secondary"><FileQuestion className="mr-2 h-4 w-4"/> Ask AI about Module</Button>
            <Button variant="secondary"><BookOpen className="mr-2 h-4 w-4"/> Open in Library</Button>
        </div>
      </header>

      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Module Audio Player</CardTitle>
          <CardDescription>Listen to the audio narration of the module content.</CardDescription>
          <div className="p-4 rounded-lg bg-muted/50 mt-4">
            <audio
              key={slug} // Force re-render when slug changes
              ref={audioRef}
              src={moduleData.audioSrc}
              preload="metadata"
            />
            
            <div className="flex items-center gap-4">
              <Button onClick={togglePlayPause} size="icon" className="rounded-full h-12 w-12 shrink-0" disabled={audioError || !moduleData.audioSrc}>
                {audioError ? <VolumeX className="h-6 w-6"/> : (isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />)}
              </Button>
              <div className="flex-1 flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(currentTime)}</span>
                  <Slider
                    value={[currentTime]}
                    max={duration || 100}
                    step={1}
                    onValueChange={handleSeek}
                    disabled={audioError || !moduleData.audioSrc || duration === 0}
                  />
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(duration)}</span>
              </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Select onValueChange={handlePlaybackRateChange} defaultValue="1.0" disabled={audioError || !moduleData.audioSrc}>
                          <SelectTrigger className="w-[80px]">
                            <SelectValue placeholder="Speed" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0.5">0.5x</SelectItem>
                            <SelectItem value="1.0">1.0x</SelectItem>
                            <SelectItem value="1.5">1.5x</SelectItem>
                            <SelectItem value="2.0">2.0x</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {audioError && (
                 <div className="mt-3 text-sm text-destructive flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <p>Audio file not found or failed to load. This content may not have an audio track.</p>
                </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <article className="prose dark:prose-invert max-w-none pr-6 space-y-4">
                    {moduleData.paragraphs.map((item, index) => {
                        if(item.type === 'h2') return <h2 key={index}>{item.text}</h2>
                        if(item.type === 'h3') return <h3 key={index}>{item.text}</h3>
                        if(item.type === 'p') return <p key={index}>{item.text}</p>
                        if(item.type === 'ul') return <ul key={index}>{item.items.map((li, i) => <li key={i}>{li}</li>)}</ul>
                        return null;
                    })}
                </article>
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
