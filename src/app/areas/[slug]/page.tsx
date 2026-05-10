import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { areas } from "@/content/areas"
import { projects } from "@/content/projects"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import * as LucideIcons from "lucide-react"

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }))
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find(a => a.slug === slug)
  
  if (!area) {
    notFound()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[area.icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')] || LucideIcons.Circle
  
  const relatedProjects = projects.filter(p => p.areaId === area.id)

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fermento-black border border-fermento-yellow text-fermento-yellow">
              <Icon size={32} />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-fermento-white text-balance">
              {area.title}
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed max-w-3xl">
              {area.description}
            </p>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="px-4 py-24 md:px-6">
            <div className="container mx-auto space-y-12 max-w-5xl">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-fermento-white">
                Projetos Relacionados
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    slug={project.slug}
                    title={project.title}
                    summary={project.summary}
                    area={area.title}
                    status={project.status}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 py-24 md:px-6 bg-fermento-yellow text-fermento-black text-center">
          <div className="container mx-auto max-w-3xl space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">
              Tem um projeto nessa área?
            </h2>
            <p className="text-lg md:text-xl font-medium">
              Vamos estruturar juntos com método, gestão e impacto.
            </p>
            <Button size="lg" className="bg-fermento-black text-fermento-white hover:bg-fermento-graphite" asChild>
              <Link href="/contato">Entrar em contato</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
