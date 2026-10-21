import { practice } from "@/data/profile";

/**
 * How the work gets done, as a numbered sequence.
 *
 * Numbered rather than bulleted because the five stages are an order,
 * not a set — discovery precedes prioritisation precedes delivery. The
 * rail down the left makes that visible without a word of explanation.
 *
 * Each stage ends on what it produces, which is the half a hiring
 * manager can picture receiving.
 */
export function Practice() {
  return (
    <ol className="group/list">
      {practice.map((item, i) => (
        <li
          key={item.stage}
          className="relative flex gap-4 pb-7 opacity-100 transition-opacity duration-150 last:pb-0 group-hover/list:opacity-30 hover:!opacity-100"
        >
          {/* The rail, drawn between the markers rather than through
              them, so it reads as a connection and not a strikethrough. */}
          {i !== practice.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[13px] top-7 bottom-1 w-px bg-border"
            />
          )}

          <span
            aria-hidden="true"
            className="relative z-[1] flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-border bg-background font-mono text-[11px] tabular-nums text-muted-foreground"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
            <h3 className="text-[15px] font-medium leading-snug text-foreground">
              {item.stage}
            </h3>
            <p className="max-w-[66ch] text-[14px] leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            <p className="font-mono text-[12px] leading-relaxed text-secondary-foreground opacity-70">
              {item.outputs}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
