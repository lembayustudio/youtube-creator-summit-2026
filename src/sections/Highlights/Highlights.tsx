import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useHighlights } from "../../hooks/useHighlights";

export default function Highlights() {
  const { highlights, loading } = useHighlights();

  if (loading || !highlights?.enabled) return null;

  return (
    <section className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          {highlights.eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              {highlights.eyebrow}
            </span>
          )}

          <h2
            className="mt-4 text-5xl text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {highlights.title}
          </h2>

          {highlights.description && (
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {highlights.description}
            </p>
          )}
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.items.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-green-500/30"
            >
              <div className="mb-6 text-5xl">
                {item.icon || "✨"}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}