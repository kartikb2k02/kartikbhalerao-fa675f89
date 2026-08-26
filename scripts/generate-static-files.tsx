import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogPosts, type BlogPost } from '../src/data/blogPosts';
import { caseStudies, type CaseStudy } from '../src/data/caseStudies';

const BASE_URL = 'https://kartikbhalerao.in';
const PUBLIC_DIR = path.resolve('public');

// Only posts that actually have a live page — "coming soon" entries show in the
// listing but have no content yet, so they're excluded from OG pages, the sitemap,
// and the RSS feed.
const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

// ── OG image resolution ───────────────────────────────────────────────────────
// LinkedIn and Twitter/X reject SVG previews outright, so an SVG `image` needs a
// PNG stand-in. Most images compressed via scripts/compress-images.mjs have a
// same-name .png sibling in public/lovable-uploads — derive that instead of
// hand-maintaining a second image list per post. WebP is widely accepted by
// social crawlers today, so it's used as-is when no PNG sibling exists.
// A handful of older posts have an SVG icon with no matching PNG at all — those
// use the explicit `ogImage` override on the post itself (see BlogPost.ogImage).
const DEFAULT_OG_IMAGE = '/favicon.png';

function toOgImage(image: string, override?: string): string {
  if (override) return override;
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.endsWith('.png')) return image;

  const pngCandidate = image.replace(/\.(webp|svg)$/i, '.png');
  if (pngCandidate !== image && fs.existsSync(path.join(PUBLIC_DIR, pngCandidate))) {
    return pngCandidate;
  }
  // WebP with no PNG sibling: still a valid OG image, use it directly.
  if (image.endsWith('.webp')) return image;
  // SVG with no PNG sibling and no override: fall back rather than serve an
  // image format social crawlers will reject.
  return DEFAULT_OG_IMAGE;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectOgTags(
  html: string,
  { title, description, image, url, type = 'website' }: { title: string; description: string; image: string; url: string; type?: string }
): string {
  const t = escape(title);
  const d = escape(description);
  const i = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const u = escape(url);

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${i}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${u}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${i}" />`);
}

// Injects a rendered HTML string into the empty `<div id="root"></div>` so
// crawlers that don't execute JS (or budget-limit JS execution) still see real
// article text on first pass. React's `createRoot(...).render()` in main.tsx
// fully replaces this content on mount rather than hydrating it, so there's no
// hydration-mismatch risk for interactive visitors — they just get a brief
// flash of this static markup before the real app takes over.
function injectRootContent(html: string, contentHtml: string): string {
  return html.replace('<div id="root"></div>', `<div id="root">${contentHtml}</div>`);
}

function injectJsonLd(html: string, jsonLd: Record<string, unknown>): string {
  const script = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  return html.replace('</head>', `  ${script}\n  </head>`);
}

// ── Article body prerendering ───────────────────────────────────────────────
function renderMarkdownToHtml(markdown: string): string {
  return renderToStaticMarkup(
    React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeRaw] }, markdown)
  );
}

