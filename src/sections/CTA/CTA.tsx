import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useCTA } from "../../hooks/useCTA";
import PrimaryButton from "../../components/PrimaryButton";

export default function CTA() {
  const { cta, loading } = useCTA();

  if (loading || !cta?.enabled) return null;

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          {...fadeUp()}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm md:p-16"
        >
          {cta.eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              {cta.eyebrow}
            </span>
          )}

          <h2
            className="mt-4 text-5xl text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {cta.title}
          </h2>

          {cta.description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {cta.description}
            </p>
          )}

          {cta.buttonText && cta.buttonLink && (
  <PrimaryButton
    href={cta.buttonLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10"
  >
    {cta.buttonText}
  </PrimaryButton>
)}
        </motion.div>
      </div>
    </section>
  );
}