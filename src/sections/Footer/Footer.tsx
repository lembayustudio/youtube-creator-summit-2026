import {
  Globe,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-[180px]" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-3">

        {/* Brand */}
        <div>

          <h3
            className="text-4xl text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            NEXTSTAGE
          </h3>

          <span className="tracking-[0.25em] text-green-400">
            EVENTS
          </span>

          <p className="mt-6 max-w-sm leading-8 text-slate-400">
            Bringing creators together to learn, network and build meaningful
            opportunities.
          </p>

          <div className="mt-8 flex gap-4">

  <Social>
    <FaFacebook size={18} />
  </Social>

  <Social>
    <FaInstagram size={18} />
  </Social>

  <Social>
    <FaYoutube size={18} />
  </Social>

  <Social>
    <FaTiktok size={18} />
  </Social>

</div>

        </div>

        {/* Quick Links */}
        <div>

          <h4 className="text-xl font-semibold text-white">
            Quick Links
          </h4>

          <ul className="mt-8 space-y-5 text-slate-300">

            <FooterLink text="Event" />

            <FooterLink text="Speakers" />

            <FooterLink text="Agenda" />

            <FooterLink text="FAQ" />

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="text-xl font-semibold text-white">
            Contact
          </h4>

          <div className="mt-8 space-y-6">

            <ContactItem
              icon={<Mail size={18} />}
              text="hello@nextstageevents.com"
            />

            <ContactItem
              icon={<Phone size={18} />}
              text="+60 12-345 6789"
            />

            <ContactItem
              icon={<MapPin size={18} />}
              text="Connexion Conference Centre, Kuala Lumpur"
            />

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 NextStage Events. All rights reserved.
      </div>

    </footer>
  );
}

function Social({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400">
      {children}
    </button>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        className="transition-colors duration-300 hover:text-green-400"
      >
        {text}
      </a>
    </li>
  );
}

function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 text-slate-300">
      <div className="mt-1 text-green-400">
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}