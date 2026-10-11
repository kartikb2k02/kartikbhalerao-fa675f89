import Link from "next/link";
import { ArrowDown } from "lucide-react";

/**
 * The hero is one statement and two ways in — no wordmark, no folio strip, no
 * figures. The header already carries the name, and the lead story that
 * follows opens with its own rule, so nothing here needs to announce itself
 * twice.
 */
const LEDE = "clamp(30px, 5vw, 74px)";

export function Masthead() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24">
      <div className="max-w-[100rem] mx-auto pb-10 sm:pb-16">
        {/* `.mega-line` clips its overflow to drive the rise-in reveal, and
            `.headline` sets a 1.02 line-height tuned for all-caps. This line
            is sentence case, so the descender on "products" sits in that
            margin — hence the looser leading, set inline to beat the
            utility. */}
        <h1
          className="headline text-foreground max-w-[22ch]"
          style={{ fontSize: LEDE, lineHeight: 1.08 }}
        >
          <span className="mega-line">
            <span>I build AI products</span>
          </span>
          <span className="mega-line">
            <span style={{ animationDelay: "110ms" }}>and write down</span>
          </span>
          <span className="mega-line">
            <span style={{ animationDelay: "220ms" }}>
              what breaks<span className="text-primary">.</span>
            </span>
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-8 sm:mt-10 fade-up">
          <a
            href="#the-desk"
            className="label-mono inline-flex items-center gap-2.5 h-[46px] px-6 text-[10px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
          >
            See the work
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/blog"
            className="label-mono inline-flex items-center h-[46px] px-6 text-[10px] border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            Read the writing
          </Link>
        </div>
      </div>
    </header>
  );
}
