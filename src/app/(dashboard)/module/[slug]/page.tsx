
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Clock, FileQuestion, BookOpen } from "lucide-react";

// Placeholder for module content. In a real app, this would be fetched based on the slug.
const moduleContent = {
    title: "Introduction to Business & Management Principles",
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
};


export default function ModulePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';
  
  // Construct a hypothetical audio path based on the slug.
  // In a real app, you would have a mapping from slug to audio file.
  const audioSrc = `/uploads/audio/module_1_1_content.mp3`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };
      const setAudioTime = () => setCurrentTime(audio.currentTime);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
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
    if (audioRef.current) {
        audioRef.current.currentTime = value[0];
        setCurrentTime(value[0]);
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <header className="mb-4 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">{moduleContent.title}</h1>
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
            <audio ref={audioRef} src={audioSrc} preload="metadata" />
            <div className="flex items-center gap-4">
              <Button onClick={togglePlayPause} size="icon" className="rounded-full h-12 w-12 shrink-0">
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <div className="flex-1 flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(currentTime)}</span>
                  <Slider
                    value={[currentTime]}
                    max={duration || 100}
                    step={1}
                    onValueChange={handleSeek}
                  />
                  <span className="text-xs font-mono text-muted-foreground">{formatTime(duration)}</span>
              </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Select onValueChange={handlePlaybackRateChange} defaultValue="1.0">
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
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <article className="prose dark:prose-invert max-w-none pr-6 space-y-4">
                    {moduleContent.paragraphs.map((item, index) => {
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
