
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme}
      className="relative h-11 w-11 rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 overflow-hidden group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg hover:scale-105"
    >
      {/* Enhanced glass background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Show Moon when in light mode (to indicate clicking will switch to dark) */}
      <Moon className={`relative z-10 h-5 w-5 transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
      {/* Show Sun when in dark mode (to indicate clicking will switch to light) */}
      <Sun className={`absolute z-10 h-5 w-5 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
