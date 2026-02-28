import { Mail, Phone, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-8 md:px-16">
        <h2
          className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-16"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          KONTAKTIRAJTE NAS
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-[oklch(0.7_0.18_45)] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Telefon</p>
              <p className="text-white">+381 64 400 4772</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-[oklch(0.7_0.18_45)] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</p>
              <p className="text-white">info@sportskidresovi.rs</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageSquare className="w-5 h-5 text-[oklch(0.7_0.18_45)] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Društvene mreže</p>
              <p className="text-white">Facebook &amp; Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
