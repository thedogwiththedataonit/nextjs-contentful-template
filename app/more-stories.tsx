import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <article className="group">
      <Link href={`/posts/${slug}`}>
        <div className="relative overflow-hidden rounded-xl mb-6 hover-lift bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
      </Link>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-secondary">
            <DateComponent dateString={date} />
          </span>
          <span className="w-1 h-1 bg-secondary/50 rounded-full" />
          <span className="text-secondary">5 min read</span>
        </div>
        
        <h3 className="text-2xl font-bold leading-tight tracking-tight">
          <Link 
            href={`/posts/${slug}`} 
            className="hover:text-accent transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        
        <p className="text-secondary leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        {author && (
          <div className="pt-4 border-t border-border">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="mb-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Latest Articles
        </h2>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Discover insights, tutorials, and thoughts on modern web development and technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {morePosts.map((post, index) => (
          <div
            key={post.slug}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
