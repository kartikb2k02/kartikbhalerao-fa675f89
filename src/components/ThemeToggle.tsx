
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group"
      aria-label="Toggle theme"
    >
      {/* Toggle container matching the reference image */}
      <div className="bg-slate-800 dark:bg-slate-700 rounded-full p-1 flex items-center space-x-1 border border-slate-600 dark:border-slate-500 shadow-lg">
        
        {/* Light option */}
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-400 hover:text-slate-300'
        }`}>
          <Sun className="w-4 h-4" />
          <span className="text-sm font-medium">Light</span>
        </div>
        
        {/* Dark option */}
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-400 hover:text-slate-300'
        }`}>
          <Moon className="w-4 h-4" />
          <span className="text-sm font-medium">Dark</span>
        </div>
      </div>
    </button>
  );
};
