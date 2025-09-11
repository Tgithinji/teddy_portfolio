"use client";

import type React from "react";
import { motion } from "framer-motion";
import { buttonHover } from "./animations";

interface TabNavigationProps {
  activeProjectTab: string;
  setActiveProjectTab: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeProjectTab,
  setActiveProjectTab,
}) => {
  return (
    <div className="flex justify-center mb-6">
      <motion.div
        className="bg-card border border-border rounded-lg p-1 inline-flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setActiveProjectTab("software")}
          className={`px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "software"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          {activeProjectTab === "software" && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">Software Projects</span>
        </motion.button>
        <motion.button
          onClick={() => setActiveProjectTab("automation")}
          className={`px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            activeProjectTab === "automation"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          {activeProjectTab === "automation" && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">Automation Projects</span>
        </motion.button>
      </motion.div>
    </div>
  );
};
