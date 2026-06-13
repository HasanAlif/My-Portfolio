"use client";

import Container from "@/Components/layout/Container";
import { cn } from "@/Components/lib/utils";
import ThemeToggle from "@/Components/ui/ThemeToggle";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Blur the bar after a little scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section nearest the viewport center
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b12]/80"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Wordmark */}
          <Link
            href="#home"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet-500 text-sm font-bold text-white shadow-glow">
              {profile.initials}
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.firstName}
              <span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-700 md:hidden dark:border-white/10 dark:text-slate-200"
            >
              <div className="space-y-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-current transition-transform",
                    open && "translate-y-2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-current transition-opacity",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-current transition-transform",
                    open && "-translate-y-2 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-slate-200/60 bg-slate-50/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#0b0b12]/95"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      active === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-slate-600 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
