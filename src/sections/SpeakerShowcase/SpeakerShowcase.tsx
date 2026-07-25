import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import featuredSpeakers from "../../assets/images/featured-speakers.webp";

export default function SpeakerShowcase() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-green-500/10 blur-[160px]" />

        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]" />

        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Our Special Guest
          </span>

          <h2
            className="mt-4 text-5xl leading-tight text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Meet The <span className="text-green-400">Creators</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learn directly from creators who have built successful brands,
            grown loyal communities and transformed their passion into
            sustainable businesses.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-green-500/10 backdrop-blur-sm"
        >
          <img
            src={featuredSpeakers}
            alt="Featured speakers"
            className="w-full rounded-[24px]"
          />
        </motion.div>
      </div>
    </section>
  );
}