"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAsk } from "@/components/AskConsole";

interface HeaderProps {
  scrollProgress?: number;
}

const NAV = [
  { label: "About", href: "/about" },
  { label: "Builds", href: "/builds" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Header = ({ scrollProgress }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);
  const pathname = usePathname();
  const { open } = useAsk();

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Name */}
        <Link
          href="/"
          className="heading-display text-[17px] text-foreground hover:text-primary transition-colors duration-200 shrink-0"
        >
          Kartik Bhalerao<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`label-mono text-[11px] transition-colors duration-150 ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ask trigger — the console is the one new thing in the nav */}
          <button
            onClick={() => open()}
            className="group flex items-center gap-2 h-8 pl-3 pr-2 border border-border hover:border-primary/50 transition-colors"
            aria-label="Ask about Kartik's work"
          >
            <span className="label-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
              Ask
            </span>
            <kbd className="data-mono hidden sm:block text-[10px] text-muted-foreground/70 border border-border px-1 leading-[15px]">
              {isMac ? "⌘K" : "^K"}
            </kbd>
          </button>

          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Reading progress, where a page passes one in */}
      {scrollProgress !== undefined && (
        <div className="h-[2px] bg-border">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-baseline gap-4 px-5 py-4 border-b border-border last:border-b-0"
            >
              <span className="data-mono text-[11px] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`label-mono text-[12px] ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
