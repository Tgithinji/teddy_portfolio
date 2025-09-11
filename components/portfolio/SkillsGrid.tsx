"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "./animations";

interface SkillsGridProps {
  skills: string[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
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
