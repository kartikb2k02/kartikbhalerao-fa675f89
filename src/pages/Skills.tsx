import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Code2,
  BarChart3,
  Database,
  Globe,
  Layers,
  Cpu,
  Users,
  Lightbulb,
  PenTool,
  GitBranch,
  Terminal,
  Boxes,
  Brain,
  LineChart,
  Workflow,
  Rocket,
  Settings2,
  Figma,
  LayoutDashboard,
  Search,
} from "lucide-react";

const bgIcons = [
  { Icon: Code2,          top: "6%",  left: "3%",  size: 36, opacity: 0.07 },
  { Icon: BarChart3,      top: "12%", left: "88%", size: 44, opacity: 0.065 },
  { Icon: Database,       top: "22%", left: "15%", size: 30, opacity: 0.06 },
  { Icon: Globe,          top: "30%", left: "78%", size: 50, opacity: 0.055 },
  { Icon: Layers,         top: "42%", left: "5%",  size: 38, opacity: 0.07 },
  { Icon: Cpu,            top: "50%", left: "92%", size: 34, opacity: 0.06 },
  { Icon: Users,          top: "60%", left: "22%", size: 42, opacity: 0.065 },
  { Icon: Lightbulb,      top: "68%", left: "72%", size: 40, opacity: 0.07 },
  { Icon: PenTool,        top: "75%", left: "10%", size: 32, opacity: 0.055 },
  { Icon: GitBranch,      top: "82%", left: "85%", size: 38, opacity: 0.065 },
  { Icon: Terminal,       top: "88%", left: "40%", size: 30, opacity: 0.06 },
  { Icon: Boxes,          top: "18%", left: "50%", size: 44, opacity: 0.05 },
  { Icon: Brain,          top: "35%", left: "60%", size: 36, opacity: 0.065 },
  { Icon: LineChart,      top: "55%", left: "48%", size: 40, opacity: 0.055 },
  { Icon: Workflow,       top: "72%", left: "55%", size: 34, opacity: 0.06 },
  { Icon: Rocket,         top: "8%",  left: "62%", size: 38, opacity: 0.065 },
  { Icon: Settings2,      top: "45%", left: "33%", size: 30, opacity: 0.055 },
  { Icon: Figma,          top: "90%", left: "18%", size: 36, opacity: 0.065 },
  { Icon: LayoutDashboard,top: "25%", left: "38%", size: 32, opacity: 0.05 },
  { Icon: Search,         top: "65%", left: "88%", size: 34, opacity: 0.06 },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">

      {/* Dotted background — same as home page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Scattered skill icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {bgIcons.map(({ Icon, top, left, size, opacity }, i) => (
          <Icon
            key={i}
            style={{ top, left, opacity, width: size, height: size }}
            className="absolute text-foreground"
          />
        ))}
      </div>

      {/* Interactive Header */}
      <Header />

      {/* Main Content */}
      <div className="min-h-screen pt-20 relative z-10">
        <ScrollArea className="h-full">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <SkillsSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Skills;
