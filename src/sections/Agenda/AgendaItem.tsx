import { motion } from "motion/react";

import { fadeUp } from "../../lib/motion";

type AgendaItemProps = {
  time: string;
  title: string;
  description: string;
  isLast: boolean;
  delay?: number;
};

export default function AgendaItem({
  time,
  title,
  description,
  isLast,
  delay = 0,
}: AgendaItemProps) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={`grid grid-cols-1 gap-2 py-10 md:grid-cols-[160px_1fr] md:gap-14 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Time */}
      <div className="text-2xl font-semibold text-green-400 md:text-3xl">
        {time}
      </div>

      {/* Content */}
      <div className="pt-3 md:border-l md:border-white/10 md:pl-10 md:pt-0">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
          {description}
        </p>
      </div>
    </motion.div>
  );
}