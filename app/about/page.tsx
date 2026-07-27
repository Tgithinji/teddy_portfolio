import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences, education, skills } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Philosophy — Teddy Githinji",
  description:
    "Software Engineer & Automation Architect based in Nairobi. Engineering software systems, AI automations, and operational infrastructure.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
      <Shell>
        {/* Header */}
        <div className="max-w-3xl border-b border-[color:var(--color-hairline)] pb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
            <span className="font-mono">03</span>
            <span>—</span>
            <span>About &amp; Philosophy</span>
          </div>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground">
            Building software that makes businesses{" "}
            <span className="font-serif italic text-[color:var(--color-primary)]">
              work cleanly.
            </span>
          </h1>
        </div>

        {/* Bio & Image Section */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Teddy.webp"
                  alt="Teddy Githinji Muraguri"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2 text-xs font-mono text-[color:var(--color-subtle)]">
                <span>TEDDY GITHINJI</span>
                <span className="text-primary font-medium">NAIROBI, KENYA</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-foreground leading-snug">
              "I view software not as decorative visual filler, but as quiet infrastructure that directly transforms how teams operate every morning."
            </h2>

            <p className="text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
              I am a Software Engineer and Automation Specialist based in Nairobi, Kenya. My work spans custom web applications, high-performance REST APIs (Python/FastAPI), workflow automation engines (n8n), and AI intake briefing systems.
            </p>

            <p className="text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
              Before building automations, I observed how operating teams lose dozens of hours each week re-typing information across disconnected tools, failing to respond to leads in time, and managing payroll on manual spreadsheets. My goal is to build software systems that quietly handle that typing—so human judgement remains in charge while manual friction disappears.
            </p>

            <div className="pt-6">
              <h3 className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono mb-4">
                Core Stack &amp; Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[color:var(--color-hairline)] bg-background/60 px-3.5 py-1.5 font-mono text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="mt-28 hairline-t pt-16 grid grid-cols-12 gap-x-8 gap-y-16">
          {/* Work History */}
          <div className="col-span-12 lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
              CAREER &amp; ROLES
            </span>
            <h2 className="mt-2 text-2xl font-light text-foreground">
              Work Experience
            </h2>

            <div className="mt-8 space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="rounded-xl border border-[color:var(--color-hairline)] bg-background/40 p-6"
                >
                  <div className="flex justify-between items-start text-xs font-mono text-[color:var(--color-subtle)]">
                    <span className="text-primary font-medium">{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-foreground">
                    {exp.title} <span className="text-[color:var(--color-subtle)] font-normal">at {exp.company}</span>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[color:var(--color-muted-foreground)] border-t border-[color:var(--color-hairline)] pt-3">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-span-12 lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="mt-2 text-2xl font-light text-foreground">
              Education &amp; Credentials
            </h2>

            <div className="mt-8 space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-xl border border-[color:var(--color-hairline)] bg-background/40 p-6"
                >
                  <div className="text-xs font-mono text-[color:var(--color-primary)]">
                    {edu.institution}
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 hairline-t pt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            Let's build software that elevates your operations.
          </h2>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Shell>
    </div>
  );
}