function readPostMarkdown(post: BlogPost): string {
  const filePath = path.join(PUBLIC_DIR, 'content', 'blog', `${post.slug}.md`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return `# ${post.title}\n\n${post.excerpt}`;
}

function renderBlogArticle(post: BlogPost): string {
  const bodyHtml = renderMarkdownToHtml(readPostMarkdown(post));
  const meta = [post.category, post.date, post.readTime].filter(Boolean).map(escape).join(' &middot; ');
  const tags = post.tags?.length
    ? `<ul>${post.tags.map((tag) => `<li>${escape(tag)}</li>`).join('')}</ul>`
    : '';

  return `<article><p>${meta}</p>${tags}${bodyHtml}</article>`;
}

function renderCaseStudyArticle(cs: CaseStudy): string {
  const section = (heading: string, body: string) =>
    body ? `<h2>${escape(heading)}</h2><p>${escape(body)}</p>` : '';
  const list = (heading: string, items: string[]) =>
    items?.length
      ? `<h2>${escape(heading)}</h2><ul>${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`
      : '';

  return `<article>
    <h1>${escape(cs.title)}</h1>
    <p>${escape(cs.subtitle)}</p>
    ${section('Overview', cs.overview)}
    ${section('Challenge', cs.challenge)}
    ${section('Solution', cs.solution)}
    ${section('Outcome', cs.outcome)}
    ${list('Key Features', cs.keyFeatures)}
    ${list('Tools', cs.tools)}
  </article>`;
}

// ── OG + content pages ───────────────────────────────────────────────────────
const distIndexHtml = fs.readFileSync('dist/index.html', 'utf-8');

// Blog posts — flat .html files so Cloudflare Pages serves /blog/slug directly as 200 (no redirect)
fs.mkdirSync('dist/blog', { recursive: true });
for (const post of publishedPosts) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  let html = injectOgTags(distIndexHtml, {
    title: `${post.title} | Kartik Bhalerao`,
    description: post.excerpt,
    image: toOgImage(post.image, post.ogImage),
    url,
    type: 'article',
  });
  html = injectRootContent(html, renderBlogArticle(post));
  html = injectJsonLd(html, {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: toOgImage(post.image, post.ogImage).startsWith('http')
      ? toOgImage(post.image, post.ogImage)
      : `${BASE_URL}${toOgImage(post.image, post.ogImage)}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Kartik Bhalerao', url: BASE_URL },
    publisher: { '@type': 'Person', name: 'Kartik Bhalerao', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  });
  fs.writeFileSync(`dist/blog/${post.slug}.html`, html);
  console.log(`✓ /blog/${post.slug}`);
}

// Case studies — flat .html files, served at /builds/:id (matches the React route)
fs.mkdirSync('dist/builds', { recursive: true });
for (const cs of caseStudies) {
  let html = injectOgTags(distIndexHtml, {
    title: `${cs.title} | Kartik Bhalerao`,
    description: cs.subtitle,
    image: toOgImage(cs.image),
    url: `${BASE_URL}/builds/${cs.id}`,
    type: 'article',
  });
  html = injectRootContent(html, renderCaseStudyArticle(cs));
  fs.writeFileSync(`dist/builds/${cs.id}.html`, html);
  console.log(`✓ /builds/${cs.id}`);
}

console.log('\n✅ OG + content pre-render complete.');

// ── Sitemap ──────────────────────────────────────────────────────────────────
// Generated from the same post/case-study lists above so it can't drift out of sync.
const staticRoutes = ['/', '/about', '/capabilities', '/builds', '/certifications', '/blog', '/contact'];

const urls = [
  ...staticRoutes.map((route) => ({ loc: `${BASE_URL}${route}` })),
  ...publishedPosts.map((post) => ({ loc: `${BASE_URL}/blog/${post.slug}`, lastmod: post.date })),
  ...caseStudies.map((cs) => ({ loc: `${BASE_URL}/builds/${cs.id}` })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${escape(u.loc)}</loc>${'lastmod' in u && u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}\n  </url>`)
  .join('\n')}
</urlset>
`;

fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log(`✅ sitemap.xml written (${urls.length} URLs)`);

// ── RSS feed ─────────────────────────────────────────────────────────────────
// Same publishedPosts list, sorted newest first. Written to /index.xml to match
// the convention most static-site generators (Hugo, etc.) use for the site feed.
function toRfc822(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00Z`).toUTCString();
}

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
  .join('\n');

const lastBuildDate = feedPosts.length > 0 ? toRfc822(feedPosts[0].date) : new Date().toUTCString();

const rss = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kartik Bhalerao</title>
    <link>${BASE_URL}/</link>
    <description>Recent posts from Kartik Bhalerao on AI-first product management, strategy, and building with AI.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/index.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>
`;

fs.writeFileSync('dist/index.xml', rss);
console.log(`✅ index.xml written (${feedPosts.length} posts)`);
