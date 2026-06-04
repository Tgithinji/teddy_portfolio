"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { caseStudies } from "@/data/portfolio";

export const CaseStudiesSection: React.FC = () => {
  return (
    <TabsContent value="casestudies" className="mt-0">
      <motion.div
        key="projects-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Case Studies
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Real-world business problems solved with custom software and automation.
          </motion.p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2 inline-block">
                {categoryGroup.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryGroup.projects.map((project, pIndex) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    type="software" // "type" doesn't matter anymore based on our unified card
                    index={pIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </TabsContent>
  );
};
