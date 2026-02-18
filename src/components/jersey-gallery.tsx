const jerseys = [
  {
    id: 1,
    name: "Fudbalski Dres",
    image: "/classic-football-soccer-jersey-blue.jpg",
  },
  {
    id: 2,
    name: "Košarkaški Dres",
    image: "/basketball-jersey-red-professional.jpg",
  },
  {
    id: 3,
    name: "Rukometni Dres",
    image: "/handball-jersey-green-elite.jpg",
  },
  {
    id: 4,
    name: "Odbojkaški Dres",
    image: "/volleyball-jersey-yellow-team.jpg",
  },
  {
    id: 5,
    name: "Atletski Dres",
    image: "/athletic-running-jersey-orange-sprint.jpg",
  },
  {
    id: 6,
    name: "Trening Dres",
    image: "/training-jersey-black-performance.jpg",
  },
  {
    id: 7,
    name: "Personalizovani Dizajn",
    image: "/custom-jersey-design-mockup.jpg",
  },
  {
    id: 8,
    name: "Timski Set",
    image: "/team-jersey-set-collection.jpg",
  },
  {
    id: 9,
    name: "Premium Kolekcija",
    image: "/premium-sports-jersey-collection.jpg",
  },
]

export function JerseyGallery() {
  return (
    <section className="container mx-auto px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jerseys.map((jersey) => (
          <div
            key={jersey.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary/50 hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={jersey.image || "/placeholder.svg"}
              alt={jersey.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-white">{jersey.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
