import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { Mail, Linkedin, ArrowUpRight, Rocket, BarChart2, Users, Lightbulb } from "lucide-react";

const topics = [
  { label: "AI Products", icon: Rocket },
  { label: "PM Strategy", icon: BarChart2 },
  { label: "User Research", icon: Users },
  { label: "Product Ideas", icon: Lightbulb },
];

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#EFEFEF] dark:bg-[#111111] overflow-hidden">

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-start">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">

              {/* Profile — horizontal */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div
                    className="w-[60px] h-[60px] rounded-2xl bg-black dark:bg-white flex items-center justify-center shadow-lg"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    <span className="text-[20px] font-black text-white dark:text-black tracking-tight">KB</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#EFEFEF] dark:bg-[#111111]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                  </span>
                </div>
                <div>
                  <h2
                    className="text-[18px] font-black text-black dark:text-white leading-tight tracking-tight"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    Kartik Bhalerao
                  </h2>
                  <p className="text-[12px] text-black/45 dark:text-white/45 font-medium mt-0.5">Product Manager · Builder</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Available · Replies in &lt;24h</span>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div>
                <h1
                  className="text-[42px] sm:text-[50px] font-black leading-[0.95] tracking-tight"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  <span className="text-black dark:text-white">Let's build</span><br />
                  <span className="text-black/20 dark:text-white/20">something</span><br />
                  <span className="text-black/20 dark:text-white/20">great.</span>
                </h1>
                <p className="text-[13px] text-black/45 dark:text-white/45 leading-[1.75] mt-4 max-w-[260px]">
                  Project, idea, or just want to talk{" "}
                  <span className="text-black/75 dark:text-white/75 font-semibold italic">product</span>?
                  I'm always up for it.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/8 dark:bg-white/8" />

              {/* Topics */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-black/30 dark:text-white/30">
                  Let's discuss
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-black/8 dark:border-white/8 hover:border-black/16 dark:hover:border-white/16 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-black/8 dark:group-hover:bg-white/12 transition-colors duration-200">
                        <Icon size={12} className="text-black/50 dark:text-white/50" />
                      </div>
                      <span className="text-[12px] font-medium text-black/60 dark:text-white/60">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/8 dark:bg-white/8" />

              {/* Reach me */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-black/30 dark:text-white/30">
                  Reach me directly
                </span>

                <a
                  href="mailto:kartikbhalerao@gmail.com"
                  className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white dark:bg-white/[0.04] border border-black/8 dark:border-white/8 hover:border-black/18 dark:hover:border-white/18 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-black/8 dark:group-hover:bg-white/12 transition-colors duration-200">
                      <Mail size={14} className="text-black/55 dark:text-white/55" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-black dark:text-white">Email</p>
                      <p className="text-[10px] text-black/38 dark:text-white/38">kartikbhalerao@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-black/18 dark:text-white/18 group-hover:text-black/45 dark:group-hover:text-white/45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>

                <a
                  href="https://linkedin.com/in/kartik-bhalerao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white dark:bg-white/[0.04] border border-black/8 dark:border-white/8 hover:border-[#0A66C2]/25 hover:bg-[#0A66C2]/[0.02] dark:hover:bg-[#0A66C2]/[0.07] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2]/10 transition-colors duration-200">
                      <Linkedin size={14} className="text-black/55 dark:text-white/55 group-hover:text-[#0A66C2] transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-black dark:text-white group-hover:text-[#0A66C2] transition-colors duration-200">LinkedIn</p>
                      <p className="text-[10px] text-black/38 dark:text-white/38">kartik-bhalerao</p>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-black/18 dark:text-white/18 group-hover:text-[#0A66C2]/45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              </div>

            </div>

            {/* ── RIGHT ── */}
            <div className="flex flex-col gap-4">
              <ContactForm />

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-black/8 dark:bg-white/8" />
                <span className="text-[11px] font-medium text-black/28 dark:text-white/28 tracking-wide">or book a call</span>
                <div className="h-px flex-1 bg-black/8 dark:bg-white/8" />
              </div>

              <CalComBooking calUsername="kartik-bhalerao-qqae1f" eventType="secret" />
            </div>

          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
