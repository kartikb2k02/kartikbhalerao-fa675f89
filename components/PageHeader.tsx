/**
 * One header shape for every interior route — left-aligned, labelled,
 * with its count or status in the margin. Keeps /about, /builds, /blog,
 * /certifications and /contact reading as the same document.
 */
export function PageHeader({
  label,
  title,
  lede,
  meta,
  container = "max-w-6xl",
}: {
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  meta?: string;
  container?: string;
}) {
  return (
    <div className={`${container} mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16`}>
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <p className="label-mono text-[10px] text-muted-foreground flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
          {label}
        </p>
        {meta && (
          <span className="data-mono text-[11px] text-muted-foreground">{meta}</span>
        )}
      </div>

      <h1
        className="heading-display text-foreground leading-[0.96] mt-7"
        style={{ fontSize: "clamp(40px, 8vw, 92px)" }}
      >
        {title}
      </h1>

      {lede && (
        <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-[1.55] max-w-2xl mt-6">
          {lede}
        </p>
      )}
    </div>
  );
}
