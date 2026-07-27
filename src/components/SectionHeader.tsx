import { motion } from "motion/react";
import { fadeUp } from "../lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      {...fadeUp()}
      className="mx-auto max-w-3xl text-center"
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          {eyebrow}
        </span>
      )}

      <h2
        className="mt-4 text-5xl text-white md:text-6xl"
        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}