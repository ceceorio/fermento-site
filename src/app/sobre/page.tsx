import { siteContent } from "@/content/site"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black">
        {/* HERO SOBRE */}
        <section className="px-4 py-32 md:px-6 border-b border-fermento-border bg-fermento-graphite relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fermento-black/40 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-4xl space-y-8 relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-fermento-white text-balance">
              Nossa <span className="text-fermento-yellow italic">Trajetória</span>
            </h1>
            <div className="w-16 h-1 bg-fermento-yellow" />
            <div className="space-y-6 text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              {siteContent.sobre.textoPrincipal.split('\\n\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* METODOLOGIA */}
        <section className="px-4 py-32 md:px-6">
          <div className="container mx-auto max-w-5xl space-y-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-fermento-white text-balance">
              Uma metodologia estruturada para <span className="text-fermento-yellow italic">transformar ideias</span> em programas financiáveis.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteContent.comoAtuamos.map((etapa, index) => (
                <div key={index} className="space-y-4 p-6 border border-fermento-border bg-fermento-charcoal rounded-lg hover:border-fermento-yellow transition-colors">
                  <div className="font-serif text-3xl text-fermento-yellow/50">0{index + 1}</div>
                  <h3 className="font-medium text-xl text-fermento-white">{etapa.title.replace(/^\\d+\\.\\s*/, '')}</h3>
                  <p className="text-fermento-gray leading-relaxed">{etapa.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ÉTICA E IMPACTO */}
        <section className="bg-fermento-yellow text-fermento-black px-4 py-32 md:px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance">
              Gestão, Transparência e Impacto
            </h2>
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                Atuamos com extrema responsabilidade técnica e orçamentária. Produzimos dados verificáveis, prestamos contas com clareza e exigimos de nossos projetos acessibilidade, democratização de acesso e um forte compromisso com o impacto público e territorial.
              </p>
              <p>
                Acreditamos que o financiamento não é um fim, mas um instrumento de política pública. Nosso papel é conectar projetos culturais e sociais a leis de incentivo, editais e recursos de forma ética, transformando a realidade de onde atuamos.
              </p>
            </div>
            <div className="pt-8">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-fermento-black text-fermento-black hover:bg-fermento-black hover:text-fermento-yellow" asChild>
                <Link href="/projetos">Conhecer o Ecossistema Fermento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
