import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-19T22:00:00").getTime();

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const items = [
    { v: d, l: "Days" },
    { v: h, l: "Hours" },
    { v: m, l: "Minutes" },
    { v: s, l: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((it) => (
        <div key={it.l} className="glass rounded-2xl p-6 md:p-10 text-center">
          <div className="font-display neon-text-blue pulse-soft text-5xl md:text-7xl font-bold tabular-nums">
            {pad(it.v)}
          </div>
          <div className="eyebrow mt-3">{it.l}</div>
        </div>
      ))}
    </div>
  );
}
