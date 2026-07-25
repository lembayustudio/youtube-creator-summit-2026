import type { Variants } from "motion/react";

const DEFAULT_DURATION = 0.55;
const DEFAULT_DISTANCE = 24;

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: DEFAULT_DISTANCE,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DEFAULT_DURATION,
    },
  },
};

/* -------------------------------------------------------------------------- */
/* Reusable Scroll Animations                                                 */
/* -------------------------------------------------------------------------- */

export const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: DEFAULT_DISTANCE,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: DEFAULT_DURATION,
    delay,
  },
});

export const fadeDown = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: -DEFAULT_DISTANCE,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: DEFAULT_DURATION,
    delay,
  },
});

export const fadeLeft = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: DEFAULT_DISTANCE,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: DEFAULT_DURATION,
    delay,
  },
});

export const fadeRight = (delay = 0) => ({
  initial: {
    opacity: 0,
    x: -DEFAULT_DISTANCE,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: DEFAULT_DURATION,
    delay,
  },
});

export const scaleIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: DEFAULT_DURATION,
    delay,
  },
});