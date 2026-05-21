import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import stage from "@/assets/stage.jpg";
import fire from "@/assets/fire.jpg";
import chill from "@/assets/chill.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "Lasers, fire, immersive visuals and a curated chill zone — the Woodstock Remake 2026 experience, designed for the Colegio El Prado community.",
      },
    ],
  }),
  component: ExperiencePage,
});

const CARDS = [
  {
    img: stage,
    title: "Dark Neon Main Stage",
    body:
      "A full-scale festival stage installed on campus with synchronized laser arrays, massive LED towers and crystal-clear PA — built to feel like a real arena show.",
  },
  {
    img: fire,
    title: "The Fire Zone & Visual Effects",
    body:
      "Cold-fire pyrotechnics, controlled CO2 jets and cinematic projection mapping turn every drop into a moment you can feel as much as you can hear.",
  },
  {
    img: chill,
    title: "Food Trucks & Chill Area",
    body:
      "A relaxed open-air lounge with curated food trucks, soft lighting and seating — the perfect place to recharge between sets, exclusive to students.",
  },
];

function ExperiencePage() {
  useScrollReveal();
  return (
    <>
      <section className="pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center reveal">
          <p className="eyebrow">The Experience</p>
          <h1 className="display-xl mt-4">
            Feel it before you <span className="neon-text-blue">live it</span>.
          </h1>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto reveal">
          <div className="aspect-video rounded-3xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Or9JqOFy2Xs?rel=0&modestbranding=1"
              title="Festival aftermovie"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="reveal glass rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,209,255,0.18)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-4 text-white/65 leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
