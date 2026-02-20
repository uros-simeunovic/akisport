import { useState } from "react"
import { Ruler, Shirt, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const sizeTabs = [
  { id: "dresovi", label: "Dresovi", icon: Shirt },
  { id: "trenerke", label: "Trenerke", icon: Shirt },
  { id: "majice", label: "Majice", icon: Shirt },
  { id: "sorcevi", label: "Šorcevi", icon: Shirt },
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
    name: "Dry-Fit Polyester",
    description:
      "Lagani, prozračni materijal koji brzo odvodi vlagu sa kože. Idealan za dresove i majice tokom intenzivnih treninga.",
    composition: "100% Polyester",
    weight: "140 g/m²",
  },
  {
    name: "Micro-Mesh",
    description:
      "Mrežasta struktura za maksimalnu ventilaciju. Koristi se na bočnim panelima dresova i šorcevima za dodatnu prozračnost.",
    composition: "100% Polyester",
    weight: "120 g/m²",
  },
  {
    name: "Brushed Fleece",
    description:
      "Mekana unutrašnjost sa četkanom strukturom za toplu i udobnu postavu. Savršen za trenerke u hladnijim uslovima.",
    composition: "80% Polyester / 20% Pamuk",
    weight: "280 g/m²",
  },
  {
    name: "Interlock Jersey",
    description:
      "Glatki, elastični materijal sa dvostrukim pletivom koji odlično drži formu nakon pranja. Koristi se za premium dresove.",
    composition: "92% Polyester / 8% Elastan",
    weight: "160 g/m²",
  },
  {
    name: "Taslon",
    description:
      "Lagan i izdržljiv materijal otporan na habanje. Idealan za šorceve i spoljašnjost trenerki — brzo se suši i ne gužva se.",
    composition: "100% Polyester",
    weight: "170 g/m²",
  },
]

export function SizeChart() {
  const [activeTab, setActiveTab] = useState<SizeTabId>("dresovi")
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("odrasli")
  const currentData = sizeData[activeTab][ageGroup]

  return (
    <section id="mere" className="bg-[oklch(0.06_0_0)] py-20">
      <div className="container mx-auto px-8 md:px-16">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14">
          <Ruler className="w-6 h-6 text-[oklch(0.7_0.18_45)] shrink-0" />
          <div className="flex-1 h-px bg-[oklch(0.22_0_0)]" />
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white shrink-0"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            MERE & MATERIJALI
          </h2>
        </div>

        {/* === Size Tables === */}
        <div className="mb-20">
          <h3
            className="text-xl font-black uppercase tracking-widest text-[oklch(0.7_0.18_45)] mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            TABELE VELIČINA
          </h3>

          {/* Tabs */}
          <div className="border-b border-[oklch(0.22_0_0)] mb-8">
            <div className="flex gap-6">
              {sizeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "pb-3 text-sm font-medium tracking-wide border-b-2 -mb-px transition-colors whitespace-nowrap",
                    activeTab === tab.id
                      ? "border-[oklch(0.7_0.18_45)] text-white"
                      : "border-transparent text-white/40 hover:text-white/70"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Age group toggle */}
          <div className="flex gap-2 mb-8">
            {([
              { id: "decije" as AgeGroup, label: "Dečije" },
              { id: "odrasli" as AgeGroup, label: "Odrasli" },
            ]).map((group) => (
              <button
                key={group.id}
                onClick={() => setAgeGroup(group.id)}
                className={cn(
                  "px-5 py-2 text-xs font-black uppercase tracking-widest transition-all",
                  ageGroup === group.id
                    ? "bg-[oklch(0.7_0.18_45)] text-black"
                    : "bg-[oklch(0.12_0_0)] text-white/40 hover:text-white/70"
                )}
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr>
                  {currentData.headers.map((h, i) => (
                    <th
                      key={h}
                      className={cn(
                        "py-3 px-4 text-xs font-black uppercase tracking-widest text-[oklch(0.7_0.18_45)] border-b border-[oklch(0.22_0_0)]",
                        i === 0 ? "text-left" : "text-center"
                      )}
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.rows.map((row, rowIdx) => (
                  <tr
                    key={row[0]}
                    className={cn(
                      "transition-colors hover:bg-[oklch(0.12_0_0)]",
                      rowIdx % 2 === 0 ? "bg-[oklch(0.08_0_0)]" : "bg-transparent"
                    )}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={cn(
                          "py-3 px-4 text-sm border-b border-[oklch(0.15_0_0)]",
                          cellIdx === 0
                            ? "text-left font-black text-white"
                            : "text-center text-white/60"
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/30 text-xs mt-4 italic">
            * Mere su okvirne i mogu varirati ±2 cm. Za preciznije informacije kontaktirajte nas.
          </p>
        </div>

        {/* === Materials === */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-5 h-5 text-[oklch(0.7_0.18_45)]" />
            <h3
              className="text-xl font-black uppercase tracking-widest text-[oklch(0.7_0.18_45)]"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              MATERIJALI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div
                key={mat.name}
                className="border border-[oklch(0.18_0_0)] bg-[oklch(0.08_0_0)] p-6 hover:border-[oklch(0.7_0.18_45/0.3)] transition-colors group"
              >
                <h4
                  className="text-base font-black uppercase tracking-wider text-white mb-2 group-hover:text-[oklch(0.7_0.18_45)] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {mat.name}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {mat.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
                  <span>
                    <span className="text-white/60 font-medium">Sastav:</span>{" "}
                    {mat.composition}
                  </span>
                  <span>
                    <span className="text-white/60 font-medium">Gramatura:</span>{" "}
                    {mat.weight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
