import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot } from "lucide-react";

export default function HelpPage() {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight">Help & Support</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    We&apos;re here to help. Find answers to common questions or get in touch with our team.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Frequently Asked Questions</CardTitle>
                            <CardDescription>Find quick answers to common questions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How do I change my subscription plan?</AccordionTrigger>
                                    <AccordionContent>
                                        You can manage your subscription from the 'Settings' page, which is accessible from the user dropdown menu in the header. From there, navigate to the 'Subscription' tab to upgrade, downgrade, or cancel your plan.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Can I export my resume?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes! In the 'Resume Builder' page, you can export your completed resume as a PDF file. Please note that a "Made with LMDpro" watermark will be included.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                                    <AccordionContent>
                                       On the login page, click the "Forgot your password?" link. You will be prompted to enter your email address, and we will send you a link to reset your password.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                            <CardDescription>Can&apos;t find an answer? Send us a message.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help?" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Send Message</Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bot /> AI Support Assistant</CardTitle>
                            <CardDescription>Get instant help with technical, payment, or other issues.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-96 flex flex-col">
                           <div className="flex-1 rounded-lg border bg-muted p-4 text-center text-sm text-muted-foreground flex items-center justify-center">
                                Chat interface placeholder
                           </div>
                           <div className="mt-4 flex gap-2">
                               <Input placeholder="Ask a question..."/>
                               <Button>Send</Button>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
