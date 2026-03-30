import { useState } from 'react';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kartik-bhalerao',
    color: 'bg-[#0A66C2] hover:bg-[#0858a8]',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kartikbh6614',
    color: 'bg-[#1a1a1a] dark:bg-[#e5e5e5] hover:opacity-80',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-white dark:text-black">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@kartikbhalerao',
    color: 'bg-[#2b2b2b] dark:bg-[#e5e5e5] hover:opacity-80',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-white dark:text-black">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
];

export const SocialDock = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-2.5">
      {/* Social buttons — staggered slide-up */}
      {socials.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.label}
          style={{
            transitionDelay: open ? `${i * 55}ms` : `${(socials.length - 1 - i) * 40}ms`,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
          }}
          className={`w-10 h-10 rounded-2xl ${s.color} flex items-center justify-center shadow-md transition-all duration-300`}
        >
          {s.icon}
        </a>
      ))}

      {/* Divider line when open */}
      <div
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'scaleY(1)' : 'scaleY(0)',
          transitionDelay: open ? '165ms' : '0ms',
        }}
        className="w-px h-5 bg-black/15 dark:bg-white/15 origin-top transition-all duration-200"
      />

      {/* Toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 select-none
          ${open
            ? 'bg-black dark:bg-white rotate-45'
            : 'bg-black dark:bg-white hover:opacity-80'
          }`}
        title="Socials"
      >
        {open ? (
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-white dark:text-black" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13"/>
          </svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        )}
      </button>
    </div>
  );
};
