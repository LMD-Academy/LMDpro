'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Download, FileText, Wand2 } from "lucide-react";

export function Notepad() {
    return (
        <div className="flex flex-col h-full bg-card">
            <div className='p-4 border-b'>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FileText size={20} /> Notepad
                </h3>
            </div>
            <div className="flex-1 p-4">
                <Textarea placeholder="Take notes here..." className="h-full resize-none bg-background"/>
            </div>
            <div className="p-4 border-t flex gap-2">
                <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2"/> Export
                </Button>
                 <Button variant="outline" size="sm" className="w-full">
                    <Wand2 className="mr-2"/> Ask AI
                </Button>
            </div>
        </div>
    )
}
