"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { SoftwareCaseStudyGrid } from "@/components/portfolio/SoftwareCaseStudyGrid";
import { AutomationCaseStudyGrid } from "@/components/portfolio/AutomationCaseStudyGrid";
import { TabNavigation } from "@/components/portfolio/TabNavigation";
import { tabTransition } from "@/components/portfolio/animations";
import { softwareProjects, automationProjects } from "@/data/portfolio";

interface ProjectsSectionProps {
  activeProjectTab: string;
  setActiveProjectTab: (tab: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  activeProjectTab,
  setActiveProjectTab,
}) => {
  return (
    <TabsContent value="projects" className="mt-0">
      <motion.div
        key="projects-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
      >
        <div className="text-center mb-6">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Showcasing innovative solutions and technical
            expertise across various domains.
          </motion.p>
        </div>

        <TabNavigation
          activeProjectTab={activeProjectTab}
          setActiveProjectTab={setActiveProjectTab}
        />

        <AnimatePresence mode="wait">
          {activeProjectTab === "software" && (
            <motion.div
              key="software"
              variants={tabTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Projects
                </h2>
              </div>
              <SoftwareCaseStudyGrid
                projects={softwareProjects}
              />
            </motion.div>
          )}

          {activeProjectTab === "automation" && (
            <motion.div
              key="automation"
              variants={tabTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Projects
                </h2>
              </div>
              <AutomationCaseStudyGrid
                projects={automationProjects}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </TabsContent>
  );
};
