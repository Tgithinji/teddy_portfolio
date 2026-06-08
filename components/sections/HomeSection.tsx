"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { clientAchievements, industries } from "@/data/portfolio";
import { buttonHover } from "@/components/portfolio/animations";

interface HomeSectionProps {
  onCTAClick: (message: string) => void;
  onContactClick: () => void;
  onViewCaseStudies: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onCTAClick,
  onContactClick,
  onViewCaseStudies,
}) => {
  return (
    <TabsContent value="home" className="mt-0">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 py-12 bg-card/30 rounded-2xl border border-border backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Stop Losing Time on Manual Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            I build custom software, AI automations, and business systems that help companies operate faster, serve customers better, and scale without hiring more staff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => onCTAClick("I'm interested in a discovery call.")}
              className="text-lg px-8 py-6 h-auto"
            >
              Book a Discovery Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onViewCaseStudies}
              className="text-lg px-8 py-6 h-auto"
            >
              View Case Studies
            </Button>
          </div>
        </motion.div>

        {/* What Clients Achieve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">What Clients Achieve</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Measurable business outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientAchievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3 bg-card p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who I Help */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">Who I Help</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Solutions tailored to your industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (0.1 * index) }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm lg:text-base">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="mb-20">
          <motion.div 
            className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance text-center">A Technical Partner, Not Just a Developer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-base lg:text-lg text-muted-foreground mb-4 leading-relaxed text-pretty">
                  I help businesses identify bottlenecks, automate repetitive processes, and build software that supports growth. Whether you need an AI-powered workflow, a custom platform, or system integrations, I focus on measurable business outcomes rather than just writing code.
                </p>
                <ul className="space-y-2 mt-6">
                  {['Backend Engineer with production experience', 'AI & Automation Specialist', 'Focused on business outcomes', 'Custom-built solutions rather than generic templates', 'Long-term support and continuous improvement mindset'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground text-sm lg:text-base">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                 <img src="/Teddy.webp" alt="Teddy Githinji" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/20 shadow-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lead Magnet CTA */}
        <motion.div
          className="text-center max-w-3xl mx-auto bg-card border border-border p-10 md:p-16 rounded-3xl shadow-2xl shadow-primary/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Free Business Automation Audit</h2>
          <p className="text-base lg:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            I will review your workflow and identify manual bottlenecks, repetitive tasks, and opportunities where software can save you hours every week.
          </p>
          <motion.button
            onClick={() => onCTAClick("I'd like to request a Free Business Automation Audit.")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            Request Free Audit
          </motion.button>
        </motion.div>

      </motion.div>
    </TabsContent>
  );
};
