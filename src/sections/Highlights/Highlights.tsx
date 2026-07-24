import { ArrowUpRight, Handshake, Wallet } from "lucide-react";

const highlights = [
  {
    icon: ArrowUpRight,
    title: "Grow Your Audience",
    description:
      "Learn practical strategies that help creators attract more viewers, subscribers and loyal communities.",
  },
  {
    icon: Handshake,
    title: "Build Valuable Connections",
    description:
      "Meet creators, marketers and brands that can open new collaboration and business opportunities.",
  },
  {
    icon: Wallet,
    title: "Monetise Your Content",
    description:
      "Discover proven ways to generate income through content, sponsorships and digital products.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Why You Should Attend
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Learn, Connect &amp; Grow
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Spend one inspiring day learning practical strategies, meeting
            industry leaders and discovering new opportunities to grow your
            content and business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}