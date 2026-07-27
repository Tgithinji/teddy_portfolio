"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { Mail, MessageCircle, Github, Linkedin, ShieldCheck, Clock, MapPin } from "lucide-react";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">{children}</div>
  );
}

export default function ContactPage() {
  const {
    isLoading,
    formData,
    formErrors,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen bg-background pt-32 pb-32">
      <Shell>
        {/* Header */}
        <div className="max-w-3xl border-b border-[color:var(--color-hairline)] pb-12">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-subtle)]">
            <span className="font-mono">05</span>
            <span>—</span>
            <span>Start a Project</span>
          </div>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground">
            Let's build software that{" "}
            <span className="font-serif italic text-[color:var(--color-primary)]">
              saves hours.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted-foreground)]">
            Whether you need a sub-minute AI intake engine, custom internal software, or automated workflow integrations, send a brief note and I'll reply within 48 hours.
          </p>
        </div>

        {/* Content & Form */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12">
          {/* Contact Cards */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-6 space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-wider text-[color:var(--color-subtle)]">
                Direct Channels
              </h2>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-lg border border-[color:var(--color-hairline)] bg-background/60 p-3.5 text-foreground hover:border-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-[color:var(--color-subtle)]">Email</div>
                    <div className="font-medium">{siteConfig.email}</div>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[color:var(--color-hairline)] bg-background/60 p-3.5 text-foreground hover:border-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-[color:var(--color-subtle)]">WhatsApp</div>
                    <div className="font-medium">{siteConfig.whatsappNumber}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-6 space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-wider text-[color:var(--color-subtle)]">
                Location &amp; Availability
              </h2>

              <dl className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2.5">
                  <dt className="text-[color:var(--color-subtle)]">Location</dt>
                  <dd className="text-foreground">Nairobi, Kenya (UTC+3)</dd>
                </div>
                <div className="flex justify-between border-b border-[color:var(--color-hairline)] pb-2.5">
                  <dt className="text-[color:var(--color-subtle)]">Response Time</dt>
                  <dd className="text-foreground">Within 48 hours</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[color:var(--color-subtle)]">Next Slot</dt>
                  <dd className="text-primary font-mono font-medium">Q1 / Q2 2026</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/40 p-8 md:p-10 space-y-6"
            >
              <h2 className="text-xl font-light text-foreground">
                Project Inquiry Form
              </h2>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[color:var(--color-subtle)] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alex Morgan"
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
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@company.com"
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
                  System Requirement / Challenge *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your current intake workflow, manual spreadsheet bottlenecks, or custom software requirements..."
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
                {isLoading ? "Sending Message..." : "Submit Project Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </Shell>
    </div>
  );
}
