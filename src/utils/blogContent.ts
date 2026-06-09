import { BlogPost } from "@/data/blogPosts";

export const getMarkdownContent = async (slug: string, post?: BlogPost): Promise<string> => {
  try {
    // Try to fetch the markdown file for the specific slug
    const response = await fetch(`/content/blog/${slug}.md?v=${Date.now()}`, { cache: 'no-store' });
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.log(`No markdown file found for ${slug}, using fallback content`);
  }

  // Fallback content if no specific markdown file exists
  return `
# ${post?.title || "Blog Post"}

${post?.excerpt || ""}

## Introduction

Product management is an art that combines analytical thinking with creative problem-solving. In today's competitive landscape, understanding how successful products work is crucial for any aspiring or current product manager.

## Key Insights

### 1. User-Centric Approach
- Always start with user needs
- Validate assumptions through research
- Iterate based on feedback

### 2. Data-Driven Decisions
- Use analytics to guide product decisions
- Set up proper tracking and metrics
- Balance quantitative and qualitative insights

### 3. Strategic Thinking
- Align product goals with business objectives
- Think long-term while executing short-term
- Understand market dynamics

## Conclusion

Building great products requires a combination of strategic thinking, user empathy, and data-driven decision making. The key is to continuously learn and adapt based on user feedback and market changes.

---

*What are your thoughts on this approach? Share your experiences in the comments below.*
`;
};