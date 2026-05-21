import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImg from "@/assets/hero-stage.jpg";
import { Countdown } from "@/components/Countdown";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woodstock Remake 2026 — The Fire Returns" },
      {
        name: "description",
        content:
          "One stage. Infinite energy. Woodstock Remake 2026 is the exclusive end-of-year electronic festival for the Colegio El Prado community.",
      },
    ],
  }),
  component: HomePage,
});

const HERO_WORDS = ["Woodstock", "Remake", "2026"];

function HomePage() {
  useScrollReveal();

  useEffect(() => {
    // ensure visible on initial paint for above-the-fold
    document.querySelectorAll<HTMLElement>(".reveal-now").forEach((el) =>
      el.classList.add("visible")
    );
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
        <div className="absolute inset-0 neon-grid-bg" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p
            className="eyebrow mb-8 opacity-0"
            style={{ animation: "heroIn 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            June 19 · 2026 · Colegio El Prado, Madrid
          </p>

          <h1 className="display-hero">
            {HERO_WORDS.map((w, i) => (
              <span
                key={w}
                className="stagger-word mr-4"
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                {i === 2 ? <span className="neon-text-blue">{w}</span> : w}
              </span>
            ))}
          </h1>

          <p
            className="mt-8 text-lg md:text-2xl text-white/70 font-light tracking-tight opacity-0"
            style={{ animation: "heroIn 0.9s 0.9s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            &gt; The Fire Returns. One Stage, Infinite Energy.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-0"
            style={{ animation: "heroIn 0.9s 1.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            <Link to="/tickets" className="btn-apple">
              Get Your Tickets
              <span aria-hidden>→</span>
            </Link>
            <Link to="/experience" className="btn-ghost">
              Explore the Experience
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.4em] opacity-0"
          style={{ animation: "heroIn 1s 1.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          SCROLL
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <p className="eyebrow">Countdown to ignition</p>
            <h2 className="display-xl mt-4">
              The night the campus <span className="neon-text-blue">ignites</span>.
            </h2>
          </div>
          <div className="reveal">
            <Countdown />
          </div>
        </div>
      </section>

      {/* ARTISTS PREVIEW */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="eyebrow">The Lineup</p>
              <h2 className="display-xl mt-4">Two headliners.<br />One unforgettable night.</h2>
            </div>
            <Link to="/lupo-di-mare" className="btn-ghost">View artists</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { to: "/lupo-di-mare", name: "Lupo Di Mare", genre: "Melodic / Deep Techno", color: "neon-text-blue" },
              { to: "/dj-nova", name: "DJ Nova", genre: "Tech House / Future Rave", color: "neon-text-pink" },
            ].map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="reveal glass rounded-3xl p-10 group transition-[transform,box-shadow] duration-500 hover:-translate-y-2"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <p className="eyebrow">{a.genre}</p>
                <h3 className={`display-lg mt-6 ${a.color}`}>{a.name}</h3>
                <div className="mt-10 flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors">
                  View profile <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
