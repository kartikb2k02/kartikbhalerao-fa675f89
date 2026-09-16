import { ArrowRight } from "lucide-react";

export function ConnectCTASection() {
  return (
    <section className="w-full bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-display leading-[1.05] mb-10" style={{ fontSize: "clamp(40px, 7vw, 84px)" }}>
          <span className="block">Let&apos;s</span>
          <span className="block">
            connect
            <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-background ml-3 align-middle" />
          </span>
        </h2>

        <a
          href="https://linkedin.com/in/kartik-bhalerao"
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono inline-flex items-center gap-2.5 px-6 py-3.5 text-[12px] sm:text-[13px] bg-background text-foreground hover:opacity-90 transition-all duration-200"
        >
          Reach me on LinkedIn
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
