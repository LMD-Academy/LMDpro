
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Calendar, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container py-12 sm:py-16 lg:py-20">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8 space-y-4 text-center">
            <div className="flex justify-center gap-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl animated-gradient-text">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.summary}</p>
            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <UserCircle className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
            </div>
          </header>

          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg my-12">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>

          <Separator className="my-12" />

          <footer className="text-center">
            <h3 className="font-semibold text-lg mb-2">About the Author</h3>
            <p className="text-muted-foreground text-sm">{post.authorBio}</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
