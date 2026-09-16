import fs from "fs";
import path from "path";
import type { BlogPost } from "@/data/blogPosts";

export function getMarkdownContent(slug: string, post?: BlogPost): string {
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }

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
}
