import { Film, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/40 via-fuchsia-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Learn • Create • Shine
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              AllTimeTask.in
              <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                Your Bollywood Breakthrough Starts Here
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg">
              A creative learning space for aspiring actors, writers, and directors.
              Get step-by-step guidance, expert tips, and real industry insights to
              turn passion into a successful film career.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <Film className="h-4 w-4" /> Start Learning
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Explore Highlights <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-pink-500/10 to-violet-600/20 p-1">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(200px_150px_at_20%_20%,rgba(255,255,255,0.15),transparent),radial-gradient(200px_200px_at_80%_60%,rgba(236,72,153,0.25),transparent)]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-black/60">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/20 ring-1 ring-pink-400/40">
                    <Film className="h-8 w-8 text-pink-400" />
                  </div>
                  <p className="max-w-xs text-sm text-zinc-300">
                    Learn the craft behind iconic performances and unforgettable
                    stories. Practical lessons, real examples, Bollywood flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
