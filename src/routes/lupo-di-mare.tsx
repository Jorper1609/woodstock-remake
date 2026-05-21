import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import lupo from "@/assets/lupo.jpg";

export const Route = createFileRoute("/lupo-di-mare")({
  head: () => ({
    meta: [
      { title: "Lupo Di Mare — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "Lupo Di Mare headlines Woodstock Remake 2026 with deep melodic techno designed to push the Colegio El Prado sound system to its limits.",
      },
    ],
  }),
  component: LupoPage,
});

const TRACKS = [
  { t: "Aurora", d: "07:24" },
  { t: "Hidden Tides", d: "08:11" },
  { t: "Pradonox", d: "06:48" },
  { t: "Solstice Drive", d: "07:55" },
  { t: "Northern Static", d: "09:02" },
  { t: "Atlas Loop", d: "06:30" },
];

function LupoPage() {
  useScrollReveal();
  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img src={lupo} alt="Lupo Di Mare" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 max-w-7xl mx-auto">
          <p className="eyebrow neon-text-blue">Headline Artist</p>
          <h1 className="display-hero mt-4">Lupo<br/>Di Mare</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto reveal">
          <p className="eyebrow">Biography</p>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-white/80 font-light">
            Lupo Di Mare is the alter ego of El Prado's premier electronic music producer.
            Known for his deep melodic techno basslines and energetic live transitions,
            his set for the Woodstock Remake promises to push the school's sound system
            to its absolute limits. Expect a journey through space, sound, and visual euphoria.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex items-end justify-between mb-10">
            <h2 className="display-lg">Tracklist preview</h2>
            <p className="eyebrow">Set · 90 min</p>
          </div>
          <ul className="divide-y divide-white/5">
            {TRACKS.map((t, i) => (
              <li
                key={t.t}
                className="reveal group flex items-center justify-between py-5 px-4 -mx-4 rounded-xl cursor-pointer transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-white/40 tabular-nums text-sm w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className="text-xl md:text-2xl font-display tracking-tight bg-clip-text transition-all duration-500
                    bg-gradient-to-r from-white to-white group-hover:from-[var(--neon-blue)] group-hover:to-[var(--neon-purple)] group-hover:text-transparent"
                  >
                    {t.t}
                  </span>
                </div>
                <span className="text-white/40 tabular-nums text-sm">{t.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
