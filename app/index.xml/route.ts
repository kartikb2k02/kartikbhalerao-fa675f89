import { blogPosts } from "@/data/blogPosts";
import { BASE_URL, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toRfc822(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00Z`).toUTCString();
}

export function GET() {
  const feedPosts = [...publishedPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const rssItems = feedPosts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <guid>${url}</guid>
      <description>${escape(post.excerpt)}</description>
      <category>${escape(post.category)}</category>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = feedPosts.length > 0 ? toRfc822(feedPosts[0].date) : new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${BASE_URL}/</link>
    <description>Recent posts from ${SITE_NAME} on AI-first product management, strategy, and building with AI.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/index.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>
`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
