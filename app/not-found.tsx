import type { Metadata } from "next";
import { NotFoundLogger } from "@/components/NotFoundLogger";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <NotFoundLogger />
      <div className="text-center">
        <p className="label-mono text-[13px] text-muted-foreground mb-2">Error</p>
        <h1 className="heading-display text-[56px] sm:text-[72px] leading-none mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="label-mono inline-flex items-center gap-2 px-6 py-3 text-[12px] bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
          Return to Home
        </a>
      </div>
    </div>
  );
}
