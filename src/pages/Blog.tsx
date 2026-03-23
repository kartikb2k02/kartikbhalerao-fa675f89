import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

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
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-foreground">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-28">

        {/* ── Header ── */}
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-3">
            <span className="text-slate-900 dark:text-white">Product </span>
            <span className="animate-gradient-text">Thinking</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thoughts on product strategy, AI, and building products people love.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group relative rounded-xl border border-slate-200 dark:border-zinc-700 bg-transparent px-6 py-5 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Blue glow sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {/* Category label */}
              <p className="relative text-[11px] font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors duration-300 mb-2 capitalize">
                {post.category}
              </p>

              {/* Title */}
              <h2 className="relative font-bold text-slate-900 dark:text-white text-[15px] leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="relative text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* Footer: meta + arrow */}
              <div className="relative flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2.5 text-[11px] text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-600" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <span className="text-slate-300 dark:text-zinc-600 group-hover:text-blue-400 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 text-sm">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </main>
      <FooterSection />
    </div>
  );
};

export default Blog;
