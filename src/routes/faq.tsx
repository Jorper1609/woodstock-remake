import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Rules — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "Frequently asked questions, dress code and rules for Woodstock Remake 2026 at Colegio El Prado.",
      },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "Who can attend?",
    a: "Exclusive for current students, alumni, and staff of Colegio El Prado. A valid student or staff ID will be required at the entrance.",
  },
  {
    q: "What is the dress code?",
    a: "Casual / festival attire. Neon accessories are highly encouraged — make it part of the show.",
  },
  {
    q: "Are external guests allowed?",
    a: "No. This is a private school community event for safety and organization compliance. No exceptions can be made.",
  },
  {
    q: "What time should I arrive?",
    a: "Doors open at 21:30. We recommend arriving early to avoid queues and to enjoy the opening set.",
  },
  {
    q: "Will food and drinks be available?",
    a: "Yes — curated food trucks and a soft-drinks bar will be available in the chill zone throughout the night.",
  },
];

function FaqPage() {
  useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto reveal">
          <p className="eyebrow">FAQ & Rules</p>
          <h1 className="display-xl mt-4">
            Everything you need <span className="neon-text-blue">to know</span>.
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="font-display text-lg md:text-xl tracking-tight">{f.q}</span>
                  <span
                    className={`text-white/60 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-white/65 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto reveal glass rounded-3xl p-10">
          <p className="eyebrow">Code of Conduct</p>
          <p className="mt-5 text-white/75 leading-relaxed">
            All attendees are expected to respect the behavioural rules and values of
            Colegio El Prado at all times. Any conduct that compromises the safety,
            integrity or atmosphere of the event will result in immediate removal from
            the venue. Let's make this a night to remember — for all the right reasons.
          </p>
        </div>
      </section>
    </>
  );
}
