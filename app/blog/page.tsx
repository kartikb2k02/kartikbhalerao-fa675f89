import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { ListRow, RowList } from "@/components/home/ListRow";
import { SiteFooter } from "@/components/home/SiteFooter";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description:
    "Writing on product management, AI products, prioritisation, and teardowns of products worth studying.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Blog() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Nav />

      <Shell>
        <Section label="writing">
          <p className="text-[14px] leading-snug text-muted-foreground">
            {posts.filter((p) => !p.comingSoon).length} published.
          </p>

          <RowList>
            {posts.map((post) =>
              post.comingSoon ? (
                <ListRow
                  key={post.slug}
                  title={post.title}
                  description={`Coming soon · ${post.excerpt}`}
                  meta={formatDate(post.date)}
                />
              ) : (
                <ListRow
                  key={post.slug}
                  title={post.title}
                  href={`/blog/${post.slug}`}
                  description={post.excerpt}
                  meta={formatDate(post.date)}
                />
              )
            )}
          </RowList>
        </Section>
      </Shell>

      <SiteFooter />
    </>
  );
}
