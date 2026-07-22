"use client";

import { useState } from "react";
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
    impact?: string;
    video?: string;
    embed?: string;
    problem?: string;
    solution?: string;
    tech?: string[];
    images?: string[];
    demo?: string;
    impactBadge?: string;
    challenge?: string;
    solutionBullets?: string[];
    results?: string[];
    metrics?: Array<{ value: string; label: string }>;
    role?: string;
    industry?: string;
    duration?: string;
    client?: string;
    team?: string;
    testimonial?: string;
    subtitle?: string;
    websiteUrlLabel?: string;
    demoLabel?: string;
    githubUrlLabel?: string;
  };
  type: "software" | "automation";
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = project.images?.length
    ? project.images
    : project.thumbnail
      ? [project.thumbnail]
      : ["/placeholder.svg"];
  const slideCount = slides.length;
  const currentImage = slides[currentSlide % slideCount];
  const challengeText = project.challenge || project.problem || "";
  const solutionBullets = project.solutionBullets?.length
    ? project.solutionBullets
    : project.solution
      ? [project.solution]
      : [];
  const resultBullets = project.results?.length
    ? project.results
    : project.result || project.impact
      ? [project.result || project.impact || ""]
      : [];
  const techItems = project.techStack || project.tech || [];

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
        <div className="relative aspect-[16/11] w-full overflow-hidden shrink-0 bg-muted/50 flex items-center justify-center">
          {project.video ? (
            <video src={project.video} controls className="w-full h-full object-contain bg-black/5" />
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
              src={currentImage}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-contain bg-black/5 transition-transform duration-300"
              priority={index === 0}
            />
          )}

          {slideCount > 1 && (
            <>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideCount)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
                aria-label="Next image"
              >
                ›
              </button>
              <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex items-center gap-2">
                {slides.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    type="button"
                    onClick={() => setCurrentSlide(slideIndex)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      slideIndex === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Show image ${slideIndex + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CardContent className="p-4 flex flex-col flex-1 gap-3">
          {project.impactBadge && (
            <Badge className="w-fit border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
              {project.impactBadge}
            </Badge>
          )}

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
              {project.title}
            </h3>
            {project.subtitle && <p className="text-sm text-muted-foreground">{project.subtitle}</p>}
          </div>

          <div className="space-y-2 flex-1 text-sm">
            {challengeText && (
              <div className="rounded-lg border border-border/60 bg-background/70 p-2.5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  🚩 Challenge
                </div>
                <p className="mt-1 text-foreground leading-relaxed text-sm">{challengeText}</p>
              </div>
            )}

            {solutionBullets.length > 0 && (
              <div className="rounded-lg border border-border/60 bg-background/70 p-2.5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  ⚙ Solution
                </div>
                <ul className="mt-1.5 space-y-1">
                  {solutionBullets.slice(0, 2).map((item, idx) => (
                    <li key={`${item}-${idx}`} className="flex gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resultBullets.length > 0 && (
              <div className="rounded-lg border border-primary/15 bg-primary/5 p-2.5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                  📈 Results
                </div>
                <ul className="mt-1.5 space-y-1">
                  {resultBullets.slice(0, 2).map((item, idx) => (
                    <li key={`${item}-${idx}`} className="flex gap-2 text-primary/90 text-sm">
                      <span className="mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.metrics?.length ? (
              <div className="grid gap-2 grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-border/60 bg-card/80 p-2 text-center">
                    <div className="text-sm font-semibold text-foreground">{metric.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {(project.role || project.industry || project.duration || project.client || project.team) && (
            <div className="grid gap-2 rounded-lg border border-border/70 p-2.5 text-[11px] sm:grid-cols-2">
              {project.role && (
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Role
                  </span>
                  <span className="font-medium text-foreground">{project.role}</span>
                </div>
              )}
              {project.industry && (
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Industry
                  </span>
                  <span className="font-medium text-foreground">{project.industry}</span>
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Duration
                  </span>
                  <span className="font-medium text-foreground">{project.duration}</span>
                </div>
              )}
              {project.client && (
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Client
                  </span>
                  <span className="font-medium text-foreground">{project.client}</span>
                </div>
              )}
              {project.team && (
                <div className="sm:col-span-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Team
                  </span>
                  <span className="font-medium text-foreground">{project.team}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-2 shrink-0 pt-1 border-t border-border/50">
            {techItems.length > 0 && (
              <div>
                <strong className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] block mb-2">
                  Built with
                </strong>
                <div className="flex flex-wrap gap-2">
                  {techItems.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary hover:bg-secondary/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              {project.demo && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} demo`}>
                    <Button size="sm" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" /> {project.demoLabel || "View Demo"}
                    </Button>
                  </a>
                </motion.div>
              )}
              {project.websiteUrl && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} website`}>
                    <Button size="sm" className="w-full text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" /> {project.websiteUrlLabel || "View Live Project"}
                    </Button>
                  </a>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div variants={buttonHover} whileHover="hover" whileTap="tap" className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full" aria-label={`View ${project.title} code`}>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <Github className="w-3 h-3 mr-1" /> {project.githubUrlLabel || "View Code"}
                    </Button>
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
