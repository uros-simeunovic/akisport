import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare } from "lucide-react"

const inputClass =
  "rounded-none border-0 border-b border-[oklch(0.3_0_0)] bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-[oklch(0.7_0.18_45)] h-10"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="kontakt" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-8 md:px-16">
        <h2
          className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-16"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          KONTAKTIRAJTE NAS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[oklch(0.7_0.18_45)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Telefon</p>
                <p className="text-white">+381 XX XXX XXXX</p>
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

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Vaše ime"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={inputClass}
            />
            <Input
              type="email"
              placeholder="Email adresa"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={inputClass}
            />
            <Input
              type="tel"
              placeholder="Broj telefona"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
            <Textarea
              placeholder="Vaša poruka..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="rounded-none border-0 border-b border-[oklch(0.3_0_0)] bg-transparent px-0 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-[oklch(0.7_0.18_45)] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[oklch(0.7_0.18_45)] text-black font-black uppercase tracking-widest py-4 transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              POŠALJI PORUKU
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
