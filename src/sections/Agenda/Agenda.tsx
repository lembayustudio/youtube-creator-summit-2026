import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useAgenda } from "../../hooks/useAgenda";

export default function Agenda() {
  const { agenda, loading } = useAgenda();

  if (loading || !agenda?.enabled) return null;

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          {agenda.eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              {agenda.eyebrow}
            </span>
          )}

          <h2
            className="mt-4 text-5xl text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {agenda.title}
          </h2>

          {agenda.description && (
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {agenda.description}
            </p>
          )}
        </motion.div>

        <div className="mt-16 space-y-6">
          {agenda.items.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.08)}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="grid gap-6 md:grid-cols-[140px_1fr]">
                <div>
                  <p className="text-lg font-semibold text-green-400">
                    {item.time}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.speaker && (
                    <p className="mt-2 text-green-400">
                      {item.speaker}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-4 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}