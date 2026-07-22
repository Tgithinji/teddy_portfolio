export const caseStudies = [
  {
    category: "⚖️ Law Firms",
    projects: [
      {
        id: 10,
        title: "AI Intake Automation for Immigration Law Firms",
        subtitle: "Instant intake responses and structured case briefs for immigration clients",
        impactBadge: "Responds in under one minute",
        challenge: "Immigration inquiries were often met with silence after submission, costing firms leads and slowing intake response.",
        solutionBullets: [
          "Built an AI workflow that reads intake details and gauges urgency immediately",
          "Sent a personalized response to prospects instead of a generic follow-up",
          "Delivered a structured attorney brief with visa signals and recommended next steps",
        ],
        results: [
          "Sub-minute response time for intake submissions",
          "Fewer lost leads from post-submission silence",
          "Attorneys enter first calls already informed",
        ],
        metrics: [
          { value: "< 1 min", label: "Response time" },
          { value: "↓ 85%", label: "Follow-up delay" },
          { value: "↑ 100%", label: "Brief readiness" },
        ],
        role: "Automation Architect",
        industry: "Legal",
        duration: "3 weeks",
        client: "Immigration law firm",
        team: "Solo developer",
        testimonial: "The automation turned slow intake follow-up into an immediate, personalized client response.",
        techStack: ["n8n", "OpenAI", "Email API", "Google Sheets"],
        images: ["/immigration_law_n8n.png", "/immigration_client_email.png", "/immigration_lawyer_email-1.png", "/immigration_lawyer_email-2.png"],
        demo: "https://www.loom.com/share/521db541e5eb4ae590cc33ddd02c6fce",
      },
      {
        id: 9,
        title: "AI Intake Automation for Personal Injury Law Firms",
        subtitle: "Immediate client response plus structured attorney briefs",
        impactBadge: "Responds in under one minute",
        challenge: "Prospective clients were left waiting after intake form submission, causing lost leads and missed first-call opportunities.",
        solutionBullets: [
          "Built an AI flow that reads case details and gauges urgency instantly",
          "Sent a personalized response to the prospect instead of a generic reply",
          "Delivered a structured attorney brief with injury, insurance, and next-step signals",
        ],
        results: [
          "Sub-minute response time for intake submissions",
          "Fewer lost leads from silent post-submission periods",
          "Attorneys start first calls already informed",
        ],
        metrics: [
          { value: "< 1 min", label: "Response time" },
          { value: "↓ 90%", label: "Initial silence" },
          { value: "↑ 100%", label: "Brief readiness" },
        ],
        role: "Automation Architect",
        industry: "Legal",
        duration: "3 weeks",
        client: "Personal injury law firm",
        team: "Solo developer",
        testimonial: "The AI intake flow turned instant inquiries into informed first-call starts.",
        techStack: ["n8n", "OpenAI", "Email API", "Google Sheets"],
        images: ["/PI_law_n8n.png", "/PI_law_contact_form.png", "/PI_law_client_email.png", "/PI_law_lawyer_email.png"],
        demo: "https://www.loom.com/share/21381e666bfe47ee86c10b5f1a9da1cb",
      },
    ],
  },
  {
    category: "🛍️ E-commerce & Retail",
    projects: [
      {
        id: 4,
        title: "Automated order processing and support for e-commerce growth",
        subtitle: "Shopify operations and customer support automation",
        impactBadge: "Cut manual order handling significantly",
        challenge: "The business was losing time to manual order checks, failed payment follow-up, and slow support replies.",
        solutionBullets: [
          "Monitored new Shopify orders and tracked payment status in real time",
          "Triggered alerts for failed payments and support actions",
          "Generated personalized AI support messages for successful orders",
        ],
        results: [
          "Reduced manual workload for operations teams",
          "Improved customer response times",
          "Delivered a more consistent post-purchase experience",
        ],
        role: "Automation Engineer",
        industry: "E-commerce",
        duration: "3 weeks",
        client: "Retail business",
        team: "Solo developer",
        techStack: ["n8n", "Shopify API", "Google Sheets", "Slack API", "OpenAI"],
        thumbnail: "/shopify-orders-automation.png",
        demo: "https://vimeo.com/1148659395?share=copy&fl=sv&fe=ci",
      },
    ],
  },
  {
    category: "⚙️ Internal Tools & Operations",
    projects: [
      {
        id: 5,
        title: "Saved 10+ hours per week in employee time tracking",
        subtitle: "Slack-based attendance and payroll automation",
        impactBadge: "Saved 10+ hours each week",
        challenge: "The client spent too much time collecting IN/OUT messages, calculating hours, and preparing payroll.",
        solutionBullets: [
          "Automated message capture and time logging from Slack",
          "Calculated working hours and generated payroll files automatically",
          "Removed repetitive admin from the weekly payroll workflow",
        ],
        results: [
          "Saved about 10 hours of manual work per week",
          "Improved time-tracking accuracy",
          "Reduced administrative overhead",
        ],
        role: "Automation Engineer",
        industry: "Operations",
        duration: "1 week",
        client: "Internal ops team",
        team: "Solo developer",
        techStack: ["n8n", "Slack API", "Google Sheets", "PDF generation"],
        thumbnail: "/Slack_time_tracking.webp",
        demo: "https://drive.google.com/drive/folders/1vGOpVTHlRgCusIIUDvDS4POl2gu-ysSH?usp=sharing",
      },
      {
        id: 7,
        title: "Built a scalable backend for content platform growth",
        subtitle: "API foundation for users, moderation, and interactions",
        impactBadge: "Created a stronger backend foundation",
        challenge: "The platform needed a scalable backend to support users, moderation, and social interactions reliably.",
        solutionBullets: [
          "Built REST endpoints for pagination, following, and comments",
          "Implemented JWT-based security for protected routes",
          "Structured the backend for future growth and maintenance",
        ],
        results: [
          "Created a scalable foundation for growth",
          "Improved structure for content-heavy workflows",
          "Supported more reliable data flow for the platform",
        ],
        role: "Backend Engineer",
        industry: "Product",
        duration: "4 weeks",
        client: "Startup",
        team: "Solo developer",
        techStack: ["Python", "FastAPI", "PostgrSQL", "SQLAlchemy", "JWT"],
        thumbnail: "/blog_api.webp",
        websiteUrl: "",
        githubUrl: "https://github.com/Tgithinji/blog_api",
      },
    ],
  },
  {
    category: "✍️ Marketing & Content",
    projects: [
      {
        id: 8,
        title: "Automated blog publishing and content production at scale",
        subtitle: "AI-assisted WordPress content workflow",
        impactBadge: "Turned a stagnant blog into a publishing engine",
        challenge: "The client’s blog was rarely updated due to slow manual content production and inconsistent publishing.",
        solutionBullets: [
          "Built an automated WordPress workflow with topic research and outlines",
          "Used AI to generate SEO-ready articles and publish them regularly",
          "Removed the bottleneck of manual content production",
        ],
        results: [
          "Transformed the blog into a 24/7 content engine",
          "Saved hours of manual work each week",
          "Improved SEO consistency without a dedicated content team",
        ],
        role: "Automation Engineer",
        industry: "Marketing",
        duration: "2 weeks",
        client: "Content business",
        team: "Solo developer",
        techStack: ["n8n", "AI content generation", "WordPress", "SEO optimization"],
        thumbnail: "/wordpress_blog_automation.webp",
        demo: "https://drive.google.com/drive/folders/1BmIY0VVqck8lJFRAj3uHQbHaVd34FsIi?usp=sharing",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Rahisisha Tech",
    location: "Nairobi, Kenya",
    duration: "2025 - Present",
    description: "Building scalable web applications and implementing backend services that drive business operations.",
    achievements: [
      "Designed and implemented modular backend services to improve system maintainability and scalability.",
      "Optimized database queries and caching, reducing load times and improving the end-user experience.",
      "Collaborated with cross-functional teams to deliver new product features focused on operational efficiency."
    ],
  },
  {
    title: "Intern Backend Engineer",
    company: "ALX",
    location: "Remote",
    duration: "2024 - 2025",
    description: "Assisted in building backend systems and supporting product development for startup projects.",
    achievements: [
      "Developed core modules for an MVP used in initial user testing.",
      "Wrote automated tests that improved code reliability and reduced recurring bugs."
    ],
  },
];

export const education = [
  {
    degree: "Software Engineering & AI",
    institution: "ALX Africa",
    year: "",
    description: "Intensive 12-month program covering modern software development stack.",
  },
  {
    degree: "Bachelor of Science in Telecommunications & IT",
    institution: "Kenyatta University",
    year: "",
    description: "Focused on algorithms, and modern technologies.",
  },
];

export const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Node.js",
  "Next.js",
  "TypeScript",
  "n8n",
  "make.com",
  "Docker",
  "AWS",
  "REST APIs",
  "Microservices",
];

export const clientAchievements = [
  "Eliminate repetitive manual work",
  "Improve operational efficiency",
  "Connect disconnected business systems",
  "Reduce administrative workload",
  "Improve customer response times",
  "Build software tailored to business workflows",
];

export const services = [
  {
    icon: "Zap",
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and connect the tools your team already uses.",
    cta: "Find Automation Opportunities",
    features: [
      "Lead follow-up automation",
      "CRM updates",
      "WhatsApp workflows",
      "Reporting automation",
    ],
  },
  {
    icon: "Code",
    title: "Custom Software Development",
    description: "Build software tailored to your business instead of forcing your business into generic tools.",
    cta: "Discuss Your Project",
    features: [
      "Internal dashboards",
      "Booking systems",
      "Client portals",
      "Operations management tools",
    ],
  },
  {
    icon: "Bot",
    title: "AI Solutions",
    description: "Use AI to automate customer support, document processing, and business operations.",
    cta: "Explore AI Solutions",
    features: [
      "AI chatbots",
      "Knowledge assistants",
      "Proposal generators",
      "Document analysis",
    ],
  },
  {
    icon: "Puzzle",
    title: "API & Systems Integration",
    description: "Connect your systems so data flows automatically.",
    cta: "Integrate Your Systems",
    features: [
      "CRM integration",
      "Payment integration",
      "ERP integration",
      "Third-party APIs",
    ],
  },
];

export const industries = [
  {
    title: "Travel Agencies",
    features: [
      "Flight inquiry automation",
      "Booking workflow systems",
      "Customer communication automation",
    ],
  },
  {
    title: "Logistics & Delivery",
    features: [
      "Delivery tracking systems",
      "Operations dashboards",
      "Workflow automation",
    ],
  },
  {
    title: "NGOs & Foundations",
    features: [
      "Donor management systems",
      "Reporting tools",
      "Volunteer coordination solutions",
    ],
  },
  {
    title: "Service Businesses",
    features: [
      "Lead capture automation",
      "Customer onboarding",
      "Appointment management",
    ],
  },
];

export const faqData = [
  {
    question: "How do you identify what processes to automate?",
    answer: "We start with a Free Business Automation Audit. We map out your current workflows, identify bottlenecks and repetitive tasks, and prioritize automations that will save the most time or generate the most revenue.",
  },
  {
    question: "Which technologies do you use?",
    answer: "I focus on the right tool for the job. For software, I use Python (FastAPI), React/Next.js, and SQL databases. For automation, I leverage n8n, Make, Zapier, and custom API scripts.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer: "Yes. I can connect CRMs, payment systems, Google Workspace, WhatsApp, and most major APIs or third-party services so you don't have to change your current toolset.",
  },
  {
    question: "What does an engagement look like?",
    answer: "Every business has unique requirements. We begin with a discovery call, after which I propose a tailored solution—whether it's a one-off custom build or an ongoing automation partnership.",
  },
];
