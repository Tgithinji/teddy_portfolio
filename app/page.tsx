"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Building,
  Globe,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Check,
  Plus,
  Minus,
  ExternalLink,
  GraduationCap,
  Copy,
  Calendar,
  Download,
  Code,
  Zap,
  Puzzle,
  Bot,
  Settings,
  Workflow,
  Database,
  MessageCircle,
  Send,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

const glowOnHover = {
  hover: {
    boxShadow: "0 20px 25px -5px rgba(var(--primary), 0.3), 0 10px 10px -5px rgba(var(--primary), 0.1)",
    transition: { duration: 0.3 },
  },
}

const ProjectCard = ({ project, type = "software", index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group border-border bg-card overflow-hidden">
        <motion.div variants={scaleOnHover} className="aspect-video overflow-hidden">
          {type === "automation" && project.icon ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                {project.icon}
              </motion.div>
            </div>
          ) : (
            <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <motion.h3
              className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1"
              whileHover={{ x: 4 }}
            >
              {project.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
          <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="initial" animate="animate">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)",
                }}
                transition={{ delay: tagIndex * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ProjectGrid = ({ projects, type = "software" }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} type={type} index={index} />
      ))}
    </motion.div>
  )
}

const TabNavigation = ({ activeProjectTab, setActiveProjectTab }) => {
  return (
    <div className="flex justify-center mb-6">
      <motion.div
        className="bg-card border border-border rounded-lg p-1 inline-flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          onClick={() => setActiveProjectTab("software")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "software"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeProjectTab === "software" && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">Software Projects</span>
        </motion.button>
        <motion.button
          onClick={() => setActiveProjectTab("automation")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "automation"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeProjectTab === "automation" && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">Automation Projects</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

const automationCaseStudies = [
  {
    id: 1,
    title: "E-commerce Order Processing Automation",
    thumbnail: "/automated-order-processing-dashboard.png",
    problem: "Manual order processing taking 4+ hours daily, prone to errors",
    solution:
      "Built automated system using Python and APIs to process orders, update inventory, and send notifications in real-time.",
    impact: "Reduced processing time by 95% and eliminated human errors, saving 20+ hours weekly.",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Customer Support Ticket Routing",
    thumbnail: "/customer-support-automation-system.png",
    problem: "Support tickets manually assigned, causing delays and uneven workload",
    solution:
      "Developed intelligent routing system using NLP to categorize and assign tickets based on urgency and expertise.",
    impact: "Improved response time by 60% and increased customer satisfaction scores by 40%.",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Financial Report Generation",
    thumbnail: "/automated-financial-reporting-dashboard.png",
    problem: "Monthly reports required 2 days of manual data compilation and formatting",
    solution:
      "Created automated pipeline that pulls data from multiple sources, generates formatted reports, and distributes via email.",
    impact: "Reduced report generation time from 2 days to 30 minutes, ensuring 100% accuracy.",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Content Scheduler",
    thumbnail: "/social-media-automation-dashboard.png",
    problem: "Inconsistent posting schedule and manual content management across platforms",
    solution: "Built multi-platform scheduler with AI-powered optimal timing and automated content optimization.",
    impact: "Increased engagement by 75% and reduced content management time by 80%.",
    demoUrl: "#",
  },
]

const CaseStudyCard = ({ caseStudy, index }) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="space-y-3">
        <div className="aspect-video rounded-lg overflow-hidden bg-muted">
          <img
            src={caseStudy.thumbnail || "/placeholder.svg"}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-bold text-lg text-foreground">{caseStudy.title}</h3>

        <p className="text-sm italic text-muted-foreground">
          <span className="font-medium">Problem:</span> {caseStudy.problem}
        </p>

        <p className="text-sm text-foreground">
          <span className="font-medium">Solution:</span> {caseStudy.solution}
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
          <p className="text-sm text-foreground">
            <span className="font-medium text-primary">Impact:</span> {caseStudy.impact}
          </p>
        </div>

        {caseStudy.demoUrl && (
          <button className="w-full sm:w-auto px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            View Demo
          </button>
        )}
      </div>
    </motion.div>
  )
}

const CaseStudyGrid = ({ caseStudies }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
      ))}
    </motion.div>
  )
}

