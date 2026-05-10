import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { siteContent } from "@/content/site"

export default function ClientesParceirosPage() {
  const categories = [
    "Instituições Culturais",
    "Organizações Sociais",
    "Empresas",
    "Coletivos",
    "Artistas",
    "Equipamentos Públicos"
  ]

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-fermento-white">
              Clientes e <span className="text-fermento-yellow italic">Parceiros</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              {siteContent.clientes.text}
            </p>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl space-y-24">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <h2 className="font-serif text-3xl font-medium text-fermento-white border-b border-fermento-border pb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Placeholders for logos */}
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="aspect-video bg-fermento-charcoal border border-fermento-border rounded-lg flex items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all hover:border-fermento-yellow/50"
                    >
                      <span className="text-xs text-fermento-gray uppercase tracking-widest font-medium">Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
