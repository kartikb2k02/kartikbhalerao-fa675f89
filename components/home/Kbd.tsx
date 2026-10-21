/** A keycap, for showing a shortcut inside a tooltip. */
export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="ml-1.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded border border-border bg-secondary px-1 font-mono text-[10px] text-muted-foreground">
      {children}
    </kbd>
  );
}
