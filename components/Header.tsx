"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

interface HeaderProps {
  scrollProgress?: number;
}

export const Header = ({ scrollProgress }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'blog') { router.push('/blog'); return; }
    if (sectionId === 'about') { router.push('/about'); return; }
    if (sectionId === 'builds') { router.push('/builds'); return; }
    if (sectionId === 'contact') { router.push('/contact'); return; }
    const element = document.getElementById(sectionId);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }
  };

  const handleTitleClick = () => {
    router.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full h-16 flex items-center justify-between pl-[clamp(20px,6vw,56px)] pr-4 sm:pr-6 lg:pr-8">
        {/* Logo */}
        <button
          onClick={handleTitleClick}
          className="heading-display hover:opacity-70 transition-opacity duration-200 text-foreground text-[19px] tracking-tight"
        >
          Kartik Bhalerao<span className="text-primary">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <button onClick={handleTitleClick} className="label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors duration-150">Home</button>
          <button onClick={() => scrollToSection('about')} className="label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors duration-150">About</button>
          <button onClick={() => scrollToSection('builds')} className="label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors duration-150">Builds</button>
          <button onClick={() => scrollToSection('blog')} className="label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors duration-150">Blog</button>
          <button onClick={() => scrollToSection('contact')} className="label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors duration-150">Contact</button>
        </nav>

        {/* Right: Theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Scroll progress — thin accent bar under the nav */}
      {scrollProgress !== undefined && (
        <div className="h-[2px] bg-border">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-2">
            <button onClick={handleTitleClick} className="text-left px-4 py-3 label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('builds')} className="text-left px-4 py-3 label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors">Builds</button>
            <button onClick={() => scrollToSection('blog')} className="text-left px-4 py-3 label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-3 label-mono text-[13px] text-foreground/70 hover:text-primary transition-colors">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};
