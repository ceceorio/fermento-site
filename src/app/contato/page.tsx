import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"
import { Mail, Phone } from "lucide-react"

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="px-4 py-24 md:px-6 bg-fermento-graphite border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-fermento-white">
              Entre em <span className="text-fermento-yellow italic">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed">
              Vamos estruturar o próximo projeto com método, memória e impacto.
            </p>
          </div>
        </section>

        <section className="px-4 py-24 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
              
              {/* Info Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-medium text-fermento-white">Fale conosco</h2>
                  <p className="text-fermento-gray">
                    Preencha o formulário ao lado ou entre em contato direto através dos nossos canais oficiais.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-fermento-gray">
                    <div className="p-3 bg-fermento-charcoal rounded-full text-fermento-yellow">
                      <Mail size={20} />
                    </div>
                    <span>{siteContent.contato.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-fermento-gray">
                    <div className="p-3 bg-fermento-charcoal rounded-full text-fermento-yellow">
                      <Phone size={20} />
                    </div>
                    <span>{siteContent.contato.whatsapp}</span>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="bg-fermento-charcoal border border-fermento-border rounded-xl p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-fermento-white">Nome completo</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-white focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-fermento-white">E-mail</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-white focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-fermento-white">Telefone/WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-white focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="institution" className="text-sm font-medium text-fermento-white">Instituição/Empresa</label>
                      <input 
                        type="text" 
                        id="institution"
                        className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-white focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all"
                        placeholder="Nome da instituição"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demand" className="text-sm font-medium text-fermento-white">Tipo de demanda</label>
                    <select 
                      id="demand"
                      className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-gray focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all appearance-none"
                    >
                      <option value="" disabled selected>Selecione uma opção</option>
                      <option value="elaboracao">Elaboração de projeto</option>
                      <option value="leis">Leis de incentivo</option>
                      <option value="editais">Editais</option>
                      <option value="gestao">Gestão de projeto</option>
                      <option value="sistema">Sistema Fermento</option>
                      <option value="parceria">Parceria institucional</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-fermento-white">Mensagem</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full bg-fermento-black border border-fermento-border rounded-md px-4 py-2.5 text-fermento-white focus:outline-none focus:border-fermento-yellow focus:ring-1 focus:ring-fermento-yellow transition-all resize-none"
                      placeholder="Como podemos colaborar?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8">
                    Enviar mensagem
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
