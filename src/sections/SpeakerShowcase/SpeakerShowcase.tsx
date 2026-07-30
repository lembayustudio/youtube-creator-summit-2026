import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useFeaturedSpeakers } from "../../hooks/useFeaturedSpeakers";
import SpeakerBanner from "./SpeakerBanner";
import SpeakerCards from "./SpeakerCards";
import SectionHeader from "../../components/SectionHeader";
import SectionContainer from "../../components/SectionContainer";

export default function SpeakerShowcase() {
  const { featuredSpeakers, loading } = useFeaturedSpeakers();

  if (loading) return null;

  if (!featuredSpeakers?.enabled) return null;

  const renderContent = () => {
    switch (featuredSpeakers.layout) {
      case "banner":
        return (
          <SpeakerBanner
            desktopBanner={featuredSpeakers.desktopBanner}
mobileBanner={featuredSpeakers.mobileBanner}
          />
        );

      case "cards":
  return (
    <SpeakerCards
      speakers={featuredSpeakers.speakers}
    />
  );

      case "auto":
default:
  return featuredSpeakers.desktopBanner ? (
    <SpeakerBanner
      desktopBanner={featuredSpeakers.desktopBanner}
      mobileBanner={featuredSpeakers.mobileBanner}
    />
  ) : (
    <SpeakerCards
      speakers={featuredSpeakers.speakers}
    />
  );
    }
  };

  return (
    <section id="speakers" className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-green-500/10 blur-[160px]" />
        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <SectionContainer>
        <SectionHeader
  eyebrow={featuredSpeakers.eyebrow}
  title={featuredSpeakers.title}
  description={featuredSpeakers.description}
/>

        <motion.div {...fadeUp(0.15)}>
          {renderContent()}
        </motion.div>
      </SectionContainer>
    </section>
  );
}