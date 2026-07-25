import { motion } from "motion/react";

import Container from "../../components/Container";
import { fadeUp } from "../../lib/motion";
import AgendaItem from "./AgendaItem";

const agenda = [
  {
    time: "8:30 AM",
    title: "Registration",
    description:
      "Check in, collect your event pass and enjoy light refreshments.",
  },
  {
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Welcome session and event briefing.",
  },
  {
    time: "9:20 AM",
    title: "Growing a Creator Brand",
    description:
      "Learn how successful creators consistently build loyal audiences.",
  },
  {
    time: "10:15 AM",
    title: "Content Strategy That Works",
    description:
      "Practical frameworks for creating content that performs.",
  },
  {
    time: "11:15 AM",
    title: "Coffee Break & Networking",
    description:
      "Connect with creators, partners and fellow attendees.",
  },
  {
    time: "11:45 AM",
    title: "Monetisation & Business",
    description:
      "Discover sustainable revenue strategies beyond AdSense.",
  },
  {
    time: "12:45 PM",
    title: "Panel Discussion",
    description: "Live Q&A with invited speakers.",
  },
  {
    time: "2:00 PM",
    title: "Closing Ceremony",
    description: "Final remarks and group photography.",
  },
];

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-green-500/10 blur-[180px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          {...fadeUp()}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Event Agenda
          </span>

          <h2
            className="mt-4 text-5xl leading-none md:text-7xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">PLAN YOUR </span>
            <span className="text-green-400">DAY</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Here's how the day will unfold from registration until the closing
            session.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-5xl">
          {agenda.map((item, index) => (
            <AgendaItem
              key={item.time}
              {...item}
              isLast={index === agenda.length - 1}
              delay={index * 0.05}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}