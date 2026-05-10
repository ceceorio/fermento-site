import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { radarItems } from "@/content/radar"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = radarItems.find((p) => p.slug === slug)

  if (!item) {
    return {
      title: "Página não encontrada | Fermento Cultural"
    }
  }

  return {
    title: `${item.title} | Radar Fermento`,
    description: item.summary,
  }
}

export function generateStaticParams() {
  return radarItems
    .filter(item => item.slug)
    .map((item) => ({
      slug: item.slug,
    }))
}

export default async function RadarArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const item = radarItems.find((p) => p.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black">
        <article className="px-4 py-16 md:py-24 md:px-6">
          <div className="container mx-auto max-w-3xl space-y-12">
            
            {/* Nav */}
            <Link 
              href="/radar"
              className="inline-flex items-center text-sm font-medium text-fermento-gray hover:text-fermento-yellow transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar para o Radar
            </Link>

            {/* Header */}
            <header className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center rounded-sm bg-fermento-charcoal px-3 py-1 text-xs font-medium text-fermento-white border border-fermento-border uppercase tracking-widest">
                  {item.category}
                </span>
                {item.status !== "Informativo" && (
                  <span className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-bold uppercase tracking-widest border ${
                    item.status === "Aberto" ? "text-green-400 bg-green-400/10 border-green-400/20" : 
                    item.status === "Em andamento" ? "text-fermento-yellow bg-fermento-yellow/10 border-fermento-yellow/20" : 
                    "text-red-400 bg-red-400/10 border-red-400/20"
                  }`}>
                    {item.status}
                  </span>
                )}
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-fermento-white text-balance leading-tight">
                {item.title}
              </h1>
              
              <div className="flex items-center gap-2 text-fermento-gray font-medium pt-4 border-t border-fermento-border/50">
                <Calendar className="w-4 h-4" />
                <span>Publicado em: {item.publishDate}</span>
              </div>
            </header>

            {/* Ficha Técnica (Apenas para Editais/Oportunidades) */}
            {(item.targetAudience || item.duration || item.fundingAmount || item.deadline) && (
              <div className="bg-fermento-graphite border border-fermento-border rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-xl text-fermento-white border-b border-fermento-border/50 pb-2">
                  Ficha Técnica
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                  {item.deadline && (
                    <div>
                      <span className="block text-fermento-gray/70 uppercase tracking-wider text-[10px] font-bold mb-1">Prazo / Vencimento</span>
                      <span className="text-fermento-yellow font-medium">{item.deadline}</span>
                    </div>
                  )}
                  {item.targetAudience && (
                    <div>
                      <span className="block text-fermento-gray/70 uppercase tracking-wider text-[10px] font-bold mb-1">Público-alvo</span>
                      <span className="text-fermento-white">{item.targetAudience}</span>
                    </div>
                  )}
                  {item.fundingAmount && (
                    <div>
                      <span className="block text-fermento-gray/70 uppercase tracking-wider text-[10px] font-bold mb-1">Fomento / Prêmio</span>
                      <span className="text-fermento-white">{item.fundingAmount}</span>
                    </div>
                  )}
                  {item.duration && (
                    <div>
                      <span className="block text-fermento-gray/70 uppercase tracking-wider text-[10px] font-bold mb-1">Duração do Projeto</span>
                      <span className="text-fermento-white">{item.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Content or Summary */}
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-fermento-gray prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-fermento-white prose-a:text-fermento-yellow hover:prose-a:text-fermento-yellow/80">
              {item.content ? (
                item.content.map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return <h3 key={index} className="text-2xl mt-8 mb-4">{paragraph.replace('###', '').trim()}</h3>;
                  }
                  return <p key={index} className="text-lg">{paragraph}</p>;
                })
              ) : (
                <p className="text-xl text-fermento-white/90 leading-relaxed font-serif italic border-l-2 border-fermento-yellow pl-4 py-2">
                  {item.summary}
                </p>
              )}
            </div>

            {/* Ação: Link Externo */}
            {item.externalLink && (
              <div className="pt-8 border-t border-fermento-border/50">
                <a 
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-fermento-yellow text-fermento-black font-medium rounded-sm hover:bg-fermento-burnt transition-colors"
                >
                  Acessar Edital Oficial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            )}

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
