
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-slate-50 dark:bg-zinc-950 ${
        isScrolled
          ? 'border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900'
          : 'border-transparent'
      }`}
    >
      
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
                  src="/lovable-uploads/profile-header.jpg"
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">

            {/* Skills */}
            <div
              className="relative"
              onMouseEnter={() => setSkillsDropdownOpen(true)}
              onMouseLeave={() => setSkillsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('skills')}
                className="group relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg transition-colors duration-150 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {/* Pill background */}
                <span className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-500/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150" />
                {/* Underline */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-blue-500 group-hover:w-3/5 transition-all duration-200" />
                <span className="relative">Skills</span>
              </button>

              {/* Dropdown */}
              {skillsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl border border-slate-200/80 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-2xl shadow-black/10 dark:shadow-black/50 z-50 overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-3.5 bg-slate-50 dark:bg-zinc-800/60 border-b border-slate-100 dark:border-zinc-700/60">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-zinc-400">Skill Areas</p>
                  </div>
                  {/* Items */}
                  <div className="py-2">
                    {skillCategories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSection('skills')}
                        className="w-full flex items-center gap-3 px-5 py-2.5 text-left group/item hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-colors duration-100"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-slate-800 dark:text-zinc-100 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors truncate">
                            {cat.title}
                          </p>
                          <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5 truncate">{cat.description}</p>
                        </div>
                        <span className="text-slate-300 dark:text-zinc-600 group-hover/item:text-slate-400 dark:group-hover/item:text-zinc-400 text-xs transition-colors">→</span>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="px-5 py-3 bg-slate-50 dark:bg-zinc-800/60 border-t border-slate-100 dark:border-zinc-700/60">
                    <button
                      onClick={() => scrollToSection('skills')}
                      className="text-[11px] font-bold text-slate-900 dark:text-white hover:opacity-70 transition-opacity tracking-wide"
                    >
                      View all skills →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <div
              className="relative"
              onMouseEnter={() => setBlogDropdownOpen(true)}
              onMouseLeave={() => setBlogDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('blog')}
                className="group relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg transition-colors duration-150 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <span className="absolute inset-0 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150" />
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-emerald-500 group-hover:w-3/5 transition-all duration-200" />
                <span className="relative">Blog</span>
              </button>

              {/* Dropdown */}
              {blogDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl border border-slate-200/80 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-2xl shadow-black/10 dark:shadow-black/50 z-50 overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-3.5 bg-slate-50 dark:bg-zinc-800/60 border-b border-slate-100 dark:border-zinc-700/60">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-zinc-400">Articles</p>
                  </div>
                  {/* Items */}
                  <div className="py-2">
                    {blogPosts.map(post => (
                      <button
                        key={post.id}
                        onClick={() => navigate(`/blog?id=${post.id}`)}
                        className="w-full flex items-center gap-3 px-5 py-2.5 text-left group/item hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-colors duration-100"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-slate-800 dark:text-zinc-100 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors line-clamp-1">
                            {post.title}
                          </p>
                          <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-0.5 capitalize">{post.category}</p>
                        </div>
                        <span className="text-slate-300 dark:text-zinc-600 group-hover/item:text-slate-400 dark:group-hover/item:text-zinc-400 text-xs transition-colors flex-shrink-0">→</span>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="px-5 py-3 bg-slate-50 dark:bg-zinc-800/60 border-t border-slate-100 dark:border-zinc-700/60">
                    <button
                      onClick={() => navigate('/blog')}
                      className="text-[11px] font-bold text-slate-900 dark:text-white hover:opacity-70 transition-opacity tracking-wide"
                    >
                      View all articles →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg transition-colors duration-150 hover:text-orange-600 dark:hover:text-orange-400"
            >
              <span className="absolute inset-0 rounded-lg bg-orange-50 dark:bg-orange-500/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150" />
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-orange-500 group-hover:w-3/5 transition-all duration-200" />
              <span className="relative">Contact</span>
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
          <div className="md:hidden mt-1 pb-4 border-t border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-zinc-950">
            <div className="py-4 px-2">
              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => scrollToSection('skills')}
                  className="group relative w-full px-4 py-3 text-sm font-medium text-left text-slate-600 dark:text-slate-300 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                >
                  <span className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  <span className="relative">Skills</span>
                </button>

                <button
                  onClick={() => scrollToSection('blog')}
                  className="group relative w-full px-4 py-3 text-sm font-medium text-left text-slate-600 dark:text-slate-300 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150"
                >
                  <span className="absolute inset-0 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  <span className="relative">Blog</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative w-full px-4 py-3 text-sm font-medium text-left text-slate-600 dark:text-slate-300 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-150"
                >
                  <span className="absolute inset-0 rounded-lg bg-orange-50 dark:bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  <span className="relative">Contact</span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
