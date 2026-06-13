import Container from "@/Components/layout/Container";
import Counter from "@/Components/ui/Counter";
import GlassCard from "@/Components/ui/GlassCard";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import SkillBar from "@/Components/ui/SkillBar";
import { profile } from "@/data/profile";
import { proficiencies } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Building reliable systems{" "}
              <span className="text-gradient">behind the scenes</span>
            </>
          }
          subtitle="Passionate about scalable backend architecture, clean APIs, and well-optimized databases."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Bio */}
          <Reveal className="space-y-4">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          {/* Proficiencies */}
          <Reveal delay={0.1}>
            <GlassCard className="p-7">
              <h3 className="mb-6 text-lg font-semibold">Core Expertise</h3>
              <div className="space-y-5">
                {proficiencies.map((item) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    value={item.value}
                  />
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <GlassCard className="p-6 text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
