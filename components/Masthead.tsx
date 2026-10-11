import Link from "next/link";
import { ArrowDown } from "lucide-react";

/**
 * A newspaper front page does not reprint its own title down the page — the
 * nameplate lives in the header and the folio strip, and the fold goes
 * straight to the lead story. So the hero carries no wordmark and no figures:
 * the positioning line is the headline, and the lead build follows it
 * immediately.
 */
const LEDE = "clamp(28px, 4.6vw, 68px)";

export function Masthead() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      <div className="max-w-[100rem] mx-auto">
        {/* Folio line */}
        <div className="flex items-center justify-between gap-4 pb-3">
          <span className="dateline">Pune, India</span>
          <span className="dateline hidden sm:block">
            Product management · AI products
          </span>
          <span className="dateline">Est. 2024</span>
        </div>

        <div className="rule-heavy" />

        {/* The statement that would otherwise be a wordmark */}
        <div className="pt-7 sm:pt-10 pb-8 sm:pb-12">
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
              <span style={{ animationDelay: "110ms" }}>
                and write down
              </span>
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
      </div>
    </header>
  );
}
