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

export const ResumeSection: React.FC = () => {
  return (
    <TabsContent value="resume" className="mt-0">
      <motion.div
        key="resume-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-3xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
      >
        <div className="max-w-4xl mx-auto px-4 py-6">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Resume
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey, education, and technical
              expertise.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
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
                Download PDF Resume
              </Button>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Experience
              </h2>
              <div className="space-y-6">
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
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
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

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Technical Skills
                </h2>
                <SkillsGrid skills={skills} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </TabsContent>
  );
};
