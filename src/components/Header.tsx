
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

  const navItems = [
    { label: 'Skills', id: 'skills' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-200/20 dark:border-blue-700/20' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name with KB symbol from footer */}
          <button
            onClick={handleTitleClick}
            className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <img
                src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                alt="Kartik Bhalerao"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            Kartik Bhalerao
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Skills Button - Box-less with hover effects */}
            <button
              onClick={() => scrollToSection('skills')}
              className="inline-flex items-center justify-center px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Skills
            </button>
            
            {/* Blog Button - Box-less with same hover effects */}
            <button
              onClick={() => scrollToSection('blog')}
              className="inline-flex items-center justify-center px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Blog
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-200/20 dark:border-blue-700/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Skills Button - Box-less with hover effects */}
              <button
                onClick={() => scrollToSection('skills')}
                className="mx-4 inline-flex items-center justify-center px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Skills
              </button>
              
              {/* Mobile Blog Button - Box-less with same hover effects */}
              <button
                onClick={() => scrollToSection('blog')}
                className="mx-4 inline-flex items-center justify-center px-6 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Blog
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
