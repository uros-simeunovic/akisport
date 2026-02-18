import { Card, CardContent } from "@/components/ui/card"

const designs = [
  {
    id: 1,
    title: "Moderni Dizajn",
    description: "Savremeni geometrijski uzorci i bold boje",
    image: "/modern-geometric-sports-jersey-design-pattern.jpg",
  },
  {
    id: 2,
    title: "Klasični Stil",
    description: "Tradicionalni dizajn sa elegantnim detaljima",
    image: "/classic-traditional-sports-jersey-design.jpg",
  },
  {
    id: 3,
    title: "Personalizacija",
    description: "Prilagođeni dizajni sa logom i imenima",
    image: "/customized-sports-jersey-with-logo-and-names.jpg",
  },
  {
    id: 4,
    title: "Timski Setovi",
    description: "Kompletni setovi za ceo tim",
    image: "/team-sports-jersey-set-collection.jpg",
  },
]

export function DesignExamples() {
  return (
    <section id="dizajni" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-bebas)] mb-4 tracking-wider">
            PRIMERI DIZAJNA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pogledajte različite stilove i opcije personalizacije koje nudimo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designs.map((design) => (
            <Card
              key={design.id}
              className="group overflow-hidden border-2 hover:border-accent transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide mb-2">{design.title}</h3>
                  <p className="text-muted-foreground">{design.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
