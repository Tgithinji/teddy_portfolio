import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { selectedSystems } from "@/data/portfolio";
import { ArrowUpRight, ExternalLink, Play, CheckCircle2 } from "lucide-react";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";

export const metadata: Metadata = {
  title: "Selected Systems & Case Studies — Teddy Githinji",
  description:
    "In-depth case studies on AI intake briefing engines, e-commerce automation, internal ops tools, and high-performance backend infrastructure.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
      <Shell>
        {/* Header */}
        <div className="max-w-3xl border-b border-[color:var(--color-hairline)] pb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
            <span className="font-mono">01</span>
            <span>—</span>
            <span>Case Studies Hub</span>
          </div>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground">
            Selected Systems &amp;{" "}
            <span className="font-serif italic text-[color:var(--color-primary)]">
              Operational Case Studies.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
            Every build is evaluated by measurable business impact: hours returned to teams, sub-minute client response times, zero lead leakage, and clean software architecture.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="mt-16 space-y-24">
          {selectedSystems.map((sys) => (
            <article
              id={sys.slug}
              key={sys.id}
              className="scroll-mt-28 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 md:p-12 transition-colors hover:border-[color:var(--color-primary)]/40"
            >
              <div className="grid grid-cols-12 gap-x-8 gap-y-10">
                {/* Meta & Summary */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[color:var(--color-subtle)]">
                    <span className="text-primary font-medium">{sys.index}</span>
                    <span>/</span>
                    <span>{sys.category}</span>
                    <span>/</span>
                    <span>{sys.client}</span>
                    <span>/</span>
                    <span>{sys.year}</span>
                  </div>

                  <h2 className="mt-4 text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground">
                    {sys.title}
                  </h2>
                  <p className="mt-2 text-sm text-[color:var(--color-primary)] font-medium">
                    {sys.subtitle}
                  </p>

                  <div className="mt-8 space-y-6 text-sm text-[color:var(--color-muted-foreground)]">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono mb-2">
                        The Operational Challenge
                      </h3>
                      <p className="leading-relaxed">{sys.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono mb-2">
                        Engineering Solution
                      </h3>
                      <ul className="space-y-2">
                        {sys.solutionBullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {sys.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[color:var(--color-hairline)] bg-background/60 px-3 py-1 font-mono text-xs text-[color:var(--color-muted-foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics & Media Links */}
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Image / Carousel Showcase (Above Measurable Impact) */}
                    {sys.images && sys.images.length > 0 && (
                      <ProjectImageCarousel images={sys.images} title={sys.title} />
                    )}

                    <div className="rounded-xl border border-[color:var(--color-hairline)] bg-background/60 p-6">
                      <h3 className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono mb-4">
                        Measurable Impact
                      </h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {sys.metrics.map((m) => (
                          <div key={m.label}>
                            <dd className="text-2xl font-light text-foreground">
                              {m.value}
                            </dd>
                            <dt className="mt-1 text-[11px] uppercase tracking-wider text-[color:var(--color-subtle)]">
                              {m.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {sys.testimonial && (
                      <blockquote className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-xs italic text-[color:var(--color-foreground)] leading-relaxed">
                        "{sys.testimonial}"
                      </blockquote>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {sys.demo && (
                      <a
                        href={sys.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        Watch Video Demo
                      </a>
                    )}
                    {sys.githubUrl && (
                      <a
                        href={sys.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-background/60 px-5 py-2.5 text-xs font-medium text-foreground hover:border-primary transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Source Code Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-28 hairline-t pt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            Ready to streamline your operational workflows?
          </h2>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span>Discuss Your Build Requirement</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Shell>
    </div>
  );
}
