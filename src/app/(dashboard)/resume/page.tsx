import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Upload, Wand2 } from "lucide-react";
import Image from 'next/image';

const templates = [
  { name: 'Modern', src: 'https://placehold.co/400x566.png', hint: 'resume modern' },
  { name: 'Classic', src: 'https://placehold.co/400x566.png', hint: 'resume classic' },
  { name: 'Creative', src: 'https://placehold.co/400x566.png', hint: 'resume creative' },
];

export default function ResumePage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Intelligent Resume Builder</h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Create a professional resume that stands out.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Upload className="mr-2"/> Import from LinkedIn</Button>
                    <Button><Wand2 className="mr-2"/> Generate with AI</Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <main className="lg:col-span-2">
                    <Card>
                        <CardContent className="p-4">
                            <div className="aspect-[8.5/11] w-full bg-background rounded-lg flex items-center justify-center border">
                               <p className="text-muted-foreground">Resume Editor Area</p>
                            </div>
                        </CardContent>
                    </Card>
                </main>
                <aside className="lg:col-span-1">
                    <Card>
                        <CardContent className="p-4 space-y-6">
                            <div>
                               <h3 className="font-semibold text-lg mb-4">Select a Template</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {templates.map(t => (
                                        <button key={t.name} className="border-2 border-transparent hover:border-primary rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none">
                                            <div className="aspect-[400/566] w-full bg-muted rounded">
                                                <img src={t.src} alt={t.name} data-ai-hint={t.hint} className="rounded object-cover w-full h-full"/>
                                            </div>
                                            <p className="text-sm mt-1">{t.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                             <div>
                               <h3 className="font-semibold text-lg mb-4">Export</h3>
                                <Button className="w-full">
                                    <Download className="mr-2"/> Export as PDF
                                </Button>
                                <p className="text-xs text-muted-foreground mt-2 text-center">Includes a "Made with LMDpro" watermark.</p>
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
