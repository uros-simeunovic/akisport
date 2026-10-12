const links = [
  { href: "#proizvodnja", label: "Proizvodnja" },
  { href: "#dresovi", label: "Kolekcija" },
  { href: "#mere", label: "Mere" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-deep py-10">
      <div className="gutter mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="display text-2xl leading-none" aria-label="AKI Sport, na početak">
          AKI <span className="text-accent">Sport</span>
        </a>

        <nav aria-label="Podnožje" className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/65 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="label-mono tabular">© {new Date().getFullYear()} AKI Sport</p>
      </div>
    </footer>
  )
}
