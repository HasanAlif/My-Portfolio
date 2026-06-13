import Container from "@/Components/layout/Container";
import GlassCard from "@/Components/ui/GlassCard";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools & technologies I work with"
          subtitle="The backend toolkit I use to design, build, and ship production systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <GlassCard className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <h3 className="mb-4 text-base font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200/70 bg-white/50 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
