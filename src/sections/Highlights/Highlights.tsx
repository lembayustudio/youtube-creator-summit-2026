import { motion } from "motion/react";
import { ArrowUpRight, Handshake, Wallet } from "lucide-react";

import { fadeUp } from "../../lib/motion";
import HighlightCard from "./HighlightCard";

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
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
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
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon, title, description }, index) => (
            <HighlightCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}