import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kartik-bhalerao",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/kartikbh6614",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@kartikbhalerao",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: "RSS",
    href: "/index.xml",
    icon: <Rss className="w-full h-full" strokeWidth={2} aria-hidden="true" />,
  },
];

export function AboutStorySection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="max-w-[100rem] mx-auto">
        <div className="rule-heavy" />

        <Reveal>
          <div className="pt-6 pb-8">
            <span className="kicker">About me</span>
            <h2 className="headline text-foreground text-[40px] sm:text-[68px] lg:text-[84px] mt-2">
              I&rsquo;m Kartik<span className="text-primary">.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={90}>
          {/* Two columns from md up — the body is short enough that a single
              measure across a 1600px page would run to an unreadable line
              length, and a magazine would set it in columns anyway. */}
          <div className="md:columns-2 md:gap-12 lg:gap-16 max-w-[90rem] [&>p]:break-inside-avoid">
            <p className="drop-cap text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
              I&rsquo;m Kartik, a Product Manager who likes getting into new
              problems and figuring things out. Over the last 3 years, I&rsquo;ve
              worked across B2B, B2C, fintech, and AI products. My work has taken
              me from market research and talking to users to building products,
              testing ideas, and figuring out what can be improved.
            </p>

            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
              I started with a technical background, so I&rsquo;ve always been
              curious about how things work behind the scenes too. Over time, I
              got more interested in why people use certain products, what
              problems they face, and what we can do to solve them. I also
              contribute to open source, including Rocket.Chat, where I got to
              learn from real product discussions and share ideas.
            </p>

            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
              I enjoy working remotely because I like having the freedom to
              explore a problem, try things out, and take ownership of the
              solution. These days, I&rsquo;m spending more time exploring AI and
              finding ways to use it to build useful things.
            </p>
          </div>
        </Reveal>

        {/* The closing line, set as a magazine sets an "out" — larger, on its
            own, above the rule rather than buried at the foot of a column. */}
        <Reveal delay={150}>
          <p className="headline text-foreground text-[22px] sm:text-[30px] lg:text-[36px] leading-[1.25] max-w-[26ch] mt-10 sm:mt-14 border-l-2 border-primary pl-6">
            I don&rsquo;t have everything figured out, and I think that&rsquo;s
            fine. I just like learning new things, working on problems that
            interest me, and seeing what comes out of it.
          </p>
        </Reveal>

        {/* Contact, carried over from the slab this section replaced */}
        <Reveal delay={200}>
          <div className="flex flex-wrap items-center gap-3 mt-10 sm:mt-14 pt-8 border-t border-border">
            <Link
              href="/contact"
              className="label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[10px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-2.5">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    title={s.label}
                    className="w-[52px] h-[52px] flex items-center justify-center border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    <span className="sr-only">{s.label}</span>
                    <span className="w-[19px] h-[19px] block">{s.icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
