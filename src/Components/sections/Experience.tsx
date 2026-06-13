import Container from "@/Components/layout/Container";
import GlassCard from "@/Components/ui/GlassCard";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import Link from "next/link";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Deterministic "MMM YYYY" (parsed from the string, no timezone surprises)
function formatDate(value: string): string {
  if (value === "current") return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Experience & journey"
          subtitle="Roles where I've built and shipped real backend systems."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-violet-500/40 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 0.08}>
                <div
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:ml-auto md:pl-12"
                      : "md:mr-auto md:pr-12 md:text-right"
                  }`}
                >
                  {/* Dot */}
                  <span
                    className={`absolute left-[9px] top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-br from-primary to-violet-500 shadow-glow dark:border-[#0b0b12] ${
                      i % 2 === 0
                        ? "md:-left-[7px]"
                        : "md:left-auto md:-right-[7px]"
                    }`}
                  />
                  <GlassCard>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-lg font-semibold">
                        {exp.link ? (
                          <Link
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="transition-colors hover:text-primary"
                          >
                            {exp.company}
                          </Link>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <span className="text-sm text-slate-400">
                        · {exp.location}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {exp.role}
                    </p>
                    <p className="mt-1 inline-flex rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {formatDate(exp.start)} — {formatDate(exp.end)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {exp.description}
                    </p>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
