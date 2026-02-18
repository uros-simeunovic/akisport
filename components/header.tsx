"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#dresovi", label: "DRESOVI" },
    { href: "#trenerke", label: "TRENERKE" },
    { href: "#majice", label: "MAJICE" },
    { href: "#sorcevi", label: "ŠORCEVI" },
    { href: "#kontakt", label: "KONTAKT" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[oklch(0.08_0_0)] border-[oklch(0.22_0_0)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-0">
            <span
              className="text-3xl font-black tracking-tighter text-white"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              AKI
            </span>
            <span
              className="text-3xl font-black tracking-tighter text-[oklch(0.7_0.18_45)] ml-1"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              SPORT
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-white/70 hover:text-[oklch(0.7_0.18_45)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Otvori meni"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[oklch(0.05_0_0)] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-[oklch(0.22_0_0)]">
            <span
              className="text-3xl font-black tracking-tighter"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="text-white">AKI</span>
              <span className="text-[oklch(0.7_0.18_45)] ml-1">SPORT</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Zatvori meni"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex flex-col justify-center flex-1 px-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-black tracking-wider text-white/80 hover:text-[oklch(0.7_0.18_45)] transition-colors"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
