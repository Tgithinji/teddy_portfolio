export const softwareProjects = [
  {
    id: 1,
    title: "Fondation Marie Mwape",
    description:
      "A bilingual (French/English) NGO website highlighting the mission, leadership, and initiatives of Fondation Marie Mwape pour le Progrès Social.",
    thumbnail: "/fondationmwape.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    websiteUrl: "https://fondation-mwape.vercel.app/",
    githubUrl: "https://github.com/Tgithinji/fondation-mwape",
    impact:
      "Designed and deployed a professional NGO website aligned with brand identity, improving outreach and credibility for fundraising and social impact.",
  },
  {
    id: 2,
    title: "Booking Wheels",
    description:
      "A car rental platform that lets users browse vehicles, book online, and manage reservations with a modern stack",
    thumbnail: "/Bookingwheels.webp",
    techStack: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    websiteUrl: "https://githinjiguru.pythonanywhere.com/",
    githubUrl: "https://github.com/Tgithinji/Booking_wheels",
    impact:
      "Developed an end-to-end e-commerce workflow with user authentication, cart, and booking flow.",
  },
  {
    id: 3,
    title: "Blog API",
    description:
      "API with endpoints for blogging functionality — user auth, posts, comments, likes, follows.",
    thumbnail: "/blog_api.webp",
    techStack: ["Python", "FastAPI", "PostgrSQL", "SQLAlchemy", "JWT"],
    websiteUrl: "",
    githubUrl: "https://github.com/Tgithinji/blog_api",
    impact:
      "The structured endpoints for pagination, following, and comment management solidified my understanding of scalable API design",
  },
];

export const automationProjects = [
  {
    id: 1,
    title: "Delivery Chat & Rider Assignment",
    problem:
      "The delivery company faced delays and miscommunication between customers, dispatchers, and riders.",
    solution:
      "Created a multi-stage chat automation: (1) Customer order intake, (2) Rider assignment with accept/decline + timeout logic, (3) Real-time updates synced with Airtable and customer notifications.",
    impact:
      "Reduced order assignment delays, improved customer transparency with live updates, and streamlined communication across operations.",
    tech: ["n8n", "Airtable", "WhatsApp API", "OpenAI intergration"],
    thumbnail: "/Nai_del.webp",
    demo: "https://drive.google.com/drive/folders/1eE4IKj9B3DhORzfXi7ZO-pv--H-KBkdL?usp=sharing",
  },
  {
    id: 2,
    title: "Document Uploader & CRM Autofill",
    problem:
      "Manual document handling was time-consuming and error-prone, requiring staff to upload PDFs and manually copy data into the CRM.",
    solution:
      "Built an automation that allows PDF/document uploads, extracts key information using OCR/AI, and automatically fills CRM fields through API integration.",
    impact:
      "Eliminated repetitive manual data entry, reduced human error, and saved hours of administrative work per week.",
    thumbnail: "/Document-crm.webp",
    tech: ["n8n", "OpenAI API", "API integration"],
    demo: "https://drive.google.com/drive/folders/1K6BxNrc6Bx7WNkYs5pljUpaz__xpjLFv?usp=sharing",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Rahisisha Tech",
    location: "Nairobi, Kenya",
    duration: "2025 - Present",
    description:
      "Contributing to the development of scalable web applications and supporting junior developers.",
    achievements: [
      "Designed and implemented modular backend services to improve maintainability",
      "Optimized database queries and caching, reducing page load times noticeably",
      "Collaborated with a team of 5 developers to deliver new product features on schedule",
    ],
  },
  {
    title: "Intern Backend Engineer",
    company: "ALX",
    location: "Remote",
    duration: "2024 - 2025",
    description:
      "Assisted in building backend systems and supporting product development for startup projects.",
    achievements: [
      "Developed core modules for an MVP used in initial user testing",
      "Wrote automated tests that improved code reliability and reduced recurring bugs",
    ],
  },
];

