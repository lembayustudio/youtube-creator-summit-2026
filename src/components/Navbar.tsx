import Container from "./Container";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-md"
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 font-bold text-black">
              N
            </div>

            <div className="leading-tight">
              <p className="font-semibold tracking-wide text-white">
                NextStage
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Events
              </p>
            </div>
          </a>

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