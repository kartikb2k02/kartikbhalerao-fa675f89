import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Globe, Linkedin } from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { Shell } from "@/components/home/Shell";
import { ExperienceTools } from "@/components/home/ExperienceTools";
import { SiteFooter } from "@/components/home/SiteFooter";
import { roles } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) {
    return pageMetadata({
      title: "Experience",
      description: "Where Kartik Bhalerao has worked and what he shipped.",
      path: "/about",
    });
  }

  return pageMetadata({
    title: `${role.title}, ${role.company}`,
    description: role.summary,
    path: `/experience/${role.slug}`,
  });
}

export default async function RoleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) notFound();

  return (
    <>
      <Nav />

      <Shell>
        <article className="space-y-6 px-4 py-6">
          <header className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
              <span className="rounded-md border border-border px-2 py-0.5 text-muted-foreground">
                {role.category}
              </span>
              <span aria-hidden="true" className="text-muted-foreground">·</span>
              <span className="tabular-nums text-muted-foreground">
                {role.start} — {role.end}
              </span>
              {role.current && (
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "hsl(var(--signal))" }}
                  />
                  Current
                </span>
              )}
            </div>

            <h1 className="text-[24px] font-semibold leading-snug tracking-tight text-foreground">
              {role.title}, {role.company}
            </h1>

            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {role.summary}
            </p>

            {role.links && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {role.links.website && (
                  <a
                    href={role.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-[14px] text-foreground transition-colors hover:bg-accent"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Website
                  </a>
                )}
                {role.links.linkedin && (
                  <a
                    href={role.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-[14px] text-foreground transition-colors hover:bg-accent"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Where the detail lives. The listing shows none of this, so
              the click has to be worth making — these are grouped the way
              details.md groups them rather than flattened into one list,
              because the grouping is itself a statement about the role. */}
          {role.highlights.map((block) => (
            <section key={block.group} className="space-y-3">
              <h2 className="text-[15px] font-medium text-foreground">
                {block.group}
              </h2>
              <ul className="flex flex-col gap-2 pl-4">
                {block.points.map((point) => (
                  <li
                    key={point}
                    className="list-outside list-disc text-[14px] leading-relaxed text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {role.lessons && role.lessons.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-[15px] font-medium text-foreground">
                What this taught me
              </h2>
              <ul className="flex flex-col gap-2 pl-4">
                {role.lessons.map((lesson) => (
                  <li
                    key={lesson}
                    className="list-outside list-disc text-[14px] leading-relaxed text-muted-foreground"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="space-y-3">
            <h2 className="text-[15px] font-medium text-foreground">Worked with</h2>
            <ExperienceTools items={role.tools} />
          </section>

          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              All experience
            </Link>
          </div>
        </article>
      </Shell>

      <SiteFooter />
    </>
  );
}
