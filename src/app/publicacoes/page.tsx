import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { publications } from "@/content/publications"
import { PublicationCard } from "@/components/shared/PublicationCard"

export default function PublicacoesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-fermento-white">
              Publicações e <span className="text-fermento-yellow italic">Inteligência</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              Produção de conhecimento, metodologias, guias práticos e reflexões sobre gestão sociocultural.
            </p>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-6xl space-y-16">
            
            {/* Curió Editora */}
            <div className="bg-fermento-charcoal border border-fermento-border rounded-lg p-8 md:p-12">
              <div className="max-w-3xl space-y-4">
                <h2 className="text-fermento-yellow font-bold uppercase tracking-widest text-sm">Curió Editora</h2>
                <h3 className="font-serif text-3xl md:text-4xl text-fermento-white">
                  Nosso braço editorial
                </h3>
                <p className="text-lg text-fermento-gray leading-relaxed">
                  A <strong>Curió Editora</strong> é o braço editorial da Fermento Cultural. Uma editora social fundada com o intuito de desenvolver, viabilizar e distribuir publicações acadêmicas e registros literários, documentais e fotográficos de projetos socioculturais. Acreditamos que a memória institucional e a sistematização de metodologias são fundamentais para o impacto a longo prazo.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                Acervo de Publicações
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publications.map((pub) => (
                <PublicationCard 
                  key={pub.id} 
                  slug={pub.slug}
                  title={pub.title}
                  summary={pub.summary}
                  category={pub.category}
                  tags={pub.tags}
                  coverImage={pub.coverImage}
                />
              ))}
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
