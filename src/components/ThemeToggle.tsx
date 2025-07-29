
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative h-10 w-10 rounded-2xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 overflow-hidden group"
        >
          {/* Glass background effect */}
          <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <Sun className="relative z-10 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute z-10 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-white/98 dark:bg-slate-800/98 backdrop-blur-xl border border-slate-200/60 dark:border-slate-600/60 shadow-xl dark:shadow-2xl"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`${theme === "light" ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"} cursor-pointer hover:bg-blue-50/80 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`${theme === "dark" ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"} cursor-pointer hover:bg-blue-50/80 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`${theme === "system" ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"} cursor-pointer hover:bg-blue-50/80 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