const SoftwareCaseStudyCard = ({ caseStudy, index }) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      style={{
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onHoverStart={() => {
        // Add glow border effect on hover
      }}
    >
      <div className="space-y-3 group-hover:ring-2 group-hover:ring-primary/20 rounded-2xl transition-all duration-300">
        <div className="aspect-video rounded-xl overflow-hidden bg-muted">
          <motion.img
            src={caseStudy.thumbnail || "/placeholder.svg"}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
          {caseStudy.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.description}</p>

        <div className="flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          {caseStudy.websiteUrl && (
            <motion.button
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Website
            </motion.button>
          )}
          {caseStudy.githubUrl && (
            <motion.button
              className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              GitHub Repo
            </motion.button>
          )}
        </div>

        {caseStudy.impact && (
          <p className="text-sm italic text-muted-foreground bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
            {caseStudy.impact}
          </p>
        )}
      </div>
    </motion.div>
  )
}

const SoftwareCaseStudyGrid = ({ caseStudies }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {caseStudies.map((caseStudy, index) => (
        <SoftwareCaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
      ))}
    </motion.div>
  )
}

export default function Page() {
  const [activeProjectTab, setActiveProjectTab] = useState("software")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alex.johnson@email.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const toggleFAQItem = (index: number) => {
    setOpenFAQItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const softwareProjects = [
    {
      id: 1,
      title: "Modern E-commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with team features, deadlines, and progress tracking.",
      image: "/task-management-app.png",
      tags: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application with forecasts, maps, and customizable alerts.",
      image: "/weather-dashboard.png",
      tags: ["React", "API Integration", "Charts", "PWA"],
    },
    {
      id: 4,
      title: "AI Chatbot Interface",
      description: "Intelligent conversational interface with natural language processing and context awareness.",
      image: "/ai-chatbot-interface.png",
      tags: ["Python", "AI/ML", "FastAPI", "WebSocket"],
    },
  ]

  const automationProjects = [
    {
      id: 5,
      title: "CRM Lead Automation",
      description: "Automated lead capture and nurturing system that integrates with multiple marketing channels.",
      icon: <Database className="w-12 h-12 text-primary" />,
      tags: ["Zapier", "CRM", "Email Marketing", "API"],
    },
    {
      id: 6,
      title: "Invoice Processing Bot",
      description: "Smart document processing system that extracts data and updates accounting software automatically.",
      icon: <Bot className="w-12 h-12 text-primary" />,
      tags: ["Python", "OCR", "PDF Processing", "Automation"],
    },
    {
      id: 7,
      title: "Social Media Scheduler",
      description: "Multi-platform content scheduling and analytics tool with AI-powered optimization.",
      icon: <Settings className="w-12 h-12 text-primary" />,
      tags: ["Node.js", "Social APIs", "Scheduling", "Analytics"],
    },
    {
      id: 8,
      title: "Inventory Sync System",
      description: "Real-time inventory synchronization across multiple sales channels and warehouses.",
      icon: <Workflow className="w-12 h-12 text-primary" />,
      tags: ["Integration", "Real-time", "E-commerce", "API"],
    },
  ]

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Architected and built a microservices platform serving 100k+ daily users",
        "Reduced application load time by 40% through performance optimization",
        "Led a team of 5 developers in delivering critical product features",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Developed end-to-end solutions for early-stage startup products.",
      achievements: [
        "Built MVP that secured $2M in Series A funding",
        "Implemented automated testing reducing bugs by 60%",
        "Integrated payment systems processing $500k+ monthly",
      ],
    },
    {
      title: "Software Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      duration: "2018 - 2020",
      description: "Created custom web solutions for diverse client portfolio.",
      achievements: [
        "Delivered 25+ client projects with 98% satisfaction rate",
        "Specialized in e-commerce and CMS development",
        "Mentored 3 junior developers and interns",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      year: "2014 - 2018",
      description: "Focused on software engineering, algorithms, and web technologies.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      year: "2017",
      description: "Intensive 12-week program covering modern web development stack.",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Microservices",
  ]

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Full-stack web applications, mobile apps, and enterprise solutions tailored to your business needs.",
      cta: "Start Project",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation that saves time and reduces manual errors.",
      cta: "Automate Now",
    },
    {
      icon: Puzzle,
      title: "System Integration",
      description: "Connect your existing tools and platforms for seamless data flow and improved efficiency.",
      cta: "Integrate Systems",
    },
    {
      icon: Bot,
      title: "AI Assistant Development",
      description: "Custom AI chatbots and intelligent assistants to enhance customer experience and support.",
      cta: "Build AI Solution",
    },
  ]

  const automationPlans = [
    {
      name: "Starter",
      price: "KSh 7,500",
      priceSubtext: "~$60",
      description: "Simple 1–2 workflow automation",
      features: ["Connection of up to 2 apps", "Basic monitoring", "Email support", "Setup included"],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "KSh 20,000",
      priceSubtext: "~$160",
      description: "Multi-step workflows",
      features: [
        "Connection of up to 5 apps",
        "Advanced monitoring",
        "Monthly support calls",
        "Priority email support",
      ],
      cta: "Scale with Automation",
      isHighlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      priceSubtext: "",
      description: "Unlimited workflows",
      features: [
        "Advanced integrations (APIs, AI agents)",
        "Dedicated support",
        "Custom development",
        "SLA guarantees",
      ],
      cta: "Request Quote",
    },
  ]

  const softwarePlans = [
    {
      name: "Starter Website",
      price: "KSh 15,000",
      priceSubtext: "~$120",
      description: "Simple static site (up to 3 pages)",
      features: ["Responsive design", "Fast delivery", "Basic SEO setup", "Contact form"],
      cta: "Start Small",
    },
    {
      name: "Business Website",
      price: "KSh 35,000",
      priceSubtext: "~$280",
      description: "Full website (5–7 pages)",
      features: ["Blog or CMS integration", "SEO & mobile optimization", "Analytics setup", "Social media integration"],
      cta: "Build My Site",
      isHighlighted: true,
    },
    {
      name: "Web App",
      price: "From KSh 65,000",
      priceSubtext: "~$500",
      description: "Custom web application",
      features: ["Authentication + database", "APIs and integrations", "Admin dashboard", "User management"],
      cta: "Get a Web App",
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      priceSubtext: "",
      description: "Complex dashboards / AI integration",
      features: ["Multi-user support", "Dedicated infrastructure", "Advanced security", "Ongoing maintenance"],
      cta: "Request Quote",
    },
  ]

  const faqData = [
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
      answer: "Yes. I can connect CRMs, payment systems (like Mpesa), Google Workspace, WhatsApp, and most major apps.",
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
  ]

  const handleContactClick = () => {
    const contactTab = document.querySelector('[data-value="contact"]') as HTMLElement
    if (contactTab) {
      contactTab.click()
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  const softwareCaseStudies = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      thumbnail: "/modern-ecommerce-dashboard.png",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      websiteUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      impact: "Increased client sales by 150% and reduced order processing time by 60%",
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description:
        "Collaborative project management platform with real-time updates, team collaboration, and advanced reporting.",
      thumbnail: "/task-management-app.png",
      techStack: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      websiteUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/example/task-manager",
      impact: "Helped 500+ teams improve productivity by 40% with streamlined workflows",
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather monitoring with predictive analytics, custom alerts, and historical data visualization.",
      thumbnail: "/weather-dashboard.png",
      techStack: ["React", "Python", "FastAPI", "Redis", "Chart.js"],
      websiteUrl: "https://example-weather.com",
      githubUrl: "https://github.com/example/weather-dashboard",
      impact: "Provides accurate weather insights to 10,000+ users daily with 99.9% uptime",
    },
    {
      id: 4,
      title: "AI Customer Support",
      description:
        "Intelligent chatbot with natural language processing, context awareness, and seamless human handoff.",
      thumbnail: "/ai-chatbot-interface.png",
      techStack: ["Python", "TensorFlow", "FastAPI", "WebSocket", "OpenAI"],
      websiteUrl: "https://example-ai-support.com",
      githubUrl: "https://github.com/example/ai-chatbot",
      impact: "Reduced customer support response time by 80% while maintaining 95% satisfaction rate",
    },
    {
      id: 5,
      title: "Financial Portfolio Tracker",
      description:
        "Investment portfolio management with real-time market data, performance analytics, and risk assessment.",
      thumbnail: "/financial-portfolio-dashboard.png",
      techStack: ["Next.js", "TypeScript", "Prisma", "TradingView", "Vercel"],
      websiteUrl: "https://example-portfolio.com",
      githubUrl: "https://github.com/example/portfolio-tracker",
      impact: "Manages $2M+ in tracked investments with real-time performance insights",
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "Educational platform with course creation, progress tracking, interactive quizzes, and certification system.",
      thumbnail: "/lms-interface.png",
      techStack: ["React", "Django", "PostgreSQL", "AWS S3", "Stripe"],
      websiteUrl: "https://example-lms.com",
      githubUrl: "https://github.com/example/lms-platform",
      impact: "Educated 5,000+ students with 90% course completion rate and positive feedback",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <motion.div
          className="lg:w-80 lg:fixed lg:h-screen bg-card border-r border-border p-6 lg:overflow-y-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="text-center">
              <motion.div
                className="relative w-32 h-32 mx-auto mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="/professional-developer-headshot.png"
                  alt="Alex Johnson"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  whileHover={{ borderColor: "rgba(var(--primary), 0.5)" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Alex Johnson
              </motion.h1>
              <motion.p
                className="text-primary font-medium mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Software Engineer
              </motion.p>
              <motion.p
                className="text-muted-foreground text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Passionate full-stack developer with 6+ years of experience building scalable web applications and
                automation solutions.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={copyEmail}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-accent transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  alex.johnson@email.com
                </span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-green-500 ml-auto" />
                ) : (
                  <Copy className="w-3 h-3 text-muted-foreground ml-auto" />
                )}
              </motion.button>

              <div className="flex items-center gap-3 p-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">San Francisco, CA</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">TechCorp Solutions</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Globe className="w-4 h-4 text-primary" />
                <a
                  href="https://alexjohnson.dev"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  alexjohnson.dev
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: Github, href: "https://github.com/alexjohnson", color: "hover:text-gray-400" },
                { icon: Linkedin, href: "https://linkedin.com/in/alexjohnson", color: "hover:text-blue-400" },
                { icon: Twitter, href: "https://twitter.com/alexjohnson", color: "hover:text-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-accent rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* About Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">About</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I specialize in creating efficient, scalable solutions that help businesses grow. From custom web
                    applications to intelligent automation systems, I bring ideas to life with clean code and thoughtful
                    design.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <motion.div
            className="p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="contact" data-value="contact">
                  Contact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6">
                <div className="max-w-6xl mx-auto px-4 py-6">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      A showcase of my recent work in software development and automation solutions.
                    </p>
                  </motion.div>

                  <TabNavigation activeProjectTab={activeProjectTab} setActiveProjectTab={setActiveProjectTab} />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProjectTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeProjectTab === "software" ? (
                        <div>
                          <motion.h2
                            className="text-2xl font-bold text-foreground mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            Projects
                          </motion.h2>
                          <SoftwareCaseStudyGrid caseStudies={softwareCaseStudies} />
                        </div>
                      ) : (
                        <div>
                          <motion.h2
                            className="text-2xl font-bold text-foreground mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            Projects
                          </motion.h2>
                          <CaseStudyGrid caseStudies={automationCaseStudies} />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6">
                <div className="max-w-6xl mx-auto px-4 py-6">
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h1 className="text-4xl font-bold text-foreground mb-4">Services</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      Professional software development and automation services to help your business thrive.
                    </p>
                  </motion.div>

                  {/* Services Grid */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {services.map((service, index) => (
                      <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                  </motion.div>

                  {/* Pricing Section */}
                  <div className="mt-16">
                    <div className="text-center mb-8">
                      <motion.h2
                        className="text-3xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Pricing
                      </motion.h2>
                      <motion.p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Choose the plan that fits your needs.
                      </motion.p>
                    </div>

                    <Tabs defaultValue="automation" className="w-full max-w-6xl mx-auto">
                      <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-lg">
                        <TabsTrigger
                          value="automation"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
                        >
                          Automation
                        </TabsTrigger>
                        <TabsTrigger
                          value="software"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
                        >
                          Software & Web Development
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="automation">
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-3 gap-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          variants={staggerContainer}
                        >
                          {automationPlans.map((plan, index) => (
                            <PricingCard key={plan.name} plan={plan} index={index} isHighlighted={plan.isHighlighted} />
                          ))}
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="software">
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          variants={staggerContainer}
                        >
                          {softwarePlans.map((plan, index) => (
                            <PricingCard key={plan.name} plan={plan} index={index} isHighlighted={plan.isHighlighted} />
                          ))}
                        </motion.div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* FAQ Section */}
                  <div className="mt-16">
                    <div className="text-center mb-8">
                      <motion.h2
                        className="text-3xl font-bold text-foreground mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        Frequently Asked Questions
                      </motion.h2>
                      <motion.p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Answers to common questions about my services.
                      </motion.p>
                    </div>

                    <motion.div
                      className="max-w-3xl mx-auto space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      {faqData.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                        >
                          <FAQItem
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFAQItems.includes(index)}
                            onToggle={() => toggleFAQItem(index)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Call to Action */}
                  <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                  >
                    <div className="max-w-3xl mx-auto">
                      <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-12 text-center shadow-2xl shadow-primary/5">
                        <motion.h2
                          className="text-4xl font-bold text-foreground mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.6 }}
                        >
                          Let's Automate Your Business
                        </motion.h2>

                        <motion.p
                          className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.7 }}
                        >
                          Whether you need custom software or smart automation, I can help streamline your workflow and
                          save you time.
                        </motion.p>

                        <motion.button
                          onClick={handleContactClick}
                          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.8 }}
                          aria-label="Contact Form"
                        >
                          Get In Touch
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="resume" className="space-y-6">
                <div className="max-w-4xl mx-auto px-4 py-6">
                  <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h1 className="text-4xl font-bold text-foreground mb-4">Resume</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      My professional journey, education, and technical expertise.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF Resume
                    </Button>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Experience */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-4">Experience</h2>
                      <div className="space-y-6">
                        {experiences.map((experience, index) => (
                          <ExperienceItem key={index} experience={experience} />
                        ))}
                      </div>
                    </motion.div>

                    {/* Education & Skills */}
                    <motion.div
                      className="space-y-8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {/* Education */}
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
                        <div className="space-y-6">
                          {education.map((edu, index) => (
                            <EducationItem key={index} education={edu} />
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">Technical Skills</h2>
                        <SkillsGrid skills={skills} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>

              {/* Updated Contact tab layout to match specifications */}
              <TabsContent value="contact" className="space-y-4">
                <div className="max-w-3xl mx-auto px-4 py-6">
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h1 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h1>
                    <p className="text-muted-foreground text-lg">
                      Have a project in mind? Fill out the form or reach me directly.
                    </p>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                  >
                    <ContactForm />
                  </motion.div>

                  {/* Direct Contact Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Or reach me directly</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.a
                          href="mailto:alex.johnson@email.com"
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            Email
                          </span>
                        </motion.a>

                        <motion.a
                          href="https://linkedin.com/in/alexjohnson"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            LinkedIn
                          </span>
                        </motion.a>

                        <motion.a
                          href="https://github.com/alexjohnson"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            GitHub
                          </span>
                        </motion.a>

                        <motion.a
                          href="https://wa.me/15551234567"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            WhatsApp
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Component definitions for reusable parts
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
        <CardContent className="p-6 flex flex-col h-full">
          <motion.div
            className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ rotate: 5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium" size="sm">
              {service.cta}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const PricingCard = ({ plan, index, isHighlighted = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card
        className={`h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl ${
          isHighlighted ? "ring-2 ring-primary/50 bg-primary/5" : ""
        }`}
      >
        <CardContent className="p-6 flex flex-col h-full">
          {isHighlighted && (
            <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full text-center mb-4">
              Most Popular
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
            <div className="mb-2">
              <div className="text-2xl font-bold text-primary">{plan.price}</div>
              {plan.priceSubtext && <div className="text-sm text-muted-foreground">{plan.priceSubtext}</div>}
            </div>
            <p className="text-muted-foreground text-sm">{plan.description}</p>
          </div>

          <div className="flex-grow mb-6">
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className={`w-full font-medium text-sm ${
                isHighlighted
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
              size="sm"
            >
              {plan.cta}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/20 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          {isOpen ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-border/50 pt-4">
                <p className="text-muted-foreground leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ExperienceItem = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
      <div className="absolute left-1.5 top-3 w-0.5 bg-border h-full last:hidden"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h4 className="font-semibold text-foreground">{experience.title}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm">
          <Building className="w-4 h-4" />
          <span>{experience.company}</span>
          <span className="text-muted-foreground">• {experience.location}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>
        {experience.achievements && (
          <ul className="text-sm text-muted-foreground space-y-1 mt-3">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const EducationItem = ({ education }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
      <div className="absolute left-1.5 top-3 w-0.5 bg-border h-full last:hidden"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h4 className="font-semibold text-foreground">{education.degree}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{education.year}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm">
          <GraduationCap className="w-4 h-4" />
          <span>{education.institution}</span>
        </div>
        {education.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">{education.description}</p>
        )}
      </div>
    </div>
  )
}

const SkillsGrid = ({ skills }) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          variants={fadeInUp}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 0 2px rgba(var(--primary), 0.4)",
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          transition={{ delay: index * 0.05 }}
        >
          <Badge
            variant="secondary"
            className="justify-center py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default w-full"
          >
            {skill}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    console.log("Form submitted:", formData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    alert("Message sent successfully!")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name
        </label>
        <motion.div
          whileFocus={{
            boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)",
            transition: { duration: 0.2 },
          }}
        >
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.name ? "border-red-500" : ""}`}
          />
        </motion.div>
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </motion.div>

      <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <motion.div
          whileFocus={{
            boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)",
            transition: { duration: 0.2 },
          }}
        >
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-red-500" : ""}`}
          />
        </motion.div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </motion.div>

      <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <motion.div
          whileFocus={{
            boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)",
            transition: { duration: 0.2 },
          }}
        >
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`bg-background border-border rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${errors.message ? "border-red-500" : ""}`}
          />
        </motion.div>
        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}

const ContactInfo = ({ copiedEmail, copyEmail }) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/alexjohnson",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/alexjohnson",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/alexjohnson",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Alternative Ways to Reach Me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <button
                    onClick={copyEmail}
                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    alex.johnson@email.com
                    {copiedEmail ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+15551234567" className="text-sm font-medium hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a
                    href="https://alexjohnson.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    alexjohnson.dev
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4 text-foreground">Connect on Social</h4>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
