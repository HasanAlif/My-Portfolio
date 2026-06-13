import Container from "@/Components/layout/Container";
import GlassCard from "@/Components/ui/GlassCard";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import { githubIcon, LiveIcon } from "@/asserts/icons/Icons";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="A selection of backend systems — scalable APIs, real-time features, and secure auth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <GlassCard className="group flex h-full flex-col overflow-hidden !p-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  {project.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-slate-200/60 pt-4 dark:border-white/10">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 [&_svg]:h-4 [&_svg]:w-4"
                      >
                        {LiveIcon} Live
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 [&_svg]:h-4 [&_svg]:w-4"
                      >
                        {githubIcon} Code
                      </Link>
                    )}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
