import { ArrowRight, Lock } from "lucide-react";
import { env } from "@/lib/config/env";

export default function Login() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-[160px]" />
      </div>

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
          <Lock className="text-green-400" size={30} />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-white">
          Client Portal
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          Access the content management system to update your website.
        </p>

        <button
          onClick={() => {
            window.location.href = env.cmsUrl;
          }}
          className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-green-400"
        >
          Continue to CMS
          <ArrowRight size={18} />
        </button>

        <p className="mt-6 text-sm text-slate-500">
          Secure login powered by Sanity CMS.
        </p>
      </div>
    </main>
  );
}