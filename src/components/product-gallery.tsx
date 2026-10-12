import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const dresoviCategories = [
  { id: "fudbal", label: "Fudbalski" },
  { id: "kosarka", label: "Košarkaški" },
  { id: "odbojka", label: "Odbojkaški" },
]

const dresoviImages = {
  fudbal: [
    { id: 1, src: "/dresovi/fudbal/fudbal-dres-1.png", title: "Fudbalski dres crveno-beli" },
    { id: 2, src: "/dresovi/fudbal/fudbal-dres-2.png", title: "Fudbalski dres plavi" },
    { id: 3, src: "/dresovi/fudbal/fudbal-dres-3.png", title: "Fudbalski dres crno-zlatni" },
    { id: 4, src: "/dresovi/fudbal/fudbal-dres-4.png", title: "Fudbalski dres zeleno-beli" },
    { id: 5, src: "/dresovi/fudbal/fudbal-dres-5.png", title: "Fudbalski dres crveno-plavi" },
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
  { href: "#dresovi", label: "Dresovi" },
  { href: "#trenerke", label: "Trenerke" },
  { href: "#majice", label: "Majice" },
  { href: "#sorcevi", label: "Šorcevi" },
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
  const navButton =
    "absolute z-10 flex size-12 cursor-pointer items-center justify-center border border-foreground/15 bg-deep/80 text-foreground transition-all duration-200 hover:border-accent hover:text-accent active:scale-95"

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
        aria-label="Zatvori"
        autoFocus
      >
        <X className="size-7" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className={cn(navButton, "left-3 md:left-6")}
        aria-label="Prethodna slika"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className={cn(navButton, "right-3 md:right-6")}
        aria-label="Sledeća slika"
      >
        <ChevronRight className="size-6" />
      </button>

      <figure
        className="max-h-[92vh] max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src || "/placeholder.svg"}
          alt={current.title}
          className="mx-auto max-h-[78vh] max-w-full object-contain"
        />
        <figcaption className="mt-5 flex items-baseline justify-center gap-4">
          <span className="font-medium text-foreground">{current.title}</span>
          <span className="label-mono tabular">
            {currentIndex + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

function useLightbox(count: number) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return {
    open,
    index,
    show: (i: number) => {
      setIndex(i)
      setOpen(true)
    },
    close: () => setOpen(false),
    next: () => setIndex((prev) => (prev + 1) % count),
    prev: () => setIndex((prev) => (prev - 1 + count) % count),
  }
}

function SectionHeading({ number, title, count }: { number: string; title: string; count: number }) {
  return (
    <Reveal className="mb-10 flex items-end gap-5 md:mb-12">
      <span className="label-mono tabular pb-2 md:pb-3">
        <span className="text-accent">{number}</span>
      </span>
      <h2 className="display text-[clamp(3rem,7vw,6rem)]">{title}</h2>
      <div aria-hidden className="mb-3 hidden h-px flex-1 bg-border md:block" />
      <span className="label-mono tabular ml-auto pb-2 md:ml-0 md:pb-3">{count} modela</span>
    </Reveal>
  )
}

function ImageGrid({
  images,
  onImageClick,
  aspect,
}: {
  images: ImageItem[]
  onImageClick: (index: number) => void
  aspect: string
}) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4">
      {images.map((item, index) => (
        <Reveal key={item.id} delay={(index % 4) * 70}>
          <button
            onClick={() => onImageClick(index)}
            className="group block w-full cursor-pointer text-left"
            aria-label={`Uvećaj sliku: ${item.title}`}
          >
            <span className={cn("relative block overflow-hidden border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/60 group-hover:shadow-[0_18px_40px_-18px_oklch(0.72_0.16_48/0.35)] group-active:scale-[0.99]", aspect)}>
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-3">
              <span className="text-sm text-foreground/85 transition-colors group-hover:text-foreground">
                {item.title}
              </span>
              <span className="label-mono tabular shrink-0">{String(index + 1).padStart(2, "0")}</span>
            </span>
          </button>
        </Reveal>
      ))}
    </div>
  )
}

// Most mockups are square; the tracksuit set is 2:3 portrait.
function Gallery({ images, aspect = "aspect-square" }: { images: ImageItem[]; aspect?: string }) {
  const lb = useLightbox(images.length)

  return (
    <>
      <ImageGrid images={images} onImageClick={lb.show} aspect={aspect} />
      {lb.open && (
        <Lightbox
          images={images}
          currentIndex={lb.index}
          onClose={lb.close}
          onPrev={lb.prev}
          onNext={lb.next}
        />
      )}
    </>
  )
}

function DresoviSection() {
  const [activeSubcat, setActiveSubcat] = useState<"fudbal" | "kosarka" | "odbojka">("fudbal")
  const currentImages = dresoviImages[activeSubcat]

  return (
    <section id="dresovi" className="scroll-mt-36">
      <SectionHeading number="01" title="Dresovi" count={currentImages.length} />

      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Sport">
        {dresoviCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveSubcat(cat.id as "fudbal" | "kosarka" | "odbojka")}
            aria-pressed={activeSubcat === cat.id}
            className={cn(
              "h-10 border px-4 text-sm transition-all duration-200 active:scale-[0.98]",
              activeSubcat === cat.id
                ? "border-accent bg-accent font-medium text-accent-foreground"
                : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* key resets the lightbox state when the sport changes */}
      <Gallery key={activeSubcat} images={currentImages} />
    </section>
  )
}

function SimpleGallerySection({
  id,
  title,
  images,
  number,
  aspect,
}: {
  id: string
  title: string
  images: ImageItem[]
  number: string
  aspect?: string
}) {
  return (
    <section id={id} className="scroll-mt-36">
      <SectionHeading number={number} title={title} count={images.length} />
      <Gallery images={images} aspect={aspect} />
    </section>
  )
}

export function ProductGallery() {
  return (
    <div>
      {/* Sticky category nav. No horizontal scroll on purpose: four short labels fit on one row. */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="gutter mx-auto max-w-[1440px]">
          <nav aria-label="Kategorije kolekcije" className="flex justify-between md:justify-start md:gap-10">
            {stickyCategoryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="-mb-px shrink-0 border-b-2 border-transparent py-3.5 text-[13px] text-foreground/65 transition-colors hover:border-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="gutter mx-auto max-w-[1440px] space-y-28 py-24 md:space-y-40 md:py-36">
        <DresoviSection />
        <SimpleGallerySection id="trenerke" title="Trenerke" images={trenerkeImages} number="02" aspect="aspect-[2/3]" />
        <SimpleGallerySection id="majice" title="Majice" images={majiceImages} number="03" />
        <SimpleGallerySection id="sorcevi" title="Šorcevi" images={sorceviImages} number="04" />
      </div>
    </div>
  )
}
