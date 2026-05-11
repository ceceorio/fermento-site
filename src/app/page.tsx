import { siteContent } from "@/content/site"
import { areas } from "@/content/areas"
import { projects } from "@/content/projects"
import { publications } from "@/content/publications"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { PublicationCard } from "@/components/shared/PublicationCard"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { HeroCarousel } from "@/components/shared/HeroCarousel"

export default function Home() {
  // Filter projects by role
  const projetosFermento = projects.filter(p => p.fermentoRole === "Projetos Fermento");
  const instituicoes = projects.filter(p => p.fermentoRole === "Instituições sob Gestão");
  const projetosParceria = projects.filter(p => p.fermentoRole === "Projetos em Parceria");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black">
        {/* HERO SECTION */}
        <section className="relative flex flex-col justify-center min-h-[90vh] px-4 py-20 md:px-6 overflow-hidden">
          {/* BACKGROUND VIDEO WITH OVERLAY */}
          <div className="absolute inset-0 z-0 bg-fermento-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-banner.png"
              className="absolute inset-0 w-full h-full object-cover object-[center_right] opacity-80 mix-blend-lighten"
            >
              <source src="/video01.mp4" type="video/mp4" />
            </video>
            {/* Gradientes para garantir legibilidade à esquerda e criar o aspecto cinematográfico premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-fermento-black via-fermento-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-fermento-black/90 via-transparent to-fermento-black/20" />
            {/* Overlay sutil de escurecimento geral para o texto amarelo saltar */}
            <div className="absolute inset-0 bg-fermento-black/30" />
          </div>
          <div className="container mx-auto max-w-5xl space-y-10 relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-fermento-white text-balance leading-[1.05]">
              Gestão Sociocultural, <br className="hidden md:block"/> Projetos e Territórios <span className="text-fermento-yellow italic">Criativos</span>.
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-fermento-gray text-balance font-medium leading-relaxed">
              {siteContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" asChild className="h-14 px-8 text-lg">
                <Link href="#ecossistema">Conheça nosso ecossistema</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg">
                <Link href="/projetos">Veja nossos projetos</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="h-14 px-8 text-lg">
                <Link href="/contato">Fale com a Fermento</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FRASE MÃE / POSICIONAMENTO */}
        <section className="bg-fermento-yellow text-fermento-black px-4 py-10 md:py-12 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight leading-relaxed text-balance whitespace-pre-line">
              {siteContent.fraseMae}
            </h2>
          </div>
        </section>

        {/* CARROSSEL DE PROJETOS */}
        <HeroCarousel />

        {/* O QUE FAZEMOS */}
        <section className="px-4 py-32 md:px-6 border-b border-fermento-border bg-fermento-graphite">
          <div className="container mx-auto space-y-16">
            <div className="space-y-4 max-w-3xl">
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-fermento-white">
                O que fazemos
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.oqueFazemos.map((item, idx) => (
                <div key={idx} className="p-8 border border-fermento-border bg-fermento-charcoal hover:border-fermento-yellow transition-colors group">
                  <div className="w-12 h-1 bg-fermento-yellow mb-6 transition-all group-hover:w-full" />
                  <h3 className="font-serif text-2xl font-medium text-fermento-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-fermento-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSSA MÍDIA / INSTAGRAM (FULL BLEED) */}
        <section className="w-full py-16 md:py-24 border-t border-fermento-border bg-fermento-black">
          <div className="w-full">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-6e7f7bf8-583b-45d2-a0ca-0ef5487b6e4c" data-elfsight-app-lazy></div>
          </div>
        </section>

        {/* ECOSSISTEMA FERMENTO */}
        <section id="ecossistema" className="px-4 py-32 md:px-6 border-t border-fermento-border bg-fermento-graphite">
          <div className="container mx-auto space-y-24">
            
            <div className="max-w-4xl space-y-6">
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-fermento-white tracking-tight">
                {siteContent.ecossistema.title}
              </h2>
              <p className="text-xl md:text-2xl text-fermento-gray text-balance">
                {siteContent.ecossistema.intro}
              </p>
            </div>

            {/* 1. Projetos Fermento */}
            <div className="space-y-12 pt-8">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-fermento-yellow font-bold uppercase tracking-widest text-sm">Frente 01</h3>
                <h4 className="font-serif text-3xl md:text-4xl text-fermento-white">{siteContent.ecossistema.projetosFermento.title}</h4>
                <p className="text-fermento-gray text-lg">{siteContent.ecossistema.projetosFermento.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projetosFermento.slice(0, 3).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    {...project}
                    area={areas.find(a => a.id === project.areaId)?.title || "Projeto"}
                  />
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-fermento-border" />

            {/* 2. Instituições sob Gestão */}
            <div className="space-y-12 pt-8">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-fermento-yellow font-bold uppercase tracking-widest text-sm">Frente 02</h3>
                <h4 className="font-serif text-3xl md:text-4xl text-fermento-white">{siteContent.ecossistema.instituicoesSobGestao.title}</h4>
                <p className="text-fermento-gray text-lg">{siteContent.ecossistema.instituicoesSobGestao.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {instituicoes.map((inst) => (
                  <div key={inst.id} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-fermento-border bg-fermento-graphite p-8 transition-colors hover:border-fermento-yellow">
                    <div className="space-y-6">
                      <h5 className="font-serif text-3xl font-bold text-fermento-white group-hover:text-fermento-yellow transition-colors">
                        {inst.title}
                      </h5>
                      <p className="text-fermento-gray text-lg leading-relaxed">
                        {inst.summary}
                      </p>
                    </div>
                    <div className="pt-8 mt-auto">
                      <Button variant="outline" asChild>
                        <Link href={`/projetos/${inst.slug}`}>Conhecer a instituição</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-fermento-border" />

            {/* 3. Projetos em Parceria */}
            <div className="space-y-12 pt-8">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-fermento-yellow font-bold uppercase tracking-widest text-sm">Frente 03</h3>
                <h4 className="font-serif text-3xl md:text-4xl text-fermento-white">{siteContent.ecossistema.projetosEmParceria.title}</h4>
                <p className="text-fermento-gray text-lg">{siteContent.ecossistema.projetosEmParceria.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projetosParceria.slice(0, 3).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    {...project}
                    area={areas.find(a => a.id === project.areaId)?.title || "Parceria"}
                  />
                ))}
              </div>
            </div>
            
            <div className="pt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/projetos">Acessar todos os projetos do Ecossistema</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* COMO ATUAMOS */}
        <section className="bg-fermento-graphite border-y border-fermento-border px-4 py-32 md:px-6">
          <div className="container mx-auto space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-fermento-white">
                Como Atuamos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 border-l border-fermento-border md:border-l-0 md:border-t pt-8">
              {siteContent.comoAtuamos.map((etapa, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 pt-4 md:pt-8 group">
                  <div className="absolute left-[-5px] top-4 md:-top-[5px] md:left-0 w-2 h-2 rounded-full bg-fermento-border group-hover:bg-fermento-yellow transition-colors" />
                  <h4 className="font-serif text-xl text-fermento-white mb-3 group-hover:text-fermento-yellow transition-colors">{etapa.title}</h4>
                  <p className="text-fermento-gray text-sm leading-relaxed">{etapa.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICAÇÕES */}
        <section className="px-4 py-32 md:px-6">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-fermento-white">
                  Inteligência e Publicações
                </h2>
                <p className="text-fermento-gray text-lg">
                  Estudos de caso, metodologias, guias e análises sobre o setor cultural.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/publicacoes">Ver base de conhecimento</Link>
              </Button>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publications.slice(0, 3).map((pub) => (
                <PublicationCard key={pub.id} {...pub} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="px-4 py-32 md:px-6 text-center border-t border-fermento-border bg-fermento-graphite">
          <div className="container mx-auto max-w-3xl space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-fermento-white text-balance">
              {siteContent.contato.title}
            </h2>
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/contato">Entrar em contato</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
