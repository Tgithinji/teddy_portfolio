"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { buttonHover } from "./animations";

interface PricingCardProps {
  name: string;
  price: string;
  usdPrice: number | string;
  description: string;
  features: string[];
  range: string;
  support: string;
  popular: boolean;
  index: number;
  onCTAClick: (message: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  usdPrice,
  description,
  features,
  range,
  support,
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
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-2">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground ml-1">KSh</span>
        </div>
        <p className="text-sm text-muted-foreground">≈ {usdPrice}</p>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-medium">Range:</span> {range}
        </p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Support:</span> {support}
        </p>
      </div>

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
