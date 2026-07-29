import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Container from "./Container";
import nextStageLogo from "../assets/images/nextstage-logo-horizontal.webp";

const navItems = [
  { label: "Highlights", href: "#highlights" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <nav
            aria-label="Primary navigation"
            className={`mt-4 flex h-16 items-center justify-between rounded-2xl px-6 transition-all duration-300 ${
              scrolled
                ? "border border-white/10 bg-black/50 shadow-lg backdrop-blur-xl"
                : "border border-white/10 bg-white/5 backdrop-blur-md"
            }`}
          >
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

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              id="mobile-navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#0B0F19] p-8 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
            >
              <div className="mb-12 flex items-center justify-between">
                <img
                  src={nextStageLogo}
                  alt="NextStage Events"
                  className="h-10 w-auto"
                />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-xl border border-white/10 p-2 text-white transition hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col border-t border-white/10 pt-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-5 text-lg font-medium text-white transition hover:text-green-400"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}