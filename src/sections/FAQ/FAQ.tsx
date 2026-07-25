import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this event free to attend?",
    answer:
      "Yes. Registration is completely free, but seats are limited and registration is required.",
  },
  {
    question: "Who should attend this event?",
    answer:
      "Content creators, entrepreneurs, marketers, students and anyone interested in growing through digital content.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every registered participant who attends the event will receive a digital certificate.",
  },
  {
    question: "Can I ask questions during the sessions?",
    answer:
      "Absolutely. Selected sessions include a live Q&A with the speakers.",
  },
  {
    question: "Where is the venue?",
    answer:
      "Connexion Conference Centre, Kuala Lumpur.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-green-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Frequently Asked Questions
          </span>

          <h2
            className="mt-4 text-5xl leading-none md:text-7xl"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="text-white">GOT </span>
            <span className="text-green-400">QUESTIONS?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Everything you need to know before joining the event.
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/10"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-300 hover:text-green-400"
                >
                  <span className="text-xl font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      isOpen
                        ? "rotate-180 text-green-400"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-8 py-6">
                    <p className="leading-8 text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}