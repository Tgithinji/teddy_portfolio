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
                    <div className="flex justify-between hairline-b pb-2.5">
                      <dt className="text-[color:var(--color-subtle)]">Next opening</dt>
                      <dd className="text-[color:var(--color-primary)] font-mono">Q1 / Q2 2026</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  MISSION CONTROL DASHBOARD BLOCK                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t hairline-b bg-[color:var(--color-card)]/40 py-12">
        <Shell>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
                <span className="status-dot" aria-hidden />
                <span className="font-mono text-foreground">MISSION CONTROL</span>
              </div>
              <p className="mt-2 text-xs text-[color:var(--color-muted-foreground)]">
                Live operating status &amp; core capabilities
              </p>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)]">
                    <span>CURRENT FOCUS</span>
                    <Zap className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    AI Intake Briefing Pipelines &amp; Custom FastAPI Services
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)]">
                    <span>CAPABILITY STACK</span>
                    <Cpu className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Python, FastAPI, n8n, Next.js, PostgreSQL, OpenAI
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)]">
                    <span>BENCHMARK SPEED</span>
                    <Clock className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    &lt; 60s Intake Triage &amp; 10+ Hrs Saved / Wk
                  </p>
                </div>

                <div className="rounded-lg border border-[color:var(--color-border)] bg-background/50 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--color-subtle)]">
                    <span>AVAILABILITY</span>
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">
                    Accepting 2 Client Builds for Q1/Q2 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  02 — PROOF & IMPACT                                                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-24 md:py-32">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="02">Proof &amp; Impact</SectionLabel>
            </div>

            <div className="col-span-12 md:col-span-9">
              <p className="max-w-[44ch] text-2xl font-light leading-snug tracking-[-0.01em] text-foreground md:text-[28px]">
                Engineering outcomes evaluated on Monday morning—measured by administrative hours saved, client response speed, and error elimination.
              </p>

              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[color:var(--color-hairline)] pt-10 sm:grid-cols-4">
                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    &lt; 1 min
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono">
                    AI Lead Response Speed
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    10+ hrs
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono">
                    Weekly Payroll Admin Saved
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    85%↓
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono">
                    Intake Follow-Up Delay
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    100%
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono">
                    Attorney Brief Readiness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  03 — SELECTED SYSTEMS (EDITORIAL MAGAZINE FEATURE ROWS)                   */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t pt-24 md:pt-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 pb-16">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="03">Selected Systems</SectionLabel>
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
                <span className="link-underline-line">View All Case Studies</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Shell>

        {/* Editorial Alternating System Rows */}
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
                            className="h-full w-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
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
                      <span className="font-mono">{sys.index}</span>
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

                    <div className="mt-8 space-y-5 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                      <div>
                        <span className="mr-2 text-[color:var(--color-subtle)] font-medium">
                          Problem —
                        </span>
                        {sys.challenge}
                      </div>
                      <div>
                        <span className="mr-2 text-[color:var(--color-subtle)] font-medium">
                          Outcome —
                        </span>
                        {sys.results[0]}
                      </div>
                    </div>

                    <dl className="mt-10 grid grid-cols-3 gap-x-4 border-t border-[color:var(--color-hairline)] pt-6">
                      {sys.metrics.map((m) => (
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

                    <div className="mt-10 flex items-center gap-6">
                      <Link
                        href={`/case-studies#${sys.slug}`}
                        className="link-underline text-sm font-medium text-foreground hover:text-primary"
                      >
                        <span className="link-underline-line">Read the case study</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      {sys.demo && (
                        <a
                          href={sys.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[color:var(--color-subtle)] hover:text-foreground underline underline-offset-4 font-mono"
                        >
                          Watch Demo Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Shell>
            </article>
          );
        })}
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  04 — SERVICES OVERVIEW                                                    */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t py-24 md:py-32">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel index="04">Capabilities</SectionLabel>
              <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-[-0.02em]">
                Focused on business outcomes,{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  not complexity.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Whether replacing messy spreadsheets or deploying sub-minute AI lead intake engines, every engagement is engineered for clarity and ROI.
              </p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="link-underline text-sm font-medium text-foreground hover:text-primary"
                >
                  <span className="link-underline-line">Explore All Services</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="flex flex-col justify-between rounded-xl border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/40 p-6 transition-colors hover:border-[color:var(--color-border)]"
                  >
                    <div>
                      <span className="font-mono text-xs text-[color:var(--color-subtle)]">
                        {srv.number}
                      </span>
                      <h3 className="mt-3 text-lg font-medium text-foreground">
                        {srv.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                        {srv.outcome}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2 text-xs text-[color:var(--color-muted-foreground)] border-t border-[color:var(--color-hairline)] pt-4">
                      {srv.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  05 — PROCESS                                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t py-24 md:py-32">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel index="05">Execution Process</SectionLabel>
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
      {/*  06 — CONTACT                                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section id="contact" className="hairline-t py-28 md:py-36">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel index="06">Contact</SectionLabel>
              <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.04] tracking-[-0.03em]">
                Have a system that's{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  costing hours?
                </span>{" "}
                Let's automate it.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Send a brief overview of what you're trying to streamline. I reply within 48 hours with direct technical feedback.
              </p>

              <div className="mt-10 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2 text-xs">
                  <span className="text-[color:var(--color-subtle)]">Direct Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2 text-xs">
                  <span className="text-[color:var(--color-subtle)]">WhatsApp</span>
                  <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    {siteConfig.whatsappNumber}
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
