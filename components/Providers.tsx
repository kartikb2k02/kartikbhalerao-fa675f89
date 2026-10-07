"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AskProvider } from "@/components/AskConsole";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full">
        <p className="label-mono text-[11px] text-primary mb-3">Error</p>
        <h2 className="heading-display text-[28px] text-foreground mb-4">
          Something broke.
        </h2>
        <pre className="data-mono text-[12px] text-muted-foreground bg-muted border border-border p-4 overflow-auto mb-6">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="label-mono px-5 py-3 text-[11px] bg-foreground text-background hover:bg-primary transition-colors"
        >
          Reload
        </button>
      </div>
    </div>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="vite-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AskProvider>{children}</AskProvider>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
