import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Landmark, ArrowRight, Building2, User, 
  Wallet, Info, FileCheck, DollarSign, Calendar, ChevronDown, CheckCircle2,
  Receipt, ScrollText
} from "lucide-react"

export const metadata = {
  title: 'Leis de Incentivo à Cultura | Fermento Cultural',
  description: 'Entenda, de forma clara, como funcionam a Lei Rouanet, o ICMS do Rio de Janeiro e o ISS da cidade do Rio para patrocínio de projetos culturais.',
}

export default function LeisIncentivoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-fermento-black text-fermento-white scroll-smooth">
        
        {/* 1. HERO / ABERTURA */}
        <section className="relative px-4 pt-32 pb-16 md:px-6 border-b border-fermento-border bg-fermento-graphite overflow-hidden flex flex-col justify-center">
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
          </div>
        </section>

        {/* NAVEGAÇÃO / ÂNCORAS */}
        <section className="px-4 py-12 md:px-6 bg-fermento-black border-b border-fermento-border sticky top-20 md:top-24 z-40 backdrop-blur bg-fermento-black/90">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="#rouanet" className="flex items-center justify-center p-4 rounded-lg bg-fermento-graphite border border-fermento-border hover:border-fermento-yellow transition-colors text-center font-medium">
                Lei Rouanet
              </Link>
              <Link href="#icms-rj" className="flex items-center justify-center p-4 rounded-lg bg-fermento-graphite border border-fermento-border hover:border-fermento-yellow transition-colors text-center font-medium">
                ICMS RJ
              </Link>
              <Link href="#iss-rio" className="flex items-center justify-center p-4 rounded-lg bg-fermento-graphite border border-fermento-border hover:border-fermento-yellow transition-colors text-center font-medium">
                ISS Rio
              </Link>
            </div>
          </div>
        </section>

        {/* INTRODUÇÃO GERAL */}
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
                <strong>Importante:</strong> Cada lei tem regras próprias sobre <strong>quem pode patrocinar</strong>, <strong>quanto pode destinar</strong>, <strong>como o recurso chega ao projeto</strong> e <strong>como ocorre o benefício fiscal</strong>. Entenda detalhadamente cada uma a seguir.
              </div>
            </div>
          </div>
        </section>

        {/* BLOCO 1 – LEI ROUANET */}
        <section id="rouanet" className="px-4 py-24 md:px-6 bg-fermento-graphite border-t border-fermento-border scroll-mt-32">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-charcoal border border-fermento-border text-sm font-medium">
                <Landmark className="w-4 h-4 text-fermento-yellow" />
                Esfera Federal
              </div>
              <h2 className="font-serif text-5xl font-bold tracking-tight">Lei Rouanet — Incentivo Federal via Imposto de Renda</h2>
              <p className="text-xl text-fermento-gray leading-relaxed">
                A Lei Rouanet é o principal mecanismo federal de incentivo fiscal à cultura. Por meio dela, projetos culturais aprovados pelo Ministério da Cultura podem receber patrocínio de pessoas físicas e empresas tributadas pelo 
                <details className="relative inline-block ml-1 group">
                  <summary className="cursor-pointer text-fermento-yellow underline decoration-dashed decoration-1 underline-offset-4 hover:text-fermento-white transition-colors">Lucro Real</summary>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-[320px] md:w-[400px] p-5 bg-fermento-black border border-fermento-border rounded-lg shadow-2xl text-sm text-fermento-gray font-normal normal-case opacity-0 invisible group-open:opacity-100 group-open:visible transition-all z-50">
                    <p className="mb-2"><strong>Lucro Real</strong> é um regime tributário em que o IRPJ e a CSLL são apurados com base no lucro efetivo da empresa, ajustado conforme a legislação fiscal.</p>
                    <p className="mb-2">Para fins da Lei Rouanet, <strong>somente empresas tributadas pelo Lucro Real podem utilizar o incentivo fiscal como patrocinadoras</strong>. Em geral, estão obrigadas ao Lucro Real empresas com receita total superior a R$ 78 milhões no ano-calendário anterior, além de instituições financeiras, seguradoras e outras empresas enquadradas em situações específicas previstas na legislação tributária.</p>
                    <p className="mb-2">Empresas do Simples Nacional e, em regra, empresas do Lucro Presumido não utilizam a Lei Rouanet como patrocinadoras com dedução fiscal.</p>
                    <div className="p-3 bg-fermento-yellow/10 border border-fermento-yellow/20 rounded mt-3 text-fermento-yellow text-xs">
                      <strong>Aviso:</strong> A confirmação do regime tributário deve ser feita pela contabilidade da empresa.
                    </div>
                  </div>
                </details>
                , com dedução no Imposto de Renda devido.
              </p>
            </div>

            <div className="bg-fermento-charcoal rounded-xl border border-fermento-border p-8 space-y-6">
              <h3 className="font-serif text-2xl font-medium text-fermento-white">Limites de Destinação</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <User className="w-6 h-6 text-fermento-yellow shrink-0" />
                  <span className="text-fermento-gray text-lg">Pessoa física pode destinar <strong>até 6% do IR devido</strong>.</span>
                </li>
                <li className="flex gap-4">
                  <Building2 className="w-6 h-6 text-fermento-yellow shrink-0" />
                  <span className="text-fermento-gray text-lg">Pessoa jurídica tributada pelo Lucro Real pode destinar <strong>até 4% do IR devido</strong>.</span>
                </li>
              </ul>
              
              <div className="mt-6 p-5 border-l-4 border-fermento-yellow bg-fermento-yellow/5">
                <p className="text-fermento-white text-lg">A Fermento Cultural estrutura e aprova projetos na Lei Rouanet pelo <strong>artigo 18</strong>, mecanismo que permite <strong>dedução integral (100%) do valor incentivado</strong>, respeitados os limites legais de 6% para pessoa física e 4% para pessoa jurídica tributada pelo Lucro Real.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium mb-6">Como Funciona (Perguntas Frequentes)</h3>
              
              <details className="group bg-fermento-black border border-fermento-border rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-lg hover:bg-fermento-charcoal transition-colors">
                  Quem pode apresentar projeto?
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-fermento-yellow" />
                  </span>
                </summary>
                <div className="text-fermento-gray p-5 pt-0 border-t border-fermento-border bg-fermento-black">
                  Pessoas físicas com atuação na área cultural ou pessoas jurídicas (com ou sem fins lucrativos) de natureza cultural, respeitando as exigências e os prazos estabelecidos pelo Ministério da Cultura.
                </div>
              </details>

              <details className="group bg-fermento-black border border-fermento-border rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-lg hover:bg-fermento-charcoal transition-colors">
                  Quem pode patrocinar?
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-fermento-yellow" />
                  </span>
                </summary>
                <div className="text-fermento-gray p-5 pt-0 border-t border-fermento-border bg-fermento-black">
                  Pessoas Físicas que declaram o Imposto de Renda no modelo completo e Pessoas Jurídicas tributadas com base no Lucro Real.
                </div>
              </details>

              <details className="group bg-fermento-black border border-fermento-border rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-lg hover:bg-fermento-charcoal transition-colors">
                  Quando abre para inscrição?
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-fermento-yellow" />
                  </span>
                </summary>
                <div className="text-fermento-gray p-5 pt-0 border-t border-fermento-border bg-fermento-black">
                  Conforme a regulamentação vigente, a apresentação de propostas culturais ocorre dentro do calendário anual definido pelo Ministério da Cultura. Na regra atual, o período vai de 1º de fevereiro a 31 de outubro.
                </div>
              </details>

              <details className="group bg-fermento-black border border-fermento-border rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-lg hover:bg-fermento-charcoal transition-colors">
                  Como o dinheiro chega ao projeto?
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-fermento-yellow" />
                  </span>
                </summary>
                <div className="text-fermento-gray p-5 pt-0 border-t border-fermento-border bg-fermento-black">
                  O patrocinador deposita diretamente o valor na conta corrente do projeto aprovado.
                </div>
              </details>

              <details className="group bg-fermento-black border border-fermento-border rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-lg hover:bg-fermento-charcoal transition-colors">
                  Como o patrocinador recupera o valor?
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-fermento-yellow" />
                  </span>
                </summary>
                <div className="text-fermento-gray p-5 pt-0 border-t border-fermento-border bg-fermento-black">
                  O patrocinador não recebe um reembolso em dinheiro. Ele utiliza o recibo de mecenato/patrocínio para deduzir o valor do Imposto de Renda devido, conforme os limites legais.
                </div>
              </details>
            </div>

            {/* Box Conta Exclusiva */}
            <div className="p-6 md:p-8 bg-fermento-charcoal border-2 border-fermento-yellow rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center">
              <Wallet className="w-12 h-12 text-fermento-yellow shrink-0" />
              <div>
                <h4 className="font-bold text-xl text-fermento-white mb-2">Conta Corrente Exclusiva</h4>
                <p className="text-fermento-gray text-lg">
                  Na Lei Rouanet, o recurso captado deve ser depositado em conta corrente vinculada exclusivamente ao projeto aprovado. Essa conta corrente é exclusiva para o projeto e não deve ser misturada com recursos operacionais da instituição.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* BLOCO 2 – ICMS RJ */}
        <section id="icms-rj" className="px-4 py-24 md:px-6 bg-fermento-black border-t border-fermento-border scroll-mt-32">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-graphite border border-fermento-border text-sm font-medium">
                <Landmark className="w-4 h-4 text-fermento-white" />
                Esfera Estadual
              </div>
              <h2 className="font-serif text-5xl font-bold tracking-tight">Lei Estadual de Incentivo à Cultura do RJ — ICMS</h2>
              <p className="text-xl text-fermento-gray leading-relaxed">
                A Lei Estadual de Incentivo à Cultura do Rio de Janeiro permite que empresas contribuintes de ICMS no Estado patrocinem projetos culturais aprovados pela SECEC-RJ, utilizando incentivo fiscal concedido pelo Estado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-fermento-graphite p-6 rounded-xl border border-fermento-border">
                <h4 className="font-bold text-lg mb-3 text-fermento-white">Inscrição e Prazos</h4>
                <ul className="space-y-3 text-fermento-gray">
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> O projeto é inscrito e acompanhado pelo <strong>Sistema Desenvolve Cultura</strong>.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> Inscrição do proponente: de 1º de março a 30 de novembro.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> O patrocinador pode se cadastrar a qualquer tempo.</li>
                </ul>
              </div>

              <div className="bg-fermento-graphite p-6 rounded-xl border border-fermento-border">
                <h4 className="font-bold text-lg mb-3 text-fermento-white">Regras Importantes</h4>
                <ul className="space-y-3 text-fermento-gray">
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> MEI não pode apresentar projeto acima de R$ 200.000,00.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> Projetos com valor igual ou superior a R$ 1.500.000,00 devem observar requisitos adicionais da Resolução SECEC nº 89/2020.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-fermento-yellow shrink-0" /> Empresas contribuintes de ICMS no Estado (matriz ou filial) podem patrocinar.</li>
                </ul>
              </div>
            </div>

            {/* Destaque do FEC */}
            <div className="p-6 bg-fermento-charcoal rounded-xl border-l-4 border-fermento-white">
              <h4 className="font-bold text-xl mb-3">Fundo Estadual de Cultura (FEC)</h4>
              <p className="text-fermento-gray text-lg mb-4">
                Além do valor destinado ao projeto, a empresa deve aportar <strong>1/5 do valor incentivado</strong> ao Fundo Estadual de Cultura — FEC.
              </p>
              <div className="p-4 bg-fermento-black border border-fermento-border rounded text-fermento-white">
                O aporte é composto pelo valor destinado ao projeto mais 1/5 para o Fundo Estadual de Cultura. A empresa terá benefício fiscal/restituição de <strong>100% referente ao montante destinado: valor do projeto + FEC.</strong>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium mb-6">Fluxo e Conta Corrente</h3>
              
              <div className="p-6 md:p-8 bg-fermento-graphite border border-fermento-border rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center">
                <Receipt className="w-12 h-12 text-fermento-yellow shrink-0" />
                <div className="space-y-4">
                  <p className="text-fermento-white font-medium text-lg">
                    Na Lei Estadual de Incentivo à Cultura do RJ, a cota de patrocínio deve ser depositada em conta corrente vinculada exclusivamente ao projeto cultural.
                  </p>
                  <p className="text-fermento-gray">
                    O <strong>Recibo de Patrocínio — REP</strong> formaliza e comprova o recebimento de recursos de incentivo fiscal na conta corrente exclusiva do projeto cultural patrocinado.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-fermento-black border border-fermento-border rounded-xl mt-4">
                <h4 className="font-bold text-lg mb-2">Como retorna para a empresa?</h4>
                <p className="text-fermento-gray mb-3">
                  O retorno para a empresa ocorre por abatimento fiscal no ICMS, não por reembolso em dinheiro.
                </p>
                <p className="text-fermento-gray font-medium">
                  Os descontos começam após o segundo mês da realização dos repasses dos recursos na conta corrente do projeto e na conta do FEC, conforme a regulamentação aplicável.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* BLOCO 3 – ISS RIO */}
        <section id="iss-rio" className="px-4 py-24 md:px-6 bg-fermento-graphite border-t border-fermento-border scroll-mt-32">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fermento-charcoal border border-fermento-border text-sm font-medium">
                <Landmark className="w-4 h-4 text-fermento-yellow" />
                Esfera Municipal
              </div>
              <h2 className="font-serif text-5xl font-bold tracking-tight">Lei do ISS Rio — Incentivo Municipal via ISS</h2>
              <p className="text-xl text-fermento-gray leading-relaxed">
                A Lei Municipal de Incentivo à Cultura do Rio de Janeiro, conhecida como Lei do ISS, permite financiar projetos culturais com recursos de renúncia fiscal do ISS municipal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-fermento-border bg-fermento-black rounded-xl space-y-4">
                <h4 className="text-2xl font-serif font-medium text-fermento-white border-b border-fermento-border pb-4">Os Dois Editais</h4>
                <p className="text-fermento-gray">O mecanismo opera essencialmente por meio de dois editais separados no calendário do ano:</p>
                <ul className="space-y-4 text-fermento-gray pt-2">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-fermento-yellow shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fermento-white block">Edital do Produtor Cultural</strong>
                      <span>Costuma abrir em <strong>maio</strong> para apresentação de projetos.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-fermento-yellow shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fermento-white block">Edital do Contribuinte Incentivador</strong>
                      <span>Costuma abrir em <strong>agosto</strong>. A empresa se habilita com base no ISS recolhido no ano anterior, podendo direcionar até 20% do ISS que pagará no ano seguinte.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Destaque ISS (Não há depósito direto) */}
              <div className="p-8 border-2 border-fermento-yellow bg-fermento-yellow/5 rounded-xl flex flex-col justify-center">
                <h4 className="text-2xl font-serif font-bold mb-4 text-fermento-yellow">Atenção ao Fluxo Financeiro</h4>
                <p className="text-fermento-white text-lg leading-relaxed font-medium">
                  Diferente da Rouanet e do ICMS, no ISS Rio não há aporte direto do patrocinador na conta corrente do projeto.
                </p>
                <p className="text-fermento-gray mt-4">
                  A empresa direciona parte do ISS devido pelo sistema da Prefeitura. O recurso passa pelo fluxo municipal antes de chegar ao projeto. No ISS, a empresa não deposita diretamente na conta corrente do projeto.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* TABELA COMPARATIVA GERAL */}
        <section id="comparativo" className="px-4 py-24 md:px-6 bg-fermento-graphite border-t border-fermento-border scroll-mt-32">
          <div className="container mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Comparativo dos Mecanismos</h2>
              <p className="text-fermento-gray text-lg">Resumo das principais características das leis de incentivo.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-fermento-border shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-fermento-black text-fermento-white">
                    <th className="p-5 border-b border-r border-fermento-border font-serif text-xl w-1/4">Critério</th>
                    <th className="p-5 border-b border-r border-fermento-border font-serif text-xl text-fermento-yellow w-1/4">Lei Rouanet</th>
                    <th className="p-5 border-b border-r border-fermento-border font-serif text-xl w-1/4">ICMS RJ</th>
                    <th className="p-5 border-b border-fermento-border font-serif text-xl w-1/4">ISS Rio</th>
                  </tr>
                </thead>
                <tbody className="text-fermento-gray bg-fermento-charcoal">
                  {[
                    { label: "Esfera", r: "Federal", icms: "Estadual", iss: "Municipal" },
                    { label: "Imposto", r: "Imposto de Renda", icms: "ICMS", iss: "ISS" },
                    { label: "Quem pode apresentar projeto", r: "Pessoa física ou jurídica cultural, conforme regras do MinC", icms: "Proponente cultural do Estado do Rio de Janeiro", iss: "Pessoa jurídica cultural do Município do Rio, conforme edital" },
                    { label: "Quem pode patrocinar", r: "Pessoa física e empresa do Lucro Real", icms: "Empresa contribuinte de ICMS no RJ", iss: "Empresa contribuinte de ISS habilitada" },
                    { label: "Quando abre para inscrição", r: "Regra atual: 1º de fevereiro a 31 de outubro", icms: "Proponente: 1º de março a 30 de novembro; patrocinador: cadastro a qualquer tempo", iss: "Produtor Cultural: geralmente maio; Contribuinte Incentivador: geralmente agosto" },
                    { label: "Teto ou limite", r: "Limites conforme regulamentação vigente", icms: "Conforme Resolução SECEC e regras vigentes", iss: "Conforme edital vigente" },
                    { label: "Aporte direto ao projeto?", r: "Sim, há depósito direto", icms: "Sim, há depósito direto", iss: "Não há depósito direto do patrocinador" },
                    { label: "Conta corrente exclusiva/vinculada?", r: "Sim", icms: "Sim, conta corrente vinculada exclusivamente ao projeto", iss: "Repasse segue fluxo municipal" },
                    { label: "Existe fundo obrigatório?", r: "Não", icms: "Sim, 1/5 para o FEC", iss: "Não" },
                    { label: "Como o patrocinador recupera o valor?", r: "Dedução no IR", icms: "Abatimento no ICMS", iss: "Não há reembolso; a empresa direciona parte do ISS devido" },
                    { label: "Observação principal", r: "Fermento trabalha com artigo 18", icms: "Benefício sobre projeto + FEC", iss: "Baseia-se no ISS recolhido no ano anterior para destinação no ano seguinte" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-fermento-graphite transition-colors">
                      <td className="p-4 border-b border-r border-fermento-border font-medium text-fermento-white bg-fermento-black/50">{row.label}</td>
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

        {/* SEÇÃO COMO A FERMENTO PODE AJUDAR */}
        <section className="px-4 py-24 md:px-6 bg-fermento-black border-y border-fermento-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fermento-yellow/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance text-fermento-white">
                  A Fermento Cultural estrutura e aprova projetos.
                </h2>
                <p className="text-xl text-fermento-gray leading-relaxed">
                  Trabalhar com leis de incentivo exige inteligência estratégica para formatar o projeto e apresentá-lo ao patrocinador de acordo com as regras de compliance e prestação de contas.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-medium text-2xl text-fermento-yellow">Como a Fermento atua:</h3>
                  <ul className="space-y-4">
                    {[
                      "Elaboração de projetos e adequação técnica aos editais.",
                      "Planejamento estratégico de captação de recursos.",
                      "Apresentação e defesa do projeto para patrocinadores.",
                      "Acompanhamento da execução e governança.",
                      "Organização documental e prestação de contas governamental."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FileCheck className="w-6 h-6 text-fermento-white shrink-0" />
                        <span className="text-fermento-gray text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-fermento-border">
                  <p className="text-fermento-white mb-4">Pelo WhatsApp +55 21 96884-8686, você fala com a equipe da Fermento Cultural.</p>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                    <a href="https://wa.me/5521968848686" target="_blank" rel="noopener noreferrer">Fale com a Fermento pelo WhatsApp</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FONTES E AVISO (RODAPÉ DA PÁGINA) */}
        <section className="px-4 py-16 bg-fermento-charcoal text-fermento-gray text-sm border-b border-fermento-border">
          <div className="container mx-auto max-w-4xl space-y-12">
            
            <div className="text-center p-6 border border-fermento-border rounded-lg bg-fermento-black">
              <h4 className="text-fermento-white font-bold mb-2">Aviso Importante</h4>
              <p>
                Esta página tem caráter informativo e não substitui a leitura da legislação, dos editais, das instruções normativas, resoluções e demais atos oficiais vigentes. As regras podem ser alteradas pelos órgãos responsáveis, e o enquadramento tributário de empresas deve ser confirmado com sua contabilidade.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-fermento-white mb-3">Lei Rouanet</h5>
                <ul className="space-y-2">
                  <li><a href="https://www.gov.br/cultura/pt-br/assuntos/lei-rouanet" target="_blank" rel="noopener noreferrer" className="hover:text-fermento-yellow transition-colors underline decoration-fermento-border underline-offset-4">Ministério da Cultura / Lei Rouanet</a></li>
                  <li><span className="text-fermento-gray/50 cursor-not-allowed">Instrução Normativa vigente da Lei Rouanet</span></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-fermento-white mb-3">ICMS RJ</h5>
                <ul className="space-y-2">
                  <li><a href="https://cultura.rj.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-fermento-yellow transition-colors underline decoration-fermento-border underline-offset-4">SECEC-RJ / Lei de Incentivo à Cultura</a></li>
                  <li><span className="text-fermento-gray/50 cursor-not-allowed">Resolução SECEC nº 89/2020</span></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-fermento-white mb-3">ISS Rio</h5>
                <ul className="space-y-2">
                  <li><a href="https://portaldoiss.prefeitura.rio/a-lei-do-iss/" target="_blank" rel="noopener noreferrer" className="hover:text-fermento-yellow transition-colors underline decoration-fermento-border underline-offset-4">Portal do ISS Rio</a></li>
                  <li><span className="text-fermento-gray/50 cursor-not-allowed">Edital vigente do Produtor Cultural da Lei do ISS</span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
