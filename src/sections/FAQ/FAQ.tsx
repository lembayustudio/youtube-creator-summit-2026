import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useFaq } from "../../hooks/useFaq";

export default function FAQ() {
  const { faq, loading } = useFaq();

  if (loading || !faq?.enabled) return null;

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          {faq.eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              {faq.eyebrow}
            </span>
          )}

          <h2
            className="mt-4 text-5xl text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {faq.title}
          </h2>

          {faq.description && (
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {faq.description}
            </p>
          )}
        </motion.div>

        <div className="mt-16 space-y-4">
          {faq.items.map((item, index) => (
            <motion.details
              key={index}
              {...fadeUp(index * 0.08)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">
                {item.question}
              </summary>

              <p className="mt-4 leading-7 text-slate-300">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}