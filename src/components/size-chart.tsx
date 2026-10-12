import { useState } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

const sizeTabs = [
  { id: "dresovi", label: "Dresovi" },
  { id: "trenerke", label: "Trenerke" },
  { id: "majice", label: "Majice" },
  { id: "sorcevi", label: "Šorcevi" },
] as const

type SizeTabId = (typeof sizeTabs)[number]["id"]

type AgeGroup = "decije" | "odrasli"

const sizeData: Record<
  SizeTabId,
  Record<AgeGroup, { headers: string[]; rows: string[][] }>
> = {
  dresovi: {
    decije: {
      headers: ["Veličina", "Grudi (cm)", "Dužina (cm)", "Ramena (cm)", "Rukav (cm)"],
      rows: [
        ["4", "56–60", "42", "28", "12"],
        ["6", "60–64", "46", "30", "13"],
        ["8", "64–68", "50", "32", "14"],
        ["10", "68–72", "54", "34", "15"],
        ["12", "72–76", "58", "36", "16"],
        ["14", "76–82", "62", "38", "17"],
        ["16", "82–86", "64", "40", "18"],
      ],
    },
    odrasli: {
      headers: ["Veličina", "Grudi (cm)", "Dužina (cm)", "Ramena (cm)", "Rukav (cm)"],
      rows: [
        ["S", "90–96", "68", "44", "21"],
        ["M", "96–102", "70", "46", "22"],
        ["L", "102–108", "72", "48", "23"],
        ["XL", "108–114", "74", "50", "24"],
        ["XXL", "114–120", "76", "52", "25"],
      ],
    },
  },
  trenerke: {
    decije: {
      headers: ["Veličina", "Grudi (cm)", "Dužina gornji (cm)", "Struk (cm)", "Dužina donji (cm)", "Nogavica (cm)"],
      rows: [
        ["4", "58–62", "38", "48–52", "58", "18"],
        ["6", "62–66", "42", "52–56", "64", "19"],
        ["8", "66–70", "46", "56–60", "70", "20"],
        ["10", "70–74", "50", "60–64", "76", "22"],
        ["12", "74–78", "54", "64–68", "82", "24"],
        ["14", "78–84", "58", "68–74", "88", "26"],
        ["16", "84–88", "60", "74–78", "92", "27"],
      ],
    },
    odrasli: {
      headers: ["Veličina", "Grudi (cm)", "Dužina gornji (cm)", "Struk (cm)", "Dužina donji (cm)", "Nogavica (cm)"],
      rows: [
        ["S", "92–98", "64", "74–80", "98", "29"],
        ["M", "98–104", "66", "80–86", "100", "30"],
        ["L", "104–110", "68", "86–92", "102", "31"],
        ["XL", "110–116", "70", "92–98", "104", "32"],
        ["XXL", "116–122", "72", "98–104", "106", "33"],
      ],
    },
  },
  majice: {
    decije: {
      headers: ["Veličina", "Grudi (cm)", "Dužina (cm)", "Ramena (cm)", "Rukav (cm)"],
      rows: [
        ["4", "56–60", "40", "26", "10"],
        ["6", "60–64", "44", "28", "11"],
        ["8", "64–68", "48", "30", "12"],
        ["10", "68–72", "52", "32", "14"],
        ["12", "72–76", "56", "34", "15"],
        ["14", "76–82", "60", "36", "16"],
        ["16", "82–86", "62", "38", "17"],
      ],
    },
    odrasli: {
      headers: ["Veličina", "Grudi (cm)", "Dužina (cm)", "Ramena (cm)", "Rukav (cm)"],
      rows: [
        ["S", "92–98", "68", "45", "20"],
        ["M", "98–104", "70", "47", "21"],
        ["L", "104–110", "72", "49", "22"],
        ["XL", "110–116", "74", "51", "23"],
        ["XXL", "116–122", "76", "53", "24"],
      ],
    },
  },
  sorcevi: {
    decije: {
      headers: ["Veličina", "Struk (cm)", "Dužina (cm)", "Bedro (cm)"],
      rows: [
        ["4", "46–50", "26", "34"],
        ["6", "50–54", "28", "36"],
        ["8", "54–58", "30", "38"],
        ["10", "58–62", "32", "40"],
        ["12", "62–66", "34", "44"],
        ["14", "66–72", "38", "48"],
        ["16", "72–76", "40", "50"],
      ],
    },
    odrasli: {
      headers: ["Veličina", "Struk (cm)", "Dužina (cm)", "Bedro (cm)"],
      rows: [
        ["S", "74–80", "44", "54"],
        ["M", "80–86", "46", "56"],
        ["L", "86–92", "48", "58"],
        ["XL", "92–98", "50", "60"],
        ["XXL", "98–104", "52", "62"],
      ],
    },
  },
}

