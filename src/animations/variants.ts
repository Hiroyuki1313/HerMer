import { type Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeUpSpring: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 }
  }
};

export const springHover: Variants = {
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 30 } },
  tap: { scale: 0.98 }
};
