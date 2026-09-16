import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Builds", href: "/builds" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const footerSocials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kartik-bhalerao" },
  { label: "GitHub", href: "https://github.com/kartikbh6614" },
  { label: "Medium", href: "https://medium.com/@kartikbhalerao" },
  { label: "RSS", href: "/index.xml" },
];

export const FooterSection = () => {
  return (
    <footer className="bg-background border-t-[3px] border-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <p className="label-mono text-[12px] text-muted-foreground">
            &copy; 2026 Kartik Bhalerao
          </p>

          <nav className="label-mono flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            {footerSocials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
