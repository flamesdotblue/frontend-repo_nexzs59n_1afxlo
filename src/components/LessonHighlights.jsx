import { PlayCircle, BookOpen, CalendarDays } from "lucide-react";

const lessons = [
  {
    tag: "Acting",
    title: "Mastering Emotions On Camera",
    desc: "Use beats, subtext, and stillness to deliver nuanced performances.",
    icon: PlayCircle,
    accent: "from-pink-500/20 to-fuchsia-500/10",
  },
  {
    tag: "Writing",
    title: "From Idea to Screenplay",
    desc: "Turn raw ideas into compelling scripts with clear structure.",
    icon: BookOpen,
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    tag: "Direction",
    title: "Shot List Like a Pro",
    desc: "Plan coverage, camera moves, and blocking for clarity on set.",
    icon: CalendarDays,
    accent: "from-rose-500/20 to-orange-500/10",
  },
];

export default function LessonHighlights() {
  return (
    <section id="highlights" className="bg-gradient-to-b from-black to-zinc-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Hands-on, Practical Lessons</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Learn with short, focused modules you can apply immediately to your
              auditions, scripts, and shoots.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((l) => (
            <article
              key={l.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${l.accent}`}
            >
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/5 blur-2xl" />
              <div className="relative p-6">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  {l.tag}
                </span>
                <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <l.icon className="h-6 w-6 text-pink-300" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{l.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-white/10">
                  Preview lesson
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
