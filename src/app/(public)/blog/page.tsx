
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Calendar, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container py-24 sm:py-32">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl animated-gradient-text">
            The LMDpro Blog
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            Insights on AI, Leadership, and the Future of Learning from the LMDpro Team.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <CardTitle className="text-xl line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.summary}</CardDescription>
              </CardHeader>
              <CardFooter className="flex-1 flex flex-col items-start justify-end">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                      <UserCircle className="h-4 w-4" />
                      <span>{post.author}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</time>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}
