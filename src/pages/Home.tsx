import Hero from "../sections/Hero/Hero";
import SpeakerShowcase from "../sections/SpeakerShowcase/SpeakerShowcase";
import Highlights from "../sections/Highlights/Highlights";
import Agenda from "../sections/Agenda/Agenda";
import FAQ from "../sections/FAQ/FAQ";
import CTA from "../sections/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SpeakerShowcase />
      <Highlights />
      <Agenda />
      <FAQ />
      <CTA />
    </>
  );
}