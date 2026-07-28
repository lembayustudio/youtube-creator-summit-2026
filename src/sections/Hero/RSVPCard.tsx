import { motion } from "motion/react";
import { useRSVP } from "../../features/rsvp/hook/useRSVP";

export default function RSVPCard() {
  const {
    form,
    loading,
    success,
    error,
    updateField,
    submit,
  } = useRSVP();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submit();
  }

  return (
    <motion.div
      id="rsvp"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.15,
      }}
      className="rounded-[32px] border border-white/20 bg-white/8 p-8 text-white shadow-2xl backdrop-blur-2xl"
    >
      <h2 className="text-3xl font-bold tracking-tight text-white">
        Reserve Your Seat
      </h2>

      <p className="mt-3 max-w-sm leading-7 text-white/70">
        Complete the form below to secure your place at the YouTube Creator
        Summit 2026.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
        <span className="h-2 w-2 rounded-full bg-green-400" />
        Limited to the first 100 attendees
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="company" className="sr-only">
            Company / Organization
          </label>

          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Company / Organization"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
            Your RSVP has been submitted successfully.
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-green-500 py-4 font-semibold text-black transition-colors duration-300 hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Reserve My Seat"}
        </button>
      </form>
    </motion.div>
  );
}