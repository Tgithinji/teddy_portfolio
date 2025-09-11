"use client";

import type React from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";
import { buttonHover, scaleOnHover } from "@/components/portfolio/animations";

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  formErrors: { [key: string]: string };
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  formErrors,
  isLoading,
  onInputChange,
  onSubmit,
}) => {
  return (
    <TabsContent value="contact" className="mt-0">
      <motion.div
        key="contact-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-3xl mx-auto px-4 lg:px-6 py-6 lg:py-8"
      >
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Fill out the form or reach
            me directly.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          id="contact-form"
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="space-y-2"
            whileFocus={{ scale: 1.01 }}
          >
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <motion.div
              whileFocus={{
                boxShadow:
                  "0 0 0 2px rgba(var(--primary), 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={onInputChange}
                className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.name ? "border-red-500" : ""}`}
              />
            </motion.div>
            {formErrors.name && (
              <p
                id="name-error"
                className="text-red-500 text-xs"
                role="alert"
              >
                {formErrors.name}
              </p>
            )}
          </motion.div>

          <motion.div
            className="space-y-2"
            whileFocus={{ scale: 1.01 }}
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <motion.div
              whileFocus={{
                boxShadow:
                  "0 0 0 2px rgba(var(--primary), 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={onInputChange}
                className={`bg-background border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.email ? "border-red-500" : ""}`}
              />
            </motion.div>
            {formErrors.email && (
              <p
                id="email-error"
                className="text-red-500 text-xs"
                role="alert"
              >
                {formErrors.email}
              </p>
            )}
          </motion.div>

          <motion.div
            className="space-y-2"
            whileFocus={{ scale: 1.01 }}
          >
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <motion.div
              whileFocus={{
                boxShadow:
                  "0 0 0 2px rgba(var(--primary), 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                value={formData.message}
                onChange={onInputChange}
                className={`bg-background border-border rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${formErrors.message ? "border-red-500" : ""}`}
              />
            </motion.div>
            {formErrors.message && (
              <p
                id="message-error"
                className="text-red-500 text-xs"
                role="alert"
              >
                {formErrors.message}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              type="submit"
              disabled={
                Object.keys(formErrors).length > 0 || isLoading
              }
              className="w-full md:w-auto md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={
                isLoading
                  ? "Sending message..."
                  : "Send message"
              }
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>
        </motion.form>

        {/* Direct Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Or reach me directly
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.a
                href="mailto:teddy@teddygithinji.me"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                variants={scaleOnHover}
                whileHover="hover"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  Email
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/teddy-muraguri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                variants={scaleOnHover}
                whileHover="hover"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  LinkedIn
                </span>
              </motion.a>

              <motion.a
                href="https://github.com/Tgithinji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                variants={scaleOnHover}
                whileHover="hover"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="https://wa.me/254702783943"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                variants={scaleOnHover}
                whileHover="hover"
              >
                <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  WhatsApp
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TabsContent>
  );
};
