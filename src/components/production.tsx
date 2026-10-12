import { Reveal } from "@/components/reveal"

const steps = [
  {
    title: "Dizajn i dogovor",
    text: "Pošaljete logo, boje, imena i brojeve. Mi pripremimo vizuelni predlog dresa, a vi ga potvrdite pre nego što krene izrada.",
  },
  {
    title: "Izbor materijala",
    text: "Tkaninu biramo prema sportu: interlok za dresove, saće za košarku, mokra likra za trenerke i odbojku.",
    link: { href: "#materijali", label: "Pogledaj materijale" },
  },
  {
    title: "Krojenje",
    text: "Kroj se radi prema tabeli mera za dečije i odrasle veličine, a tkanina se seče po komadima.",
    link: { href: "#mere", label: "Pogledaj mere" },
  },
  {
    title: "Štampa i šivenje",
    text: "Dizajn, imena i brojevi se nanose na tkaninu, a delovi se spajaju u gotov komad.",
  },
  {
    title: "Kontrola i isporuka",
    text: "Svaki komad se pregleda pre pakovanja, a narudžbina stiže na vašu adresu.",
  },
]

const principles = [
  {
    title: "Materijali koji izdržavaju",
    text: "Koristimo materijale koji izdržavaju intenzivne treninge i utakmice, pranje za pranjem.",
  },
  {
    title: "Za sve timove",
    text: "Fudbal, košarka, odbojka. Opremamo ekipe svih uzrasta i nivoa takmičenja.",
  },
  {
    title: "Personalizacija bez kompromisa",
    text: "Natpis, brojevi i grb u kratkim rokovima, na svakom komadu istim kvalitetom.",
  },
]

export function Production() {
  return (
    <section
      id="proizvodnja"
      className="relative scroll-mt-16 overflow-hidden bg-deep py-24 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />

      <div className="gutter relative mx-auto max-w-[1440px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="label-mono mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              Proizvodnja
            </p>
            <h2 className="display text-[clamp(2.75rem,6vw,5.5rem)]">
              Kako nastaje jedan dres
            </h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
              Sve se događa na jednom mestu. Zato znamo šta šaljemo timu i
              možemo da odgovorimo na svako pitanje o izradi.
            </p>
          </Reveal>

          <ol className="md:col-span-7 md:col-start-6">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 60}
                className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[5.5rem_1fr] md:py-10"
              >
                <span
                  aria-hidden
                  className="display tabular text-5xl text-accent md:text-7xl"
                >
                  0{i + 1}
                </span>
                <div className="pt-1 md:pt-2">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[56ch] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      className="mt-4 inline-block text-sm text-foreground/85 underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-foreground"
                    >
                      {step.link.label}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <dl className="mt-24 border-t border-border md:mt-32">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-12 md:py-9"
            >
              <dt className="display text-3xl md:col-span-5 md:text-4xl">{p.title}</dt>
              <dd className="max-w-[56ch] leading-relaxed text-muted-foreground md:col-span-6 md:col-start-6">
                {p.text}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
