import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const phone = { display: "+381 64 400 4772", href: "tel:+381644004772" }
const email = {
  display: "info@sportskidresovi.rs",
  href: "mailto:info@sportskidresovi.rs?subject=Upit%20za%20izradu%20opreme",
}

export function ContactSection() {
  return (
    <section id="kontakt" className="relative scroll-mt-16 overflow-hidden py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />

      <div className="gutter relative mx-auto max-w-[1440px]">
        <Reveal>
          <p className="label-mono mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Kontakt
          </p>
          <h2 className="display max-w-[14ch] text-[clamp(3rem,8vw,7.5rem)]">
            Opremimo vaš tim.
          </h2>
          <p className="mt-6 max-w-[48ch] leading-relaxed text-muted-foreground md:text-lg">
            Pošaljite nam logo, boje i okvirni broj komada. Javljamo se sa predlogom dizajna i
            rokom izrade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border-y border-border md:mt-20 md:grid-cols-2">
          <Reveal as="div" className="md:border-r md:border-border">
            <a
              href={phone.href}
              className="group flex items-end justify-between gap-6 py-8 transition-colors duration-200 hover:bg-card/60 md:px-6 md:py-10"
            >
              <span>
                <span className="label-mono block">Telefon</span>
                <span className="tabular mt-2 block text-2xl font-medium tracking-tight md:text-3xl">
                  {phone.display}
                </span>
              </span>
              <ArrowUpRight className="size-6 shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal as="div" delay={70} className="border-t border-border md:border-t-0">
            <a
              href={email.href}
              className="group flex items-end justify-between gap-6 py-8 transition-colors duration-200 hover:bg-card/60 md:px-6 md:py-10"
            >
              <span className="min-w-0">
                <span className="label-mono block">Email</span>
                <span className="mt-2 block break-words text-2xl font-medium tracking-tight md:text-3xl">
                  {email.display}
                </span>
              </span>
              <ArrowUpRight className="size-6 shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Pratite nas i na Facebook-u i Instagram-u.
        </p>
      </div>
    </section>
  )
}
