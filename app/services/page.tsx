import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database, Layout, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "The Business System Stack — Teddy Githinji",
  description:
    "Explore the 4 connected layers of a modern business operating stack: Customer Experience, Operations, AI & Workflow Automation, and API Infrastructure.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <Shell>
        {/* Header */}
        <div className="max-w-3xl border-b border-[color:var(--color-hairline)] pb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
            <span className="font-mono">03</span>
            <span>—</span>
            <span>The Business System Stack</span>
          </div>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground">
            Four Connected Layers.{" "}
            <span className="font-serif italic text-[color:var(--color-primary)]">
              One Operating Architecture.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
            Rather than selling isolated agency services, every capability is engineered as an interconnected layer of your business operating stack—connecting public touchpoints, internal portals, AI automations, and backend APIs into one unified system.
          </p>
        </div>

        {/* System Stack Flow Overview Bar */}
        <div className="mt-12 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-[color:var(--color-subtle)] uppercase tracking-wider">
              Connected Architecture Flow:
            </span>
            <div className="flex flex-wrap items-center gap-3 text-[color:var(--color-muted-foreground)]">
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Layout className="h-3.5 w-3.5 text-primary" />
                Customer Experience
              </span>
              <span className="text-[color:var(--color-subtle)]">&rarr;</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Layers className="h-3.5 w-3.5 text-primary" />
                Operations
              </span>
              <span className="text-[color:var(--color-subtle)]">&rarr;</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Cpu className="h-3.5 w-3.5 text-primary" />
                Automation &amp; AI
              </span>
              <span className="text-[color:var(--color-subtle)]">&rarr;</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Database className="h-3.5 w-3.5 text-primary" />
                Infrastructure
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Stacked Architectural Layers */}
        <div className="mt-16 space-y-12">
          {services.map((srv, idx) => (
            <div key={srv.id} className="relative">
              <div className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 md:p-12 transition-all duration-300 hover:border-primary/40 hover:bg-[color:var(--color-card)]/60">
                
                {/* Layer Badge & Subtitle */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--color-hairline)] pb-6 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-primary/10 border border-primary/20 px-3 py-1 text-primary font-medium">
                      {srv.layer}
                    </span>
                    <span className="text-xs text-[color:var(--color-subtle)] uppercase tracking-widest">
                      {srv.number} / 04
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                    {srv.subtitle}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-12 gap-x-8 gap-y-8">
                  {/* Left Column: Layer Overview & Role */}
                  <div className="col-span-12 lg:col-span-6 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors">
                      {srv.title}
                    </h2>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-medium block mb-1">
                        Business Outcome
                      </span>
                      <p className="text-xs md:text-sm font-medium text-foreground leading-relaxed">
                        {srv.outcome}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-subtle)] block">
                        System Role in the Stack
                      </span>
                      <p className="text-xs leading-relaxed text-[color:var(--color-muted-foreground)] italic">
                        "{srv.systemRole}"
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-[color:var(--color-muted-foreground)] pt-2">
                      {srv.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={`/contact?layer=${srv.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-2.5 text-xs font-medium text-foreground hover:bg-primary/20 hover:border-primary transition-colors group/btn"
                      >
                        <span>{srv.cta}</span>
                        <ArrowUpRight className="h-4 w-4 text-primary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Core Deliverables & Technical Specs */}
                  <div className="col-span-12 lg:col-span-6 rounded-xl border border-[color:var(--color-hairline)] bg-background/50 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)] block mb-6">
                        Core Capabilities &amp; Deliverables
                      </span>

                      <ul className="space-y-4 text-xs text-[color:var(--color-muted-foreground)]">
                        {srv.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground leading-snug font-medium">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-[color:var(--color-hairline)] pt-4 flex items-center justify-between text-[11px] font-mono text-[color:var(--color-subtle)]">
                      <span>Stack Component {srv.number}</span>
                      <span>Verified Operating Output</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Indicator between layers */}
              {idx < services.length - 1 && (
                <div className="my-6 flex flex-col items-center justify-center">
                  <div className="h-8 w-px bg-[color:var(--color-hairline)]" />
                  <div className="flex items-center gap-2 rounded-full border border-[color:var(--color-hairline)] bg-background/80 px-3 py-1 text-[10px] font-mono text-[color:var(--color-subtle)] shadow-sm">
                    <ArrowDown className="h-3 w-3 text-primary animate-pulse" />
                    <span>Data &amp; Workflow Integration</span>
                  </div>
                  <div className="h-8 w-px bg-[color:var(--color-hairline)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-28 hairline-t pt-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
              COMMON QUESTIONS
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-light text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "How do you identify what processes to automate?",
                a: "We begin with a discovery audit to map out your current operational workflows, pinpoint administrative bottlenecks, and prioritize automations that yield the highest time savings and ROI.",
              },
              {
                q: "Which tech stack do you use for custom software and automations?",
                a: "For custom applications, I use Python (FastAPI), React / Next.js, and PostgreSQL. For workflow automation, I leverage n8n, Make.com, Zapier, and custom API webhooks.",
              },
              {
                q: "Can you integrate with our existing CRMs and tools?",
                a: "Yes. I connect CRMs, payment gateways (Stripe, Square, M-Pesa), Slack, Google Workspace, and third-party APIs into clean, unified workflows.",
              },
              {
                q: "What does a typical build engagement look like?",
                a: "Build engagements typically run 2 to 4 weeks for specific automation projects, followed by handoff documentation and optional monthly retainer support.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--color-hairline)] bg-background/40 p-6"
              >
                <h3 className="text-base font-medium text-foreground">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mt-28 hairline-t pt-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-subtle)]">
              ENGAGEMENT STRUCTURES
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-light text-foreground">
              How We Work Together
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[color:var(--color-hairline)] bg-background/40 p-8">
              <h3 className="text-lg font-medium text-foreground">Sprint / Project Build</h3>
              <p className="mt-2 text-xs font-mono text-primary">Fixed Scope · 2 to 4 Weeks</p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Best for specific, well-defined automation builds or custom internal software projects. Includes discovery, rapid prototyping, production deployment, and handoff documentation.
              </p>
            </div>

            <div className="rounded-xl border border-[color:var(--color-hairline)] bg-background/40 p-8">
              <h3 className="text-lg font-medium text-foreground">Engineering Retainer</h3>
              <p className="mt-2 text-xs font-mono text-primary">Continuous System Optimization</p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                Best for growing teams that require ongoing automation improvements, system monitoring, custom feature releases, and immediate technical support without hiring full-time staff.
              </p>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  );
}
