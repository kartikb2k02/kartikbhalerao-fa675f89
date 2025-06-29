
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-slate-800/80 dark:bg-slate-700/80 backdrop-blur-sm border border-slate-600/30 dark:border-slate-500/30 rounded-full px-4 py-2 hover:bg-slate-700/80 dark:hover:bg-slate-600/80 transition-all duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-medium transition-colors ${theme === 'light' ? 'text-white' : 'text-slate-400'}`}>
          Light
        </span>
        <div className="relative w-10 h-5 bg-slate-600 dark:bg-slate-500 rounded-full transition-colors">
          <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
          }`}>
            {theme === 'dark' ? (
              <Moon className="w-3 h-3 text-slate-600 absolute top-0.5 left-0.5" />
            ) : (
              <Sun className="w-3 h-3 text-yellow-500 absolute top-0.5 left-0.5" />
            )}
          </div>
        </div>
        <span className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-400'}`}>
          Dark
        </span>
      </div>
    </button>
  );
};
