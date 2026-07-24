import Container from "../../components/Container";
import HeroContent from "./HeroContent";
import RSVPCard from "./RSVPCard";

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-32 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <Container className="relative flex min-h-svh items-center py-20">
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_480px]">
          <HeroContent />
          <RSVPCard />
        </div>
      </Container>
    </section>
  );
}