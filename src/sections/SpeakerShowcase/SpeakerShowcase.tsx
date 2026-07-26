import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { fadeUp } from "../../lib/motion";
import { useSpeakers } from "../../hooks/useSpeakers";
import SpeakerCard from "./SpeakerCard";

export default function SpeakerShowcase() {
  const { speakers, loading } = useSpeakers();

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  if (loading) return null;

  const count = speakers.length;

  const renderContent = () => {
    if (count === 0) {
      return (
        <div className="mt-16 text-center text-slate-400">
          Speakers will be announced soon.
        </div>
      );
    }

    if (count === 1) {
      return (
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-md">
            <SpeakerCard speaker={speakers[0]} />
          </div>
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker._id}
              speaker={speaker}
            />
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker._id}
              speaker={speaker}
            />
          ))}
        </div>
      );
    }

    if (count === 4) {
      return (
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker._id}
              speaker={speaker}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={emblaRef}
        className="mt-16 overflow-hidden"
      >
        <div className="flex">
          {speakers.map((speaker) => (
            <div
              key={speaker._id}
              className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    );
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

        <motion.div {...fadeUp(0.15)}>
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
}