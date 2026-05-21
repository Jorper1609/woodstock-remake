import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import nova from "@/assets/nova.jpg";

export const Route = createFileRoute("/dj-nova")({
  head: () => ({
    meta: [
      { title: "DJ Nova — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "DJ Nova brings high-tempo tech house and future rave to Woodstock Remake 2026 — prepare for absolute dancefloor destruction.",
      },
    ],
  }),
  component: NovaPage,
});

const TRACKS = [
  { t: "Pulse Override", d: "06:14" },
  { t: "Magenta Drop", d: "07:02" },
  { t: "Strobe Logic", d: "06:48" },
  { t: "Hyper Bloom", d: "07:33" },
  { t: "Afterhours", d: "08:21" },
  { t: "Final Form", d: "06:57" },
];

function NovaPage() {
  useScrollReveal();
  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img src={nova} alt="DJ Nova" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 max-w-7xl mx-auto">
          <p className="eyebrow neon-text-pink">Co-Headline Artist</p>
          <h1 className="display-hero mt-4">DJ<br/>Nova</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto reveal">
          <p className="eyebrow">Biography</p>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-white/80 font-light">
            DJ Nova brings the hard-hitting euphoria of modern rave culture straight to
            the campus. Specializing in high-tempo tech house and future rave, his
            performance is designed to keep the entire student body moving from the very
            first beat to the final drop. Prepare for absolute dancefloor destruction.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex items-end justify-between mb-10">
            <h2 className="display-lg">Tracklist preview</h2>
            <p className="eyebrow">Set · 75 min</p>
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
                  <span className="text-xl md:text-2xl font-display tracking-tight bg-clip-text transition-all duration-500
                    bg-gradient-to-r from-white to-white group-hover:from-[var(--neon-pink)] group-hover:to-[var(--neon-purple)] group-hover:text-transparent">
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
