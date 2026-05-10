import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { publications } from "@/content/publications"
import { notFound } from "next/navigation"
import { BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MaximizeButton } from "@/components/shared/MaximizeButton"

export function generateStaticParams() {
  return publications.map((pub) => ({
    slug: pub.slug,
  }))
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const publication = publications.find(p => p.slug === slug)
  
  if (!publication) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="flex items-center gap-2 text-fermento-yellow text-sm font-medium uppercase tracking-wider">
              <BookOpen size={18} />
              {publication.category}
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-fermento-white text-balance">
              {publication.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-4">
              {publication.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center rounded-sm bg-fermento-charcoal px-3 py-1 text-xs font-medium text-fermento-gray border border-fermento-border uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar (Capa e Ficha Técnica) */}
              <aside className="w-full lg:w-1/3 flex-shrink-0 space-y-8">
                {publication.coverImage && (
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-fermento-border shadow-2xl bg-fermento-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={publication.coverImage} 
                      alt={`Capa do livro ${publication.title}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                {publication.details && (
                  <div className="bg-fermento-charcoal border border-fermento-border rounded-lg p-6 space-y-4">
                    <h3 className="font-serif text-xl text-fermento-yellow border-b border-fermento-border pb-2">Ficha Técnica</h3>
                    <dl className="space-y-3 text-sm">
                      {Object.entries(publication.details).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-fermento-gray font-medium">{key}</dt>
                          <dd className="text-fermento-white mt-1 leading-relaxed">{value as string}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </aside>

              {/* Main Content (Resumo e PDF) */}
              <article className="w-full lg:w-2/3 prose prose-invert prose-lg prose-fermento">
                <p className="lead text-xl text-fermento-gray mb-12">
                  {publication.summary}
                </p>
                {publication.fileUrl ? (
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-fermento-white m-0">Leitor Digital</h3>
                    </div>
                    <div id="pdf-container" className="w-full h-[600px] md:h-[800px] border border-fermento-border rounded-lg overflow-hidden bg-fermento-charcoal flex items-center justify-center relative">
                      <iframe 
                        src={`${publication.fileUrl}#view=FitH`} 
                        className="absolute inset-0 w-full h-full"
                        title={publication.title}
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
                      <MaximizeButton targetId="pdf-container" />
                      <Button asChild variant="outline">
                        <a href={publication.fileUrl} download>
                          <Download className="mr-2 h-4 w-4" /> Fazer download do PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 bg-fermento-charcoal border border-fermento-border rounded-lg text-center space-y-4">
                    <h3 className="font-serif text-2xl text-fermento-white m-0">Publicação em desenvolvimento</h3>
                    <p className="text-fermento-gray">O conteúdo integral deste material será disponibilizado em breve.</p>
                    <Button disabled variant="outline" className="mt-4">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
