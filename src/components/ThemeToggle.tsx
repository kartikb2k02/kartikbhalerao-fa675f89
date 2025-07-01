
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
      {/* Toggle switch container - matching the image design */}
      <div className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-blue-200' 
          : 'bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400'
      }`}>
        
        {/* Moving circle indicator */}
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${
          theme === 'light' ? 'left-1' : 'left-9'
        }`}>
          {theme === 'light' ? (
            <Sun className="w-3 h-3 text-yellow-500" />
          ) : (
            <Moon className="w-3 h-3 text-blue-600" />
          )}
        </div>
      </div>
    </button>
  );
};
