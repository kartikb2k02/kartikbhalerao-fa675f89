
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { blogPosts } from '@/data/blogPosts';

const skillCategories = [
  { title: "Product Strategy",      description: "Discovery, roadmaps, go-to-market"   },
  { title: "Data & Analytics",      description: "Metrics, A/B testing, KPI tracking"  },
  { title: "User Experience",       description: "Research, wireframing, usability"     },
  { title: "Technical Leadership",  description: "Agile, API design, system architecture"},
  { title: "AI Tools",              description: "OpenAI, Anthropic, Zapier, n8n"       },
  { title: "Design & Wireframing",  description: "Figma, Canva, Sketch, Miro"           },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
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

    if (sectionId === 'contact') {
      navigate('/contact');
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#EFEFEF] dark:bg-[#111111] border-b ${
        isScrolled
          ? 'border-black/10 dark:border-white/10'
          : 'border-transparent'
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <button
            onClick={handleTitleClick}
            className="text-[28px] font-bold hover:opacity-70 transition-opacity duration-200 text-black dark:text-white"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Kartik Bhalerao
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('skills')} className="text-[17px] font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-200 hover:after:w-full pb-0.5 transition-colors duration-150">Skills</button>
            <button onClick={() => scrollToSection('blog')} className="text-[17px] font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-200 hover:after:w-full pb-0.5 transition-colors duration-150">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="text-[17px] font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-200 hover:after:w-full pb-0.5 transition-colors duration-150">Contact</button>
            <ThemeToggle />
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black dark:text-white">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-black/10 dark:border-white/10">
            <nav className="flex flex-col gap-1 pt-3">
              <button onClick={() => scrollToSection('skills')} className="text-left px-2 py-2 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('blog')} className="text-left px-2 py-2 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="text-left px-2 py-2 text-[15px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
