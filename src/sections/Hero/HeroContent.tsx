import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">

      <span className="mb-6 inline-flex w-fit rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        NextStage Events Presents
      </span>

      <h1
  className="text-7xl leading-none uppercase md:text-8xl"
  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
>
        YouTube
        <br />
        Creator Summit
        <br />
        2026
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
        Learn from Malaysia's leading YouTube creators, gain practical
        strategies, expand your network and grow your content with confidence.
      </p>

      <div className="mt-10 space-y-4">

        <Info icon={<CalendarDays size={20} />} text="18 July 2026" />

        <Info icon={<Clock3 size={20} />} text="9:00 AM – 2:00 PM" />

        <Info
          icon={<MapPin size={20} />}
          text="Connexion Conference Centre"
        />

        <Info
          icon={<Users size={20} />}
          text="Terhad kepada 100 peserta sahaja"
          highlight
        />

      </div>

      <button
        className="mt-10 w-fit rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
      >
        Daftar Sekarang
      </button>

    </div>
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
      className={`flex items-center gap-3 ${
        highlight ? "text-green-400" : "text-slate-300"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}