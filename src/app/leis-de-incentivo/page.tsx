import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Landmark, ArrowRight, Building2, User, ScrollText, 
  Receipt, Wallet, Info, FileCheck, DollarSign, Calendar
} from "lucide-react"

export const metadata = {
  title: 'Leis de Incentivo à Cultura | Fermento Cultural',
  description: 'Entenda, de forma clara, como funcionam a Lei Rouanet, o ICMS do Rio de Janeiro e o ISS da cidade do Rio para patrocínio de projetos culturais.',
}

export default function LeisIncentivoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black text-fermento-white">
        
        {/* 1. HERO / ABERTURA */}
        <section className="relative px-4 py-32 md:px-6 border-b border-fermento-border bg-fermento-graphite overflow-hidden min-h-[85vh] flex flex-col justify-center">
          {/* Fundo com gradiente e formas geométricas de destaque */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fermento-black/80 via-fermento-graphite to-fermento-black pointer-events-none" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-fermento-yellow/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto max-w-5xl relative z-10 space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fermento-black border border-fermento-yellow/30 text-fermento-yellow text-sm font-medium tracking-wide uppercase">
              <Landmark className="w-4 h-4" />
              Financiamento & Patrocínio
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
              Leis de <span className="text-fermento-yellow italic">Incentivo</span> à Cultura
            </h1>
            
            <p className="max-w-3xl text-xl md:text-2xl text-fermento-gray font-medium leading-relaxed text-balance">
              Entenda, de forma clara, como funcionam a Lei Rouanet, o ICMS do Rio de Janeiro e o ISS da cidade do Rio para patrocínio de projetos culturais.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="#rouanet">Explorar Mecanismos</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-fermento-black/50" asChild>
                <Link href="#fermento">Como podemos ajudar?</Link>
              </Button>
            </div>
          </div>
          
          {/* Caixa de destaque sobreposta inferior */}
          <div className="container mx-auto max-w-5xl relative z-10 mt-20">
            <div className="p-8 md:p-10 bg-fermento-black border border-fermento-yellow/20 rounded-xl shadow-2xl backdrop-blur flex items-start gap-6">
              <div className="p-4 bg-fermento-yellow/10 rounded-lg hidden md:block">
                <FileCheck className="w-8 h-8 text-fermento-yellow" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  A Fermento Cultural atua na estruturação, elaboração, captação e acompanhamento de projetos culturais em diferentes mecanismos de incentivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO INTRODUTÓRIA */}
        <section className="px-4 py-24 md:px-6 bg-fermento-black">
          <div className="container mx-auto max-w-4xl space-y-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-balance text-center">
              O que são Leis de Incentivo à Cultura?
            </h2>
            <div className="space-y-6 text-xl text-fermento-gray leading-relaxed">
              <p>
                As leis de incentivo à cultura são mecanismos de <strong>renúncia fiscal</strong> criados pelo poder público para estimular o investimento privado no setor cultural. Na prática, elas permitem que empresas e cidadãos direcionem parte do imposto que já teriam que pagar para projetos culturais aprovados em órgãos governamentais.
              </p>
              <p>
                Em vez de repassar todo o tributo diretamente aos cofres do governo, o patrocinador apoia a cultura e fortalece a própria marca, gerando impacto social e desenvolvimento territorial.
              </p>
              <div className="bg-fermento-charcoal p-6 border-l-4 border-fermento-yellow rounded-r-lg mt-8 text-lg text-fermento-white">
                <strong>Importante:</strong> Cada lei tem regras próprias sobre <strong>quem pode patrocinar</strong>, <strong>quanto pode destinar</strong>, <strong>como o recurso chega ao projeto</strong> e <strong>como ocorre o benefício fiscal</strong>. Veja os detalhes abaixo.
              </div>
            </div>
          </div>
        </section>

        {/* 3. BLOCO 1 – LEI ROUANET */}
        <section id="rouanet" className="px-4 py-24 md:px-6 bg-fermento-graphite border-y border-fermento-border">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-charcoal border border-fermento-border text-sm font-medium">
                  <Landmark className="w-4 h-4 text-fermento-yellow" />
                  Esfera Federal
                </div>
                <h2 className="font-serif text-5xl font-bold tracking-tight">Lei Rouanet</h2>
                <p className="text-xl text-fermento-gray leading-relaxed">
                  É o principal mecanismo federal de incentivo à cultura do Brasil. Permite o abatimento do <strong>Imposto de Renda (IR)</strong> devido por pessoas físicas e jurídicas.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex gap-4 p-5 bg-fermento-black border border-fermento-border rounded-lg">
                    <User className="w-8 h-8 text-fermento-yellow shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Pessoa Física</h4>
                      <p className="text-fermento-gray">Declarante de Imposto de Renda (modelo completo) pode destinar <strong>até 6% do IR devido</strong>.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-fermento-black border border-fermento-border rounded-lg">
                    <Building2 className="w-8 h-8 text-fermento-yellow shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Pessoa Jurídica</h4>
                      <p className="text-fermento-gray">Empresas tributadas pelo Lucro Real podem destinar <strong>até 4% do IR devido</strong>.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-fermento-yellow/10 text-fermento-yellow p-6 rounded-lg border border-fermento-yellow/20">
                  <div className="flex gap-3">
                    <Info className="w-6 h-6 shrink-0 mt-1" />
                    <div className="space-y-2">
                      <p><strong>Artigo 18:</strong> Permite dedução de até 100% do valor patrocinado (dentro do limite legal de IR) no IR do patrocinador.</p>
                      <p><strong>Artigo 26:</strong> Permite dedução parcial (geralmente 30% a 40%) dependendo da natureza jurídica da empresa e do projeto.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fluxograma Rouanet */}
              <div className="bg-fermento-charcoal p-8 rounded-2xl border border-fermento-border shadow-xl">
                <h3 className="font-serif text-2xl font-medium mb-8 text-center border-b border-fermento-border pb-4">Como funciona o fluxo do dinheiro?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-yellow text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">1</div>
                    <p className="text-lg">O projeto é aprovado pelo Ministério da Cultura.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-dashed border-fermento-border ml-6 h-8" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-yellow text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">2</div>
                    <p className="text-lg">O patrocinador faz um <strong>depósito direto</strong> na conta vinculada do projeto aprovado.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-dashed border-fermento-border ml-6 h-8" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-yellow text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">3</div>
                    <p className="text-lg">A produtora emite o <strong>Recibo de Mecenato</strong> oficializando o aporte.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-dashed border-fermento-border ml-6 h-8" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-yellow text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">4</div>
                    <p className="text-lg">No ano/exercício seguinte, o patrocinador usa o recibo para abater o valor investido do seu Imposto de Renda devido.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-fermento-black rounded border border-fermento-yellow/30 text-center">
                  <p className="text-sm text-fermento-gray">
                    <strong>Atenção:</strong> Na Rouanet, o patrocinador antecipa o valor. A recuperação não é uma "devolução em dinheiro", mas sim um abatimento fiscal futuro.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* DESTAQUE VISUAL */}
        <section className="bg-fermento-yellow text-fermento-black px-4 py-16 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              "Na Rouanet e no ICMS, o patrocinador aporta diretamente no projeto. No ISS, a lógica é diferente."
            </h2>
          </div>
        </section>

        {/* 4. BLOCO 2 – ICMS RJ */}
        <section id="icms-rj" className="px-4 py-24 md:px-6 bg-fermento-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Fluxograma ICMS RJ (Order changed for visual balance) */}
              <div className="bg-fermento-graphite p-8 rounded-2xl border border-fermento-border shadow-xl order-2 lg:order-1">
                <h3 className="font-serif text-2xl font-medium mb-8 text-center border-b border-fermento-border pb-4">Fluxo de Patrocínio ICMS</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-white text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">1</div>
                    <p className="text-lg">O projeto é aprovado na SECEC-RJ.</p>
                  </div>
                  <div className="pl-6 border-l-2 border-dashed border-fermento-border ml-6 h-8" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-white text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">2</div>
                    <div>
                      <p className="text-lg">A empresa faz um <strong>depósito direto</strong> no projeto.</p>
                      <div className="mt-2 inline-flex bg-fermento-black text-fermento-yellow px-3 py-1 rounded text-sm font-medium border border-fermento-yellow/20">
                        + 1/5 do valor para o Fundo Estadual (FEC)
                      </div>
                    </div>
                  </div>
                  <div className="pl-6 border-l-2 border-dashed border-fermento-border ml-6 h-8" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-fermento-white text-fermento-black flex items-center justify-center font-bold text-xl shrink-0">3</div>
                    <p className="text-lg">Após o segundo mês dos repasses, a empresa começa a usufruir do <strong>abatimento mensal</strong> no ICMS devido.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-fermento-black rounded border border-fermento-border text-center">
                  <p className="text-sm text-fermento-gray">
                    O abatimento é contínuo e progressivo até compensar o total do investimento (excluindo a parcela do FEC, que é contrapartida). O retorno é sempre abatimento fiscal.
                  </p>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-graphite border border-fermento-border text-sm font-medium">
                  <Landmark className="w-4 h-4 text-fermento-white" />
                  Esfera Estadual (Rio de Janeiro)
                </div>
                <h2 className="font-serif text-5xl font-bold tracking-tight">Lei do ICMS RJ</h2>
                <p className="text-xl text-fermento-gray leading-relaxed">
                  O mecanismo estadual do RJ permite que empresas patrocinem projetos culturais com parte do Imposto sobre Circulação de Mercadorias e Serviços (ICMS).
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex gap-4 p-5 bg-fermento-graphite border border-fermento-border rounded-lg">
                    <Building2 className="w-8 h-8 text-fermento-white shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Empresas Contribuintes</h4>
                      <p className="text-fermento-gray">Qualquer empresa habilitada no sistema SEFAZ/SECEC que recolha ICMS no RJ.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-fermento-graphite border border-fermento-border rounded-lg">
                    <DollarSign className="w-8 h-8 text-fermento-white shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Limite de Investimento</h4>
                      <p className="text-fermento-gray">Até <strong>3% do ICMS a recolher</strong> em cada período de apuração, seguindo a tabela vigente da SEFAZ.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 border-l-4 border-fermento-yellow bg-fermento-yellow/5">
                  <h4 className="font-bold mb-2">Atenção ao Fundo (FEC)</h4>
                  <p className="text-fermento-gray">Para patrocinar por esta lei, a empresa destina o valor ao projeto aprovado e deve recolher um valor adicional de <strong>20% (1/5) do patrocínio</strong> ao Fundo Estadual de Cultura.</p>
                </div>

              </div>
              
            </div>
          </div>
        </section>

        {/* 5. BLOCO 3 – ISS RIO */}
        <section id="iss-rio" className="px-4 py-24 md:px-6 bg-fermento-graphite border-t border-fermento-border">
          <div className="container mx-auto max-w-6xl space-y-16">
            
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-charcoal border border-fermento-border text-sm font-medium">
                <Landmark className="w-4 h-4 text-fermento-yellow" />
                Esfera Municipal (Cidade do Rio de Janeiro)
              </div>
              <h2 className="font-serif text-5xl font-bold tracking-tight">Lei do ISS Rio</h2>
              <p className="text-xl text-fermento-gray leading-relaxed">
                Mecanismo municipal da cidade do Rio de Janeiro focado no Imposto Sobre Serviços (ISS). Opera através de dois editais distintos: <strong>Produtor Cultural</strong> e <strong>Contribuinte Incentivador</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-fermento-border bg-fermento-black rounded-xl">
                <h4 className="text-2xl font-serif font-medium mb-4 text-fermento-white">Como Participar (Empresas)</h4>
                <ul className="space-y-4 text-fermento-gray">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-fermento-yellow shrink-0 mt-0.5" />
                    <span>Empresas prestadoras de serviços (contribuintes de ISS no RJ).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-fermento-yellow shrink-0 mt-0.5" />
                    <span>Precisam se habilitar formalmente no Edital (geralmente em agosto).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-fermento-yellow shrink-0 mt-0.5" />
                    <span>Não podem ser optantes do Simples Nacional.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-fermento-yellow shrink-0 mt-0.5" />
                    <span>Podem destinar <strong>até 20% do ISS a ser pago no ano seguinte</strong>, baseando-se no que foi pago no ano anterior.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 border border-fermento-yellow/30 bg-fermento-yellow/5 rounded-xl">
                <h4 className="text-2xl font-serif font-medium mb-4 text-fermento-yellow">A Grande Diferença</h4>
                <p className="text-fermento-white text-lg leading-relaxed mb-6">
                  No ISS, a empresa <strong>não faz depósito direto</strong> na conta do produtor cultural, como acontece na Rouanet e no ICMS.
                </p>
                <p className="text-fermento-gray leading-relaxed">
                  A empresa direciona uma parte do imposto devido no próprio sistema da Prefeitura. A Secretaria de Fazenda retém o recurso e repassa para a Secretaria de Cultura, que efetua o pagamento ao projeto aprovado.
                  <strong> Não há "retorno" financeiro posterior, pois o dinheiro já saiu como imposto direcionado.</strong>
                </p>
              </div>
            </div>

            {/* Linha do Tempo ISS */}
            <div className="pt-8">
              <h3 className="font-serif text-3xl font-medium mb-8 text-center">O Ciclo do ISS (Linha do Tempo Anual)</h3>
              <div className="relative border-l border-fermento-border md:border-l-0 md:flex md:gap-4 md:overflow-x-auto md:pb-8 snap-x">
                
                {[
                  { month: "Maio", desc: "Abertura do Edital do Produtor Cultural." },
                  { month: "Julho/Agosto", desc: "Abertura do Edital do Contribuinte Incentivador (Empresas)." },
                  { month: "Outubro", desc: "Resultado da Habilitação das empresas." },
                  { month: "Nov/Dez", desc: "Assinatura do Termo de Compromisso (Match entre empresa e projeto aprovado)." },
                  { month: "A partir de Março", desc: "A empresa começa a destinar parte do imposto mensalmente. O recurso flui da Prefeitura para o projeto." }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-0 md:min-w-[250px] md:flex-1 py-4 snap-center group">
                    <div className="absolute left-[-5px] top-6 md:top-0 md:left-4 w-2.5 h-2.5 rounded-full bg-fermento-yellow border border-fermento-black" />
                    <div className="hidden md:block absolute top-[4px] left-8 right-0 h-px bg-fermento-border" />
                    
                    <div className="md:pt-8 md:pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-fermento-yellow" />
                        <h4 className="font-bold text-fermento-white">{item.month}</h4>
                      </div>
                      <p className="text-sm text-fermento-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* 6. TABELA COMPARATIVA GERAL */}
        <section className="px-4 py-24 md:px-6 bg-fermento-black border-t border-fermento-border">
          <div className="container mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Comparativo dos Mecanismos</h2>
              <p className="text-fermento-gray text-lg">Resumo das principais características para ajudar na tomada de decisão do patrocinador e do produtor.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-fermento-border shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-fermento-charcoal text-fermento-white">
                    <th className="p-4 border-b border-r border-fermento-border font-serif text-xl w-1/4">Critério</th>
                    <th className="p-4 border-b border-r border-fermento-border font-serif text-xl text-fermento-yellow">Lei Rouanet</th>
                    <th className="p-4 border-b border-r border-fermento-border font-serif text-xl">ICMS RJ</th>
                    <th className="p-4 border-b border-fermento-border font-serif text-xl">ISS Rio</th>
                  </tr>
                </thead>
                <tbody className="text-fermento-gray bg-fermento-black">
                  {[
                    { label: "Esfera", r: "Federal", icms: "Estadual (RJ)", iss: "Municipal (Rio de Janeiro)" },
                    { label: "Imposto", r: "Imposto de Renda (IR)", icms: "ICMS", iss: "ISS" },
                    { label: "Quem Pode", r: "PF (Completa) e PJ (Lucro Real)", icms: "Empresas Contribuintes (RJ)", iss: "Empresas Contribuintes (Rio)" },
                    { label: "Limite Máximo", r: "6% (PF) / 4% (PJ)", icms: "Até 3% do ICMS apurado", iss: "Até 20% do ISS devido" },
                    { label: "Aporte Direto?", r: "Sim. Depósito na conta do projeto.", icms: "Sim. Depósito na conta do projeto.", iss: "Não. Direcionamento via Prefeitura." },
                    { label: "Fundo Obrigatório", r: "Não possui.", icms: "Sim. 20% do patrocínio para o FEC.", iss: "Não possui." },
                    { label: "Retorno do Benefício", r: "Dedução no IR do ano seguinte.", icms: "Abatimento contínuo mensal no ICMS.", iss: "Não há devolução. O imposto já é direcionado na fonte." },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-fermento-graphite transition-colors">
                      <td className="p-4 border-b border-r border-fermento-border font-medium text-fermento-white">{row.label}</td>
                      <td className="p-4 border-b border-r border-fermento-border">{row.r}</td>
                      <td className="p-4 border-b border-r border-fermento-border">{row.icms}</td>
                      <td className="p-4 border-b border-fermento-border">{row.iss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. SEÇÃO COMO A FERMENTO PODE AJUDAR */}
        <section id="fermento" className="px-4 py-24 md:px-6 bg-fermento-graphite border-y border-fermento-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fermento-yellow/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance text-fermento-white">
                  Cada mecanismo exige uma <span className="text-fermento-yellow italic">estratégia própria</span> de captação.
                </h2>
                <p className="text-xl text-fermento-gray leading-relaxed">
                  Trabalhar com leis de incentivo não é apenas inscrever o projeto; é desenhar um produto cultural viável para patrocinadores e alinhado aos marcos legais.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-medium text-2xl text-fermento-yellow mb-6">Como a Fermento atua:</h3>
                <ul className="space-y-4">
                  {[
                    "Elaboração de projetos e adequação técnica aos editais.",
                    "Planejamento estratégico de captação de recursos.",
                    "Criação de apresentações e defesas para patrocinadores.",
                    "Acompanhamento e execução rigorosa.",
                    "Organização documental e prestação de contas governamental."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileCheck className="w-6 h-6 text-fermento-white shrink-0" />
                      <span className="text-fermento-gray text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg" asChild>
                    <Link href="/contato">Agendar uma conversa conosco</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FONTES E AVISO (RODAPÉ DA PÁGINA) */}
        <section className="px-4 py-16 bg-fermento-black text-fermento-gray text-center text-sm border-b border-fermento-border">
          <div className="container mx-auto max-w-3xl space-y-6">
            <p>
              <strong>Aviso Importante:</strong> Esta página tem caráter puramente educativo e informativo. Não substitui a leitura atenta da legislação, dos editais oficiais, portarias vigentes e acompanhamento de especialistas jurídicos ou contábeis.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-fermento-yellow font-medium">
              <a href="https://www.gov.br/cultura/pt-br/assuntos/lei-rouanet" target="_blank" rel="noopener noreferrer" className="hover:underline">Fonte: Lei Rouanet (MinC)</a>
              <span className="hidden sm:inline">•</span>
              <a href="https://cultura.rj.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">Fonte: ICMS RJ (SECEC-RJ)</a>
              <span className="hidden sm:inline">•</span>
              <a href="https://portaldoiss.prefeitura.rio/a-lei-do-iss/" target="_blank" rel="noopener noreferrer" className="hover:underline">Fonte: ISS Rio</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
