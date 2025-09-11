"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Globe,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Check,
  Copy,
  Plus,
  Minus,
  MessageCircle,
  Code,
  Zap,
  Puzzle,
  Bot,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const fadeInSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleOnHover = {
  hover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

const glowOnHover = {
  hover: {
    boxShadow:
      "0 20px 25px -5px rgba(var(--primary), 0.4), 0 10px 10px -5px rgba(var(--primary), 0.2)",
    borderColor: "rgba(var(--primary), 0.6)",
    transition: { duration: 0.3 },
  },
};

const buttonHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 0 3px rgba(var(--primary), 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  tap: {
    scale: 0.95,
  },
};

const tabTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("software");
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleCTAClick = (message: string) => {
    setFormData((prev) => ({ ...prev, message }));
    setActiveTab("contact");
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const copyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        // Modern browsers
        await navigator.clipboard.writeText("teddy@teddygithinji.me");
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = "teddy@teddygithinji.me";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      // Show success state
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const softwareProjects = [
    {
      id: 1,
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

  const automationProjects = [
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

  const experiences = [
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

  const education = [
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

  const skills = [
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

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Full-stack web applications, mobile apps, and enterprise solutions tailored to your business needs.",
      cta: "Start Project",
      features: [],
    },
    {
      icon: Zap,
      title: "Process Automation",
      description:
        "Streamline your workflows with intelligent automation that saves time and reduces manual errors.",
      cta: "Automate Now",
      features: [],
    },
    {
      icon: Puzzle,
      title: "System Integration",
      description:
        "Connect your existing tools and platforms for seamless data flow and improved efficiency.",
      cta: "Integrate Systems",
      features: [],
    },
    {
      icon: Bot,
      title: "AI Assistant Development",
      description:
        "Custom AI chatbots and intelligent assistants to enhance customer experience and support.",
      cta: "Build AI Solution",
      features: [],
    },
  ];

  const automationPlans = [
    {
      name: "Starter",
      price: "KSh 7,500",
      priceSubtext: "~$60",
      description: "Simple 1–2 workflow automation",
      features: [
        "Connection of up to 2 apps",
        "Basic monitoring",
        "Email support",
        "Setup included",
      ],
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
  ];

  const softwarePlans = [
    {
      name: "Starter Website",
      price: "KSh 15,000",
      priceSubtext: "~$120",
      description: "Simple static site (up to 3 pages)",
      features: [
        "Responsive design",
        "Fast delivery",
        "Basic SEO setup",
        "Contact form",
      ],
      cta: "Start Small",
    },
    {
      name: "Business Website",
      price: "KSh 35,000",
      priceSubtext: "~$280",
      description: "Full website (5–7 pages)",
      features: [
        "Blog or CMS integration",
        "SEO & mobile optimization",
        "Analytics setup",
        "Social media integration",
      ],
      cta: "Build My Site",
      isHighlighted: true,
    },
    {
      name: "Web App",
      price: "From KSh 65,000",
      priceSubtext: "~$500",
      description: "Custom web application",
      features: [
        "Authentication + database",
        "APIs and integrations",
        "Admin dashboard",
        "User management",
      ],
      cta: "Get a Web App",
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      priceSubtext: "",
      description: "Complex dashboards / AI integration",
      features: [
        "Multi-user support",
        "Dedicated infrastructure",
        "Advanced security",
        "Ongoing maintenance",
      ],
      cta: "Request Quote",
    },
  ];

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

  const handleContactClick = () => {
    setIsTabLoading(true);
    setActiveTab("contact");
    setTimeout(() => {
      setIsTabLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleTabChange = (tabValue: string) => {
    if (tabValue !== activeTab) {
      setIsTabLoading(true);
      setTimeout(() => {
        setActiveTab(tabValue);
        setTimeout(() => {
          setIsTabLoading(false);
        }, 150);
      }, 100);
    }
  };

  const automationPricing = [
    {
      name: "Starter",
      price: "7,500",
      usdPrice: 60,
      description: "Simple 1–2 workflow automation",
      features: [
        "Connection of up to 2 apps",
        "Basic monitoring",
        "Email support",
        "Setup included",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "20,000",
      usdPrice: 160,
      description: "Multi-step workflows",
      features: [
        "Connection of up to 5 apps",
        "Advanced monitoring",
        "Monthly support calls",
        "Priority email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      usdPrice: "Custom",
      description: "Unlimited workflows",
      features: [
        "Advanced integrations (APIs, AI agents)",
        "Dedicated support",
        "Custom development",
        "SLA guarantees",
      ],
      popular: false,
    },
  ];

  const softwarePricing = [
    {
      name: "Starter Website",
      price: "15,000",
      usdPrice: 120,
      description: "Simple static site (up to 3 pages)",
      features: [
        "Responsive design",
        "Fast delivery",
        "Basic SEO setup",
        "Contact form",
      ],
      popular: false,
    },
    {
      name: "Business Website",
      price: "35,000",
      usdPrice: 280,
      description: "Full website (5–7 pages)",
      features: [
        "Blog or CMS integration",
        "SEO & mobile optimization",
        "Analytics setup",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Web App",
      price: "From 65,000",
      usdPrice: 500,
      description: "Custom web application",
      features: [
        "Authentication + database",
        "APIs and integrations",
        "Admin dashboard",
        "User management",
      ],
      popular: false,
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      usdPrice: "Custom",
      description: "Complex dashboards / AI integration",
      features: [
        "Multi-user support",
        "Dedicated infrastructure",
        "Advanced security",
        "Ongoing maintenance",
      ],
      popular: false,
    },
  ];

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
                  src="/Teddy.png"
                  alt="Teddy Githinji Muraguri"
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
                Teddy Githinji Muraguri
              </motion.h1>
              <motion.p
                className="text-primary font-medium mb-3 text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Software Engineer & Automation Expert
              </motion.p>
              <motion.p
                className="text-muted-foreground text-xs lg:text-sm leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Passionate full-stack developer(specializing in Backend
                technologies) with 3+ years of experience building scalable web
                applications and automation solutions.
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
                  teddy@teddygithinji.me
                </span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-green-500 ml-auto" />
                ) : (
                  <Copy className="w-3 h-3 text-muted-foreground ml-auto" />
                )}
              </motion.button>

              <div className="flex items-center gap-3 p-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground">
                  +254 702783943
                </span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground">
                  Nairobi, Kenya
                </span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-foreground">
                  Rahisisha Tech
                </span>
              </div>

              <div className="flex items-center gap-3 p-3">
                <Globe className="w-4 h-4 text-primary" />
                <a
                  href="https://teddygithinji.me"
                  className="text-xs lg:text-sm text-foreground hover:text-primary transition-colors"
                >
                  teddygithinji.me
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
                {
                  icon: Github,
                  href: "https://github.com/Tgithinji/",
                  color: "hover:text-gray-400",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/teddy-muraguri/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/SorcererScript",
                  color: "hover:text-blue-400",
                },
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-card/50 border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-sm lg:text-base">
                    About
                  </h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed text-pretty">
                    I specialize in creating efficient, scalable solutions that
                    help businesses grow. From custom web applications to
                    intelligent automation systems, I bring ideas to life with
                    clean code and thoughtful design.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80 min-h-screen bg-background">
          <ThemeToggle />
          <div className="p-4 lg:p-8">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 mb-4 bg-card border border-border">
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Services
                </TabsTrigger>
                <TabsTrigger
                  value="resume"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Resume
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Contact
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                {isTabLoading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center py-20"
                  >
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {!isTabLoading && (
                  <>
                    <TabsContent value="projects" className="mt-0">
                      <motion.div
                        key="projects-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
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
                            Showcasing innovative solutions and technical
                            expertise across various domains.
                          </motion.p>
                        </div>

                        <TabNavigation
                          activeProjectTab={activeProjectTab}
                          setActiveProjectTab={setActiveProjectTab}
                        />

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
                                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                                  Projects
                                </h2>
                              </div>
                              <SoftwareCaseStudyGrid
                                projects={softwareProjects}
                              />
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
                                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                                  Projects
                                </h2>
                              </div>
                              <AutomationCaseStudyGrid
                                projects={automationProjects}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </TabsContent>

                    {/* Services Section */}
                    <TabsContent value="services" className="mt-0">
                      <motion.div
                        className="max-w-6xl mx-auto px-4 py-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="text-center mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                            Services & Solutions
                          </h1>
                          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Comprehensive development and automation services
                            tailored to your business needs
                          </p>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          {services.map((service, index) => (
                            <ServiceCard
                              key={service.title}
                              {...service}
                              index={index}
                              onCTAClick={handleCTAClick}
                            />
                          ))}
                        </motion.div>

                        {/* Pricing Section */}
                        <motion.div
                          className="mb-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                              Pricing Plans
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                              Choose the perfect plan for your project needs
                            </p>
                          </div>

                          <Tabs defaultValue="automation" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                              <TabsTrigger value="automation">
                                Automation
                              </TabsTrigger>
                              <TabsTrigger value="software">
                                Software & Web Development
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="automation">
                              <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                {automationPricing.map((plan, index) => (
                                  <PricingCard
                                    key={plan.name}
                                    {...plan}
                                    index={index}
                                    onCTAClick={handleCTAClick}
                                  />
                                ))}
                              </motion.div>
                            </TabsContent>

                            <TabsContent value="software">
                              <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              >
                                {softwarePricing.map((plan, index) => (
                                  <PricingCard
                                    key={plan.name}
                                    {...plan}
                                    index={index}
                                    onCTAClick={handleCTAClick}
                                  />
                                ))}
                              </motion.div>
                            </TabsContent>
                          </Tabs>
                        </motion.div>

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
                                  onToggle={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                  }
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
                                Whether you need custom software or smart
                                automation, I can help streamline your workflow
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
                                {isLoading ? (
                                  <div className="flex items-center gap-2">
                                    <motion.div
                                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                      }}
                                    />
                                    Sending...
                                  </div>
                                ) : (
                                  "Send Message"
                                )}
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </TabsContent>

                    {/* Resume Tab */}
                    <TabsContent value="resume" className="mt-0">
                      <motion.div
                        key="resume-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="max-w-3xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
                      >
                        <div className="max-w-4xl mx-auto px-4 py-6">
                          <motion.div
                            className="text-center mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <h1 className="text-4xl font-bold text-foreground mb-4">
                              Resume
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                              My professional journey, education, and technical
                              expertise.
                            </p>
                          </motion.div>

                          <motion.div
                            className="flex justify-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <a
                              href="/Teddy-resume.pdf"
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF Resume
                              </Button>
                            </a>
                          </motion.div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Experience */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h2 className="text-2xl font-bold text-foreground mb-4">
                                Experience
                              </h2>
                              <div className="space-y-6">
                                {experiences.map((experience, index) => (
                                  <ExperienceItem
                                    key={index}
                                    experience={experience}
                                  />
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
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                  Education
                                </h2>
                                <div className="space-y-6">
                                  {education.map((edu, index) => (
                                    <EducationItem
                                      key={index}
                                      education={edu}
                                    />
                                  ))}
                                </div>
                              </div>

                              {/* Skills */}
                              <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                  Technical Skills
                                </h2>
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
                        key="contact-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="max-w-3xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
                      >
                        <div className="text-center mb-6">
                          <h1 className="text-4xl font-bold text-foreground mb-6">
                            Let's Work Together
                          </h1>
                          <p className="text-muted-foreground text-lg">
                            Have a project in mind? Fill out the form or reach
                            me directly.
                          </p>
                        </div>

                        {/* Contact Form */}
                        <motion.form
                          id="contact-form"
                          onSubmit={handleSubmit}
                          className="space-y-6"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <motion.div
                            className="space-y-2"
                            whileFocus={{ scale: 1.01 }}
                          >
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-foreground"
                            >
                              Full Name
                            </label>
                            <motion.div
                              whileFocus={{
                                boxShadow:
                                  "0 0 0 2px rgba(var(--primary), 0.3)",
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
                            {formErrors.name && (
                              <p
                                id="name-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {formErrors.name}
                              </p>
                            )}
                          </motion.div>

                          <motion.div
                            className="space-y-2"
                            whileFocus={{ scale: 1.01 }}
                          >
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground"
                            >
                              Email
                            </label>
                            <motion.div
                              whileFocus={{
                                boxShadow:
                                  "0 0 0 2px rgba(var(--primary), 0.3)",
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
                            {formErrors.email && (
                              <p
                                id="email-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {formErrors.email}
                              </p>
                            )}
                          </motion.div>

                          <motion.div
                            className="space-y-2"
                            whileFocus={{ scale: 1.01 }}
                          >
                            <label
                              htmlFor="message"
                              className="text-sm font-medium text-foreground"
                            >
                              Message
                            </label>
                            <motion.div
                              whileFocus={{
                                boxShadow:
                                  "0 0 0 2px rgba(var(--primary), 0.3)",
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
                            {formErrors.message && (
                              <p
                                id="message-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {formErrors.message}
                              </p>
                            )}
                          </motion.div>

                          <motion.div
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <Button
                              type="submit"
                              disabled={
                                Object.keys(formErrors).length > 0 || isLoading
                              }
                              className="w-full md:w-auto md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label={
                                isLoading
                                  ? "Sending message..."
                                  : "Send message"
                              }
                            >
                              {isLoading ? (
                                <div className="flex items-center gap-2">
                                  <motion.div
                                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      duration: 1,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                    }}
                                  />
                                  Sending...
                                </div>
                              ) : (
                                "Send Message"
                              )}
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
                            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                              Or reach me directly
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <motion.a
                                href="mailto:teddy@teddygithinji.me"
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
                                href="https://www.linkedin.com/in/teddy-muraguri/"
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
                                href="https://github.com/Tgithinji"
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
                                href="https://wa.me/254743844111"
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
                  </>
                )}
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
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
            {project.video ? (
              // Case 1: Self-hosted video
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            ) : project.embed ? (
              // Case 2: External embed (YouTube, Google Drive, Loom, etc.)
              <iframe
                src={project.embed}
                title={project.title}
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Case 3: Fallback image
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                priority={index === 0}
              />
            )}
          </div>
          <CardContent className="p-4 space-y-3">
            <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              {/* Live Website */}
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="flex-1"
              >
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    aria-label={`View ${project.title} website`}
                  >
                    <Button size="sm" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Website
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="w-full text-xs"
                    aria-label={`${project.title} website coming soon`}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Coming Soon 🚧
                  </Button>
                )}
              </motion.div>

              {/* GitHub Repo */}
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="flex-1"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs bg-transparent"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    GitHub Repo
                  </Button>
                </a>
              </motion.div>
            </div>

            {project.impact && (
              <p className="text-xs italic text-primary/80 bg-primary/10 p-2 rounded-lg">
                {project.impact}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
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
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            priority={index === 0}
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
          <motion.div
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            className="flex-1"
          >
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`View ${project.title} demo`}
              >
                <Button size="sm" className="w-full text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Demo
                </Button>
              </a>
            ) : (
              <Button
                size="sm"
                disabled
                className="w-full text-xs"
                aria-label={`${project.title} demo not available`}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                No Demo Available
              </Button>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SoftwareCaseStudyGrid = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          type="software"
          index={index}
        />
      ))}
    </motion.div>
  );
};

const AutomationCaseStudyGrid = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          type="automation"
          index={index}
        />
      ))}
    </motion.div>
  );
};

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
  );
};

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
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-primary" />
          ) : (
            <Plus className="h-5 w-5 text-primary" />
          )}
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
            id={`faq-answer-${question.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0">
              <div className="border-t border-border/50 pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ServiceCard component
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  index,
  onCTAClick,
}) => {
  const getServiceMessage = (title: string) => {
    const messages = {
      "Custom Software Development":
        "Hi Teddy, I'm interested in custom software development services.",
      "Process Automation":
        "Hi Teddy, I'd like to learn more about process automation solutions.",
      "System Integration":
        "Hi Teddy, I need help with system integration for my business.",
      "AI Assistant Development":
        "Hi Teddy, I'm interested in AI assistant development services.",
    };
    return (
      messages[title] ||
      `Hi Teddy, I'm interested in ${title.toLowerCase()} services.`
    );
  };

  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(var(--primary), 0.1)",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center text-sm text-muted-foreground"
          >
            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
        <Button
          onClick={() => onCTAClick(getServiceMessage(title))}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );
};

