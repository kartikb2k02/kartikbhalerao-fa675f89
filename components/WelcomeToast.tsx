"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-full max-w-[320px] bg-card border border-border overflow-hidden transition-all duration-500 ease-out ${
        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-3.5 right-3.5 w-6 h-6 flex items-center justify-center text-foreground/40 hover:text-primary transition-all duration-200 z-10"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Content */}
      <div className="px-5 py-5 pr-10">
        <p className="heading-display text-[16px] tracking-tight text-foreground leading-snug">
          Welcome to Kartik&apos;s portfolio<span className="text-primary">.</span>
        </p>
      </div>
    </div>
  );
};
