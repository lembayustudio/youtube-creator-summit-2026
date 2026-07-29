import { motion } from "motion/react";
import SectionHeader from "../../components/SectionHeader";
import { useHighlights } from "../../hooks/useHighlights";
import { fadeUp } from "../../lib/motion";

export default function Highlights() {
  const { highlights, loading } = useHighlights();

  if (loading || !highlights?.enabled) return null;

  return (
    <section className="relative bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={highlights.eyebrow}
          title={highlights.title}
          description={highlights.description}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.items.map((item, index) => (
            <motion.article
              key={index}
              {...fadeUp(index * 0.08)}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-500/30
                hover:bg-white/[0.05]
              "
            >
              <div className="text-5xl font-bold tracking-tight text-white/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              )}

              <div className="mt-8 h-px bg-white/10 transition-colors duration-300 group-hover:bg-green-500/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}