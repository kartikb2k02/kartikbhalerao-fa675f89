
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl shadow-2xl border-b border-white/20 dark:border-white/10' 
          : 'bg-white/5 dark:bg-slate-900/5 backdrop-blur-xl'
      }`}
    >
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10"></div>
      
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name with enhanced glass effect */}
          <button
            onClick={handleTitleClick}
            className="group relative text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="relative">
              Kartik Bhalerao
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </span>
          </button>

          {/* Desktop Navigation with glass effects */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Skills Button */}
            <button
              onClick={() => scrollToSection('skills')}
              className="group relative px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 overflow-hidden"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <span className="relative z-10">Skills</span>
            </button>
            
            {/* Blog Button */}
            <button
              onClick={() => scrollToSection('blog')}
              className="group relative px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 overflow-hidden"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <span className="relative z-10">Blog</span>
            </button>
          </nav>

          {/* Mobile Menu Button with glass effect */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="group relative md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl overflow-hidden"
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with enhanced glass effect */}
        {isMobileMenuOpen && (
          <div className="md:hidden relative">
            {/* Glass container */}
            <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl"></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-white/10 rounded-2xl"></div>
            
            <div className="relative py-6 px-4">
              <nav className="flex flex-col space-y-4">
                {/* Mobile Skills Button */}
                <button
                  onClick={() => scrollToSection('skills')}
                  className="group relative px-6 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">Skills</span>
                </button>
                
                {/* Mobile Blog Button */}
                <button
                  onClick={() => scrollToSection('blog')}
                  className="group relative px-6 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">Blog</span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
