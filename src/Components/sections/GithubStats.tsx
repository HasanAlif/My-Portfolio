"use client";

import Container from "@/Components/layout/Container";
import Button from "@/Components/ui/Button";
import GlassCard from "@/Components/ui/GlassCard";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import { githubIcon } from "@/asserts/icons/Icons";
import { profile } from "@/data/profile";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const user = profile.githubUser;

type StatCard = {
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

function buildCards(isLight: boolean): StatCard[] {
  // Brand-matched palette per theme (hex without #)
  const c = isLight
    ? { title: "4f46e5", icon: "7c3aed", text: "475569", strong: "1e293b", dim: "94a3b8", trophy: "flat" }
    : { title: "818cf8", icon: "a78bfa", text: "94a3b8", strong: "e2e8f0", dim: "64748b", trophy: "onedark" };

  return [
    {
      alt: "GitHub statistics overview",
      src: `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&count_private=true&include_all_commits=true&bg_color=00000000&title_color=${c.title}&icon_color=${c.icon}&text_color=${c.text}&ring_color=${c.title}`,
      width: 467,
      height: 195,
      className: "lg:col-span-2",
    },
    {
      alt: "Most used languages",
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&langs_count=8&bg_color=00000000&title_color=${c.title}&text_color=${c.text}`,
      width: 300,
      height: 195,
      className: "lg:col-span-1",
    },
    {
      alt: "Contribution streak",
      src: `https://streak-stats.demolab.com/?user=${user}&hide_border=true&background=00000000&ring=${c.title}&fire=${c.icon}&currStreakLabel=${c.title}&currStreakNum=${c.strong}&sideNums=${c.strong}&sideLabels=${c.text}&dates=${c.dim}&stroke=${c.dim}`,
      width: 467,
      height: 195,
      className: "lg:col-span-3",
    },
    {
      alt: "Contribution activity graph",
      src: `https://github-readme-activity-graph.vercel.app/graph?username=${user}&bg_color=00000000&hide_border=true&color=${c.text}&title_color=${c.title}&line=${c.title}&point=${c.icon}&area=true&area_color=${c.title}`,
      width: 800,
      height: 320,
      className: "lg:col-span-3",
    },
  ];
}

export default function GithubStats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cards = buildCards(resolvedTheme === "light");

  return (
    <section id="github" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity & contributions"
          subtitle="A live, auto-updating snapshot of my coding consistency, language mix, and open-source footprint."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.alt} className={card.className}>
              <GlassCard className="flex h-full min-h-[180px] items-center justify-center p-4 sm:p-6">
                {mounted ? (
                  <Image
                    key={card.src}
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    unoptimized
                    loading="lazy"
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="h-[150px] w-full animate-pulse rounded-lg bg-slate-200/50 dark:bg-white/5" />
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href={`https://github.com/${user}`} external variant="outline">
            <span className="[&_svg]:h-5 [&_svg]:w-5">{githubIcon}</span>
            View Full GitHub Profile
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
