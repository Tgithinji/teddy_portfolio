"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Selected Systems", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-[color:var(--color-hairline)] bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 text-sm group">
            <span className="status-dot" aria-hidden />
            <span className="font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
              Teddy Githinji
            </span>
            <span className="hidden sm:inline text-[color:var(--color-subtle)]">
              — Software & Systems
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 text-sm text-[color:var(--color-muted-foreground)] md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "transition-colors hover:text-foreground",
                    isActive ? "text-foreground font-medium" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Availability & CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 text-sm text-foreground"
            >
              <span className="rounded-full border border-[color:var(--color-border)] bg-card/40 px-3.5 py-1.5 transition-colors group-hover:border-primary group-hover:text-primary">
                Start a project
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[color:var(--color-hairline)] bg-background/95 backdrop-blur-2xl px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[color:var(--color-muted-foreground)] transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
