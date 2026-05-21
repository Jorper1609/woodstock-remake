import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/lupo-di-mare", label: "Lupo Di Mare" },
  { to: "/dj-nova", label: "DJ Nova" },
  { to: "/experience", label: "Experience" },
  { to: "/tickets", label: "Tickets" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold tracking-tight text-base">
          WOODSTOCK<span className="neon-text-blue"> /</span> REMAKE
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-white/70">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-white" }}
              className="hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/tickets" className="hidden lg:inline-flex btn-ghost !py-2 !px-4 text-xs">
          Get Tickets
        </Link>
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-white/80"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-[2px] bg-current mb-[5px]" />
          <div className="w-5 h-[2px] bg-current" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
