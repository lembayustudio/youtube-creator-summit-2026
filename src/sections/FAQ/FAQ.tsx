import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useFaq } from "../../hooks/useFaq";
import SectionHeader from "../../components/SectionHeader";
import SectionContainer from "../../components/SectionContainer";

export default function FAQ() {
  const { faq, loading } = useFaq();

  if (loading || !faq?.enabled) return null;

  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <SectionContainer maxWidth="4xl">
        <SectionHeader
  eyebrow={faq.eyebrow}
  title={faq.title}
  description={faq.description}
/>

        <div className="mt-16 space-y-4">
          {faq.items.map((item, index) => (
            <motion.details
              key={index}
              {...fadeUp(index * 0.08)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">
                {item.question}
              </summary>

              <p className="mt-4 leading-7 text-slate-300">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}