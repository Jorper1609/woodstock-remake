export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display font-bold text-lg">
            WOODSTOCK<span className="neon-text-blue"> /</span> REMAKE
          </div>
          <p className="text-sm text-white/50 mt-3 max-w-xs">
            An exclusive end-of-year electronic music experience for the Colegio El Prado community.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-4">Contact</div>
          <p className="text-white/70">jbyrne@fomento.edu</p>
          <p className="text-white/70">+34 91 000 00 00</p>
          <p className="text-white/50 mt-2">Calle Salvador de Madariaga, Madrid</p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-4">Follow</div>
          <div className="flex gap-5 text-white/60">
            {["Instagram", "TikTok", "Spotify", "YouTube"].map((s) => (
              <a key={s} href="#" className="hover:text-[var(--neon-blue)] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        © 2026 Woodstock Remake · Colegio El Prado. All rights reserved.
      </div>
    </footer>
  );
}
