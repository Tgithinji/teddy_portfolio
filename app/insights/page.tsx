import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/portfolio";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Writing — Teddy Githinji",
  description:
    "Technical essays, field notes, and architectural breakdowns on automation systems, legal AI intake, and internal software.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
      <Shell>
        {/* Header */}
        <div className="max-w-3xl border-b border-[color:var(--color-hairline)] pb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
            <span className="font-mono">04</span>
            <span>—</span>
            <span>Field Notes &amp; Essays</span>
          </div>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground">
            Insights on Systems &amp;{" "}
            <span className="font-serif italic text-[color:var(--color-primary)]">
              Automation Architecture.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
            Occasional notes from the middle of building—practical observations on software design, AI intake triage, and internal tool engineering.
          </p>
        </div>

        {/* Articles List */}
        <div className="mt-16 space-y-8">
          {insights.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-card)]/40 p-8 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[color:var(--color-subtle)]">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">{item.category}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
                <span>{item.readTime}</span>
              </div>

              <h2 className="mt-4 text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                {item.summary}
              </p>

              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground group-hover:text-primary">
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
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
      </Shell>
    </div>
  );
}
