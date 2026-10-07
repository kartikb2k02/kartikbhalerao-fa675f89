"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { ArrowUpRight, CornerDownLeft, X } from "lucide-react";
import { ask, SUGGESTIONS, type AskAnswer, type AskItem } from "@/lib/ask";

/* ──────────────────────────── context ──────────────────────────────── */

interface AskContextValue {
  open: (prefill?: string) => void;
}

const AskContext = createContext<AskContextValue>({ open: () => {} });

export const useAsk = () => useContext(AskContext);

/* ──────────────────────────── streaming ────────────────────────────── */

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Phase = "idle" | "thinking" | "streaming" | "done";

/**
 * Reveals an answer the way a model would hand it over — a beat of latency,
 * then text character by character, then the structured blocks. Purely
 * presentational; the answer is already resolved before this runs.
 */
export function useRevealedAnswer(answer: AskAnswer | null) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [revealed, setRevealed] = useState(0);
  const [typed, setTyped] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!answer) {
      setPhase("idle");
      setRevealed(0);
      setTyped({});
      return;
    }

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setTyped(
        Object.fromEntries(
          answer.blocks.map((b, i) => [i, b.kind === "text" ? b.text : ""])
        )
      );
      setRevealed(answer.blocks.length);
      setPhase("done");
      return;
    }

    let cancelled = false;
    setPhase("thinking");
    setRevealed(0);
    setTyped({});

    (async () => {
      await wait(240);
      if (cancelled) return;
      setPhase("streaming");

      for (let i = 0; i < answer.blocks.length; i++) {
        const block = answer.blocks[i];

        if (block.kind === "text") {
          for (let c = 1; c <= block.text.length; c += 2) {
            if (cancelled) return;
            setTyped((prev) => ({ ...prev, [i]: block.text.slice(0, c) }));
            await wait(7);
          }
          if (cancelled) return;
          setTyped((prev) => ({ ...prev, [i]: block.text }));
        } else {
          await wait(140);
        }

        if (cancelled) return;
        setRevealed(i + 1);
      }

      if (!cancelled) setPhase("done");
    })();

    return () => {
      cancelled = true;
    };
  }, [answer]);

  return { phase, revealed, typed };
}

/* ───────────────────────────── pieces ──────────────────────────────── */

function ItemLink({ item, onNavigate }: { item: AskItem; onNavigate: () => void }) {
  const external = item.href?.startsWith("http");

  const body = (
    <>
      <span className="flex items-start gap-2">
        <span className="text-[15px] font-medium text-foreground leading-snug">
          {item.term}
        </span>
        {item.href && (
          <ArrowUpRight className="w-3.5 h-3.5 mt-[3px] shrink-0 text-muted-foreground group-hover/item:text-primary transition-colors" />
        )}
      </span>
      {item.detail && (
        <span className="block text-[13.5px] text-muted-foreground leading-relaxed mt-1">
          {item.detail}
        </span>
      )}
    </>
  );

  if (!item.href) {
    return <div className="py-3 border-t border-border">{body}</div>;
  }

  const className =
    "group/item block py-3 border-t border-border hover:bg-primary/[0.04] -mx-3 px-3 transition-colors";

  return external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {body}
    </Link>
  );
}

/* ───────────────────────────── console ─────────────────────────────── */

