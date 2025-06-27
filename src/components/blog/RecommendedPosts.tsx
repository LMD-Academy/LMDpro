
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';

interface RecommendedPostsProps {
  currentSlug: string;
  count?: number;
}

export function RecommendedPosts({ currentSlug, count = 3 }: RecommendedPostsProps) {
  const recommended = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, count);

  if (recommended.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Read Next</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recommended.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <Card className="flex flex-col overflow-hidden h-full transition-shadow hover:shadow-lg dark:hover:shadow-primary/20">
                <div className="relative w-full h-48 shrink-0">
                     <Image
                        src={post.imageUrl}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={post.imageHint}
                    />
                </div>
              <div className="p-6 flex flex-col flex-1">
                <CardHeader className="p-0">
                    <div className="flex gap-2 mb-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs font-semibold text-primary tracking-wider uppercase">{tag}</span>
                        ))}
                    </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardDescription className="line-clamp-2 mt-2 text-sm flex-1">{post.summary}</CardDescription>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
