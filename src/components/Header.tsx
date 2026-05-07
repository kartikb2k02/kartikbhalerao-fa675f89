
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'blog') { navigate('/blog'); return; }
    if (sectionId === 'skills') { navigate('/capabilities'); return; }
    if (sectionId === 'contact') { navigate('/contact'); return; }
    const element = document.getElementById(sectionId);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }
  };

  const handleTitleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating pill */}
      <div className="glass-pill w-full max-w-5xl rounded-2xl px-6 py-0 flex items-center justify-between h-[64px]">

        {/* Logo */}
        <button
          onClick={handleTitleClick}
          className="hover:opacity-70 transition-opacity duration-200 text-black dark:text-white"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <span className="text-[22px] font-extrabold tracking-tight">Kartik Bhalerao</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={handleTitleClick} className="text-[15px] font-medium text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors duration-150">Home</button>
          <button onClick={() => scrollToSection('skills')} className="text-[15px] font-medium text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors duration-150">Capabilities</button>
          <button onClick={() => scrollToSection('blog')} className="text-[15px] font-medium text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors duration-150">Blog</button>
          <button onClick={() => scrollToSection('contact')} className="text-[15px] font-medium text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors duration-150">Contact</button>
        </nav>

        {/* Right: Theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black dark:text-white">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="glass-card absolute top-[72px] left-4 right-4 rounded-2xl p-4">
          <nav className="flex flex-col gap-1">
            <button onClick={handleTitleClick} className="text-left px-3 py-2.5 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-black/5">Home</button>
            <button onClick={() => scrollToSection('skills')} className="text-left px-3 py-2.5 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-black/5">Capabilities</button>
            <button onClick={() => scrollToSection('blog')} className="text-left px-3 py-2.5 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-black/5">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="text-left px-3 py-2.5 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-black/5">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};
