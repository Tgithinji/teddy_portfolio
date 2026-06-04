"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { scaleOnHover, buttonHover } from "./animations";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description?: string;
    thumbnail: string;
    techStack: string[];
    websiteUrl?: string;
    githubUrl?: string;
    result?: string;
    impact?: string; // Fallback if data not updated
    video?: string;
    embed?: string;
    problem?: string;
    solution?: string;
    tech?: string[];
    demo?: string;
  };
  type: "software" | "automation";
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, type, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      variants={scaleOnHover}
      whileHover="hover"
      className="group h-full"
    >
      <Card className="h-full flex flex-col bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
        <div className="h-48 w-full overflow-hidden shrink-0">
          {project.video ? (
            <video
              src={project.video}
              controls
              className="w-full h-full object-cover"
            />
          ) : project.embed ? (
            <iframe
              src={project.embed}
              title={project.title}
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority={index === 0}
            />
          )}
        </div>
        <CardContent className="p-5 flex flex-col flex-1 space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <div className="space-y-3 flex-1 text-sm">
            {project.problem && (
              <div>
                <strong className="text-foreground">Problem:</strong>
                <p className="text-muted-foreground mt-1 leading-relaxed">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <strong className="text-foreground">Solution:</strong>
                <p className="text-muted-foreground mt-1 leading-relaxed">{project.solution}</p>
              </div>
            )}
            {(project.result || project.impact) && (
              <div className="bg-primary/10 p-3 rounded-lg mt-2">
                <strong className="text-primary">Result:</strong>
                <p className="text-primary/90 mt-1 leading-relaxed">{project.result || project.impact}</p>
              </div>
            )}
            {/* Fallback description for old data */}
            {!project.problem && project.description && (
               <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            )}
          </div>

          <div className="space-y-3 shrink-0 pt-2 border-t border-border/50">
            <div>
              <strong className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Technology</strong>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || project.tech || []).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-secondary hover:bg-secondary/80">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              {project.demo && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} demo`}>
                    <Button size="sm" className="w-full text-xs"><ExternalLink className="w-3 h-3 mr-1" /> View Demo</Button>
                  </a>
                </motion.div>
              )}
              {project.websiteUrl && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} website`}>
                    <Button size="sm" className="w-full text-xs"><ExternalLink className="w-3 h-3 mr-1" /> View Live</Button>
                  </a>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} code`}>
                    <Button size="sm" variant="outline" className="w-full text-xs"><Github className="w-3 h-3 mr-1" /> View Code</Button>
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
