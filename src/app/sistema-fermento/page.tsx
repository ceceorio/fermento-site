import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"
import { 
  Users, 
  FolderKanban, 
  Wallet, 
  CalendarDays, 
  FileBarChart, 
  Globe, 
  Library, 
  MessageSquare, 
  BrainCircuit 
} from "lucide-react"

export default function SistemaFermentoPage() {
  const features = [
    { title: "Gestão de proponentes", icon: Users },
    { title: "Gestão de projetos", icon: FolderKanban },
    { title: "Rubricas e orçamento", icon: Wallet },
    { title: "Cronogramas", icon: CalendarDays },
    { title: "Relatórios", icon: FileBarChart },
    { title: "Indicadores ODS/ESG", icon: Globe },
    { title: "Base de conhecimento", icon: Library },
    { title: "Comunicação interna", icon: MessageSquare },
    { title: "Inteligência cultural com IA", icon: BrainCircuit },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="relative px-4 py-32 md:px-6 min-h-[70vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-fermento-graphite -z-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fermento-yellow/10 to-transparent -z-10" />
          
          <div className="container mx-auto max-w-5xl space-y-8">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-fermento-white text-balance">
              Plataforma Fermento — <span className="text-fermento-yellow italic">gestão sociocultural em rede.</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed max-w-3xl">
              Um ambiente digital criado para organizar a gestão de projetos culturais e sociais.
            </p>
            <div className="pt-8">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a href={siteContent.plataforma.link} target="_blank" rel="noopener noreferrer">Acessar sistema</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl space-y-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-start p-8 bg-fermento-charcoal border border-fermento-border rounded-lg gap-4 transition-colors hover:border-fermento-yellow/50"
                  >
                    <div className="p-3 bg-fermento-black border border-fermento-border rounded-full text-fermento-yellow">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-medium text-lg text-fermento-white">{feature.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
