export default function RSVPCard() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">

      <h2 className="text-3xl font-bold">
        RSVP
      </h2>

      <p className="mt-2 text-slate-500">
        Tempah tempat anda sekarang.
      </p>

      <form className="mt-8 space-y-4">

        <input
          className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-green-500"
          placeholder="Nama Penuh"
        />

        <input
          className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-green-500"
          placeholder="Email"
        />

        <input
          className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-green-500"
          placeholder="No. Telefon"
        />

        <input
          className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-green-500"
          placeholder="Syarikat"
        />

        <button
          className="w-full rounded-xl bg-green-500 py-4 font-semibold text-black transition hover:bg-green-400"
        >
          Hantar RSVP
        </button>

      </form>

    </div>
  );
}