"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { useContactForm } from "@/hooks/useContactForm";
import { buttonHover } from "@/components/portfolio/animations";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeProjectTab, setActiveProjectTab] = useState("software");
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const {
    isLoading,
    formData,
    formErrors,
    handleCTAClick,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const handleContactClick = () => {
    setIsTabLoading(true);
    setActiveTab("contact");
    setTimeout(() => {
      setIsTabLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleCTAClickAndNavigate = (message: string) => {
    handleCTAClick(message);
    setActiveTab("contact");
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
                Teddy Githinji
              </motion.h1>
              <motion.p
                className="text-primary font-medium mb-3 text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Software Engineer & Automation Specialist
              </motion.p>
              <motion.p
                className="text-muted-foreground text-xs lg:text-sm leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I help businesses automate operations, connect systems, and build custom software that saves time and drives growth.
              </motion.p>
            </div>



            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                {
                  icon: Mail,
                  href: "mailto:ted@teddygithinji.me",
                  color: "hover:text-red-400",
                },
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
              <TabsList className="grid w-full grid-cols-5 mb-4 bg-card border border-border">
                <TabsTrigger
                  value="home"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Services
                </TabsTrigger>
                <TabsTrigger
                  value="casestudies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  Case Studies
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  About
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
                    <HomeSection
                      onCTAClick={handleCTAClickAndNavigate}
                      onContactClick={handleContactClick}
                    />

                    <CaseStudiesSection
                      activeProjectTab={activeProjectTab}
                      setActiveProjectTab={setActiveProjectTab}
                    />

                    <ServicesSection
                      openFAQ={openFAQ}
                      setOpenFAQ={setOpenFAQ}
                      onCTAClick={handleCTAClickAndNavigate}
                      onContactClick={handleContactClick}
                      isLoading={isLoading}
                    />

                    <AboutSection />

                    <ContactSection
                      formData={formData}
                      formErrors={formErrors}
                      isLoading={isLoading}
                      onInputChange={handleInputChange}
                      onSubmit={handleSubmit}
                    />
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
