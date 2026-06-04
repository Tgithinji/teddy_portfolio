"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/portfolio/ServiceCard";
import { FAQItem } from "@/components/portfolio/FAQItem";
import { buttonHover } from "@/components/portfolio/animations";
import { Button } from "@/components/ui/button";
import { Code, Zap, Puzzle, Bot } from "lucide-react";
import { services, faqData } from "@/data/portfolio";

interface ServicesSectionProps {
  openFAQ: number | null;
  setOpenFAQ: (index: number | null) => void;
  onCTAClick: (message: string) => void;
  onContactClick: () => void;
  isLoading: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  openFAQ,
  setOpenFAQ,
  onCTAClick,
  onContactClick,
  isLoading,
}) => {
  return (
    <TabsContent value="services" className="mt-0">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Services & Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive development and automation services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
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
                onCTAClick={onCTAClick}
              />
            );
          })}
        </motion.div>

        {/* Engagement Approach */}
        <motion.div
          className="mb-16 bg-card/50 border border-border rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Every business is unique.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I don't offer generic templates or forced tier structures. Every workflow, internal system, and automation is designed specifically for your operational challenges and revenue goals.
          </p>
          <motion.button
            onClick={() => onCTAClick("I'd like to book a discovery call to discuss my workflow challenges.")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            Book a Discovery Call
          </motion.button>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
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
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-12 text-center shadow-2xl shadow-primary/5">
              <motion.h2
                className="text-4xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                Let's Identify What's Slowing Your Business Down
              </motion.h2>

              <motion.p
                className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                Book a free 30-minute consultation and I'll show you where automation or software can save time, reduce costs, or improve customer experience.
              </motion.p>

              <motion.button
                onClick={onContactClick}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
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
                    Loading...
                  </div>
                ) : (
                  "Schedule a Call"
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TabsContent>
  );
};
