import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { BASE_URL, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

// Following the llmstxt.org convention: a plain-markdown index that AI answer
// engines (ChatGPT, Perplexity, Claude, Gemini) can read directly instead of
// having to render the JS app, so they can find and cite the right page.
export function GET() {
  const blogLines = publishedPosts
    .map((post) => `- [${post.title}](${BASE_URL}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const caseStudyLines = caseStudies
    .map((cs) => `- [${cs.title}](${BASE_URL}/builds/${cs.id}): ${cs.subtitle}`)
    .join("\n");

  const llmsTxt = `# ${SITE_NAME}

> Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies.

## About

- [About](${BASE_URL}/about): Background, experience, and skills.
- [Contact](${BASE_URL}/contact): Get in touch.

## Blog

Writing on AI-first product strategy, product management frameworks, and building AI-powered tools.

${blogLines}

## Case Studies

Applied product work: PRDs, product analyses, and AI-built tools.

${caseStudyLines}
`;

  return new Response(llmsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
