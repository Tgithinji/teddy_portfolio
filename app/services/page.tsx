import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/portfolio";
import { ArrowUpRight, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities — Teddy Githinji",
  description:
    "Workflow automation, custom software development, AI intake systems, and API integrations tailored for operating teams.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
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
            Rather than selling isolated agency services, every engagement is structured as an interconnected layer of your business operating stack—from high-converting client front-doors to automated AI intake and resilient custom backend infrastructure.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="flex flex-col justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 md:p-10 transition-colors hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[color:var(--color-subtle)]">
                  <span>{srv.number}</span>
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <h2 className="mt-4 text-2xl font-light text-foreground">
                  {srv.title}
                </h2>
                <p className="mt-2 text-xs font-mono text-[color:var(--color-primary)]">
                  {srv.outcome}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                  {srv.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[color:var(--color-hairline)] pt-6">
                <h3 className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)] font-mono mb-4">
                  Core Deliverables
                </h3>
                <ul className="space-y-2.5 text-xs text-[color:var(--color-muted-foreground)]">
                  {srv.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={`/contact?service=${srv.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-background/60 px-5 py-2 text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <span>{srv.cta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
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
                a: "Yes. I connect CRMs, payment gateways (Stripe, Square, M-Pesa), Slack, Google Workspace, WhatsApp, and third-party APIs into clean, unified workflows.",
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
