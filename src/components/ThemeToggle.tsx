
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group relative overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Main toggle container */}
      <div className="relative w-16 h-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-full border-2 border-blue-300/50 dark:border-slate-500/50 backdrop-blur-sm transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
        
        {/* Sliding indicator */}
        <div className={`absolute top-0.5 w-7 h-7 bg-white dark:bg-slate-800 rounded-full shadow-md transition-all duration-500 ease-in-out border-2 border-blue-300/30 dark:border-slate-400/30 ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0.5'
        }`}>
          
          {/* Sun icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
          }`}>
            <Sun className="w-4 h-4 text-yellow-500" />
          </div>
          
          {/* Moon icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}>
            <Moon className="w-4 h-4 text-blue-400" />
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 rounded-full opacity-30">
          {/* Stars for dark mode */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse [animation-delay:0.5s]"></div>
            <div className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse [animation-delay:1s]"></div>
          </div>
          
          {/* Clouds for light mode */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1.5 left-8 w-2 h-1 bg-white/60 rounded-full"></div>
            <div className="absolute top-2.5 left-9 w-1.5 h-0.5 bg-white/40 rounded-full"></div>
            <div className="absolute bottom-1.5 left-10 w-1 h-0.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-blue-400/20 blur-md scale-150' 
          : 'bg-yellow-400/20 blur-md scale-150'
      } opacity-0 group-hover:opacity-100`}></div>

      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </div>
    </button>
  );
};
