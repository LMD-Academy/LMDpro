
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Clock, FileQuestion, BookOpen, VolumeX, AlertTriangle, Loader2 } from "lucide-react";
import { modulesData } from '@/lib/modules-data';
import { useToast } from '@/hooks/use-toast';
import { textToSpeech } from '@/ai/flows/tts-flow';

export default function ModulePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';
  
  const [moduleData, setModuleData] = useState<{ title: string; paragraphs: any[] } | null>(null);
  const [isLoadingModule, setIsLoadingModule] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioError, setAudioError] = useState(false);

  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      const data = modulesData[slug] || null;
      setModuleData(data);
      setIsLoadingModule(false);
      // Reset audio state when slug changes
      setAudioSrc(null);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setAudioError(false);
    }
  }, [slug]);

  useEffect(() => {
    const generateAudioForModule = async () => {
        if (!moduleData || isGeneratingAudio || audioSrc) return; // Don't re-generate

        setIsGeneratingAudio(true);
        setAudioError(false);
        toast({ title: 'Generating AI Narration...', description: 'Please wait while we create the audio for this module.' });

        try {
            const fullText = moduleData.paragraphs.map(p => p.text).join('\n\n');
            if (!fullText.trim()) {
              throw new Error("Module content is empty, cannot generate audio.");
            }
            const result = await textToSpeech({ text: fullText });
            setAudioSrc(result.audioDataUri);
            toast({ title: 'Audio Ready!', description: 'The narration for this module is ready to play.' });
        } catch (error) {
            console.error('TTS Generation Error:', error);
            setAudioError(true);
            toast({
                title: "Audio Generation Failed",
                description: "Could not generate the audio narration for this module.",
                variant: "destructive"
            });
        } finally {
            setIsGeneratingAudio(false);
        }
    };

    if (moduleData && !audioSrc) {
        generateAudioForModule();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleData]); // Run only when moduleData changes

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      if(audioError) setAudioError(false);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);
    
    const handleError = (e: Event) => {
      const audioEl = e.target as HTMLAudioElement;
      let errorDetails = 'An unknown error occurred.';
      if (audioEl.error) {
        switch (audioEl.error.code) {
          case 1: errorDetails = 'Audio playback was aborted.'; break;
          case 2: errorDetails = 'A network error caused the audio download to fail.'; break;
          case 3: errorDetails = 'The audio playback was aborted due to a corruption problem or because the audio used features your browser did not support.'; break;
          case 4: errorDetails = 'The audio could not be loaded, either because the server or network failed or because the format is not supported.'; break;
        }
      }
      console.error(`Audio Player Error for source ${audioEl.currentSrc}: ${errorDetails}`);
      setAudioError(true);
      toast({
          title: "Audio Playback Error",
          description: "Could not play the audio file. It might be corrupted or in an unsupported format.",
          variant: "destructive"
      });
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    
    audio.playbackRate = playbackRate;

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [playbackRate, audioError, audioSrc, toast]); 

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio && !audioError && audioSrc) {
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
    if (isNaN(time) || time <= 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current && !audioError && audioSrc) {
        const newTime = value[0];
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }
  }

  const renderAudioPlayer = () => {
    if (isGeneratingAudio) {
        return (
             <div className="flex items-center justify-center text-center gap-3 p-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                <p className="text-muted-foreground">Generating AI Narration...</p>
            </div>
        );
    }
    if (audioError) {
        return (
            <div className="p-4 text-sm text-destructive flex items-center justify-center gap-2">
                <AlertTriangle size={16} />
                <p>Audio generation failed. Please try reloading the page.</p>
            </div>
        );
    }
    if (audioSrc) {
        return (
            <>
                <audio
                  key={audioSrc}
                  ref={audioRef}
                  src={audioSrc}
                  preload="metadata"
                />
                <div className="flex items-center gap-4">
                  <Button onClick={togglePlayPause} size="icon" className="rounded-full h-12 w-12 shrink-0" disabled={audioError}>
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <div className="flex-1 flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">{formatTime(currentTime)}</span>
                      <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                        disabled={duration === 0}
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
              </>
        );
    }
    return null; // Initial state before generation starts
  }


  if (isLoadingModule) {
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
          <div className="p-4 rounded-lg bg-muted/50 mt-4">
            {renderAudioPlayer()}
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <article className="prose dark:prose-invert max-w-none pr-6 space-y-4">
                    {moduleData.paragraphs.map((item, index) => {
                        if(item.type === 'h2') return <h2 key={index}>{item.text}</h2>
                        if(item.type === 'h3') return <h3 key={index}>{item.text}</h3>
                        if(item.type === 'p') return <p key={index}>{item.text}</p>
                        if(item.type === 'ul') return <ul key={index}>{item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}</ul>
                        return null;
                    })}
                </article>
            </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
