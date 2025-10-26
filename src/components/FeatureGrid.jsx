import { Film, PenTool, Clapperboard } from "lucide-react";

const features = [
  {
    title: "Acting",
    icon: Film,
    points: [
      "Camera presence and body language",
      "Voice, diction, and emotion control",
      "Audition prep with mock scenes",
    ],
    color: "from-pink-500/20 to-fuchsia-500/10",
  },
  {
    title: "Scriptwriting",
    icon: PenTool,
    points: [
      "Story structure and character arcs",
      "Dialogue that feels cinematic",
      "Formatting that professionals expect",
    ],
    color: "from-violet-500/20 to-indigo-500/10",
  },
  {
    title: "Direction",
    icon: Clapperboard,
    points: [
      "Visual storytelling and shot design",
      "Working with actors on set",
      "Scheduling and pre-production basics",
    ],
    color: "from-rose-500/20 to-orange-500/10",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Build Your Core Craft</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Clear, practical modules designed for beginners. Learn step-by-step with
              real examples from Indian cinema.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${f.color}`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(300px_200px_at_80%_0%,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-pink-300" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {f.points.map((p) => (
                    <li key={p} className="leading-relaxed">• {p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
