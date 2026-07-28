"use client";

import Link from "next/link";
import Image from "next/image";
import { selectedSystems, services } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { ArrowUpRight, CheckCircle2, Clock, Cpu, ShieldCheck, Zap } from "lucide-react";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
      <span className="font-mono">{index}</span>
      <span className="h-px w-8 bg-[color:var(--color-hairline)]" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const {
    isLoading,
    formData,
    formErrors,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const featuredSystems = selectedSystems.filter((sys) => sys.featured);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* -------------------------------------------------------------------------- */}
      {/*  01 — HERO                                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10 grid-precision opacity-60"
          aria-hidden
        />
        <Shell>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-2">
              <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)] md:mb-0">
                <span className="font-mono">01</span>
                <span>—</span>
                <span>Headquarters</span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-10">
              <h1 className="rise text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.03em] text-foreground">
                Most businesses don't need more software.{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  They need systems that actually fit the way they work.
                </span>
              </h1>

              <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
                <p className="rise col-span-12 max-w-[54ch] text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:col-span-7">
                  I design and build modern websites, AI automations, and internal software that remove friction, reduce manual work, and help businesses operate more efficiently.
                </p>

                <div className="rise col-span-12 md:col-span-5 md:col-start-8">
                  <dl className="space-y-3.5 text-sm">
                    <div className="flex justify-between hairline-b pb-2.5">
                      <dt className="text-[color:var(--color-subtle)]">Role</dt>
                      <dd className="font-medium text-foreground">Software &amp; Systems Engineer</dd>
                    </div>
                    <div className="flex justify-between hairline-b pb-2.5">
                      <dt className="text-[color:var(--color-subtle)]">Based</dt>
                      <dd className="text-foreground">Nairobi, Kenya · Remote</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  SYSTEM STATUS DASHBOARD BLOCK                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t hairline-b bg-[color:var(--color-card)]/40 py-12">
        <Shell>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
                <span className="status-dot" aria-hidden />
                <span className="font-mono text-foreground font-medium">SYSTEM STATUS · ONLINE</span>
              </div>
              <p className="mt-2 text-xs text-[color:var(--color-muted-foreground)]">
                Live operating status &amp; availability
              </p>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)] font-mono">
                    <span>BUILDING</span>
                    <Zap className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Software that helps businesses run with less friction.
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)] font-mono">
                    <span>CURRENT FOCUS</span>
                    <Cpu className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Building operational software that removes manual work.
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)] font-mono">
                    <span>BEST FIT</span>
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Professional Service Businesses
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)] font-mono">
                    <span>RESPONSE TIME</span>
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Within 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  HOW A BUSINESS SYSTEM COMES TOGETHER                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-24 md:py-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="—">System Anatomy</SectionLabel>
            </div>

            <div className="col-span-12 md:col-span-9">
              <h2 className="max-w-[28ch] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] tracking-[-0.02em] text-foreground">
                How a Business System{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  Comes Together.
                </span>
              </h2>
            </div>
          </div>

          {/* ── Visual Diagram ── */}
          <div className="mt-16 md:mt-24 flex flex-col items-center">

            {/* Root: YOUR BUSINESS (Step 1) */}
            <div className="flow-step-1 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)]/60 px-6 py-3 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground font-medium">YOUR BUSINESS</span>
            </div>

            {/* Vertical connector & Three-way branch headers (Step 2) */}
            <div className="flow-step-2 flex flex-col items-center w-full max-w-3xl">
              <div className="w-px h-8 bg-[color:var(--color-hairline)]" />
              <div className="relative w-full">
                {/* Horizontal connector line */}
                <div className="absolute top-0 h-px bg-[color:var(--color-hairline)]" style={{ left: '16.67%', right: '16.67%' }} />

                <div className="grid grid-cols-3 gap-4 md:gap-8">
                  {/* Branch 1: Customer Experience */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-[color:var(--color-hairline)]" />
                    <div className="rounded-lg border border-[color:var(--color-border)] bg-background/60 px-3 py-2.5 text-center">
                      <span className="text-xs font-medium text-foreground">Customer Experience</span>
                    </div>
                  </div>

                  {/* Branch 2: Operations */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-[color:var(--color-hairline)]" />
                    <div className="rounded-lg border border-[color:var(--color-border)] bg-background/60 px-3 py-2.5 text-center">
                      <span className="text-xs font-medium text-foreground">Operations</span>
                    </div>
                  </div>

                  {/* Branch 3: Management */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-[color:var(--color-hairline)]" />
                    <div className="rounded-lg border border-[color:var(--color-border)] bg-background/60 px-3 py-2.5 text-center">
                      <span className="text-xs font-medium text-foreground">Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-nodes: Website, Internal Software, Dashboards & Bottom Merge (Step 3) */}
            <div className="flow-step-3 flex flex-col items-center w-full max-w-3xl">
              <div className="grid grid-cols-3 gap-4 md:gap-8 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                  <div className="rounded border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/40 px-3 py-2 text-center w-full max-w-[180px]">
                    <span className="font-mono text-[11px] text-[color:var(--color-primary)]">Website</span>
                  </div>
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                  <div className="rounded border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/40 px-3 py-2 text-center w-full max-w-[180px]">
                    <span className="font-mono text-[11px] text-[color:var(--color-primary)]">Internal Software</span>
                  </div>
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                  <div className="rounded border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/40 px-3 py-2 text-center w-full max-w-[180px]">
                    <span className="font-mono text-[11px] text-[color:var(--color-primary)]">Dashboards</span>
                  </div>
                  <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
                </div>
              </div>

              {/* Bottom horizontal connector merging the three branches */}
              <div className="relative w-full">
                <div className="absolute top-0 h-px bg-[color:var(--color-hairline)]" style={{ left: '16.67%', right: '16.67%' }} />
              </div>
            </div>

            {/* AI & Automation Layer (Step 4) */}
            <div className="flow-step-4 flex flex-col items-center">
              <div className="w-px h-8 bg-[color:var(--color-hairline)]" />
              <div className="rounded-lg border border-primary/30 bg-primary/5 px-6 py-3 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-medium">AI & Automation Layer</span>
              </div>
            </div>

            {/* Outcomes & Caption (Step 5) */}
            <div className="flow-step-5 flex flex-col items-center w-full">
              <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
              <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-card)]/60 px-6 py-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground font-medium">Connected Workflows</span>
              </div>

              <div className="w-px h-6 bg-[color:var(--color-hairline)]" />
              <div className="rounded-lg border border-primary/20 bg-background/80 px-6 py-3 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground font-medium">Better Business Outcomes</span>
              </div>

              {/* ── Closing Statement ── */}
              <p className="mt-16 md:mt-20 mx-auto max-w-[54ch] text-center text-base md:text-lg leading-relaxed text-[color:var(--color-muted-foreground)]">
                Every business is different. The goal is always the same:{" "}
                <span className="text-foreground">
                  connect the tools, people, and processes so work flows naturally instead of being passed around.
                </span>
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  02 — SELECTED SYSTEMS (EDITORIAL MAGAZINE FEATURE ROWS)                   */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t pt-24 md:pt-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 pb-16">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="02">Selected Systems</SectionLabel>
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-[24ch] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em]">
                A small catalogue of business systems,{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  deeply finished.
                </span>
              </h2>
              <Link
                href="/case-studies"
                className="link-underline text-sm font-medium text-foreground hover:text-primary"
              >
                <span className="link-underline-line">Explore All Case Studies</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Shell>

        {/* Editorial Alternating System Rows (3 Featured Systems) */}
        {featuredSystems.map((sys, idx) => {
          const isEven = idx % 2 === 1;
          const imageOrder = isEven ? "md:order-last" : "md:order-first";

          return (
            <article key={sys.id} className="hairline-t py-20 md:py-28">
              <Shell>
                <div className="grid grid-cols-12 items-center gap-x-8 gap-y-12">
                  {/* Screenshot Feature Block */}
                  <div className={`col-span-12 md:col-span-7 ${imageOrder}`}>
                    <Link href={`/case-studies#${sys.slug}`} className="group block relative overflow-hidden rounded-xl bg-[color:var(--color-card)]/50">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        {sys.thumbnail ? (
                          <img
                            src={sys.thumbnail}
                            alt={sys.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-card text-muted-foreground">
                            System Preview
                          </div>
                        )}
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[color:var(--color-hairline)]" />
                    </Link>
                  </div>

                  {/* Editorial Narrative & Outcomes Block */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
                      <span className="font-mono">{`0${idx + 1}`}</span>
                      <span className="h-px w-8 bg-[color:var(--color-hairline)]" />
                      <span>{sys.category}</span>
                      <span className="ml-auto font-mono text-[color:var(--color-subtle)]">
                        {sys.year}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
                      {sys.title}
                    </h3>

                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[color:var(--color-primary)] font-mono">
                      {sys.impactBadge}
                    </p>

                    {/* Concise Challenge → Solution → Outcome Narrative */}
                    <div className="mt-8 space-y-4 text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                      <div>
                        <span className="font-mono uppercase text-[10px] tracking-wider text-[color:var(--color-subtle)] block mb-1">
                          Challenge
                        </span>
                        {sys.challenge}
                      </div>
                      <div>
                        <span className="font-mono uppercase text-[10px] tracking-wider text-[color:var(--color-subtle)] block mb-1">
                          Solution
                        </span>
                        {sys.solutionBullets[0]}
                      </div>
                      <div>
                        <span className="font-mono uppercase text-[10px] tracking-wider text-[color:var(--color-primary)] block mb-1">
                          Business Outcome
                        </span>
                        {sys.results[0]}
                      </div>
                    </div>

                    {/* 2-3 Measurable Metrics */}
                    <dl className="mt-8 grid grid-cols-3 gap-x-4 border-t border-[color:var(--color-hairline)] pt-6">
                      {sys.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <dt className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-subtle)] font-mono">
                            {m.label}
                          </dt>
                          <dd className="mt-2 text-2xl font-light tracking-tight text-foreground">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8 flex items-center gap-6">
                      <Link
                        href={`/case-studies#${sys.slug}`}
                        className="link-underline text-sm font-medium text-foreground hover:text-primary"
                      >
                        <span className="link-underline-line">Read full case study</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      {sys.demo && (
                        <a
                          href={sys.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[color:var(--color-subtle)] hover:text-foreground underline underline-offset-4 font-mono"
                        >
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Shell>
            </article>
          );
        })}

        {/* Section Ending CTA: Explore All Case Studies */}
        <div className="hairline-t py-12">
          <Shell>
            <div className="flex justify-end">
              <Link
                href="/case-studies"
                className="link-underline text-sm font-medium text-foreground hover:text-primary"
              >
                <span className="link-underline-line">Explore All Case Studies</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Shell>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  03 — THE BUSINESS SYSTEM STACK                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t py-24 md:py-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {/* Left Header Column */}
            <div className="col-span-12 md:col-span-4 md:sticky md:top-32 md:self-start">
              <SectionLabel index="03">Business System Stack</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-[1.08] tracking-[-0.02em]">
                Four connected layers.{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  One unified system.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Rather than isolated tools, your business operates as a cohesive stack where public touchpoints, internal software, AI automation, and database infrastructure work in unison.
              </p>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="link-underline text-sm font-medium text-foreground hover:text-primary"
                >
                  <span className="link-underline-line">Explore All Capabilities</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Stack Column — Architectural Stacked Layers */}
            <div className="col-span-12 md:col-span-8 space-y-6">
              {[
                {
                  layer: "LAYER 01",
                  title: "Customer Experience",
                  subtitle: "Modern Websites & Digital Front-Doors",
                  outcome: "Turns visitor traffic into qualified lead data and triggers instant intake.",
                  description: "High-performance digital front-doors engineered to capture high-intent inquiries, build executive credibility, and feed lead data directly into your backend workflow.",
                  deliverables: [
                    "High-converting Next.js Web Apps",
                    "SEO & Dynamic Metadata Architecture",
                    "Automated Lead Capture Triggers",
                  ],
                },
                {
                  layer: "LAYER 02",
                  title: "Operations",
                  subtitle: "Internal Software & Operational Dashboards",
                  outcome: "Replaces spreadsheet chaos with custom tools tailored to how your team works.",
                  description: "Custom internal portals and operational dashboards built specifically for your team's workflow—giving management real-time visibility without manual status updates.",
                  deliverables: [
                    "Custom Internal Portals & Admin Panels",
                    "Role-Based Access & Task Tracking",
                    "Real-Time Operational Visibility",
                  ],
                },
                {
                  layer: "LAYER 03",
                  title: "Automation",
                  subtitle: "AI Intake & Workflow Automation",
                  outcome: "Eliminates manual data entry and executes sub-minute client triage.",
                  description: "Automated pipelines that handle inquiry triage, extract key details from documents, format client briefs, and keep Slack/Email notifications instantly updated.",
                  deliverables: [
                    "Sub-Minute AI Lead Briefing Pipelines",
                    "Multi-Step Webhook & n8n Workflows",
                    "Instant Slack, WhatsApp & Email Alerts",
                  ],
                },
                {
                  layer: "LAYER 04",
                  title: "Infrastructure",
                  subtitle: "Custom APIs & Database Integrations",
                  outcome: "Bridges disconnected tools into a single, reliable source of truth.",
                  description: "High-reliability backend services, secure database schemas, and custom API bridges that connect third-party platforms and ensure seamless data flow across the business.",
                  deliverables: [
                    "Custom Python / FastAPI Microservices",
                    "PostgreSQL & Database Schema Design",
                    "Stripe, Square & Webhook Integration",
                  ],
                },
              ].map((stackLayer, idx) => (
                <div
                  key={stackLayer.layer}
                  className="group relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 transition-all duration-300 hover:border-primary/40 hover:bg-[color:var(--color-card)]/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[color:var(--color-subtle)]">
                    <span className="rounded bg-background/80 px-2.5 py-1 border border-[color:var(--color-hairline)] text-[color:var(--color-primary)] font-medium">
                      {stackLayer.layer}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[color:var(--color-subtle)]">
                      {stackLayer.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                    {stackLayer.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-[color:var(--color-primary)]">
                    Outcome — {stackLayer.outcome}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {stackLayer.description}
                  </p>

                  <div className="mt-6 border-t border-[color:var(--color-hairline)] pt-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[color:var(--color-muted-foreground)]">
                      {stackLayer.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-mono text-[11px]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting indicator line to next layer */}
                  {idx < 3 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                      <span className="text-[10px] font-mono text-[color:var(--color-subtle)] bg-background px-2 py-0.5 rounded border border-[color:var(--color-hairline)]">
                        ↓ Feeds Next Layer
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  04 — PROCESS                                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t py-24 md:py-32">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel index="04">Execution Process</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-[-0.02em]">
                Visible cycles,{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  zero theatre.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                One engineer behind every project—end to end, in daylight. No account managers, no game phone tag.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8">
              <ol className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Diagnose",
                    body: "We audit the manual bottlenecks—spreadsheets, unread group chats, slow intake forms—before proposing line of code.",
                  },
                  {
                    num: "02",
                    title: "Frame",
                    body: "One document defining the core problem, technical constraints, and the smallest high-impact system worth building.",
                  },
                  {
                    num: "03",
                    title: "Build",
                    body: "Short, visible development sprints. Working software in front of your operating team within days, refined until seamless.",
                  },
                  {
                    num: "04",
                    title: "Hand Off & Support",
                    body: "Fully documented and owned by your team. Available on light monthly retainers for continuous system optimization.",
                  },
                ].map((step) => (
                  <li
                    key={step.num}
                    className="grid grid-cols-12 gap-4 border-t border-[color:var(--color-hairline)] pt-6"
                  >
                    <div className="col-span-12 sm:col-span-3 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[color:var(--color-subtle)]">
                        {step.num}
                      </span>
                      <span className="text-base font-medium text-foreground">
                        {step.title}
                      </span>
                    </div>
                    <p className="col-span-12 sm:col-span-9 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  05 — CONTACT                                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section id="contact" className="hairline-t py-28 md:py-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel index="05">Contact</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.04] tracking-[-0.03em]">
                Have a system that's{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  costing hours?
                </span>{" "}
                Let's automate it.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Send a brief overview of what you're trying to streamline. I reply within 24 hours with direct technical feedback.
              </p>

              <div className="mt-10 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2 text-xs">
                  <span className="text-[color:var(--color-subtle)]">Direct Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2 text-xs">
                  <span className="text-[color:var(--color-subtle)]">Timezone</span>
                  <span className="text-foreground">EAT (UTC+3) · Remote</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-subtle)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-md border border-[color:var(--color-border)] bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-[color:var(--color-subtle)] focus:border-primary focus:outline-none"
                  />
                  {formErrors.name && (
                    <span className="text-xs text-destructive mt-1 block">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-subtle)] mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sarah@company.com"
                    className="w-full rounded-md border border-[color:var(--color-border)] bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-[color:var(--color-subtle)] focus:border-primary focus:outline-none"
                  />
                  {formErrors.email && (
                    <span className="text-xs text-destructive mt-1 block">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-subtle)] mb-2">
                    What system or workflow needs fixing?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your manual intake, spreadsheet bottlenecks, or custom software requirements..."
                    className="w-full rounded-md border border-[color:var(--color-border)] bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-[color:var(--color-subtle)] focus:border-primary focus:outline-none resize-none"
                  />
                  {formErrors.message && (
                    <span className="text-xs text-destructive mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-primary py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Sending Inquiry..." : "Submit Project Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </Shell>
      </section>
    </div>
  );
}
