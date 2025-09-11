"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/portfolio/ServiceCard";
import { PricingCard } from "@/components/portfolio/PricingCard";
import { FAQItem } from "@/components/portfolio/FAQItem";
import { buttonHover } from "@/components/portfolio/animations";
import { Button } from "@/components/ui/button";
import { Code, Zap, Puzzle, Bot } from "lucide-react";
import {
  services,
  automationPricing,
  softwarePricing,
  faqData,
} from "@/data/portfolio";

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
                onCTAClick={onCTAClick}
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
                    onCTAClick={onCTAClick}
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
                    onCTAClick={onCTAClick}
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
                onClick={onContactClick}
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
  );
};
