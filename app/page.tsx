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
  MessageCircle,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const fadeInSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleOnHover = {
  hover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
}

const glowOnHover = {
  hover: {
    boxShadow: "0 20px 25px -5px rgba(var(--primary), 0.4), 0 10px 10px -5px rgba(var(--primary), 0.2)",
    borderColor: "rgba(var(--primary), 0.6)",
    transition: { duration: 0.3 },
  },
}

const buttonHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 0 3px rgba(var(--primary), 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  tap: {
    scale: 0.95,
  },
}

const tabTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
}

export default function Portfolio() {
  const [activeProjectTab, setActiveProjectTab] = useState("software")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alex.johnson@email.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    setFormErrors({})
  }

  const softwareProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics and inventory management.",
      thumbnail: "/modern-ecommerce-dashboard.png",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      websiteUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      impact: "Increased client sales by 40% and reduced cart abandonment by 25%",
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Interactive LMS with video streaming, progress tracking, and collaborative features.",
      thumbnail: "/learning-management-system.png",
      techStack: ["Next.js", "TypeScript", "Prisma", "AWS"],
      websiteUrl: "https://lms-demo.com",
      githubUrl: "https://github.com/alexjohnson/lms-platform",
      impact: "Served 10,000+ students with 98% uptime and improved engagement by 60%",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with portfolio tracking and risk assessment.",
      thumbnail: "/financial-portfolio-dashboard.png",
      techStack: ["Vue.js", "Python", "FastAPI", "Redis"],
      websiteUrl: "https://fintech-demo.com",
      githubUrl: "https://github.com/alexjohnson/financial-dashboard",
      impact: "Helped users save $2M+ through optimized investment strategies",
    },
    {
      id: 4,
      title: "AI Chat Interface",
      description: "Intelligent chatbot interface with natural language processing and context awareness.",
      thumbnail: "/ai-chatbot-interface.png",
      techStack: ["React", "OpenAI", "WebSocket", "MongoDB"],
      websiteUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/alexjohnson/ai-chat-interface",
      impact: "Reduced customer support tickets by 70% and improved response time by 90%",
    },
  ]

  const automationProjects = [
    {
      id: 1,
      title: "Automated Order Processing",
      problem: "Manual order processing was taking 4+ hours daily and prone to errors",
      solution: "Built automated system that processes orders, updates inventory, and sends notifications",
      impact: "Reduced processing time by 95% and eliminated human errors",
      thumbnail: "/automated-order-processing-dashboard.png",
    },
    {
      id: 2,
      title: "Customer Support Automation",
      problem: "High volume of repetitive customer inquiries overwhelming support team",
      solution: "Implemented AI-powered chatbot with escalation to human agents when needed",
      impact: "Handled 80% of inquiries automatically, improved response time by 300%",
      thumbnail: "/customer-support-automation-system.png",
    },
    {
      id: 3,
      title: "Financial Report Generation",
      problem: "Monthly financial reports required 2 days of manual data compilation",
      solution: "Created automated pipeline that generates comprehensive reports from multiple data sources",
      impact: "Reduced report generation time from 2 days to 30 minutes",
      thumbnail: "/automated-financial-reporting-dashboard.png",
    },
    {
      id: 4,
      title: "Social Media Management",
      problem: "Managing multiple social media accounts was time-consuming and inconsistent",
      solution: "Built automation system for content scheduling, engagement tracking, and performance analytics",
      impact: "Increased social media engagement by 150% while reducing management time by 80%",
      thumbnail: "/social-media-automation-dashboard.png",
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
          className="lg:w-80 lg:fixed lg:h-screen bg-card border-r border-border p-4 lg:p-6 lg:overflow-y-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="text-center">
              <motion.div
                className="relative w-28 h-28 lg:w-32 lg:h-32 mx-auto mb-4"
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
                className="text-xl lg:text-2xl font-bold text-foreground mb-2 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                Alex Johnson
              </motion.h1>
              <motion.p
                className="text-primary font-medium mb-3 text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Software Engineer
              </motion.p>
              <motion.p
                className="text-muted-foreground text-xs lg:text-sm leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Passionate full-stack developer with 6+ years of experience building scalable web applications and
                automation solutions.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={copyEmail}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-accent transition-colors group"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground group-hover:text-accent-foreground transition-colors">
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
                <span className="text-xs lg:text-sm text-foreground">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground">San Francisco, CA</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground">TechCorp Solutions</span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Globe className="w-4 h-4 text-primary" />
                <a
                  href="https://alexjohnson.dev"
                  className="text-xs lg:text-sm text-foreground hover:text-primary transition-colors"
                >
                  alexjohnson.dev
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
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
                  className={`w-9 h-9 lg:w-10 lg:h-10 bg-accent rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* About Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-sm lg:text-base">About</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed text-pretty">
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
            className="p-4 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 h-12">
                <TabsTrigger value="projects" className="text-sm font-medium">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="services" className="text-sm font-medium">
                  Services
                </TabsTrigger>
                <TabsTrigger value="resume" className="text-sm font-medium">
                  Resume
                </TabsTrigger>
                <TabsTrigger value="contact" data-value="contact" className="text-sm font-medium">
                  Contact
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="projects" className="mt-0">
                  <motion.div
                    key="projects"
                    variants={tabTransition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <motion.h1
                        className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        Projects
                      </motion.h1>
                      <motion.p
                        className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Showcasing innovative solutions and technical expertise across various domains.
                      </motion.p>
                    </div>

                    <TabNavigation activeProjectTab={activeProjectTab} setActiveProjectTab={setActiveProjectTab} />

                    <AnimatePresence mode="wait">
                      {activeProjectTab === "software" && (
                        <motion.div
                          key="software"
                          variants={tabTransition}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="mb-6">
                            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Projects</h2>
                          </div>
                          <SoftwareCaseStudyGrid projects={softwareProjects} />
                        </motion.div>
                      )}

                      {activeProjectTab === "automation" && (
                        <motion.div
                          key="automation"
                          variants={tabTransition}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="mb-6">
                            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Projects</h2>
                          </div>
                          <AutomationCaseStudyGrid projects={automationProjects} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>

              {/* Services Tab */}
              <TabsContent value="services" className="mt-0">
                <motion.div
                  key="services"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-8"
                >
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
                              <PricingCard
                                key={plan.name}
                                plan={plan}
                                index={index}
                                isHighlighted={plan.isHighlighted}
                              />
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
                              <PricingCard
                                key={plan.name}
                                plan={plan}
                                index={index}
                                isHighlighted={plan.isHighlighted}
                              />
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
                              isOpen={openFAQ === index}
                              onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
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
                            Whether you need custom software or smart automation, I can help streamline your workflow
                            and save you time.
                          </motion.p>

                          <motion.button
                            onClick={handleContactClick}
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
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
                </motion.div>
              </TabsContent>

              {/* Resume Tab */}
              <TabsContent value="resume" className="mt-0">
                <motion.div
                  key="resume"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
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
                </motion.div>
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact" className="mt-0">
                <motion.div
                  key="contact"
                  variants={tabTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="max-w-3xl mx-auto space-y-6"
                >
                  <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h1>
                    <p className="text-muted-foreground text-lg">
                      Have a project in mind? Fill out the form or reach me directly.
                    </p>
                  </div>

                  {/* Contact Form */}
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
                          onChange={handleInputChange}
                          className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.name ? "border-red-500" : ""}`}
                        />
                      </motion.div>
                      {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
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
                          onChange={handleInputChange}
                          className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.email ? "border-red-500" : ""}`}
                        />
                      </motion.div>
                      {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
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
                          onChange={handleInputChange}
                          className={`bg-background border-border rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.message ? "border-red-500" : ""}`}
                        />
                      </motion.div>
                      {formErrors.message && <p className="text-red-500 text-xs">{formErrors.message}</p>}
                    </motion.div>

                    <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                      <Button
                        type="submit"
                        disabled={Object.keys(formErrors).length > 0}
                        className="w-full md:w-auto md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>

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
                          variants={scaleOnHover}
                          whileHover="hover"
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
                          variants={scaleOnHover}
                          whileHover="hover"
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
                          variants={scaleOnHover}
                          whileHover="hover"
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
                          variants={scaleOnHover}
                          whileHover="hover"
                        >
                          <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            WhatsApp
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, type, index }) => {
  if (type === "software") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        variants={scaleOnHover}
        whileHover="hover"
        className="group"
      >
        <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4 space-y-3">
            <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                <Button size="sm" className="w-full text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Website
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                  <Github className="w-3 h-3 mr-1" />
                  GitHub Repo
                </Button>
              </motion.div>
            </div>

            {project.impact && (
              <p className="text-xs italic text-primary/80 bg-primary/10 p-2 rounded-lg">{project.impact}</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Automation project card
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      variants={scaleOnHover}
      whileHover="hover"
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg">
        <div className="aspect-video overflow-hidden rounded-t-xl">
          <img
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="space-y-2">
            <p className="text-xs italic text-muted-foreground">
              <strong>Problem:</strong> {project.problem}
            </p>
            <p className="text-sm text-foreground">
              <strong>Solution:</strong> {project.solution}
            </p>
            <div className="bg-primary/10 p-2 rounded-lg">
              <p className="text-xs font-medium text-primary">
                <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          </div>
          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
              View Demo
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const SoftwareCaseStudyGrid = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} type="software" index={index} />
      ))}
    </motion.div>
  )
}

const AutomationCaseStudyGrid = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} type="automation" index={index} />
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
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setActiveProjectTab("software")}
          className={`px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "software"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
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
          className={`px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "automation"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
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

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
      variants={scaleOnHover}
      whileHover="hover"
      layout
    >
      <button
        onClick={onToggle}
        className="w-full p-4 lg:p-6 text-left flex items-center justify-between hover:bg-accent/20 transition-colors duration-200"
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
            <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0">
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

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      variants={scaleOnHover}
      whileHover="hover"
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
        <CardContent className="p-4 lg:p-6 flex flex-col h-full">
          <motion.div
            className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ rotate: 5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>

          <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
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
      transition={{ delay: index * 0.15, duration: 0.6 }}
      variants={scaleOnHover}
      whileHover="hover"
      className="group"
    >
      <Card
        className={`h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl ${
          isHighlighted ? "ring-2 ring-primary/50 bg-primary/5" : ""
        }`}
      >
        <CardContent className="p-4 lg:p-6 flex flex-col h-full">
          {isHighlighted && (
            <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full text-center mb-4">
              Most Popular
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">{plan.name}</h3>
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

          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
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