const materials = [
  {
    name: "Interlok Jersey",
    description:
      "Glatki, elastični materijal sa dvostrukim pletivom koji dobro pada i drži formu posle pranja. Koristi se za premijum dresove.",
    composition: "100% Poliester",
    weight: "140 g/m²",
  },
  {
    name: "Mokra Likra 250",
    description:
      "Elastični materijal brušen sa naličja, izuzetno udoban za nošenje. Koristi se za izradu trenerki.",
    composition: "90% Poliester / 10% Likra",
    weight: "250 g/m²",
  },
  {
    name: "Mokra Likra 180",
    description:
      "Elastični materijal idealan za sportsku odeću koja zahteva slobodu pokreta. Koristi se za izradu dresova za atletiku i odbojku.",
    composition: "90% Poliester / 10% Likra",
    weight: "180 g/m²",
  },
  {
    name: "Rupičasti Materijal (Saće)",
    description:
      "Materijal sa mrežastom strukturom za maksimalnu ventilaciju i prozračnost. Koristi se za košarkaške dresove.",
    composition: "100% Poliester",
    weight: "140 g/m²",
  },
  {
    name: "Pamučni materijal (Penja)",
    description:
      "Prirodni pamučni materijal prijatan za kožu, idealan za svakodnevno nošenje. Koristi se za izradu majica.",
    composition: "100% Pamuk",
    weight: "150 g/m²",
  },
]


export function SizeChart() {
  const [activeTab, setActiveTab] = useState<SizeTabId>("dresovi")
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("odrasli")
  const currentData = sizeData[activeTab][ageGroup]

  return (
    <section id="mere" className="scroll-mt-16 bg-deep py-24 md:py-36">
      <div className="gutter mx-auto max-w-[1440px]">
        {/* === Size tables === */}
        <Reveal className="mb-10 md:mb-14">
          <p className="label-mono mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Tabele veličina
          </p>
          <h2 className="display text-[clamp(2.75rem,6vw,5.5rem)]">Mere</h2>
        </Reveal>

        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="-mx-1 flex flex-wrap gap-2" role="group" aria-label="Vrsta odeće">
            {sizeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={cn(
                  "mx-1 h-10 border px-4 text-sm transition-all duration-200 active:scale-[0.98]",
                  activeTab === tab.id
                    ? "border-accent bg-accent font-medium text-accent-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="inline-flex self-start border border-border p-1" role="group" aria-label="Uzrast">
            {([
              { id: "decije" as AgeGroup, label: "Dečije" },
              { id: "odrasli" as AgeGroup, label: "Odrasli" },
            ]).map((group) => (
              <button
                key={group.id}
                onClick={() => setAgeGroup(group.id)}
                aria-pressed={ageGroup === group.id}
                className={cn(
                  "h-9 px-5 text-sm transition-colors duration-200",
                  ageGroup === group.id
                    ? "bg-foreground text-background font-medium"
                    : "text-foreground/65 hover:text-foreground"
                )}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-none">
          <table className="tabular w-full min-w-[540px] border-collapse">
            <caption className="sr-only">
              Tabela veličina: {sizeTabs.find((t) => t.id === activeTab)?.label},{" "}
              {ageGroup === "decije" ? "dečije" : "odrasli"}
            </caption>
            <thead>
              <tr>
                {currentData.headers.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className={cn(
                      "label-mono border-b border-foreground/25 px-4 py-3 font-normal",
                      i === 0 ? "text-left" : "text-right"
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.rows.map((row) => (
                <tr key={row[0]} className="transition-colors hover:bg-card">
                  {row.map((cell, cellIdx) =>
                    cellIdx === 0 ? (
                      <th
                        key={cellIdx}
                        scope="row"
                        className="display border-b border-border px-4 py-3 text-left text-2xl text-accent"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={cellIdx}
                        className="border-b border-border px-4 py-3 text-right font-mono text-sm text-foreground/80"
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 max-w-[60ch] text-sm text-muted-foreground">
          Mere su okvirne i mogu varirati ±2 cm. Za preciznije informacije kontaktirajte nas.
        </p>

        {/* === Materials === */}
        <div id="materijali" className="mt-28 scroll-mt-24 md:mt-40">
          <Reveal className="mb-10 md:mb-14">
            <p className="label-mono mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              Šta koristimo
            </p>
            <h2 className="display text-[clamp(2.75rem,6vw,5.5rem)]">Materijali</h2>
          </Reveal>

          <ul className="border-t border-foreground/25">
            {materials.map((mat, i) => (
              <Reveal
                as="li"
                key={mat.name}
                delay={i * 50}
                className="group grid gap-x-12 gap-y-4 border-b border-border py-7 transition-colors duration-200 hover:bg-card/60 md:grid-cols-12 md:px-4 md:py-8"
              >
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent md:col-span-4">
                  {mat.name}
                </h3>
                <p className="max-w-[52ch] leading-relaxed text-muted-foreground md:col-span-5">
                  {mat.description}
                </p>
                <dl className="tabular grid grid-cols-2 gap-x-6 text-sm md:col-span-3 md:grid-cols-1 md:gap-y-3">
                  <div>
                    <dt className="label-mono">Sastav</dt>
                    <dd className="mt-1 text-foreground/85">{mat.composition}</dd>
                  </div>
                  <div>
                    <dt className="label-mono">Gramatura</dt>
                    <dd className="mt-1 text-foreground/85">{mat.weight}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
