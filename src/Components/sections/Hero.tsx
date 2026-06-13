import Container from "@/Components/layout/Container";
import SocialLinks from "@/Components/layout/SocialLinks";
import Button from "@/Components/ui/Button";
import Greeting from "@/Components/ui/Greeting";
import Reveal from "@/Components/ui/Reveal";
import TypeWriter from "@/Components/Typing/TypeWriter";
import { profile } from "@/data/profile";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/50 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for work
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-6 text-lg text-slate-500 dark:text-slate-400">
                <Greeting />, I&apos;m
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient-animated">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
                <span className="text-primary">
                  <TypeWriter
                    data={profile.roles as unknown as string[]}
                    typingSpeed={90}
                    deletingSpeed={45}
                    pauseTime={1800}
                  />
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 lg:mx-0 dark:text-slate-400">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button href="#contact">Hire Me</Button>
                <Button href={profile.resumeUrl} external variant="outline">
                  View Resume
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-4 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,theme(colors.primary.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.primary.500))] opacity-30 blur-2xl" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 to-violet-500/40 blur-md" />
              <div className="relative overflow-hidden rounded-full border-4 border-white/80 shadow-glow-lg dark:border-white/10">
                <Image
                  src={profile.image}
                  alt={`${profile.name} — ${profile.role}`}
                  width={400}
                  height={400}
                  priority
                  className="h-64 w-64 object-cover object-top sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