function Console({
  onClose,
  initialQuery = "",
}: {
  onClose: () => void;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [answer, setAnswer] = useState<AskAnswer | null>(null);
  const [asked, setAsked] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const { phase, revealed, typed } = useRevealedAnswer(answer);

  const submit = useCallback((raw: string) => {
    const q = raw.trim();
    if (!q) return;
    setAsked(q);
    setQuery(q);
    setAnswer(ask(q));
  }, []);

  // A question typed in the hero arrives already written — answer it straight away.
  useEffect(() => {
    inputRef.current?.focus();
    if (initialQuery.trim()) submit(initialQuery);
  }, [initialQuery, submit]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [revealed, typed]);

  const reset = () => {
    setAnswer(null);
    setAsked("");
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col max-h-[min(80vh,640px)]">
      {/* Prompt line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
        className="flex items-center gap-3 px-4 sm:px-5 h-14 border-b border-border shrink-0"
      >
        <span className="label-mono text-[11px] text-primary shrink-0">Ask</span>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="what have you built?"
          autoComplete="off"
          spellCheck={false}
          className="flex-1 min-w-0 bg-transparent border-0 outline-none text-[16px] text-foreground placeholder:text-muted-foreground/70"
        />
        {query && (
          <button
            type="submit"
            aria-label="Ask"
            className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </form>

      {/* Scan bar while resolving */}
      <div className="h-[2px] shrink-0 overflow-hidden bg-transparent">
        {phase === "thinking" && (
          <div className="h-full w-1/4 bg-primary animate-scan" />
        )}
      </div>

      <div ref={bodyRef} className="overflow-y-auto overscroll-contain px-4 sm:px-5 py-5">
        {!answer ? (
          /* Resting state — the questions worth asking */
          <div>
            <p className="label-mono text-[10px] text-muted-foreground mb-3">Try</p>
            <div className="flex flex-col">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => submit(s)}
                  className="group/item text-left py-2.5 border-t border-border hover:bg-primary/[0.04] -mx-3 px-3 transition-colors"
                >
                  <span className="text-[15px] text-foreground">{s}</span>
                </button>
              ))}
            </div>
            <p className="text-[12px] text-muted-foreground leading-relaxed mt-5">
              Answers come from this site only — the work, the writing, the numbers.
              Nothing is made up.
            </p>
          </div>
        ) : (
          <div>
            {/* Echoed question */}
            <p className="data-mono text-[12px] text-muted-foreground mb-5">
              <span className="text-primary">&gt;</span> {asked}
            </p>

            {answer.blocks.map((block, i) => {
              if (i > revealed) return null;
              const isCurrent = i === revealed && phase !== "done";

              if (block.kind === "text") {
                const shown = typed[i] ?? "";
                if (!shown && !isCurrent) return null;
                return (
                  <p
                    key={i}
                    className="text-[15.5px] text-foreground/85 leading-[1.65] mb-4"
                  >
                    {shown}
                    {isCurrent && shown.length < block.text.length && (
                      <span className="caret ml-0.5" />
                    )}
                  </p>
                );
              }

              if (i >= revealed) return null;

              if (block.kind === "metrics") {
                return (
                  <div
                    key={i}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border mb-5 animate-rise"
                  >
                    {block.metrics.map((m) => (
                      <div key={m.label} className="bg-background p-3.5">
                        <p className="heading-display text-[26px] text-primary leading-none">
                          {m.value}
                        </p>
                        <p className="text-[12px] text-muted-foreground leading-snug mt-2">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div key={i} className="mb-5 animate-rise">
                  {block.items.map((item) => (
                    <ItemLink key={item.term} item={item} onNavigate={onClose} />
                  ))}
                  <div className="border-t border-border" />
                </div>
              );
            })}

            {/* Sources + reset */}
            {phase === "done" && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 mt-1 border-t border-border animate-rise">
                <span className="label-mono text-[10px] text-muted-foreground">
                  {answer.approximate ? "Nearest" : "Source"}
                </span>
                {answer.sources.map((s) => {
                  const external = s.href.startsWith("http");
                  return external ? (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="data-mono text-[12px] text-foreground hover:text-primary underline underline-offset-2 decoration-border transition-colors"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={onClose}
                      className="data-mono text-[12px] text-foreground hover:text-primary underline underline-offset-2 decoration-border transition-colors"
                    >
                      {s.label}
                    </Link>
                  );
                })}
                <button
                  onClick={reset}
                  className="label-mono text-[10px] text-muted-foreground hover:text-primary transition-colors ml-auto"
                >
                  Ask again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────── provider ─────────────────────────────── */

export function AskProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [seed, setSeed] = useState(0);
  const [prefill, setPrefill] = useState("");

  const open = useCallback((q = "") => {
    setPrefill(q);
    setSeed((s) => s + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  // ⌘K / Ctrl+K from anywhere, Esc to dismiss.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPrefill("");
        setSeed((s) => s + 1);
        setIsOpen((v) => !v);
        return;
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock the page behind the sheet.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <AskContext.Provider value={value}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            onClick={close}
            className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Ask about Kartik's work"
            className="relative mx-auto mt-[10vh] w-[calc(100%-2rem)] max-w-[620px] bg-card border border-border shadow-2xl animate-sheet-in"
          >
            <Console key={seed} onClose={close} initialQuery={prefill} />
          </div>
        </div>
      )}
    </AskContext.Provider>
  );
}
