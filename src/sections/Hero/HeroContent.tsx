import type { ReactNode } from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { heroContainer, heroItem } from "../../lib/motion";
import { useHero } from "../../hooks/useHero";

export default function HeroContent() {
  const { hero, loading, error } = useHero();

  if (loading) {
    return (
      <div className="flex min-h-[640px] items-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  if (error || !hero) {
    return (
      <div className="flex min-h-[640px] items-center">
        <p className="text-red-400">
          Unable to load event information.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col justify-center"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <motion.span
        variants={heroItem}
        className="mb-6 inline-flex w-fit rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400"
      >
        {hero.badge}
      </motion.span>

      <motion.h1
        id="hero-title"
        variants={heroItem}
        className="text-6xl leading-[0.95] uppercase sm:text-7xl lg:text-8xl"
        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
      >
        {hero.titleLine1}
<br />
{hero.titleLine2}
<br />
<span className="text-green-400">
  {hero.titleHighlight}
</span>
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
      >
        {hero.description}
      </motion.p>

      <motion.div variants={heroItem} className="mt-10 space-y-4">
        <Info
          icon={<CalendarDays size={20} />}
          text={hero.eventDate}
        />

        <Info
          icon={<Clock3 size={20} />}
          text={hero.eventTime}
        />

        <Info
          icon={<MapPin size={20} />}
          text={hero.eventLocation}
        />
      </motion.div>

      <motion.div variants={heroItem} className="mt-10 w-fit">
        <a
          href={hero.ctaLink}
          className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl hover:shadow-green-400/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/30"
        >
          {hero.ctaText}
        </a>
      </motion.div>
    </motion.div>
  );
}

type InfoProps = {
  icon: ReactNode;
  text: string;
  highlight?: boolean;
};

function Info({ icon, text, highlight }: InfoProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        highlight ? "text-green-400" : "text-slate-200"
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
          highlight
            ? "border-green-500/30 bg-green-500/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        {icon}
      </div>

      <span className="text-base">{text}</span>
    </div>
  );
}