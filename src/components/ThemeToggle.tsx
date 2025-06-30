
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
      {/* Toggle container with UI-matching background */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-1 flex items-center space-x-1 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
        
        {/* Light option */}
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-600' 
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}>
          <Sun className="w-4 h-4" />
          <span className="text-sm font-medium">Light</span>
        </div>
        
        {/* Dark option */}
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-600' 
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}>
          <Moon className="w-4 h-4" />
          <span className="text-sm font-medium">Dark</span>
        </div>
      </div>
    </button>
  );
};
