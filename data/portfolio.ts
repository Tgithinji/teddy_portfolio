export const softwareProjects = [
  {
    id: 1,
    title: "Fondation Marie Mwape",
    problem: "The foundation needed a professional digital presence to improve outreach, establish credibility, and facilitate fundraising, but lacked a centralized platform.",
    solution: "Designed and deployed a bilingual (French/English) NGO website tailored to their brand identity and mission.",
    result: "Improved outreach and credibility for fundraising and social impact, providing a professional hub for stakeholders.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    thumbnail: "/fondationmwape.webp",
    websiteUrl: "https://fmmps.org",
    githubUrl: "https://github.com/Tgithinji/fondation-mwape",
  },
  {
    id: 2,
    title: "Booking Wheels",
    problem: "Manual car rental bookings were causing inefficiencies, lost leads, and poor customer experience.",
    solution: "Developed an end-to-end e-commerce workflow with user authentication, inventory management, and an automated booking flow.",
    result: "Reduced booking management time by automating customer requests and centralizing operations.",
    techStack: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    thumbnail: "/Bookingwheels.webp",
    websiteUrl: "https://githinjiguru.pythonanywhere.com/",
    githubUrl: "https://github.com/Tgithinji/Booking_wheels",
  },
  {
    id: 3,
    title: "Blog API",
    problem: "A content platform required a scalable backend to handle users, content moderation, and social interactions.",
    solution: "Built a robust API with endpoints for pagination, following, and comment management with strict JWT-based security.",
    result: "Created a scalable foundation that supports growing user bases and structured data flow for content-heavy applications.",
    techStack: ["Python", "FastAPI", "PostgrSQL", "SQLAlchemy", "JWT"],
    thumbnail: "/blog_api.webp",
    websiteUrl: "",
    githubUrl: "https://github.com/Tgithinji/blog_api",
  },
];

export const automationProjects = [
  {
    id: 1,
    title: "AI-Powered Shopify Order Processing & Support",
    problem: "The e-commerce business struggled with manual order handling, slow customer responses, and limited visibility into failed or pending payments, leading to operational inefficiencies and poor customer experience.",
    solution: "Designed and implemented an end-to-end automation that monitors new Shopify orders, centralizes order tracking, and evaluates payment status in real time. Failed payments trigger alerts, while successful orders automatically generate personalized AI support messages.",
    result: "Reduced manual workload for operations teams, significantly improved customer response times, and delivered a more consistent post-purchase experience.",
    techStack: ["n8n", "Shopify API", "Google Sheets", "Slack API", "OpenAI"],
    thumbnail: "/shopify-orders-automation.png",
    demo: "https://vimeo.com/1148659395?share=copy&fl=sv&fe=ci",
  },
  {
    id: 2,
    title: "WordPress Blog Automation with AI",
    problem: "The client’s blog was rarely updated due to slow, inconsistent, and resource-intensive manual content creation, causing missed SEO opportunities.",
    solution: "Built a fully automated WordPress content workflow using n8n and AI: topic research, SEO-optimized outlines, article generation, and auto-publishing.",
    result: "Transformed a stagnant blog into a 24/7 content engine, saving hours of manual work weekly and improving SEO performance without a dedicated content team.",
    techStack: ["n8n", "AI content generation", "WordPress", "SEO optimization"],
    thumbnail: "/wordpress_blog_automation.webp",
    demo: "https://drive.google.com/drive/folders/1BmIY0VVqck8lJFRAj3uHQbHaVd34FsIi?usp=sharing"
  },
  {
    id: 3,
    title: "Delivery Chat & Rider Assignment",
    problem: "The delivery company faced delays and miscommunication between customers, dispatchers, and riders.",
    solution: "Created a multi-stage chat automation handling customer order intake, rider assignment with timeout logic, and real-time updates synced with Airtable.",
    result: "Reduced order assignment delays, improved customer transparency with live updates, and streamlined communication across operations.",
    techStack: ["n8n", "Airtable", "WhatsApp API", "OpenAI integration"],
    thumbnail: "/Nai_del.webp",
    demo: "https://vimeo.com/1148629473?share=copy&fl=sv&fe=ci",
  },
  {
    id: 4,
    title: "Slack Time-Tracking Automation",
    problem: "The client spent excessive time manually tracking employee IN/OUT messages, calculating hours, and generating payroll.",
    solution: "Streamlined Slack time-tracking by automating message capture with n8n, logging data into Google Sheets, calculating hours, and generating payroll PDFs automatically.",
    result: "Saved approximately 10 hours of manual work per week, improved accuracy of time tracking, and reduced administrative overhead.",
    techStack: ["n8n", "Slack API", "Google Sheets", "PDF generation"],
    thumbnail: "/Slack_time_tracking.webp",
    demo: "https://drive.google.com/drive/folders/1vGOpVTHlRgCusIIUDvDS4POl2gu-ysSH?usp=sharing"
  },
  {
    id: 5,
    title: "Document Uploader & CRM Autofill",
    problem: "Manual document handling was time-consuming and error-prone, requiring staff to upload PDFs and manually copy data into the CRM.",
    solution: "Built an automation that allows PDF uploads, extracts key information using OCR/AI, and automatically fills CRM fields through API integration.",
    result: "Eliminated repetitive manual data entry, reduced human error, and saved hours of administrative work per week.",
    techStack: ["n8n", "OpenAI API", "API integration"],
    thumbnail: "/Document-crm.webp",
    demo: "https://drive.google.com/drive/folders/1K6BxNrc6Bx7WNkYs5pljUpaz__xpjLFv?usp=sharing",
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
