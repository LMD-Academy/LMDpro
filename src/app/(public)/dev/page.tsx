import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitPullRequest, Code } from "lucide-react";
import Link from "next/link";

export default function DevPage() {
    return (
        <div className="container py-24 sm:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl animated-gradient-text">
                    For Developers
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                    LMDpro is an open-source project built for the community. We believe in the power of collaboration to build the future of AI-driven education.
                </p>
            </div>

            <Card className="mt-12 max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Github /> Get Involved
                    </CardTitle>
                    <CardDescription>
                        The entire LMDpro platform is open-source and available on GitHub.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                        Whether you want to deploy your own instance, contribute to the codebase, fix bugs, or suggest new features, the GitHub repository is the place to start.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="w-full" asChild>
                            <Link href="https://github.com/LMD-Academy/LMDpro.git" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2" />
                                View Repository on GitHub
                            </Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                             <Link href="https://github.com/LMD-Academy/LMDpro/pulls" target="_blank" rel="noopener noreferrer">
                                <GitPullRequest className="mr-2" />
                                View Pull Requests
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

             <Card className="mt-8 max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code /> Our Tech Stack
                    </CardTitle>
                     <CardDescription>
                        LMDpro is built with modern, powerful technologies.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><span className="font-semibold text-foreground">Next.js</span> with App Router</li>
                        <li><span className="font-semibold text-foreground">React</span> & <span className="font-semibold text-foreground">TypeScript</span></li>
                        <li><span className="font-semibold text-foreground">Genkit</span> for AI Flows & Gemini Integration</li>
                        <li><span className="font-semibold text-foreground">Tailwind CSS</span> for styling</li>
                        <li><span className="font-semibold text-foreground">ShadCN UI</span> for components</li>
                    </ul>
                </CardContent>
             </Card>
        </div>
    );
}
