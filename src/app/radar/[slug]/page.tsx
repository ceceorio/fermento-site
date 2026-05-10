import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
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
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-fermento-white text-balance leading-tight">
                {item.title}
              </h1>
              
              <div className="flex items-center gap-2 text-fermento-gray font-medium pt-4 border-t border-fermento-border/50">
                <Calendar className="w-4 h-4" />
                <span>{item.publishDate}</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-fermento-gray prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-fermento-white prose-a:text-fermento-yellow hover:prose-a:text-fermento-yellow/80">
              {item.content ? (
                item.content.map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return <h3 key={index} className="text-2xl mt-8 mb-4">{paragraph.replace('###', '').trim()}</h3>;
                  }
                  return <p key={index} className="text-lg">{paragraph}</p>;
                })
              ) : (
                <p className="text-fermento-gray italic">Conteúdo não disponível.</p>
              )}
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
