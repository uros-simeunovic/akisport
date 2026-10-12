import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#proizvodnja", label: "Proizvodnja", sections: ["proizvodnja"] },
  { href: "#dresovi", label: "Kolekcija", sections: ["dresovi", "trenerke", "majice", "sorcevi"] },
  { href: "#mere", label: "Mere i materijali", sections: ["mere"] },
  { href: "#kontakt", label: "Kontakt", sections: ["kontakt"] },
]

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("display text-3xl leading-none tracking-tight text-foreground", className)}>
      AKI <span className="text-accent">Sport</span>
    </span>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Highlight the nav link whose section currently crosses the upper third of the viewport
  useEffect(() => {
    const ids = navLinks.flatMap((l) => l.sections)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false)
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isActive = (sections: string[]) => activeSection !== null && sections.includes(activeSection)

  return (
    <>
      <a
        href="#glavni-sadrzaj"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
      >
        Preskoči na sadržaj
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors duration-300",
          scrolled
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="gutter mx-auto flex h-full max-w-[1440px] items-center justify-between">
          <a href="#top" aria-label="AKI Sport, na početak">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive(link.sections) ? "true" : undefined}
                className={cn(
                  "relative py-1 text-sm transition-colors duration-200",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300",
                  isActive(link.sections)
                    ? "text-foreground after:scale-x-100"
                    : "text-foreground/65 hover:text-foreground hover:after:scale-x-100"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="-mr-2 flex size-11 items-center justify-center text-foreground/80 transition-colors hover:text-foreground md:hidden"
            aria-label="Otvori meni"
            aria-expanded={mobileOpen}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-deep"
          role="dialog"
          aria-modal="true"
          aria-label="Meni"
        >
          <div className="gutter flex h-16 items-center justify-between border-b border-border">
            <Wordmark />
            <button
              onClick={() => setMobileOpen(false)}
              className="-mr-2 flex size-11 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Zatvori meni"
            >
              <X className="size-7" />
            </button>
          </div>
          <nav className="gutter flex flex-1 flex-col justify-center gap-5" aria-label="Mobilna navigacija">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="display flex items-baseline gap-4 text-5xl text-foreground/85 transition-colors hover:text-accent"
              >
                <span className="label-mono tabular normal-case">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
