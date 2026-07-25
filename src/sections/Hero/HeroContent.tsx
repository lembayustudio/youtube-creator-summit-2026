import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { heroContainer, heroItem } from "../../lib/motion";

export default function HeroContent() {
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
        NextStage Events Presents
      </motion.span>

      <motion.h1
        variants={heroItem}
        className="text-7xl leading-none uppercase md:text-8xl"
        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
      >
        YouTube
        <br />
        Creator Summit
        <br />
        <span className="text-green-400">2026</span>
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="mt-6 max-w-lg text-lg leading-8 text-slate-300"
      >
        Learn practical strategies from Malaysia's leading creators,
        marketers and entrepreneurs to grow your audience, build your
        brand and turn content into sustainable business opportunities.
      </motion.p>

      <motion.div
        variants={heroItem}
        className="mt-10 space-y-4"
      >
        <Info
          icon={<CalendarDays size={20} />}
          text="18 July 2026"
        />

        <Info
          icon={<Clock3 size={20} />}
          text="9:00 AM – 2:00 PM"
        />

        <Info
          icon={<MapPin size={20} />}
          text="Connexion Conference Centre"
        />
      </motion.div>

      <motion.div
  variants={heroItem}
  className="mt-12 w-fit"
>
  <button
    className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl hover:shadow-green-400/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/30"
  >
    Daftar Sekarang
  </button>
</motion.div>
    </motion.div>
  );
}

type InfoProps = {
  icon: React.ReactNode;
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