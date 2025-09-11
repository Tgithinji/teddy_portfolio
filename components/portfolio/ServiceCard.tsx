"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { buttonHover } from "./animations";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  index: number;
  onCTAClick: (message: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  index,
  onCTAClick,
}) => {
  const getServiceMessage = (title: string) => {
    const messages: { [key: string]: string } = {
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
