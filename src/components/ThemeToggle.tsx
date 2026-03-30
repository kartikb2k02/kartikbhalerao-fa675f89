
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
      className="relative h-9 w-9 rounded-xl text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-200 overflow-hidden group bg-black/5 dark:bg-white/8 hover:bg-black/10 dark:hover:bg-white/14 border border-black/8 dark:border-white/8"
    >
      <Moon className={`relative z-10 h-[17px] w-[17px] transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
      <Sun className={`absolute z-10 h-[17px] w-[17px] transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
