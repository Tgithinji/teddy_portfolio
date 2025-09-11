"use client";

import type React from "react";
import { Calendar, GraduationCap } from "lucide-react";

interface EducationItemProps {
  education: {
    degree: string;
    institution: string;
    year: string;
    description?: string;
  };
}

export const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
      <div className="absolute left-1.5 top-3 w-0.5 bg-border h-full last:hidden"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h4 className="font-semibold text-foreground">{education.degree}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{education.year}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm">
          <GraduationCap className="w-4 h-4" />
          <span>{education.institution}</span>
        </div>
        {education.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {education.description}
          </p>
        )}
      </div>
    </div>
  );
};
