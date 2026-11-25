
import type { ReactNode } from "react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";

import {
  header,
  container,
  brand,
  desktopNavigation,
  navigationList,
  navigationLink,
  activeLink,
  ctaButton,
  mobileActions,
  menuButton,
  overlay,
  mobileMenu,
  mobileMenuHeader,
  mobileTitle,
  closeButton,
  mobileNavigation,
  mobileNavigationLink,
  mobileCta,
} from "./Header.css";

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  brandName?: string;
  logo?: ReactNode;
  navItems?: HeaderNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function Header({
  brandName = "Brand",
  logo,
  navItems = [],
  ctaLabel,
  ctaHref = "#",
  className,
}: HeaderProps) {
  const headerClassName = [header, className]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <div className={container}>
        {/* Brand */}
        <a href="/" className={brand}>
          {logo || brandName}
        </a>

        {/* Desktop Navigation */}
        <div className={desktopNavigation}>
          <NavigationMenu.Root>
            <NavigationMenu.List className={navigationList}>
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link
                    href={item.href}
                    className={[
                      navigationLink,
                      item.active ? activeLink : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {ctaLabel && (
            <a href={ctaHref} className={ctaButton}>
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className={mobileActions}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className={menuButton}
                aria-label="Open navigation menu"
              >
                ☰
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className={overlay} />

              <Dialog.Content className={mobileMenu}>
                <div className={mobileMenuHeader}>
                  <Dialog.Title className={mobileTitle}>
                    Navigation
                  </Dialog.Title>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className={closeButton}
                      aria-label="Close navigation menu"
                    >
                      ×
                    </button>
                  </Dialog.Close>
                </div>

                <nav className={mobileNavigation}>
                  {navItems.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <a
                        href={item.href}
                        className={mobileNavigationLink}
                        aria-current={
                          item.active ? "page" : undefined
                        }
                      >
                        {item.label}
                      </a>
                    </Dialog.Close>
                  ))}

                  {ctaLabel && (
                    <Dialog.Close asChild>
                      <a
                        href={ctaHref}
                        className={`${ctaButton} ${mobileCta}`}
                      >
                        {ctaLabel}
                      </a>
                    </Dialog.Close>
                  )}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
