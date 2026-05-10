import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AreaCard } from "@/components/shared/AreaCard"
import { areas } from "@/content/areas"

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-fermento-white">
              Áreas de <span className="text-fermento-yellow italic">Atuação</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              Nossa metodologia se desdobra em cinco eixos centrais que integram cultura, impacto, tecnologia e território.
            </p>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {areas.map((area) => (
                <AreaCard key={area.id} {...area} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
