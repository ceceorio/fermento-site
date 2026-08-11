import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { captacaoIntro, captacaoProjects } from "@/content/captacao"
import Link from "next/link"

export const metadata = {
  title: "Projetos em Captação — Fermento Cultural",
  description: "Patrocine cultura com incentivo fiscal: projetos da Fermento Cultural e da Can Art Change The World? Foundation aprovados e prontos para captação."
}

export default function ProjetosEmCaptacaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* HERO */}
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-fermento-white">
              Projetos em <span className="text-fermento-yellow italic">Captação</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-yellow font-medium">
              {captacaoIntro.subtitle}
            </p>
            <p className="text-lg md:text-xl text-fermento-gray leading-relaxed">
              {captacaoIntro.text}
            </p>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl space-y-10">
            {captacaoProjects.map((project) => (
              <div
                key={project.id}
                className="border border-fermento-border bg-fermento-charcoal rounded-xl p-8 md:p-10 space-y-8 hover:border-fermento-yellow/60 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-fermento-yellow">
                      {project.status}
                    </span>
                    <span className="text-xs text-fermento-gray uppercase tracking-widest">
                      {project.codigo}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-fermento-white">
                    {project.title}
                  </h2>
                  <p className="text-lg text-fermento-gray leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="grid md:grid-cols-[1fr_280px] gap-8">
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-fermento-white">
                      O que o projeto realiza
                    </h3>
                    <ul className="space-y-2">
                      {project.acoes.map((acao, idx) => (
                        <li key={idx} className="text-fermento-gray flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-fermento-yellow/60 shrink-0" />
                          <span className="leading-relaxed">{acao}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 bg-fermento-black border border-fermento-border rounded-lg p-6 h-fit">
                    <div>
                      <p className="text-xs text-fermento-gray uppercase tracking-widest mb-1">Valor do projeto</p>
                      <p className="font-serif text-2xl font-bold text-fermento-yellow">{project.valorTotal}</p>
                    </div>
                    <div>
                      <p className="text-xs text-fermento-gray uppercase tracking-widest mb-1">Mínimo para execução</p>
                      <p className="font-medium text-fermento-white">{project.valorMinimo}</p>
                    </div>
                    <div>
                      <p className="text-xs text-fermento-gray uppercase tracking-widest mb-1">Mecanismo</p>
                      <p className="text-sm text-fermento-white leading-snug">{project.mecanismo}</p>
                    </div>
                    <div>
                      <p className="text-xs text-fermento-gray uppercase tracking-widest mb-1">Parceria</p>
                      <p className="text-sm text-fermento-white leading-snug">{project.parceria}</p>
                    </div>
                    <Button asChild className="w-full">
                      <a
                        href={`https://wa.me/${captacaoIntro.whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse em patrocinar o projeto ${project.title} (${project.codigo}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero patrocinar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTRAPARTIDAS */}
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-t border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-fermento-white">
              Apoio que transforma
            </h2>
            <p className="text-lg text-fermento-gray leading-relaxed">
              {captacaoIntro.contrapartidas}
            </p>
            <p className="text-lg text-fermento-gray leading-relaxed">
              Quer entender como funciona o patrocínio via leis de incentivo? Visite a página de{" "}
              <Link href="/leis-de-incentivo" className="text-fermento-yellow hover:underline">
                Leis de Incentivo
              </Link>{" "}
              ou fale diretamente com a nossa equipe.
            </p>
            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a
                  href={`https://wa.me/${captacaoIntro.whatsapp}?text=${encodeURIComponent("Olá! Quero conhecer os projetos em captação da Fermento Cultural.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com a Fermento
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
