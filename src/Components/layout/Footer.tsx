import Container from "@/Components/layout/Container";
import SocialLinks from "@/Components/layout/SocialLinks";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/60 py-12 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs text-center md:text-left">
            <Link
              href="#home"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {profile.firstName}
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <SocialLinks />
        </div>

        <div className="mt-10 border-t border-slate-200/60 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
