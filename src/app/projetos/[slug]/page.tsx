import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { projects } from "@/content/projects"
import { areas } from "@/content/areas"
import { notFound } from "next/navigation"
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed"
import { ProjectCard } from "@/components/shared/ProjectCard"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const project: any = projects.find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const area = areas.find(a => a.id === project.areaId)
  const institutionProjects = projects.filter(p => p.institutionId === project.id)

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section className={`px-4 py-24 md:px-6 border-b border-fermento-border relative overflow-hidden ${project.id === 'queercode' ? 'bg-fermento-graphite' : 'bg-fermento-graphite'}`}>
          {project.id === 'queercode' && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/10 pointer-events-none" />
          )}
          <div className="container mx-auto max-w-4xl space-y-8 relative z-10">
            <div className="flex flex-wrap items-center gap-4">
              {area && (
                <span className="inline-flex items-center rounded-sm bg-fermento-charcoal px-3 py-1 text-sm font-medium text-fermento-white border border-fermento-border">
                  {area.title}
                </span>
              )}
              {project.status && (
                <span className="inline-flex items-center text-sm font-medium text-fermento-yellow">
                  {project.status}
                </span>
              )}
            </div>
            
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-fermento-white text-balance">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-xl md:text-2xl text-fermento-yellow font-medium text-balance">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
              
              {/* MAIN CONTENT COLUMN */}
              <div className="space-y-16">
                
                {/* VIDEO OR THUMBNAIL */}
                {project.videoId && (
                  <YouTubeEmbed videoId={project.videoId} title={project.title} />
                )}

                {/* SOBRE O PROJETO */}
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                    Sobre o Projeto
                  </h2>
                  <div className="space-y-4 text-lg text-fermento-gray leading-relaxed">
                    {project.longDescription ? (
                      project.longDescription.split('\\n\\n').map((paragraph: string, i: number) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{project.summary}</p>
                    )}
                  </div>
                </div>

                {/* TIMELINE */}
                {project.timeline && project.timeline.length > 0 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                      Histórico e Circulação
                    </h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-fermento-border">
                      {project.timeline.map((item: any, idx: number) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-fermento-yellow bg-fermento-black text-fermento-yellow shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                          <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-fermento-border bg-fermento-charcoal">
                            <time className="text-sm font-medium text-fermento-yellow mb-1 block">{item.date}</time>
                            <p className="text-fermento-white leading-tight">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SCHEDULE (PROGRAMAÇÃO) */}
                {project.schedule && project.schedule.length > 0 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                      Programação
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {project.schedule.map((block: any, idx: number) => (
                        <div key={idx} className="p-6 border border-fermento-border bg-fermento-charcoal rounded-lg relative overflow-hidden">
                          {project.id === 'queercode' && (
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
                          )}
                          <div className="mb-4">
                            <span className={`text-xs font-bold uppercase tracking-wider ${project.id === 'queercode' ? 'text-purple-400' : 'text-fermento-yellow'}`}>{block.date}</span>
                            <h4 className="text-lg font-serif text-fermento-white mt-1">{block.location}</h4>
                          </div>
                          <ul className="space-y-3">
                            {block.events.map((event: string, eIdx: number) => (
                              <li key={eIdx} className="text-sm text-fermento-gray flex items-start gap-2">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.id === 'queercode' ? 'bg-pink-500/50' : 'bg-fermento-yellow/50'}`} />
                                <span className="leading-tight">{event}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRESS */}
                {project.press && project.press.length > 0 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                      Imprensa e Registros
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.press.map((item: any, idx: number) => {
                        const isClickable = !!item.url;
                        const Wrapper = isClickable ? "a" : "div";
                        const wrapperProps = isClickable ? { 
                          href: item.url, 
                          target: "_blank", 
                          rel: "noopener noreferrer" 
                        } : {};

                        return (
                          <Wrapper 
                            key={idx} 
                            {...wrapperProps}
                            className={`p-4 border border-fermento-border bg-fermento-charcoal rounded-lg transition-colors group relative ${isClickable ? 'hover:border-fermento-yellow cursor-pointer' : 'hover:border-fermento-yellow/50'}`}
                          >
                            <span className="text-xs font-medium text-fermento-yellow uppercase tracking-wider mb-2 block pr-6">
                              {item.portal}
                            </span>
                            <p className="text-sm text-fermento-white font-medium">{item.title}</p>
                            
                            {isClickable && (
                              <ExternalLink 
                                size={14} 
                                className="absolute top-4 right-4 text-fermento-gray group-hover:text-fermento-yellow transition-colors" 
                              />
                            )}
                          </Wrapper>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* GALLERY */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                      Galeria
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.gallery.map((img: string, idx: number) => (
                        <div key={idx} className="relative aspect-square rounded-lg bg-fermento-graphite border border-fermento-border overflow-hidden flex items-center justify-center">
                          {/* Placeholder icon until real images arrive */}
                          <div className="text-fermento-gray/50 text-xs text-center p-2">
                            Imagem {idx + 1}<br/>(Espaço reservado)
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* INICIATIVAS / PROJETOS FILHOS */}
                {institutionProjects.length > 0 && (
                  <div className="space-y-6 pt-8 border-t border-fermento-border mt-16">
                    <div className="space-y-2">
                      <h2 className="font-serif text-3xl font-medium text-fermento-white">
                        Iniciativas em Destaque
                      </h2>
                      <p className="text-fermento-gray text-lg">
                        Projetos, programas e ações desenvolvidos pela instituição.
                      </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {institutionProjects.map((childProject) => (
                        <ProjectCard 
                          key={childProject.id} 
                          {...childProject}
                          area={areas.find(a => a.id === childProject.areaId)?.title || "Projeto"}
                        />
                      ))}
                    </div>
                  </div>
                )}

              </div>
              
              {/* SIDEBAR */}
              <div className="space-y-8">
                
                {/* TECHNICAL DETAILS */}
                <div className="space-y-6 bg-fermento-charcoal border border-fermento-border p-6 rounded-lg h-fit">
                  <h3 className="font-serif text-lg font-medium text-fermento-white border-b border-fermento-border pb-4">
                    Ficha Técnica
                  </h3>
                  <dl className="space-y-4 text-sm">
                    {project.year && (
                      <div>
                        <dt className="text-fermento-gray mb-1">Ano</dt>
                        <dd className="font-medium text-fermento-white">{project.year}</dd>
                      </div>
                    )}
                    {project.territory && (
                      <div>
                        <dt className="text-fermento-gray mb-1">Território</dt>
                        <dd className="font-medium text-fermento-white">{project.territory}</dd>
                      </div>
                    )}
                    {project.technicalDetails && project.technicalDetails.map((detail: any, idx: number) => (
                      <div key={idx}>
                        <dt className="text-fermento-gray mb-1">{detail.label}</dt>
                        <dd className="font-medium text-fermento-white">{detail.value}</dd>
                      </div>
                    ))}
                    {project.fermentoRole === "Projetos Fermento" && (
                      <div>
                        <dt className="text-fermento-gray mb-1">Realização</dt>
                        <dd className="font-medium text-fermento-white">Fermento Cultural</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* DETAILED CREDITS */}
                {project.credits && project.credits.length > 0 && (
                  <div className="space-y-6 bg-fermento-charcoal border border-fermento-border p-6 rounded-lg h-fit">
                    <h3 className="font-serif text-lg font-medium text-fermento-white border-b border-fermento-border pb-4">
                      Equipe
                    </h3>
                    <dl className="space-y-4 text-sm">
                      {project.credits.map((credit: any, idx: number) => (
                        <div key={idx}>
                          <dt className="text-fermento-gray mb-1">{credit.role}</dt>
                          <dd className="font-medium text-fermento-white">{credit.name}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
