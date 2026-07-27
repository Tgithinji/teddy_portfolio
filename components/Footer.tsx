import Link from "next/link";

export function Footer() {
  return (
    <footer className="hairline-t py-12 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 text-[13px] text-[color:var(--color-subtle)] md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="status-dot" aria-hidden />
            <span>Teddy Githinji · Software & Systems Engineer</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:ted@teddygithinji.me"
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href="https://github.com/Tgithinji/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/teddy-muraguri/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/254702783943"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>

          <div className="font-mono text-xs text-[color:var(--color-subtle)]">
            © {new Date().getFullYear()} — Handbuilt in Nairobi, Kenya.
          </div>
        </div>
      </div>
    </footer>
  );
}
