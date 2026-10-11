export interface TimelineRow {
  when: string;
  what: string;
  where: string;
}

/**
 * The career, oldest first. Read by the About page as a chronological
 * narrative and by the homepage reversed, where the current role matters
 * more than the order it was reached in.
 */
export const TIMELINE: TimelineRow[] = [
  { when: "2022", what: "Open source contributor", where: "Rocket.Chat" },
  { when: "2023", what: "Moved into product management", where: "The switch" },
  { when: "2024", what: "Product Manager Intern", where: "Ocius · Remote" },
  {
    when: "Mid 2024",
    what: "Associate Product Manager",
    where: "Decision Machine · Pune",
  },
  {
    when: "2025",
    what: "Founding PM, consumer tech app",
    where: "Side projects for enterprise",
  },
  { when: "2026", what: "AI agents and products", where: "Now" },
];
