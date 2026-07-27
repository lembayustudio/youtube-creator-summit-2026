import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useFeaturedSpeakers } from "../../hooks/useFeaturedSpeakers";
import SpeakerBanner from "./SpeakerBanner";
import SpeakerCards from "./SpeakerCards";

export default function SpeakerShowcase() {
  const { featuredSpeakers, loading } = useFeaturedSpeakers();

  if (loading) return null;

  if (!featuredSpeakers?.enabled) return null;

  const renderContent = () => {
    switch (featuredSpeakers.layout) {
      case "banner":
        return (
          <SpeakerBanner
            bannerImage={featuredSpeakers.bannerImage}
          />
        );

      case "cards":
  return (
    <SpeakerCards
      speakers={featuredSpeakers.speakers}
    />
  );

      case "auto":
      default:
        return featuredSpeakers.bannerImage ? (
          <SpeakerBanner
            bannerImage={featuredSpeakers.bannerImage}
          />
        ) : (
          <SpeakerCards
  speakers={featuredSpeakers.speakers}
/>
        );
    }
  };

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
            {featuredSpeakers.eyebrow}
          </span>

          <h2
            className="mt-4 text-5xl leading-tight text-white md:text-6xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {featuredSpeakers.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {featuredSpeakers.description}
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
}