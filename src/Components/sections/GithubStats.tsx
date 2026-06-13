"use client";

import Container from "@/Components/layout/Container";
import GlassCard from "@/Components/ui/GlassCard";
import SectionHeading from "@/Components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GithubStats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const t = resolvedTheme === "light" ? "default" : "transparent";
  const user = profile.githubUser;

  const cards = [
    {
      alt: "GitHub Stats",
      src: `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=${t}&hide_border=true&count_private=true&title_color=6366f1&icon_color=8b5cf6`,
    },
    {
      alt: "Top Languages",
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=${t}&hide_border=true&title_color=6366f1`,
    },
  ];

  return (
    <section id="github" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Activity"
          title="GitHub at a glance"
          subtitle="A live snapshot of my open-source activity and most-used languages."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <GlassCard
              key={card.alt}
              className="flex min-h-[195px] items-center justify-center"
            >
              {mounted ? (
                <Image
                  key={card.src}
                  src={card.src}
                  alt={card.alt}
                  width={500}
                  height={195}
                  unoptimized
                  className="h-auto w-full"
                />
              ) : (
                <div className="h-[160px] w-full animate-pulse rounded-lg bg-slate-200/50 dark:bg-white/5" />
              )}
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
