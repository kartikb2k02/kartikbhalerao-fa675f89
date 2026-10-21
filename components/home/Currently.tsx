import { profile } from "@/data/profile";

/**
 * What the work touches, as a row of terms.
 *
 * Not decoration: these are the words someone searching for this kind
 * of person actually types, and they sit in the HTML as text rather
 * than inside an image or a canvas.
 */
export function Currently() {
  return (
    <div className="flex flex-wrap gap-1">
      {profile.focus.map((item, i) => (
        <div key={item} className="flex items-center gap-1">
          <span className="font-mono text-[12px] text-secondary-foreground opacity-70 transition-opacity hover:opacity-100">
            {item}
          </span>
          {i !== profile.focus.length - 1 && (
            <span aria-hidden="true" className="text-[12px] text-secondary-foreground opacity-50">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
