import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Tickets & Timetable — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "Tickets, prices and the full timetable for Woodstock Remake 2026 — the exclusive end-of-year festival at Colegio El Prado.",
      },
    ],
  }),
  component: TicketsPage,
});

const TICKETS = [
  {
    type: "Student General Pass",
    benefits: "Full access to main stage & chill zone",
    price: "€50",
    featured: false,
  },
  {
    type: "Early Bird Discount",
    benefits: "Limited tickets available for early registrants",
    price: "€40",
    featured: true,
  },
  {
    type: "Alumni & Staff Pass",
    benefits: "Access for school alumni and academic staff",
    price: "€45",
    featured: false,
  },
];

const TIMETABLE = [
  { time: "21:30", title: "Doors Open", note: "Entrance check & wristband collection" },
  { time: "22:00", title: "Opening Set", note: "Warm-up by resident student DJs" },
  { time: "23:00", title: "Lupo Di Mare — Live Set", note: "Melodic / Deep Techno · 90 min", accent: "blue" as const },
  { time: "00:30", title: "Visual Interlude", note: "Cinematic visuals & cold fire show" },
  { time: "00:45", title: "DJ Nova — Live Set", note: "Tech House / Future Rave · 75 min", accent: "pink" as const },
  { time: "02:00", title: "Closing", note: "End of event · safe exit by main gate" },
];

function TicketsPage() {
  useScrollReveal();
  return (
    <>
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto reveal">
          <p className="eyebrow">Tickets & Timetable</p>
          <h1 className="display-xl mt-4 max-w-4xl">
            Secure your spot. <span className="neon-text-blue">Live the night.</span>
          </h1>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto reveal overflow-hidden rounded-3xl glass">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50">
                <th className="px-6 py-5 font-medium">Ticket Type</th>
                <th className="px-6 py-5 font-medium hidden md:table-cell">Benefits</th>
                <th className="px-6 py-5 font-medium text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {TICKETS.map((t) => (
                <tr
                  key={t.type}
                  className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-6 py-7 align-top">
                    <div className="font-display text-xl tracking-tight flex items-center gap-3">
                      {t.type}
                      {t.featured && (
                        <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full border border-[var(--neon-blue)] neon-text-blue">
                          Best value
                        </span>
                      )}
                    </div>
                    <p className="md:hidden text-white/55 text-sm mt-2">{t.benefits}</p>
                  </td>
                  <td className="px-6 py-7 text-white/65 hidden md:table-cell">{t.benefits}</td>
                  <td className="px-6 py-7 text-right font-display text-2xl tabular-nums">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12">
            <p className="eyebrow">Timetable</p>
            <h2 className="display-lg mt-3">The full timeline of the night.</h2>
          </div>

          <ol className="relative border-l border-white/10 pl-8 space-y-10">
            {TIMETABLE.map((e) => (
              <li key={e.time} className="reveal relative">
                <span
                  className={`absolute -left-[37px] top-1 w-3 h-3 rounded-full ring-4 ring-black ${
                    e.accent === "blue"
                      ? "bg-[var(--neon-blue)] shadow-[0_0_20px_rgba(0,209,255,0.7)]"
                      : e.accent === "pink"
                      ? "bg-[var(--neon-pink)] shadow-[0_0_20px_rgba(255,60,172,0.7)]"
                      : "bg-white/40"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-6">
                  <span className="font-display text-2xl tabular-nums text-white/90">{e.time}</span>
                  <span className="font-display text-xl text-white">{e.title}</span>
                </div>
                <p className="text-white/55 mt-2">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
