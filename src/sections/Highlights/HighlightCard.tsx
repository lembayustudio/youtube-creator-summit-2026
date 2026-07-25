import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

import { scaleIn } from "../../lib/motion";

type HighlightCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export default function HighlightCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: HighlightCardProps) {
  return (
    <motion.article
      {...scaleIn(delay)}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/10"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>
    </motion.article>
  );
}