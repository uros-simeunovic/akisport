import { Header } from "@/components/header"
import { ProductGallery } from "@/components/product-gallery"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ShieldCheck, Users, Zap } from "lucide-react"

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-svh flex items-center">
        <img
          src="/LandingPageImage.png"
          alt="AKI Sport"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.05 0 0 / 0.95) 0%, oklch(0.05 0 0 / 0.75) 45%, oklch(0.05 0 0 / 0.1) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-8 md:px-16 pt-16">
          <div className="max-w-2xl">
            <h1
              className="font-black leading-none text-white mb-6"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
              }}
            >
              SPORT OPREMA
              <br />
              <span className="text-[oklch(0.7_0.18_45)]">ZA POBEDNIKE</span>
            </h1>

            <div className="w-20 h-[3px] bg-[oklch(0.7_0.18_45)] mb-6" />

            <p className="text-white/60 tracking-[0.25em] uppercase text-sm mb-10">
              Premium dresovi · Trenerke · Majice · Šorcevi
            </p>

            <a
              href="#dresovi"
              className="inline-block border-2 border-[oklch(0.7_0.18_45)] text-[oklch(0.7_0.18_45)] px-8 py-3 text-sm font-black tracking-widest uppercase transition-all hover:bg-[oklch(0.7_0.18_45)] hover:text-black"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              POGLEDAJ KOLEKCIJU
            </a>
          </div>
        </div>

        {/* Animated down arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            className="text-white/40"
          >
            <path
              d="M1 1L8 8L15 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Zašto mi? strip */}
      <section className="bg-[oklch(0.08_0_0)] bg-diagonal-stripes py-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col gap-4">
              <ShieldCheck className="w-8 h-8 text-[oklch(0.7_0.18_45)]" />
              <h3
                className="text-2xl font-black uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Kvalitet Garantovan
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Koristimo isključivo materijale koji izdržavaju intenzivne treninge i profesionalne utakmice.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Users className="w-8 h-8 text-[oklch(0.7_0.18_45)]" />
              <h3
                className="text-2xl font-black uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Za Sve Timove
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Fudbal, košarka, odbojka — opremamo ekipe svih uzrasta i nivoa takmičenja.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Zap className="w-8 h-8 text-[oklch(0.7_0.18_45)]" />
              <h3
                className="text-2xl font-black uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Brza Izrada
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Personalizovani dresovi sa natpisom i brojevima u kratkim rokovima, bez kompromisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
