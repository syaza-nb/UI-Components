
import type { ReactNode } from "react";
import * as styles from "./Footer.css";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  brandName?: string;
  description?: string;
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
  children?: ReactNode;
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer({
  brandName = "YourBrand",
  description = "Building better digital experiences through simple and accessible design.",
  linkGroups = defaultLinkGroups,
  copyright = `© ${new Date().getFullYear()} YourBrand. All rights reserved.`,
  children,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <h2 className={styles.brandName}>{brandName}</h2>
            <p className={styles.description}>{description}</p>
          </div>

          <nav
            className={styles.linksSection}
            aria-label="Footer navigation"
          >
            {linkGroups.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>{group.title}</h3>

                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>{copyright}</p>

          {children}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
