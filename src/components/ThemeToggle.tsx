
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group"
      aria-label="Toggle theme"
    >
      {/* Main toggle container with gradient backgrounds like the image */}
      <div className={`relative w-32 h-12 rounded-full border-2 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 border-orange-300' 
          : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-blue-400'
      }`}>
        
        {/* Text labels */}
        <div className="absolute inset-0 flex items-center justify-between px-3 text-white font-medium text-xs">
          <span className={`transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`}>
            DAY MODE
          </span>
          <span className={`transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`}>
            NIGHT MODE
          </span>
        </div>
        
        {/* Sliding indicator */}
        <div className={`absolute top-1 w-10 h-10 bg-white rounded-full shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-20' : 'translate-x-1'
        }`}>
          
          {/* Sun icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
          }`}>
            <Sun className="w-6 h-6 text-yellow-500" />
          </div>
          
          {/* Moon icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}>
            <Moon className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        {/* Sparkle effects */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-2 left-6 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 left-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse [animation-delay:0.5s]"></div>
          <div className="absolute top-3 right-12 w-0.5 h-0.5 bg-white rounded-full animate-pulse [animation-delay:1s]"></div>
        </div>

        {/* Stars for dark mode */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-2 right-6 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 right-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse [animation-delay:0.5s]"></div>
          <div className="absolute top-3 left-12 w-0.5 h-0.5 bg-white rounded-full animate-pulse [animation-delay:1s]"></div>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Switch to {theme === 'light' ? 'night' : 'day'} mode
      </div>
    </button>
  );
};
