import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import SpeakerShowcase from "./sections/SpeakerShowcase/SpeakerShowcase";
import Highlights from "./sections/Highlights/Highlights";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
	  <SpeakerShowcase />
	  <Highlights />
    </>
  );
}