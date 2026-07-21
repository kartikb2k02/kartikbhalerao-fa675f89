import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { SEO } from "@/components/SEO";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const isNew = (dateStr: string) =>
  Date.now() - new Date(dateStr).getTime() < 1000 * 60 * 60 * 24 * 30;

const SpotlightCard = ({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
      }}
      onMouseLeave={() => setPos(p => ({ ...p, opacity: 0 }))}
      className={`group relative border border-black/10 dark:border-white/10 overflow-hidden flex flex-col transition-transform duration-200 ${disabled ? 'cursor-default' : 'cursor-pointer hover:-translate-y-1'}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.04) 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();

  const { hero, rest } = useMemo(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const heroPost = sorted.find(p => p.featured) ?? sorted[0];
    return { hero: heroPost, rest: sorted.filter(p => p.id !== heroPost.id) };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <SEO
        title="Blog"
        description="Essays on AI-first product strategy, prioritization, user research, and lessons from building products — written by Product Manager Kartik Bhalerao."
        path="/blog"
      />
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-28 space-y-14">

        {/* Page header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="label-mono text-[13px] text-black/50 dark:text-white/50">Writing</span>
          <h1 className="heading-display text-[42px] lg:text-[56px] text-black dark:text-white leading-none">
            Product Thinking
          </h1>
          <p className="text-[16px] text-black/42 dark:text-white/42 leading-relaxed max-w-[440px]">
            Thoughts on{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">product strategy</span>,{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">AI</span>, and building things people{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">actually love</span>.
          </p>
          <span className="label-mono text-[12px] text-black/25 dark:text-white/25 tabular-nums">
            {blogPosts.length} posts
          </span>
        </div>

        {/* Hero featured post */}
        <div
          onClick={() => navigate(`/blog/${hero.slug}`)}
          className="group relative border border-black/10 dark:border-white/10 overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        >
          {/* New Blog badge — top right */}
          {isNew(hero.date) && (
            <span className="label-mono absolute top-5 right-5 z-20 px-2.5 py-1 border border-green-500/40 bg-green-50 dark:bg-green-500/10 text-[10px] text-green-600 dark:text-green-400">
              New Blog
            </span>
          )}

          <div className="p-6 sm:p-7 flex flex-col gap-4">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="label-mono px-2.5 py-1 bg-black/6 dark:bg-white/8 text-[10px] text-black/45 dark:text-white/45">
                {hero.category === 'ai' ? 'AI' : hero.category.charAt(0).toUpperCase() + hero.category.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h2 className="heading-display text-[19px] sm:text-[22px] text-black dark:text-white leading-snug max-w-[680px] group-hover:opacity-80 transition-opacity duration-200">
              {hero.title}
            </h2>

            {/* Excerpt */}
            <p className="text-[13px] text-black/45 dark:text-white/45 leading-relaxed max-w-[580px]">
              {hero.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {hero.tags.slice(0, 4).map(tag => (
                <span key={tag} className="label-mono px-2.5 py-1 border border-black/12 dark:border-white/12 text-[11px] text-black/40 dark:text-white/40">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-black/6 dark:border-white/6">
              <div className="label-mono flex items-center gap-2 text-[11px] text-black/30 dark:text-white/30">
                <Clock className="w-3.5 h-3.5" />
                <span>{hero.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" />
                <span>{formatDate(hero.date)}</span>
              </div>
              <div className="label-mono flex items-center gap-1.5 text-[12px] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of posts */}
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((post, index) => (
            <SpotlightCard key={post.id} onClick={() => !post.comingSoon && navigate(`/blog/${post.slug}`)} disabled={post.comingSoon}>
              {/* Coming Soon badge */}
              {post.comingSoon && (
                <span className="label-mono absolute top-4 right-4 z-20 px-2.5 py-1 border border-violet-400/40 bg-violet-50 dark:bg-violet-500/10 text-[10px] text-violet-600 dark:text-violet-400">
                  Coming Soon
                </span>
              )}
              {/* New Blog badge — top right */}
              {!post.comingSoon && isNew(post.date) && (
                <span className="label-mono absolute top-4 right-4 z-20 px-2 py-1 border border-green-500/40 bg-green-50 dark:bg-green-500/10 text-[10px] text-green-600 dark:text-green-400">
                  New Blog
                </span>
              )}
              <div className={`px-6 py-5 flex flex-col flex-1 gap-3 ${post.comingSoon ? 'opacity-70' : ''}`}>

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="label-mono px-2.5 py-1 bg-black/5 dark:bg-white/6 text-[10px] text-black/45 dark:text-white/45">
                    {post.category === 'ai' ? 'AI' : post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  {!isNew(post.date) && !post.comingSoon && (
                    <span className="label-mono text-[11px] text-black/10 dark:text-white/10 tabular-nums">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-bold text-black dark:text-white text-[15px] leading-snug group-hover:opacity-75 transition-opacity duration-200 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[12.5px] text-black/40 dark:text-white/40 leading-relaxed line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="label-mono px-2 py-0.5 text-[10px] border border-black/8 dark:border-white/8 text-black/30 dark:text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-black/6 dark:bg-white/6" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="label-mono flex items-center gap-1.5 text-[10px] text-black/28 dark:text-white/28">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" />
                    <span>{post.comingSoon ? 'Coming soon' : formatDate(post.date)}</span>
                  </div>
                  {post.comingSoon ? (
                    <div className="w-6 h-6 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-black/15 dark:text-white/15" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-black/5 dark:bg-white/5 group-hover:bg-black dark:group-hover:bg-white flex items-center justify-center transition-all duration-200">
                      <ArrowRight className="w-3 h-3 text-black/35 dark:text-white/35 group-hover:text-white dark:group-hover:text-black transition-colors duration-200" />
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </main>

      <FooterSection />
    </div>
  );
};

export default Blog;
