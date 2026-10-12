import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Production } from "@/components/production"
import { ProductGallery } from "@/components/product-gallery"
import { SizeChart } from "@/components/size-chart"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <>
      <Header />
      <main id="glavni-sadrzaj" className="min-h-screen bg-background">
        <Hero />
        <Production />
        <ProductGallery />
        <SizeChart />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
