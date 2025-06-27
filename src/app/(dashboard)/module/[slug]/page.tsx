
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
  // From Dashboard
  'strategic-communication': {
    title: "Strategic Communication",
    // Mapping to 'Business Communication & Negotiation' module file
    audioSrc: "/uploads/audio/module_2_2_content.mp3", 
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'executive-leadership': {
    title: "Executive Leadership",
    // Mapping to 'Global Leadership & C-Suite Strategy' module file
    audioSrc: "/uploads/audio/module_5_1_GM_content.mp3", 
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'ai-for-business': {
    title: "AI for Business",
    // Mapping to a foundational AI module file as a plausible substitute
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3", 
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },

  // From Catalog
  'intro-to-business-management': {
    title: "Introduction to Business & Management Principles",
    audioSrc: "/uploads/audio/module_1_1_content.mp3",
    paragraphs: [
        {
            type: 'h2',
            text: '1. Introduction: The World of Business',
        },
        {
            type: 'p',
            text: "Welcome to the foundational module of your journey into the dynamic world of business and management. In today's interconnected global economy, understanding how organizations operate, create value, and navigate challenges is more crucial than ever. This module serves as your gateway, introducing the core concepts that underpin all commercial activity and organizational success.",
        },
        {
            type: 'h2',
            text: '2. Defining Business: Purpose and Value Creation',
        },
        {
            type: 'p',
            text: "The fundamental purpose of any business entity revolves around the concept of value creation. Businesses identify unmet needs or desires in the marketplace and develop offerings – products or services – designed to satisfy them. This process involves acquiring resources (like raw materials, labor, capital, and information), transforming these resources through operational processes, and delivering the final output to the customer."
        },
        {
            type: 'h3',
            text: 'Stakeholders in Business',
        },
        {
            type: 'ul',
            items: [
                "Customers: Receive solutions to their problems.",
                "Employees: Gain employment and opportunities for skill development.",
                "Suppliers: Secure a market for their goods and services.",
                "Owners/Shareholders: Receive a return on their investment.",
                "Society: Benefits from innovation and economic progress."
            ]
        },
        {
            type: 'h2',
            text: '3. Management vs. Leadership: Defining the Roles'
        },
        {
            type: 'p',
            text: "While often used interchangeably, management and leadership represent distinct, though often overlapping, sets of skills. Management is about coping with complexity—ensuring the organization runs efficiently. Leadership, conversely, is about coping with change—setting a direction and inspiring people to achieve a vision."
        }
    ]
  },
  'fundamentals-of-professional-communication': {
    title: "Fundamentals of Professional Communication",
    audioSrc: "/uploads/audio/module_1_2_content.mp3",
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'agile-methodologies-frameworks': {
    title: "Agile Methodologies & Frameworks",
    audioSrc: "/uploads/audio/module_3_1_AB_content.mp3",
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'product-ownership-backlog-management': {
    title: "Product Ownership & Backlog Management",
    audioSrc: "/uploads/audio/module_3_2_AB_content.mp3",
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'foundations-of-autonomous-ai-agents': {
    title: "Foundations of Autonomous AI Agents",
    audioSrc: "/uploads/audio/ai_module_1_foundations_content.mp3",
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
  'designing-agentic-architectures': {
    title: "Designing Agentic Architectures",
    audioSrc: "/uploads/audio/ai_module_2_architectures_content.mp3",
    paragraphs: [ { type: 'p', text: 'Content for this module will be available soon.'} ]
  },
};


export default function ModulePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';
  
  const [moduleData, setModuleData] = useState<{ title: string; audioSrc: string; paragraphs: any[] } | null | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const data = modulesData[slug];
      setModuleData(data || null); // Set to null if not found
    }
  }, [slug]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Effect for handling audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && moduleData?.audioSrc) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
        setAudioError(false);
      };
      const setAudioTime = () => setCurrentTime(audio.currentTime);
      const handleEnded = () => setIsPlaying(false);
      const handleError = (e: Event) => {
        const audioEl = e.target as HTMLAudioElement;
        const error = audioEl.error;
        console.error("Audio Player Error:", {
            code: error?.code,
            message: error?.message,
            source: audioEl.currentSrc
        });
        setAudioError(true);
      };

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      // Reset state when audio source changes
      setAudioError(false);
      setIsPlaying(false);
      setCurrentTime(0);
      
      // Explicitly set src and load if it has changed
      const absoluteSrc = new URL(moduleData.audioSrc, window.location.origin).href;
      if(audio.src !== absoluteSrc) {
        audio.src = moduleData.audioSrc;
      }
      audio.load();

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [moduleData?.audioSrc]);


  const togglePlayPause = () => {
    if (audioRef.current && !audioError) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
            console.error("Play error:", e)
            setAudioError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handlePlaybackRateChange = (rate: string) => {
      const newRate = parseFloat(rate);
      setPlaybackRate(newRate);
      if(audioRef.current) {
          audioRef.current.playbackRate = newRate;
      }
  }
  
  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity || time < 0) {
        return '0:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current && !audioError) {
        audioRef.current.currentTime = value[0];
        setCurrentTime(value[0]);
    }
  }

  if (moduleData === undefined) {
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
            <audio ref={audioRef} preload="metadata" />
            <div className="flex items-center gap-4">
              <Button onClick={togglePlayPause} size="icon" className="rounded-full h-12 w-12 shrink-0" disabled={audioError}>
                {audioError ? <VolumeX className="h-6 w-6"/> : (isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />)}
              </Button>
              <div className="flex-1 flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(currentTime)}</span>
                  <Slider
                    value={[currentTime]}
                    max={duration || 100}
                    step={1}
                    onValueChange={handleSeek}
                    disabled={audioError}
                  />
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(duration)}</span>
              </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Select onValueChange={handlePlaybackRateChange} defaultValue="1.0" disabled={audioError}>
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
                    <p>Audio file not found or failed to load for this module.</p>
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
