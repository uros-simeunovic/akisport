import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const categories = [
  { href: "#dresovi", label: "Dresovi" },
  { href: "#trenerke", label: "Trenerke" },
  { href: "#majice", label: "Majice" },
  { href: "#sorcevi", label: "Šorcevi" },
]

export function Hero() {
  // Fixed px height captured on mount: stops the hero from resizing when the
  // mobile browser address bar collapses while scrolling.
  const [heroHeight, setHeroHeight] = useState<number | null>(null)

  useEffect(() => {
    setHeroHeight(window.innerHeight)
  }, [])

  return (
    <section
      id="top"
      className="relative isolate flex items-start overflow-hidden md:items-center"
      style={{ minHeight: heroHeight ? `${heroHeight}px` : "100svh" }}
    >
      <img
        src="/LandingPageImage.png"
        alt="Tri sportista u dresovima koje izrađuje AKI Sport: košarkaš, odbojkašica i fudbaler"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_bottom] md:object-center"
        fetchPriority="high"
      />
      {/* Scrims keep the headline readable: top-down on phones, left-to-right on desktop.
          The bottom fade lands on the page background. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.006 55 / 0.94) 0%, oklch(0.12 0.006 55 / 0.82) 50%, transparent 82%), linear-gradient(to top, var(--background) 0%, transparent 22%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, oklch(0.12 0.006 55 / 0.92) 0%, oklch(0.12 0.006 55 / 0.6) 42%, transparent 75%), linear-gradient(to top, var(--background) 0%, transparent 28%)",
        }}
      />

      <div className="gutter mx-auto w-full max-w-[1440px] pb-32 pt-28 md:pt-16">
        <div className="max-w-3xl">
          <p className="label-mono mb-6 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Izrada sportske odeće · Srbija
          </p>

          <h1 className="display text-[clamp(3.5rem,11vw,8.5rem)] text-foreground">
            Od skice
            <br />
            do dresa.
            <br />
            <span className="text-accent">Mi to radimo sami.</span>
          </h1>

          <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-foreground/75 md:text-lg">
            Dresove, trenerke, majice i šorcevi za timove svih uzrasta izrađujemo od izbora
            tkanine do poslednjeg šava.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#proizvodnja"
              className="group inline-flex h-12 items-center gap-3 bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:brightness-110 active:translate-y-px active:scale-[0.98]"
            >
              Kako nastaje dres
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#dresovi"
              className="text-sm text-foreground/80 underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-foreground"
            >
              Pogledaj kolekciju
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Kategorije proizvoda"
        className="gutter absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] pb-7"
      >
        <ul className="flex justify-between gap-x-4 border-t border-foreground/15 pt-4 md:justify-start md:gap-x-8">
          {categories.map((c, i) => (
            <li key={c.href}>
              <a
                href={c.href}
                className="label-mono tabular whitespace-nowrap transition-colors hover:text-foreground"
              >
                <span className="text-accent">0{i + 1}</span> {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
