"use client";

import Link from "next/link";
import Image from "next/image";
import { selectedSystems, services } from "@/data/portfolio";
import { useContactForm } from "@/hooks/useContactForm";
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
                I build custom software, AI automations, and workflow systems that make business operations{" "}
                <span className="font-serif italic text-[color:var(--color-primary)]">
                  run faster.
                </span>
              </h1>

              <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
                <p className="rise col-span-12 max-w-[54ch] text-base leading-relaxed text-[color:var(--color-muted-foreground)] md:col-span-7">
                  Software Engineer & Automation Architect based in Nairobi. I help companies eliminate repetitive admin, bridge disconnected tools, and deploy sub-minute AI intake engines that convert silence into structured execution.
                </p>
                
                <div className="rise col-span-12 md:col-span-5 md:col-start-8">
                  <dl className="space-y-3.5 text-sm">
                    <div className="flex justify-between hairline-b pb-2.5">
                      <dt className="text-[color:var(--color-subtle)]">Role</dt>
                      <dd className="font-medium text-foreground">Software & Systems Engineer</dd>
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
                Live operating status & core capabilities
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
                    AI Intake Briefing Pipelines & Custom FastAPI Services
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
              <SectionLabel index="02">Proof & Impact</SectionLabel>
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
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                    AI Lead Response Speed
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    10+ hrs
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                    Weekly Payroll Admin Saved
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    85%↓
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                    Intake Follow-Up Delay
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                    100%
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                    Attorney Brief Readiness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/*  03 — SELECTED SYSTEMS (FEATURED WORK)                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="hairline-t py-24 md:py-32">
        <Shell>
          <div className="grid grid-cols-12 gap-x-6 pb-12">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel index="03">Selected Systems</SectionLabel>
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-[24ch] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Featured engineering builds,{" "}
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

          <div className="space-y-16">
            {featuredSystems.map((sys) => (
              <article
                key={sys.id}
                className="group rounded-xl border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/30 p-6 md:p-10 transition-colors hover:border-[color:var(--color-border)]"
              >
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-start">
                  <div className="col-span-12 md:col-span-7">
                    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
                      <span className="font-mono">{sys.index}</span>
                      <span className="h-px w-8 bg-[color:var(--color-hairline)]" />
                      <span>{sys.category}</span>
                      <span className="ml-auto font-mono text-[color:var(--color-subtle)]">
                        {sys.year}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[clamp(1.5rem,2.8vw,2.25rem)] font-light leading-[1.12] tracking-[-0.02em] text-foreground">
                      {sys.title}
                    </h3>
                    <p className="mt-3 text-sm text-[color:var(--color-muted-foreground)]">
                      {sys.subtitle}
                    </p>

                    <div className="mt-6 space-y-4 text-xs md:text-sm text-[color:var(--color-muted-foreground)]">
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

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {sys.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-[color:var(--color-hairline)] bg-background/60 px-2.5 py-1 font-mono text-[11px] text-[color:var(--color-muted-foreground)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-5 flex flex-col justify-between h-full">
                    <dl className="grid grid-cols-3 gap-4 rounded-lg border border-[color:var(--color-hairline)] bg-background/40 p-5">
                      {sys.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="text-[10px] uppercase tracking-[0.15em] text-[color:var(--color-subtle)]">
                            {m.label}
                          </dt>
                          <dd className="mt-1 text-xl font-light tracking-tight text-foreground">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8 flex items-center gap-4">
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
                          className="text-xs text-[color:var(--color-subtle)] hover:text-foreground underline underline-offset-4"
                        >
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Shell>
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
                  <a href="mailto:ted@teddygithinji.me" className="text-foreground hover:text-primary">
                    ted@teddygithinji.me
                  </a>
                </div>
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2 text-xs">
                  <span className="text-[color:var(--color-subtle)]">WhatsApp</span>
                  <a href="https://wa.me/254702783943" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    +254 702 783 943
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
                    placeholder="Tell me about your manual intake, spreadsheet bottlenecks, or software requirements..."
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
