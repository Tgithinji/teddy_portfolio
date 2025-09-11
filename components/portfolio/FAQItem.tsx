"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { scaleOnHover } from "./animations";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
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
