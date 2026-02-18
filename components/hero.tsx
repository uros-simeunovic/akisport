import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/LandingPageImage.png"
          alt="Sports background"
          className="w-full h-full object-cover brightness-[0.3]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-6 tracking-tight text-balance">
          VRHUNSKI
          <br />
          SPORTSKI DRESOVI
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Premium kvalitet za sve sportove. Pregledajte našu kolekciju dresova i dizajna.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg h-12 px-8" asChild>
            <a href="#dresovi">
              Pogledaj Dresove
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg h-12 px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="#kontakt">Kontaktiraj Nas</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
