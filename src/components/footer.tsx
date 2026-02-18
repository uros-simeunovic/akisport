export function Footer() {
  return (
    <footer className="bg-[oklch(0.06_0_0)] py-8">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline">
            <span
              className="text-2xl font-black tracking-tighter text-white"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              AKI
            </span>
            <span
              className="text-2xl font-black tracking-tighter text-[oklch(0.7_0.18_45)] ml-1"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              SPORT
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#dresovi" className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">Dresovi</a>
            <a href="#trenerke" className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">Trenerke</a>
            <a href="#majice" className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">Majice</a>
            <a href="#sorcevi" className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">Šorcevi</a>
          </nav>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} AKI Sport</p>
        </div>
      </div>
    </footer>
  )
}
