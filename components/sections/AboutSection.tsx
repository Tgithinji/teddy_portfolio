"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ExperienceItem } from "@/components/portfolio/ExperienceItem";
import { EducationItem } from "@/components/portfolio/EducationItem";
import { SkillsGrid } from "@/components/portfolio/SkillsGrid";
import { experiences, education, skills } from "@/data/portfolio";

export const AboutSection: React.FC = () => {
  return (
    <TabsContent value="about" className="mt-0">
      <motion.div
        key="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-4xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About & Approach
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A look into my professional background and how I solve business problems.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-4 h-4 mr-2" />
              Download Full Resume
            </Button>
          </a>
        </motion.div>

        {/* Approach to Problem Solving */}
        <motion.div
          className="mb-16 bg-card border border-border p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Approach to Problem Solving</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
            I don't just write code; I partner with businesses to eliminate operational bottlenecks. My process begins by deeply understanding your workflows, identifying where manual effort is wasted, and designing a technology solution that directly impacts your bottom line.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Whether it involves connecting disparate systems via APIs, building a custom internal dashboard, or deploying AI to handle customer inquiries, the goal is always the same: <strong>measurable business growth.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Professional Background
            </h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceItem
                  key={index}
                  experience={experience}
                />
              ))}
            </div>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <EducationItem
                    key={index}
                    education={edu}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Core Technologies
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                While I focus on outcomes, these are the tools I use to build them:
              </p>
              <SkillsGrid skills={skills} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </TabsContent>
  );
};
