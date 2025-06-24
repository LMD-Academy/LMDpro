import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User } from "lucide-react";

const majors = ["Technology", "Business", "Leadership", "Creative Arts", "Data Science"];
const topics = ["Artificial Intelligence", "Web Development", "Marketing", "Project Management"];
const modules = ["Introduction to AI", "React Fundamentals", "SEO Basics", "Agile Methodologies"];

export default function LibraryPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-[calc(100vh-4rem)]">
            <aside className="border-r p-4 flex flex-col gap-6">
                <div>
                    <h2 className="text-xl font-bold tracking-tight mb-4">Library Navigator</h2>
                    <p className="text-muted-foreground text-sm">
                        Select a topic to start a conversation with the AI Research Agent.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Majors</h3>
                    <div className="flex flex-wrap gap-2">
                        {majors.map(major => <Button key={major} variant="outline" size="sm">{major}</Button>)}
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {topics.map(topic => <Button key={topic} variant="outline" size="sm">{topic}</Button>)}
                    </div>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold">Modules</h3>
                    <div className="flex flex-wrap gap-2">
                        {modules.map(module => <Button key={module} variant="outline" size="sm">{module}</Button>)}
                    </div>
                </div>
            </aside>
            <main className="flex flex-col h-full">
                <header className="p-4 border-b">
                     <h1 className="text-2xl font-bold tracking-tight">AI Academic Research Agent</h1>
                     <p className="text-muted-foreground">Topic: Introduction to Artificial Intelligence</p>
                </header>
                <div className="flex-1 p-4 overflow-y-auto">
                    <ScrollArea className="h-full">
                        <div className="space-y-6 pr-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-primary text-primary-foreground"><Bot size={20}/></div>
                                <div className="bg-muted p-3 rounded-lg max-w-lg">
                                    <p className="font-bold">AI Agent</p>
                                    <p className="text-sm">Hello! I am your AI Research Agent. How can I help you with "Introduction to Artificial Intelligence" today? You can ask for summaries, explanations, or related concepts.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-lg">
                                    <p className="font-bold">You</p>
                                    <p className="text-sm">Can you explain the difference between supervised and unsupervised learning?</p>
                                </div>
                                <div className="p-2 rounded-full bg-muted text-muted-foreground"><User size={20}/></div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
                <footer className="p-4 border-t">
                    <div className="flex gap-2">
                        <Input placeholder="Ask a follow-up question..."/>
                        <Button>Send</Button>
                    </div>
                </footer>
            </main>
        </div>
    );
}
