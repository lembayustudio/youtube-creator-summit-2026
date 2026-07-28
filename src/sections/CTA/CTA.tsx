import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useCTA } from "../../hooks/useCTA";
import PrimaryButton from "../../components/PrimaryButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";

export default function CTA() {
  const { cta, loading } = useCTA();

  if (loading || !cta?.enabled) return null;

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black py-16 md:py-24">
      <SectionContainer maxWidth="4xl">
        <motion.div
          {...fadeUp()}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-14"
        >
          <SectionHeader
            eyebrow={cta.eyebrow}
            title={cta.title}
            description={cta.description}
          />

          {cta.buttonText && cta.buttonLink && (
            <PrimaryButton
              href={cta.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10"
            >
              {cta.buttonText}
            </PrimaryButton>
          )}
        </motion.div>
      </SectionContainer>
    </section>
  );
}