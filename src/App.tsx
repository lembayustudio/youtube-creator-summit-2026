import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import SpeakerShowcase from "./sections/SpeakerShowcase/SpeakerShowcase";
import Highlights from "./sections/Highlights/Highlights";
import Agenda from "./sections/Agenda/Agenda";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
	  <SpeakerShowcase />
	  <Highlights />
	  <Agenda />
	  <FAQ />
	  <Footer />
    </>
  );
}