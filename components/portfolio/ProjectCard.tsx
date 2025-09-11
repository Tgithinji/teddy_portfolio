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
    description: string;
    thumbnail: string;
    techStack: string[];
    websiteUrl: string;
    githubUrl: string;
    impact: string;
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
  if (type === "software") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        variants={scaleOnHover}
        whileHover="hover"
        className="group"
      >
        <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
          <div className="aspect-video overflow-hidden">
            {project.video ? (
              // Case 1: Self-hosted video
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            ) : project.embed ? (
              // Case 2: External embed (YouTube, Google Drive, Loom, etc.)
              <iframe
                src={project.embed}
                title={project.title}
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Case 3: Fallback image
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
          <CardContent className="p-4 space-y-3">
            <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              {/* Live Website */}
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="flex-1"
              >
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    aria-label={`View ${project.title} website`}
                  >
                    <Button size="sm" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Website
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="w-full text-xs"
                    aria-label={`${project.title} website coming soon`}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Coming Soon 🚧
                  </Button>
                )}
              </motion.div>

              {/* GitHub Repo */}
              <motion.div
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="flex-1"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs bg-transparent"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    GitHub Repo
                  </Button>
                </a>
              </motion.div>
            </div>

            {project.impact && (
              <p className="text-xs italic text-primary/80 bg-primary/10 p-2 rounded-lg">
                {project.impact}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Automation project card
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      variants={scaleOnHover}
      whileHover="hover"
      className="group"
    >
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg">
        <div className="aspect-video overflow-hidden rounded-t-xl">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            priority={index === 0}
          />
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="space-y-2">
            <p className="text-xs italic text-muted-foreground">
              <strong>Problem:</strong> {project.problem}
            </p>
            <p className="text-sm text-foreground">
              <strong>Solution:</strong> {project.solution}
            </p>
            <div className="bg-primary/10 p-2 rounded-lg">
              <p className="text-xs font-medium text-primary">
                <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          </div>
          <motion.div
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            className="flex-1"
          >
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`View ${project.title} demo`}
              >
                <Button size="sm" className="w-full text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Demo
                </Button>
              </a>
            ) : (
              <Button
                size="sm"
                disabled
                className="w-full text-xs"
                aria-label={`${project.title} demo not available`}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                No Demo Available
              </Button>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
