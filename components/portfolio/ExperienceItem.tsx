"use client";

import type React from "react";
import { Calendar, Building } from "lucide-react";

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    achievements?: string[];
  };
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
      <div className="absolute left-1.5 top-3 w-0.5 bg-border h-full last:hidden"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h4 className="font-semibold text-foreground">{experience.title}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm">
          <Building className="w-4 h-4" />
          <span>{experience.company}</span>
          <span className="text-muted-foreground">• {experience.location}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {experience.description}
        </p>
        {experience.achievements && (
          <ul className="text-sm text-muted-foreground space-y-1 mt-3">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
