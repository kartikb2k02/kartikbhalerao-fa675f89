import { useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const SpotlightCard = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  const handleMouseLeave = () => setPos(p => ({ ...p, opacity: 0 }));

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:border-black/16 dark:hover:border-white/16 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.055) 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Blog = () => {
  const navigate = useNavigate();

  const posts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  return (
    <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#111111] text-foreground">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-28">

        {/* Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-5">
            <span className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-black/30 dark:to-white/30" />
            <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">Writing</span>
            <span className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-black/30 dark:to-white/30" />
          </div>
          <h1 className="text-[42px] lg:text-[56px] font-black tracking-tight text-black dark:text-white leading-none">
            Product Thinking
          </h1>
          <p className="text-[17px] text-black/42 dark:text-white/42 leading-[1.9] max-w-[460px] tracking-[-0.01em]">
            Thoughts on{' '}
            <span className="text-black/85 dark:text-white/85 font-semibold italic">product strategy</span>,{' '}
            <span className="text-black/85 dark:text-white/85 font-semibold italic">AI</span>, and building products people{' '}
            <span className="text-black/85 dark:text-white/85 font-semibold italic">actually love</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((post, index) => (
            <SpotlightCard key={post.id} onClick={() => navigate(`/blog/${post.slug}`)}>

              {/* Top accent bar */}
              <div className="h-[3px] w-full bg-black/5 dark:bg-white/5 group-hover:bg-black/15 dark:group-hover:bg-white/15 transition-colors duration-300" />

              <div className="px-6 py-5 flex flex-col flex-1 gap-3">

                {/* Top row — category pill + index */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/6 text-[10px] font-bold tracking-widest uppercase text-black/45 dark:text-white/45 capitalize">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-bold text-black/12 dark:text-white/12 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bold text-black dark:text-white text-[16px] leading-snug group-hover:opacity-80 transition-opacity duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[13px] text-black/40 dark:text-white/40 leading-relaxed line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-black/6 dark:bg-white/6" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-black/30 dark:text-white/30">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-black/15 dark:bg-white/15" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-black dark:group-hover:bg-white flex items-center justify-center transition-all duration-200">
                    <span className="text-black/40 dark:text-white/40 group-hover:text-white dark:group-hover:text-black text-sm transition-colors duration-200">→</span>
                  </div>
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
