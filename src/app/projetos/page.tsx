import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/content/projects"
import { areas } from "@/content/areas"
import { ProjectCard } from "@/components/shared/ProjectCard"

export default function ProjetosPage() {
  const projetosFermento = projects.filter(p => p.fermentoRole === "Projetos Fermento");
  const instituicoes = projects.filter(p => p.fermentoRole === "Instituições sob Gestão");
  const projetosParceria = projects.filter(p => p.fermentoRole === "Projetos em Parceria");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black">
        {/* HEADER PROJETOS */}
        <section className="px-4 py-32 md:px-6 border-b border-fermento-border bg-fermento-graphite relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fermento-black/40 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-4xl space-y-6 relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-fermento-white text-balance">
              Ecossistema <span className="text-fermento-yellow italic">Fermento</span>
            </h1>
            <div className="w-16 h-1 bg-fermento-yellow" />
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              O Ecossistema Fermento reúne projetos próprios, instituições sob gestão e parcerias estratégicas no campo da cultura, da educação, da arte e do impacto social.
            </p>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-6xl space-y-24">

            {/* 1. Projetos Fermento */}
            {projetosFermento.length > 0 && (
              <div className="space-y-12">
                <div className="space-y-2">
                  <h2 className="font-serif text-4xl text-fermento-white">Projetos Fermento</h2>
                  <p className="text-fermento-gray text-lg max-w-3xl">Projetos concebidos, desenvolvidos, estruturados ou executados diretamente pela Fermento Cultural.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projetosFermento.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      {...project}
                      area={areas.find(a => a.id === project.areaId)?.title || "Projeto"}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 2. Instituições sob Gestão */}
            {instituicoes.length > 0 && (
              <div className="space-y-12">
                <div className="space-y-2">
                  <h2 className="font-serif text-4xl text-fermento-white">Instituições sob Gestão</h2>
                  <p className="text-fermento-gray text-lg max-w-3xl">Organizações, programas e instituições cuja gestão estratégica conta com a atuação da Fermento.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {instituicoes.map((inst) => (
                    <ProjectCard 
                      key={inst.id} 
                      {...inst}
                      area={areas.find(a => a.id === inst.areaId)?.title || "Instituição"}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3. Projetos em Parceria */}
            {projetosParceria.length > 0 && (
              <div className="space-y-12">
                <div className="space-y-2">
                  <h2 className="font-serif text-4xl text-fermento-white">Projetos em Parceria</h2>
                  <p className="text-fermento-gray text-lg max-w-3xl">Projetos desenvolvidos em colaboração com artistas, empresas, organizações sociais e equipamentos culturais.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projetosParceria.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      {...project}
                      area={areas.find(a => a.id === project.areaId)?.title || "Parceria"}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
