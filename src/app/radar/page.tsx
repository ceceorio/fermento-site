"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { radarItems, RadarCategory } from "@/content/radar"
import { RadarCard } from "@/components/shared/RadarCard"
import { Radio } from "lucide-react"

const CATEGORIES: ("Todos" | RadarCategory)[] = [
  "Todos",
  "Editais",
  "Chamadas abertas",
  "Oportunidades",
  "Notícias",
  "Análises",
  "Agenda do setor"
]

export default function RadarPage() {
  const [activeCategory, setActiveCategory] = useState<"Todos" | RadarCategory>("Todos")

  const filteredItems = activeCategory === "Todos" 
    ? radarItems 
    : radarItems.filter(item => item.category === activeCategory)

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black">
        {/* HEADER RADAR */}
        <section className="px-4 py-24 md:py-32 md:px-6 border-b border-fermento-border bg-fermento-graphite relative overflow-hidden">
          {/* Background pattern/gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fermento-yellow/10 via-fermento-black/80 to-fermento-black pointer-events-none" />
          
          <div className="container mx-auto max-w-4xl space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-fermento-yellow/10 border border-fermento-yellow/30 text-fermento-yellow w-fit">
              <Radio className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Atualizado constantemente</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-fermento-white text-balance">
              Radar <span className="text-fermento-yellow italic">Fermento</span>
            </h1>
            
            <div className="w-16 h-1 bg-fermento-yellow" />
            
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed max-w-3xl">
              Notícias, editais e oportunidades para quem atua na cultura, no social e na economia criativa.
            </p>
            
            <p className="text-base text-fermento-gray/80 leading-relaxed max-w-2xl">
              O Radar Fermento reúne informações, chamadas públicas, seleções, eventos e movimentações importantes do campo sociocultural. Mais do que divulgar informações, organizamos oportunidades relevantes para artistas, produtores, organizações sociais e empresas.
            </p>
          </div>
        </section>

        {/* FEED SECTION */}
        <section className="px-4 py-16 md:px-6">
          <div className="container mx-auto max-w-6xl space-y-12">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-fermento-border/50">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all border ${
                    activeCategory === category 
                      ? "bg-fermento-white text-fermento-black border-fermento-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                      : "bg-fermento-charcoal text-fermento-gray border-fermento-border hover:border-fermento-gray hover:text-fermento-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <RadarCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-4">
                <Radio className="w-12 h-12 text-fermento-border mx-auto" />
                <p className="text-xl text-fermento-gray font-medium">Nenhum item encontrado nesta categoria.</p>
                <button 
                  onClick={() => setActiveCategory("Todos")}
                  className="text-fermento-yellow hover:underline"
                >
                  Voltar para todos os itens
                </button>
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
