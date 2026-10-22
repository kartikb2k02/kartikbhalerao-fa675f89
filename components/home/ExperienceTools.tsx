const TOOL_LOGOS: Record<string, string> = {
  Jira: "https://cdn.simpleicons.org/jira/1868DB",
  Confluence: "https://cdn.simpleicons.org/confluence/172B4D",
  Notion: "/logos/notion.svg",
  Asana: "https://cdn.simpleicons.org/asana/F06A6A",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  Typeform: "https://cdn.simpleicons.org/typeform/262627",
  Claude: "/logos/claude.svg",
  Langfuse: "/logos/langfuse.svg",
  LangChain: "https://cdn.simpleicons.org/langchain/1C3C3C",
  OpenAI: "/logos/openai.svg",
  n8n: "/logos/n8n.svg",
  Slack: "/logos/slack.png",
};

/** Branded tools used in an experience detail page. */
export function ExperienceTools({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-background/70 px-3 py-2.5 transition-colors hover:bg-secondary">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-white p-1.5 dark:bg-zinc-900">
            {TOOL_LOGOS[item] ? (
              <img
                src={TOOL_LOGOS[item]}
                alt={`${item} logo`}
                  className={`h-full w-full object-contain ${item === "OpenAI" ? "dark:invert" : ""}`}
                loading="lazy"
              />
            ) : (
              <span aria-hidden="true" className="text-[11px] font-semibold text-muted-foreground">
                {item.slice(0, 1)}
              </span>
            )}
          </span>
          <span className="text-[13px] font-medium text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}
