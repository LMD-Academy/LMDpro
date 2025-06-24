'use client';

import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function AiAssistant() {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
            <ScrollArea className="flex-1 -m-4">
                <div className="p-4 space-y-4">
                    <div className="text-xs text-muted-foreground p-3 rounded-lg bg-muted max-w-xs">
                        Ask me to generate a learning path, create course content, or help with your resume!
                    </div>
                </div>
            </ScrollArea>
            <div className="flex gap-2">
                <Input placeholder="Ask LMDpro AI..." className="bg-background"/>
                <Button>Send</Button>
            </div>
        </div>
    )
}
