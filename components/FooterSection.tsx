export const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="heading-display text-[17px] text-foreground">
            Kartik Bhalerao<span className="text-primary">.</span>
          </p>
          <p className="data-mono text-[11px] text-muted-foreground/70">
            © 2026 Kartik Bhalerao
          </p>
        </div>
      </div>
    </footer>
  );
};
