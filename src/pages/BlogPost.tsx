import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FooterSection } from "@/components/FooterSection";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const blogPosts = [
    {
      id: 1,
      title: "AI-First Product Strategy: How to Build with Intelligence at the Core",
      excerpt: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.",
      category: "strategy",
      date: "2024-06-20",
      readTime: "12 min read",
      tags: ["AI Strategy", "Product Management", "Innovation", "Future Tech"],
      image: "/lovable-uploads/8c631af4-2c1a-4cf4-91c3-debcdbe8fd5d.png",
      slug: "ai-first-product-strategy"
    },
    {
      id: 2,
      title: "The Art of Product Teardowns: Learning from Industry Giants",
      excerpt: "How analyzing products like Blinkit and Google Pay can make you a better Product Manager",
      category: "analysis",
      date: "2024-06-15",
      readTime: "8 min read",
      tags: ["Product Management", "Analysis", "Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      slug: "product-teardowns-learning-from-giants"
    },
    {
      id: 3,
      title: "Building User-Centric Fintech Products: Lessons from Gullak",
      excerpt: "Key insights from designing a savings app that users actually want to use",
      category: "design",
      date: "2024-06-10",
      readTime: "6 min read",
      tags: ["Fintech", "User Experience", "Product Design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      slug: "user-centric-fintech-gullak-lessons"
    },
    {
      id: 4,
      title: "Data-Driven Decision Making: My Experience at Decision Machine",
      excerpt: "How to balance quantitative insights with qualitative user feedback",
      category: "analytics",
      date: "2024-06-05",
      readTime: "7 min read",
      tags: ["Data Analytics", "Product Strategy", "Decision Making"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      slug: "data-driven-decision-making-experience"
    },
    {
      id: 5,
      title: "From Idea to MVP: A Product Manager's Journey",
      excerpt: "Step-by-step guide to building your first product from concept to launch",
      category: "strategy",
      date: "2024-05-28",
      readTime: "10 min read",
      tags: ["MVP", "Product Strategy", "Startup"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      slug: "idea-to-mvp-product-manager-journey"
    },
    {
      id: 6,
      title: "User Research That Actually Matters",
      excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
      category: "research",
      date: "2024-05-20",
      readTime: "9 min read",
      tags: ["User Research", "Product Management", "Insights"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      slug: "user-research-that-matters"
    },
    {
      id: 7,
      title: "Scaling Product Teams: Lessons Learned",
      excerpt: "How to maintain product quality while growing your team",
      category: "leadership",
      date: "2024-05-15",
      readTime: "12 min read",
      tags: ["Team Management", "Leadership", "Scaling"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      slug: "scaling-product-teams-lessons"
    }
  ];

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id || ""));
    if (foundPost) {
      setPost(foundPost);
      // Load markdown content - in a real app, this would fetch from a file or API
      loadMarkdownContent(foundPost.slug);
    }
  }, [id]);

  const loadMarkdownContent = async (slug: string) => {
    // Sample markdown content - in a real app, you'd fetch this from a .md file
    let content = '';
    
    if (slug === 'ai-first-product-strategy') {
      content = `
# 🧠 Introduction: Why "AI-First" Matters Now

The rise of generative AI, large language models (LLMs), and data-rich ecosystems has changed the way we build products. Gone are the days when AI was just a feature — today, it's a foundation.

Whether you're at a startup or a scaled enterprise, embracing an AI-first mindset is no longer optional — it's strategic.

## 🔍 1. What Is an AI-First Product Strategy?

> "AI-first means that intelligence is not an add-on; it's the product's brain, not just its muscle."

An AI-first strategy involves:

- **Designing products where AI is core to the user experience**
- **Starting with what data is available and what insights can be derived**
- **Building feedback loops for continuous learning**

## 🛠 2. Rethinking Product Vision: From Pain Points to Predictions

Traditional product thinking begins with a user's problem.

An AI-first strategy shifts this to:

> "What can we predict or automate that users didn't even ask for yet?"

**Traditional UX:** User applies for a loan → waits for approval.  
**AI-first UX:** App predicts eligibility, pre-approves in real time.

### Example: Grammarly

#### ✅ Traditional (Pain Point Focused)

Originally, Grammarly solved a clear pain point: people made grammar and spelling mistakes while writing emails, essays, and reports. The product focused on:

- Grammar and punctuation corrections
- Spelling fixes
- Sentence clarity

🎯 **Vision:** "Help users write mistake-free content."

#### 🔮 AI-First (Prediction-Driven)

Grammarly has since evolved into an AI-first assistant that not only fixes mistakes, but also predicts what the user intends to say and optimizes tone and clarity based on the context.

🧠 **New Vision:** "Empower clear and impactful communication before the user even writes."

**Key Predictive Features:**

- Tone prediction (e.g., "Your message sounds too harsh")
- Context-aware suggestions ("Do you want to ask for feedback here?")
- AI rewrites for intent (e.g., assertive, polite, confident)
- Real-time suggestions that anticipate user need

## 🔁 3. Build vs Integrate: Choosing Your AI Path

As part of your AI product strategy, deciding whether to build AI capabilities in-house or integrate third-party solutions is critical. 

- **Building** allows for customization, IP ownership, and long-term differentiation — but requires significant time, talent, and data
- **Integration** offers a faster go-to-market, ideal for validating value and user adoption early

A strategic approach often starts with integration for speed, while planning to build over time as the product matures and the value becomes proven.

## 🧩 4. Aligning AI with the Product Roadmap

When introducing AI, ask:

- What data do we already have?
- Where can predictions or automation improve UX?
- How will we measure accuracy and trust?

## 🔒 5. Don't Ignore Risk: Ethics, Bias & Transparency

🔑 **AI brings risks:**

- Bias in training data
- Opaque decision-making
- Over-reliance on automation

🔑 **Strategic PMs include:**

- Explainability layers (e.g., "Why did AI choose this?")
- Fallback modes if the AI fails
- Human-in-the-loop systems for high-stakes use cases

## 📈 6. Metrics That Matter in AI-First Products

Traditional product metrics (retention, MAU) still matter, but AI-first products need new lenses:

- **Model accuracy/confidence**
- **Prediction value** (Did it save time, money, effort?)
- **User trust & overrides**

## 🔄 7. Implementing a Multi-Directional Strategy

> "AI-first success comes from aligning top-down vision with bottom-up innovation."

A truly effective GenAI implementation doesn't come from one direction. You need a multi-directional strategy, where leaders set the vision, and teams experiment, learn, and optimize in real-time.

### 🧭 A Dual Approach to AI Product Strategy

#### 🔼 Top-Down Strategy

- Defines the long-term AI vision and goals
- Embeds responsible AI principles and risk mitigation from the start
- Ensures alignment with company-wide priorities and compliance

#### 🔽 Bottom-Up Strategy

- Surfaces quick wins by solving real user pain points
- Drives experimentation through rapid prototyping and feedback loops
- Unlocks innovation using insights from frontline data and teams

💡 Together, these strategies balance big-picture planning with ground-level agility — making your AI roadmap both visionary and actionable.

## 🔑 8. The Three Critical Elements of AI-First Strategy

To guide both top-down and bottom-up efforts, your AI product strategy should be rooted in three foundational areas:

### 1. 🎯 Strategic Focus
- Clarify what AI should achieve — automation, personalization, or prediction
- Decide if your goal is quick ROI or long-term market disruption

### 2. 🧪 Exploration with Guardrails
- Encourage AI experimentation through MVPs and shadow teams
- Ensure all pilots are guided by real-world evaluation metrics

### 3. 🌐 Responsible AI
- Mitigate bias, ensure transparency, and protect user privacy
- Build trust early by making responsibility a core design principle

## 🛤️ 9. AI-First Roadmap: From Strategy to Execution

Here's a sample roadmap to take your AI product from vision to value:

1. **Discovery Phase** (Weeks 1-4): Audit existing data, identify AI opportunities
2. **Experimentation Phase** (Weeks 5-12): Build MVPs, test with users
3. **Integration Phase** (Weeks 13-24): Integrate successful experiments
4. **Optimization Phase** (Ongoing): Continuously improve model performance

## 🧭 Conclusion: Evolving Your PM Mindset

To thrive in the AI age, product managers must evolve beyond traditional practices. The future demands PMs who are:

- **Fluent in AI capabilities** — understanding the fundamentals of models, prompts, and data flows
- **Strategic about ethical risks** — Actively anticipating biases, hallucinations, and compliance pitfalls
- **Data-aware at every stage** — Using data not just for validation, but as a creative partner in product development

💡 **AI-first isn't just a tech choice — it's a strategic transformation.**

It reshapes how products are imagined, built, and improved. Adopting this mindset empowers PMs to lead with intelligence, responsibility, and vision in an increasingly automated world.

---

*What's your experience with AI-first product development? Share your insights in the comments below.*
`;
    } else {
      content = `
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

## Case Study Example

Let's examine how successful products approach these challenges:

\`\`\`javascript
// Example of tracking user engagement
const trackUserEngagement = (action, metadata) => {
  analytics.track('user_engagement', {
    action,
    timestamp: Date.now(),
    ...metadata
  });
};
\`\`\`

## Conclusion

Building great products requires a combination of strategic thinking, user empathy, and data-driven decision making. The key is to continuously learn and adapt based on user feedback and market changes.

---

*What are your thoughts on this approach? Share your experiences in the comments below.*
`;
    }
    
    setMarkdownContent(content);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-blue-200/30 dark:border-blue-700/30 transition-all duration-300 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-lg">Kartik Bhalerao</span>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Product Manager</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => navigate('/')}
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg capitalize mb-2">
                  {post.category}
                </Badge>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-slate-700/30 shadow-lg">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default BlogPost;
