import Container from "./Container";
import nextStageLogo from "../assets/images/nextstage-logo-horizontal.webp";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-md"
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label="NextStage Events Home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <img
              src={nextStageLogo}
              alt="NextStage Events"
              className="h-11 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#highlights" className="transition hover:text-white">
              Highlights
            </a>

            <a href="#speakers" className="transition hover:text-white">
              Speakers
            </a>

            <a href="#agenda" className="transition hover:text-white">
              Agenda
            </a>

            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>

          {/* RSVP Button */}
          <a
            href="#rsvp"
            aria-label="Go to RSVP section"
            className="rounded-full bg-green-500 px-5 py-2.5 font-medium text-black transition hover:bg-green-400"
          >
            RSVP
          </a>
        </nav>
      </Container>
    </header>
  );
}