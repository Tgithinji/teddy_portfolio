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
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ServiceCard } from "@/components/portfolio/ServiceCard";
import { PricingCard } from "@/components/portfolio/PricingCard";
import { FAQItem } from "@/components/portfolio/FAQItem";
import { SkillsGrid } from "@/components/portfolio/SkillsGrid";
import { EducationItem } from "@/components/portfolio/EducationItem";
import { ExperienceItem } from "@/components/portfolio/ExperienceItem";
import {
  fadeInUp,
  fadeInSlide,
  staggerContainer,
  scaleOnHover,
  glowOnHover,
  buttonHover,
  tabTransition,
} from "@/components/portfolio/animations";
import {
  softwareProjects,
  automationProjects,
  experiences,
  education,
  skills,
  services,
  automationPricing,
  softwarePricing,
  faqData,
} from "@/data/portfolio";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("software");
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if ((formErrors as any)[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) (errors as any).name = "Name is required";
    if (!formData.email.trim()) (errors as any).email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      (errors as any).email = "Email is invalid";
    if (!formData.message.trim())
      (errors as any).message = "Message is required";
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
                  src="/Teddy.webp"
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
                          {services.map((service, index) => {
                            let IconComponent;
                            switch (service.icon) {
                              case "Code":
                                IconComponent = Code;
                                break;
                              case "Zap":
                                IconComponent = Zap;
                                break;
                              case "Puzzle":
                                IconComponent = Puzzle;
                                break;
                              case "Bot":
                                IconComponent = Bot;
                                break;
                              default:
                                IconComponent = Code;
                            }

                            return (
                              <ServiceCard
                                key={service.title}
                                icon={IconComponent}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                index={index}
                                onCTAClick={handleCTAClick}
                              />
                            );
                          })}
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
                                    name={plan.name}
                                    price={plan.price}
                                    usdPrice={plan.usdPrice}
                                    description={plan.description}
                                    features={plan.features}
                                    popular={plan.popular}
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
                                    name={plan.name}
                                    price={plan.price}
                                    usdPrice={plan.usdPrice}
                                    description={plan.description}
                                    features={plan.features}
                                    popular={plan.popular}
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
                                className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${(formErrors as any).name ? "border-red-500" : ""}`}
                              />
                            </motion.div>
                            {(formErrors as any).name && (
                              <p
                                id="name-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {(formErrors as any).name}
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
                                className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${(formErrors as any).email ? "border-red-500" : ""}`}
                              />
                            </motion.div>
                            {(formErrors as any).email && (
                              <p
                                id="email-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {(formErrors as any).email}
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
                                className={`bg-background border-border rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${(formErrors as any).message ? "border-red-500" : ""}`}
                              />
                            </motion.div>
                            {(formErrors as any).message && (
                              <p
                                id="message-error"
                                className="text-red-500 text-xs"
                                role="alert"
                              >
                                {(formErrors as any).message}
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
                                href="https://wa.me/254702783943"
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

const SoftwareCaseStudyGrid = ({ projects }: { projects: any[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project: any, index: number) => (
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

const AutomationCaseStudyGrid = ({ projects }: { projects: any[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project: any, index: number) => (
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

const TabNavigation = ({
  activeProjectTab,
  setActiveProjectTab,
}: {
  activeProjectTab: string;
  setActiveProjectTab: (tab: string) => void;
}) => {
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
