export default function RSVPCard() {
  return (
    <div className="rounded-[32px] border border-white/20 bg-white/8 p-8 text-white shadow-2xl backdrop-blur-2xl">

     <h2 className="text-3xl font-bold tracking-tight text-white">
  Tempah Tempat Anda
</h2>

<p className="mt-3 max-w-sm leading-7 text-white/70">
  Isi maklumat di bawah untuk mengesahkan penyertaan anda.
</p>

<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
  <span className="h-2 w-2 rounded-full bg-green-400" />
  Terhad kepada 100 peserta sahaja
</div>

      <form className="mt-8 space-y-4">

        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10"
          placeholder="Nama Penuh"
        />

        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10"
          placeholder="Email"
        />

        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10"
          placeholder="No. Telefon"
        />

        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-all duration-300 focus:border-green-400 focus:bg-white/10 focus:ring-4 focus:ring-green-500/10"
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