import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";

function Hero({ latestPost }: { latestPost: any }) {
  return (
    <section className="relative min-h-[80vh] mt-16 flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-950/50 dark:to-black" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-300 dark:text-gray-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>

        {/* Gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 dark:opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 dark:opacity-10" />
      </div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          {/* New badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-950/30 rounded-full">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">New</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">AI-Powered Development Insights</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-5xl mx-auto">
            The future of tech,
            <br />
            in written form
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge insights on web development, AI, and emerging technologies. 
            Stay ahead with in-depth tutorials, best practices, and industry trends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {latestPost && (
              <Link 
                href={`/posts/${latestPost.slug}`}
                className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:scale-105 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read Latest Article
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )}
            <Link 
              href="#articles"
              className="px-8 py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
            >
              Browse All Articles
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">10k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">Weekly</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <section id="articles" className="py-24 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Articles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Hand-picked stories and tutorials from our collection</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Post */}
          <div className="animate-fade-up">
            <Link href={`/posts/${featuredPost.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <CoverImage title={featuredPost.title} slug={featuredPost.slug} url={featuredPost.coverImage.url} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <Date dateString={featuredPost.date} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  {featuredPost.author && (
                    <Avatar name={featuredPost.author.name} picture={featuredPost.author.picture} />
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Posts Sidebar */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
                <article className="flex gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-all duration-200">
                  <div className="flex-shrink-0 w-24 h-full overflow-hidden rounded-lg">
                    <CoverImage title={post.title} slug={post.slug} url={post.coverImage.url} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                      <Date dateString={post.date} showIcon={false} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = await draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(4);

  return (
    <div className="min-h-screen">
      <Hero latestPost={allPosts[0]} />
      <FeaturedSection posts={allPosts} />
      {morePosts.length > 0 && (
        <div className="container mx-auto px-5 max-w-7xl py-24">
          <MoreStories morePosts={morePosts} />
        </div>
      )}
    </div>
  );
}
