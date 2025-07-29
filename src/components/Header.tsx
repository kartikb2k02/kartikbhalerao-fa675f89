
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'blog') {
      navigate('/blog');
      return;
    }
    
    if (sectionId === 'skills') {
      navigate('/skills');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTitleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/15 dark:bg-slate-900/15 backdrop-blur-3xl shadow-2xl border-b border-white/30 dark:border-white/20' 
          : 'bg-white/8 dark:bg-slate-900/8 backdrop-blur-2xl'
      }`}
    >
      {/* Enhanced multi-layer glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/15 to-white/25 dark:from-white/15 dark:via-white/8 dark:to-white/15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
      
      {/* Enhanced top border with animated shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo/Name */}
          <button
            onClick={handleTitleClick}
            className="group relative text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
            </div>
            <span className="relative">
              Kartik Bhalerao
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Enhanced Skills Button */}
            <button
              onClick={() => scrollToSection('skills')}
              className="group relative px-8 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Multi-layer glass background */}
              <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
              
              <span className="relative z-10 tracking-wide">Skills</span>
            </button>
            
            {/* Enhanced Blog Button */}
            <button
              onClick={() => scrollToSection('blog')}
              className="group relative px-8 py-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Multi-layer glass background */}
              <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
              
              <span className="relative z-10 tracking-wide">Blog</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative p-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Enhanced glass background */}
              <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden relative mt-2 pb-4">
            {/* Enhanced glass container */}
            <div className="absolute inset-0 bg-white/15 dark:bg-slate-900/15 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl"></div>
            
            {/* Enhanced gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-white/25 dark:from-white/15 dark:via-white/5 dark:to-white/15 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/15 to-transparent dark:from-white/8 rounded-t-3xl"></div>
            
            <div className="relative py-8 px-6">
              <nav className="flex flex-col space-y-3">
                {/* Enhanced Mobile Skills Button */}
                <button
                  onClick={() => scrollToSection('skills')}
                  className="group relative px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                  
                  <span className="relative z-10 tracking-wide">Skills</span>
                </button>
                
                {/* Enhanced Mobile Blog Button */}
                <button
                  onClick={() => scrollToSection('blog')}
                  className="group relative px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                  
                  <span className="relative z-10 tracking-wide">Blog</span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
