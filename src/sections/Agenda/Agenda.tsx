import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useAgenda } from "../../hooks/useAgenda";
import SectionHeader from "../../components/SectionHeader";
import SectionContainer from "../../components/SectionContainer";

export default function Agenda() {
  const { agenda, loading } = useAgenda();

  if (loading || !agenda?.enabled) return null;

  return (
    <section id="agenda" className="bg-slate-950 py-16 md:py-24">
      <SectionContainer maxWidth="5xl">
        <SectionHeader
          eyebrow={agenda.eyebrow}
          title={agenda.title}
          description={agenda.description}
        />

        <div className="mt-12 space-y-4 md:mt-16 md:space-y-6">
          {agenda.items.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.08)}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/[0.07] md:rounded-3xl md:p-6"
            >
              <div className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-6">
                <div>
                  <p className="text-base font-semibold uppercase tracking-wide text-green-400/90 md:text-lg">
                    {item.time}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {item.title}
                  </h3>

                  {item.speaker && (
                    <p className="mt-2 text-sm font-medium text-green-400 md:text-base">
                      {item.speaker}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-slate-300 md:mt-4 md:text-base md:leading-7">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}