import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Woodstock Remake 2026" },
      {
        name: "description",
        content:
          "Reach the Woodstock Remake 2026 organization team and find the exact location at Colegio El Prado.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useScrollReveal();
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto reveal">
          <p className="eyebrow">Contact & Location</p>
          <h1 className="display-xl mt-4">
            Get in <span className="neon-text-blue">touch</span>.
          </h1>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto reveal rounded-3xl overflow-hidden glass">
          <iframe
            title="Colegio El Prado location"
            src="https://www.google.com/maps?q=Colegio+El+Prado+Madrid&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
            style={{ filter: "invert(90%) hue-rotate(180deg) opacity(0.75)", border: 0 }}
            allowFullScreen
          />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto reveal glass rounded-3xl p-8 md:p-12">
          <h2 className="display-lg">Send us a message</h2>
          <p className="text-white/55 mt-3">Bookings, doubts or press requests — we usually reply within 24 hours.</p>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Full name" id="name" type="text" placeholder="Your full name" required />
            <Field label="Email" id="email" type="email" placeholder="you@fomento.edu" required />
            <div className="space-y-2">
              <label htmlFor="message" className="block eyebrow">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us how we can help…"
                className="w-full bg-transparent rounded-xl px-4 py-3 border border-white/10 focus:border-[var(--neon-blue)] focus:outline-none focus:shadow-[0_0_0_4px_rgba(0,209,255,0.12)] transition-all duration-300 text-white placeholder:text-white/30"
              />
            </div>
            <button type="submit" className="btn-apple">
              {sent ? "Message sent ✓" : "Send message"}
              {!sent && <span aria-hidden>→</span>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  ...rest
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block eyebrow">{label}</label>
      <input
        id={id}
        {...rest}
        className="w-full bg-transparent rounded-xl px-4 py-3 border border-white/10 focus:border-[var(--neon-blue)] focus:outline-none focus:shadow-[0_0_0_4px_rgba(0,209,255,0.12)] transition-all duration-300 text-white placeholder:text-white/30"
      />
    </div>
  );
}
