import { Users, Star } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(236,72,153,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-violet-500/10 p-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            <Star className="h-3.5 w-3.5 text-yellow-400" /> Trusted by growing community of artists
          </div>
          <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Ready to take your first step into Bollywood?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-zinc-300">
            Join a supportive community, follow guided paths, and build a portfolio
            that reflects your unique voice.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600"
            >
              Start for free
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Users className="h-4 w-4" /> Explore community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
