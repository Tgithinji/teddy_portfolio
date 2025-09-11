"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { staggerContainer } from "./animations";

interface AutomationCaseStudyGridProps {
  projects: any[];
}

export const AutomationCaseStudyGrid: React.FC<AutomationCaseStudyGridProps> = ({ projects }) => {
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