export const education = [
  {
    degree: "Software Engineering & AI",
    institution: "ALX Africa",
    year: "",
    description:
      "Intensive 12-month program covering modern software development stack.",
  },
  {
    degree: "Bachelor of Science in Telecommunications & IT",
    institution: "Kenyatta University",
    year: "",
    description: "Focused on algorithms, and modern technologies.",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MySQL",
  "FastAPI",
  "Django",
  "Flask",
  "AWS",
  "Azure",
  "Docker",
  "Git",
  "n8n",
  "make.com",
  "Tailwind CSS",
  "GraphQL",
  "REST APIs",
  "Microservices",
];

export const services = [
  {
    icon: "Code",
    title: "Custom Software Development",
    description:
      "Full-stack web applications, mobile apps, and enterprise solutions tailored to your business needs.",
    cta: "Start Project",
    features: [],
  },
  {
    icon: "Zap",
    title: "Process Automation",
    description:
      "Streamline your workflows with intelligent automation that saves time and reduces manual errors.",
    cta: "Automate Now",
    features: [],
  },
  {
    icon: "Puzzle",
    title: "System Integration",
    description:
      "Connect your existing tools and platforms for seamless data flow and improved efficiency.",
    cta: "Integrate Systems",
    features: [],
  },
  {
    icon: "Bot",
    title: "AI Assistant Development",
    description:
      "Custom AI chatbots and intelligent assistants to enhance customer experience and support.",
    cta: "Build AI Solution",
    features: [],
  },
];

export const automationPricingKenya = [
  {
    name: "Starter",
    price: "From KES 8,000",
    usdPrice: "From $60",
    description: "Simple 1–2 workflow automation for startups / freelancers",
    features: [
      "Connect up to 2 apps",
      "Basic monitoring & error alerts",
      "Email support",
      "Setup included",
    ],
    range: "KES 8,000 – 15,000",
    support: "Email support only (up to 2 weeks after delivery)",
    popular: false,
  },
  {
    name: "Growth",
    price: "From KES 25,000",
    usdPrice: "From $200",
    description: "Multi-step workflows for small businesses",
    features: [
      "Connect up to 5 apps",
      "Advanced monitoring / retries",
      "Monthly check-in / support call",
      "Priority email support",
    ],
    range: "KES 25,000 – 50,000",
    support: "Setup + 1 month of monitoring, monthly call included",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    usdPrice: "Custom",
    description: "Complex / large-scale automation solutions",
    features: [
      "Custom integrations (APIs, internal tools, AI)",
      "High reliability / SLAs",
      "Dedicated support",
      "Scalable & maintainable solution",
    ],
    range: "KES 50,000+",
    support: "Dedicated support with SLAs, ongoing retainer contract",
    popular: false,
  },
];

export const softwarePricingKenya = [
  {
    name: "Static Website",
    price: "From KES 15,000",
    usdPrice: "From $110",
    description: "Perfect for small businesses or startups",
    features: [
      "Up to 5 informational pages",
      "Responsive design",
      "Contact form",
      "Social media integration",
      "Basic SEO setup",
      "Fast turnaround",
    ],
    range: "KES 15,000 – 30,000",
    support: "1 month of bug fixes after delivery (email support only)",
    popular: false,
  },
  {
    name: "Dynamic Website",
    price: "From KES 50,000",
    usdPrice: "From $370",
    description: "Ideal for growing businesses",
    features: [
      "CMS integration",
      "Blog functionality",
      "Advanced contact forms",
      "Social media integration",
      "SEO optimization",
      "Custom features",
      "Content management system",
      "Up to 2 revision rounds",
    ],
    range: "KES 50,000 – 100,000",
    support: "1 month bug fixes + 1 support call",
    popular: true,
  },
  {
    name: "E-Commerce Website",
    price: "From KES 50,000",
    usdPrice: "From $370",
    description: "Complete online store solution",
    features: [
      "Product catalog",
      "Shopping cart functionality",
      "Payment gateway integration (M-PESA, cards, PayPal)",
      "Customer accounts",
      "Order management",
      "Inventory tracking",
      "SEO optimization",
      "Mobile responsive design",
    ],
    range: "KES 50,000 – 150,000",
    support: "1 month bug fixes + basic store management training",
    popular: false,
  },
  {
    name: "Corporate Website",
    price: "From KES 200,000",
    usdPrice: "From $1,480",
    description: "Sophisticated solutions for large businesses",
    features: [
      "Custom design",
      "Complex functionalities",
      "System integration (CRM/ERP)",
      "Enhanced security",
      "Comprehensive support",
      "Multi-user authentication",
      "Advanced analytics",
      "Custom dashboards",
    ],
    range: "KES 200,000+",
    support: "Dedicated support with SLAs, ongoing retainer contract",
    popular: false,
  },
];

export const faqData = [
  {
    question: "How long does setup take?",
    answer:
      "Most starter automations can be set up in 2–3 days. Larger, custom workflows may take 1–2 weeks depending on complexity.",
  },
  {
    question: "Which tools do you use for automation?",
    answer:
      "I primarily use Make (Integromat), n8n, and Zapier. For advanced projects, I also integrate AI agents and custom APIs.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer:
      "Yes. I can connect CRMs, payment systems (like Mpesa), Google Workspace, WhatsApp, and most major apps.",
  },
  {
    question: "What if I need ongoing support?",
    answer:
      "My Growth and Enterprise plans include monitoring and support. For Starter plans, you can upgrade anytime if you need more.",
  },
  {
    question: "How do payments work?",
    answer:
      "For Starter and Growth, payment is upfront. For Enterprise, we agree on a custom plan and billing cycle.",
  },
];

// Aliases to match imports in components
export const automationPricing = automationPricingKenya;
export const softwarePricing = softwarePricingKenya;
