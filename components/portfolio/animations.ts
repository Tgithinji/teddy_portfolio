export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const scaleOnHover = {
  hover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
};

export const glowOnHover = {
  hover: {
    boxShadow:
      "0 20px 25px -5px rgba(var(--primary), 0.4), 0 10px 10px -5px rgba(var(--primary), 0.2)",
    borderColor: "rgba(var(--primary), 0.6)",
    transition: { duration: 0.3 },
  },
};

export const buttonHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 0 3px rgba(var(--primary), 0.3)",
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  },
  tap: {
    scale: 0.95,
  },
};

export const tabTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" as const },
};