// PricingCard component
const PricingCard = ({
  name,
  price,
  usdPrice,
  description,
  features,
  popular,
  index,
  onCTAClick,
}) => {
  const getPricingMessage = (planName: string) => {
    return `Hi Teddy, I'd like to start with the ${planName} plan. Can we discuss the details?`;
  };

  return (
    <motion.div
      className={`relative bg-card border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] ${
        popular ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        boxShadow: popular
          ? "0 20px 40px rgba(var(--primary), 0.15), 0 0 0 1px rgba(var(--primary), 0.2)"
          : "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(var(--primary), 0.1)",
      }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground ml-1">KSh</span>
        </div>
        <p className="text-sm text-muted-foreground">≈ ${usdPrice} USD</p>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
        <Button
          onClick={() => onCTAClick(getPricingMessage(name))}
          className={`w-full shadow-md hover:shadow-lg transition-all duration-300 ${
            popular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          }`}
        >
          Choose Plan
        </Button>
      </motion.div>
    </motion.div>
  );
};

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
        <p className="text-muted-foreground text-sm leading-relaxed">
          {experience.description}
        </p>
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
  );
};

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
          <p className="text-muted-foreground text-sm leading-relaxed">
            {education.description}
          </p>
        )}
      </div>
    </div>
  );
};

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
  );
};
