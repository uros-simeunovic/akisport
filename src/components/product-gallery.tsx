import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const dresoviCategories = [
  { id: "fudbal", label: "Fudbalski" },
  { id: "kosarka", label: "Košarkaški" },
  { id: "odbojka", label: "Odbojkaški" },
]

const dresoviImages = {
  fudbal: [
    { id: 1, src: "/dresovi/fudbal/fudbal-dres-1.jpg", title: "Fudbalski dres crveno-beli" },
    { id: 2, src: "/dresovi/fudbal/fudbal-dres-2.jpg", title: "Fudbalski dres plavi" },
    { id: 3, src: "/dresovi/fudbal/fudbal-dres-3.jpg", title: "Fudbalski dres crno-zlatni" },
    { id: 4, src: "/dresovi/fudbal/fudbal-dres-4.jpg", title: "Fudbalski dres zeleno-beli" },
  ],
  kosarka: [
    { id: 1, src: "/dresovi/kosarka/kosarka-dres-1.jpg", title: "Košarkaški dres crveni" },
    { id: 2, src: "/dresovi/kosarka/kosarka-dres-2.jpg", title: "Košarkaški dres teget" },
    { id: 3, src: "/dresovi/kosarka/kosarka-dres-3.jpg", title: "Košarkaški dres belo-narandžasti" },
    { id: 4, src: "/dresovi/kosarka/kosarka-dres-4.jpg", title: "Košarkaški dres crno-zlatni" },
  ],
  odbojka: [
    { id: 1, src: "/dresovi/odbojka/odbojka-dres-1.jpg", title: "Odbojkaški dres žuti" },
    { id: 2, src: "/dresovi/odbojka/odbojka-dres-2.jpg", title: "Odbojkaški dres tirkizni" },
    { id: 3, src: "/dresovi/odbojka/odbojka-dres-3.jpg", title: "Odbojkaški dres crveno-crni" },
    { id: 4, src: "/dresovi/odbojka/odbojka-dres-4.jpg", title: "Odbojkaški dres belo-plavi" },
  ],
}

const trenerkeImages = [
  { id: 1, src: "/trenerke/trenerka-1.png", title: "Trenerka teget" },
  { id: 2, src: "/trenerke/trenerka-2.png", title: "Trenerka crno-narandžasta" },
  { id: 3, src: "/trenerke/trenerka-3.png", title: "Trenerka crvena" },
  { id: 4, src: "/trenerke/trenerka-4.jpg", title: "Trenerka siva" },
]

const majiceImages = [
  { id: 1, src: "/majice/majica-1.jpg", title: "Sportska majica bela" },
  { id: 2, src: "/majice/majica-2.jpg", title: "Sportska majica crna" },
  { id: 3, src: "/majice/majica-3.jpg", title: "Sportska majica narandžasta" },
  { id: 4, src: "/majice/majica-4.jpg", title: "Sportska majica teget" },
]

const sorceviImages = [
  { id: 1, src: "/sorcevi/sorc-1.jpg", title: "Sportski šorc crni" },
  { id: 2, src: "/sorcevi/sorc-2.jpg", title: "Sportski šorc teget" },
  { id: 3, src: "/sorcevi/sorc-3.jpg", title: "Sportski šorc crveni" },
  { id: 4, src: "/sorcevi/sorc-4.jpg", title: "Sportski šorc beli" },
]

const stickyCategoryLinks = [
  { href: "#dresovi", label: "DRESOVI" },
  { href: "#trenerke", label: "TRENERKE" },
  { href: "#majice", label: "MAJICE" },
  { href: "#sorcevi", label: "ŠORCEVI" },
]

type ImageItem = { id: number; src: string; title: string }

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: ImageItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose, onPrev, onNext])

  const current = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Zatvori"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Prethodna slika"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Sledeća slika"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div
        className="max-w-5xl max-h-[90vh] px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src || "/placeholder.svg"}
          alt={current.title}
          className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
        />
        <p className="text-white text-center mt-4 text-lg font-medium">
          {current.title}
        </p>
        <p className="text-white/60 text-center text-sm mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-sm font-black text-[oklch(0.7_0.18_45)] shrink-0"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {number}
      </span>
      <div className="flex-1 h-px bg-[oklch(0.22_0_0)]" />
      <h2
        className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white shrink-0"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {title}
      </h2>
    </div>
  )
}

function ImageGrid({
  images,
  onImageClick,
}: {
  images: ImageItem[]
  onImageClick: (index: number) => void
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onImageClick(index)}
          className="group relative aspect-[3/4] overflow-hidden bg-[oklch(0.12_0_0)] cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
        >
          <img
            src={item.src || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Orange tag slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-[oklch(0.7_0.18_45)] px-3 py-2">
              <p className="text-black text-xs font-black uppercase tracking-wide truncate">
                {item.title}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

function DresoviSection() {
  const [activeSubcat, setActiveSubcat] = useState<"fudbal" | "kosarka" | "odbojka">("fudbal")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImages = dresoviImages[activeSubcat]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <section id="dresovi" className="scroll-mt-36">
      <SectionHeading number="01" title="DRESOVI" />

      {/* Underline tabs */}
      <div className="border-b border-[oklch(0.22_0_0)] mb-8">
        <div className="flex gap-6">
          {dresoviCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveSubcat(cat.id as "fudbal" | "kosarka" | "odbojka")}
              className={cn(
                "pb-3 text-sm font-medium tracking-wide border-b-2 -mb-px transition-colors",
                activeSubcat === cat.id
                  ? "border-[oklch(0.7_0.18_45)] text-white"
                  : "border-transparent text-white/40 hover:text-white/70"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <ImageGrid images={currentImages} onImageClick={openLightbox} />

      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}

function SimpleGallerySection({
  id,
  title,
  images,
  number,
}: {
  id: string
  title: string
  images: ImageItem[]
  number: string
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id={id} className="scroll-mt-36">
      <SectionHeading number={number} title={title} />
      <ImageGrid images={images} onImageClick={openLightbox} />

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}

export function ProductGallery() {
  return (
    <div>
      {/* Sticky category nav */}
      <div className="sticky top-16 z-40 bg-[oklch(0.08_0_0)] border-b border-[oklch(0.22_0_0)]">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex gap-8 overflow-x-auto scrollbar-none">
            {stickyCategoryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-white/50 hover:text-[oklch(0.7_0.18_45)] transition-colors py-3 border-b-2 border-transparent hover:border-[oklch(0.7_0.18_45)] -mb-px shrink-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product sections */}
      <div className="container mx-auto px-8 md:px-16 py-16 space-y-20">
        <DresoviSection />
        <SimpleGallerySection id="trenerke" title="TRENERKE" images={trenerkeImages} number="02" />
        <SimpleGallerySection id="majice" title="MAJICE" images={majiceImages} number="03" />
        <SimpleGallerySection id="sorcevi" title="ŠORCEVI" images={sorceviImages} number="04" />
      </div>
    </div>
  )
}
