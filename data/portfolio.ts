export interface SystemMetric {
  value: string;
  label: string;
}

export interface SelectedSystem {
  id: string;
  slug: string;
  index: string;
  category: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  industry: string;
  duration: string;
  role: string;
  impactBadge: string;
  challenge: string;
  solutionBullets: string[];
  results: string[];
  metrics: SystemMetric[];
  techStack: string[];
  images: string[];
  thumbnail?: string;
  demo?: string;
  githubUrl?: string;
  websiteUrl?: string;
  testimonial?: string;
  featured: boolean;
}

export const selectedSystems: SelectedSystem[] = [
  {
    id: "immigration-law-intake",
    slug: "immigration-law-intake",
    index: "01",
    category: "Legal Operations",
    title: "AI Intake Briefing Engine for Immigration Law Firms",
    subtitle: "Sub-minute client triage and structured attorney briefings for high-stakes immigration leads.",
    client: "Immigration Law Practice",
    year: "2025",
    industry: "Legal",
    duration: "3 weeks",
    role: "Automation Architect",
    impactBadge: "Sub-1min response time",
    challenge: "Immigration inquiries were previously left waiting hours after form submission, resulting in missed consults, uncaptured lead data, and attorneys entering initial calls without contextual preparation.",
    solutionBullets: [
      "Built an autonomous AI ingestion pipeline using n8n and OpenAI to analyze complex intake data instantly",
      "Triggered personalized, highly empathetic email confirmations to prospective clients in under 60 seconds",
      "Generated structured attorney briefs identifying visa signals, potential roadblocks, and recommended next steps",
    ],
    results: [
      "Reduced post-submission response latency from hours to under 60 seconds",
      "Eliminated lead drop-off caused by post-form silence",
      "Provided attorneys with immediate case preparation before the first consult call",
    ],
    metrics: [
      { value: "< 1 min", label: "Response time" },
      { value: "↓ 85%", label: "Follow-up delay" },
      { value: "100%", label: "Attorney brief readiness" },
    ],
    techStack: ["n8n", "OpenAI API", "Email API", "Google Sheets", "Python"],
    images: [
      "/immigration_law_n8n.png",
      "/immigration_client_email.png",
      "/immigration_lawyer_email-1.png",
      "/immigration_lawyer_email-2.png",
    ],
    thumbnail: "/immigration_law_n8n.png",
    demo: "https://www.loom.com/share/521db541e5eb4ae590cc33ddd02c6fce",
    testimonial: "The automation turned slow intake follow-up into an immediate, personalized client response.",
    featured: true,
  },
  {
    id: "pi-law-intake",
    slug: "pi-law-intake",
    index: "02",
    category: "Legal Operations",
    title: "Instant Case Triage & Attorney Briefs for Personal Injury Firms",
    subtitle: "Automating injury claim intake, urgency scoring, and immediate client onboarding.",
    client: "Personal Injury Practice",
    year: "2025",
    industry: "Legal",
    duration: "3 weeks",
    role: "Automation Architect",
    impactBadge: "Zero lead leakage",
    challenge: "Personal injury claimants expect immediate assistance. Delayed intake responses were causing prospective clients to reach out to competing law firms.",
    solutionBullets: [
      "Engineered an automated triage workflow evaluating injury severity, insurance signals, and incident timelines",
      "Dispatched instant SMS/Email follow-up to claimants to confirm receipt and gather missing documentation",
      "Delivered formatted incident summaries directly to senior intake specialists and case managers",
    ],
    results: [
      "Achieved sub-minute intake acknowledgement across all incoming web forms",
      "Cut initial response silence by 90%",
      "Increased first-call consultation conversion rate significantly",
    ],
    metrics: [
      { value: "< 1 min", label: "Initial response" },
      { value: "↓ 90%", label: "Form-to-contact delay" },
      { value: "100%", label: "Triage completeness" },
    ],
    techStack: ["n8n", "OpenAI API", "Twilio API", "Webhooks", "PostgreSQL"],
    images: [
      "/PI_law_n8n.png",
      "/PI_law_contact_form.png",
      "/PI_law_client_email.png",
      "/PI_law_lawyer_email.png",
    ],
    thumbnail: "/PI_law_n8n.png",
    demo: "https://www.loom.com/share/21381e666bfe47ee86c10b5f1a9da1cb",
    testimonial: "The AI intake flow turned instant inquiries into informed first-call starts.",
    featured: false,
  },
  {
    id: "ecommerce-fulfillment",
    slug: "ecommerce-fulfillment",
    index: "03",
    category: "E-Commerce Ops",
    title: "Order Processing & Customer Support Automation Engine",
    subtitle: "Real-time Shopify order tracking, payment exception handling, and AI customer messaging.",
    client: "Retail & E-Commerce Business",
    year: "2025",
    industry: "Retail",
    duration: "3 weeks",
    role: "Automation Engineer",
    impactBadge: "70% less manual admin",
    challenge: "Operations staff spent hours manually cross-checking Shopify orders, handling failed payments, and writing repetitive post-purchase support emails.",
    solutionBullets: [
      "Integrated Shopify API webhooks to monitor order statuses and flag failed payment events instantly",
      "Automated Slack alert triggers for fulfillment exceptions requiring human intervention",
      "Generated personalized AI order update messages to keep customers proactively informed",
    ],
    results: [
      "Substantially decreased manual order administration for the ops team",
      "Improved post-purchase customer satisfaction score",
      "Reduced payment resolution turnaround from 24 hours to under 30 minutes",
    ],
    metrics: [
      { value: "70%", label: "Reduction in admin time" },
      { value: "< 30m", label: "Payment error resolution" },
      { value: "24/7", label: "Order monitoring" },
    ],
    techStack: ["n8n", "Shopify API", "OpenAI", "Slack API", "Google Sheets"],
    images: ["/shopify-orders-automation.png"],
    thumbnail: "/shopify-orders-automation.png",
    demo: "https://vimeo.com/1148659395?share=copy&fl=sv&fe=ci",
    featured: true,
  },
  {
    id: "slack-time-tracking",
    slug: "slack-time-tracking",
    index: "04",
    category: "Internal Tools",
    title: "Slack-Based Attendance & Payroll Calculation System",
    subtitle: "Automated employee timestamp extraction, hourly calculation, and payroll generation.",
    client: "Operations & Field Ops Team",
    year: "2024",
    industry: "Operations",
    duration: "1 week",
    role: "Automation Engineer",
    impactBadge: "Saved 10+ hrs/wk",
    challenge: "The client spent over 10 hours weekly manually collating daily check-in/out messages from Slack channels to calculate billable employee hours.",
    solutionBullets: [
      "Built automated Slack event listener to capture IN/OUT timestamps with edge case handling",
      "Engineered automatic calculation logic for shifts, overtime, and break deductions",
      "Generated downloadable weekly payroll spreadsheets and PDF summaries automatically",
    ],
    results: [
      "Saved 10+ hours per week in tedious administrative payroll compilation",
      "Eliminated manual transcript transcription errors",
      "Streamlined employee payout timelines",
    ],
    metrics: [
      { value: "10+ hrs", label: "Saved every week" },
      { value: "100%", label: "Calculation accuracy" },
      { value: "0", label: "Manual transcript errors" },
    ],
    techStack: ["n8n", "Slack API", "Google Sheets API", "PDF Generation"],
    images: ["/Slack_time_tracking.webp"],
    thumbnail: "/Slack_time_tracking.webp",
    demo: "https://drive.google.com/drive/folders/1vGOpVTHlRgCusIIUDvDS4POl2gu-ysSH?usp=sharing",
    featured: true,
  },
  {
    id: "scalable-backend-foundation",
    slug: "scalable-backend-foundation",
    index: "05",
    category: "Software Engineering",
    title: "Scalable API & Data Infrastructure for High-Traffic Content Platform",
    subtitle: "High-performance FastAPI REST architecture with JWT authentication and PostgreSQL.",
    client: "Technology Startup",
    year: "2024",
    industry: "Software",
    duration: "4 weeks",
    role: "Backend Engineer",
    impactBadge: "Sub-50ms API latency",
    challenge: "The platform required a robust backend architecture capable of handling user authentication, content moderation pipelines, and social interactions cleanly.",
    solutionBullets: [
      "Architected clean REST APIs using Python, FastAPI, and SQLAlchemy ORM",
      "Implemented JWT security, request validation, and password hashing primitives",
      "Structured optimized PostgreSQL database schemas and indexing for fast query response",
    ],
    results: [
      "Delivered production-ready REST API foundation with high test coverage",
      "Improved system maintainability and simplified modular extension",
      "Ensured sub-50ms response times for core data endpoints",
    ],
    metrics: [
      { value: "< 50ms", label: "Average API response" },
      { value: "100%", label: "Modular schema design" },
      { value: "JWT", label: "Secure Auth primitives" },
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT"],
    images: ["/blog_api.webp"],
    thumbnail: "/blog_api.webp",
    githubUrl: "https://github.com/Tgithinji/blog_api",
    featured: false,
  },
  {
    id: "wordpress-ai-publishing",
    slug: "wordpress-ai-publishing",
    index: "06",
    category: "Content Automation",
    title: "Automated Blog Publishing & SEO Content Production Engine",
    subtitle: "End-to-end automated research, drafting, and publishing pipeline for WordPress.",
    client: "Digital Content Business",
    year: "2024",
    industry: "Marketing",
    duration: "2 weeks",
    role: "Automation Engineer",
    impactBadge: "24/7 Publishing engine",
    challenge: "Content output was stagnant due to slow manual research, formatting bottlenecks, and inconsistent publishing schedules.",
    solutionBullets: [
      "Designed an automated n8n workflow for topic selection, outlining, and keyword research",
      "Integrated OpenAI APIs to draft SEO-structured articles adhering to brand tone",
      "Automated direct publishing to WordPress with featured tags and metadata",
    ],
    results: [
      "Transformed a stagnant blog into a reliable publishing system",
      "Saved dozens of manual writing hours each week",
      "Maintained consistent publishing schedules automatically",
    ],
    metrics: [
      { value: "3×", label: "Publishing frequency" },
      { value: "15+ hrs", label: "Saved weekly" },
      { value: "100%", label: "Automated formatting" },
    ],
    techStack: ["n8n", "OpenAI API", "WordPress REST API", "SEO Tools"],
    images: ["/wordpress_blog_automation.webp"],
    thumbnail: "/wordpress_blog_automation.webp",
    demo: "https://drive.google.com/drive/folders/1BmIY0VVqck8lJFRAj3uHQbHaVd34FsIi?usp=sharing",
    featured: false,
  },
];

export const services = [
  {
    id: "workflow-automation",
    number: "01",
    title: "Workflow Automation & Lead Response",
    outcome: "Eliminate repetitive tasks and capture leads instantly before competitors respond.",
    description: "I connect your existing tools (CRMs, Email, Slack, WhatsApp, Google Workspace) into clean, automated workflows that handle lead intake, status updates, and administrative follow-ups automatically.",
    deliverables: [
      "Sub-minute lead intake & automated triage",
      "CRM & spreadsheet sync (n8n, Make, custom scripts)",
      "WhatsApp & SMS operational messaging",
      "Automated reporting & alert systems",
    ],
    cta: "Automate Your Workflows",
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software & Internal Operations Tools",
    outcome: "Build software tailored to your specific workflows instead of struggling with rigid off-the-shelf apps.",
    description: "When generic SaaS tools don't fit, I design and build fast, responsive internal web applications, ops dashboards, booking portals, and management interfaces.",
    deliverables: [
      "Internal operations dashboards & portals",
      "Custom booking & appointment software",
      "High-performance REST APIs (Python/FastAPI/Node)",
      "Responsive React/Next.js web applications",
    ],
    cta: "Build Custom Software",
  },
  {
    id: "ai-systems",
    number: "03",
    title: "AI Systems & Intelligent Intake Engines",
    outcome: "Deploy AI assistants that draft structured attorney/operator briefs, extract document data, and route inquiries.",
    description: "Practical AI integration focused on ROI—no generic chatbots. I build structured AI pipelines that read incoming files, draft briefs, parse structured data, and reduce human reading time dramatically.",
    deliverables: [
      "AI intake & briefing engines for professional services",
      "Document analysis & data extraction tools",
      "Knowledge assistants grounded in your business documents",
      "Custom prompt architecture & validation guardrails",
    ],
    cta: "Explore AI Systems",
  },
  {
    id: "api-integrations",
    number: "04",
    title: "API & Systems Integration",
    outcome: "Ensure data flows seamlessly across your tech stack without manual data re-entry.",
    description: "I build reliable API connectors and webhooks between payment gateways, CRMs, database systems, and third-party SaaS tools so your team works from a single source of truth.",
    deliverables: [
      "Custom REST API integrations & webhooks",
      "Payment gateway integrations (Stripe, Square, M-Pesa)",
      "Database architecture & optimization (PostgreSQL/SQL)",
      "Third-party API migration & system sync",
    ],
    cta: "Integrate Your Systems",
  },
];

export const insights = [
  {
    slug: "why-legal-intake-fails-in-silence",
    date: "Feb 2026",
    category: "Legal Tech & AI",
    title: "Why legal intake fails in post-submission silence — and how sub-minute AI briefings solve it.",
    readTime: "6 min read",
    summary: "When a prospective law client submits a form, every minute of silence increases lead leakage. Here is how automated triage generates inform attorney briefs before the first call.",
  },
  {
    slug: "slack-as-mission-control-payroll",
    date: "Jan 2026",
    category: "Internal Operations",
    title: "Slack as Mission Control: Automating employee time tracking without SaaS bloat.",
    readTime: "5 min read",
    summary: "Instead of forcing field staff onto complex standalone attendance software, we built an n8n pipeline that turns natural Slack check-ins into audit-ready payroll files.",
  },
  {
    slug: "fastapi-for-operations-software",
    date: "Nov 2025",
    category: "Software Architecture",
    title: "Python & FastAPI for operations software: building for longevity over short-lived trends.",
    readTime: "8 min read",
    summary: "A practical look at why clean REST APIs, explicit data validation (Pydantic), and PostgreSQL schema boundaries produce internal tools that survive years of scaling.",
  },
  {
    slug: "dispatch-and-order-processing-bottlenecks",
    date: "Sep 2025",
    category: "E-Commerce Ops",
    title: "Refusing dashboards: designing quiet dispatch & order fulfillment workflows.",
    readTime: "7 min read",
    summary: "Dashboards often add visual noise. The best operational software ingests emails, updates the backend quietly, and hands operators actionable itineraries.",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Rahisisha Tech",
    location: "Nairobi, Kenya",
    duration: "2025 - Present",
    description: "Architecting modular web applications and backend automation services that streamline day-to-day business operations.",
    achievements: [
      "Designed clean modular backend services that improved system maintainability and data throughput.",
      "Optimized SQL query performance and caching strategies, reducing load times for core business modules.",
      "Collaborated directly with operating teams to ship custom features focused on operational efficiency.",
    ],
  },
  {
    title: "Backend Engineer",
    company: "ALX Africa",
    location: "Remote",
    duration: "2024 - 2025",
    description: "Engineered core backend systems, database schemas, and microservice APIs.",
    achievements: [
      "Developed core authentication and API modules for MVP platforms.",
      "Wrote comprehensive automated tests that improved code reliability and reduced regression bugs.",
    ],
  },
];

export const education = [
  {
    degree: "Software Engineering & AI Architecture",
    institution: "ALX Africa",
    year: "2024",
    description: "Intensive 12-month software engineering program covering full-stack architecture, systems design, and backend engineering.",
  },
  {
    degree: "Bachelor of Science in Telecommunications & IT",
    institution: "Kenyatta University",
    year: "2023",
    description: "Comprehensive foundation in network systems, algorithm analysis, software engineering principles, and databases.",
  },
];

export const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "n8n Automation",
  "TypeScript",
  "Next.js / React",
  "Node.js",
  "Docker",
  "REST APIs",
  "OpenAI API",
  "Shopify API",
  "Slack API",
  "Git & GitHub",
  "Make.com",
];
