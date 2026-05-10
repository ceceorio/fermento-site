export type RadarCategory =
  | "Editais"
  | "Chamadas abertas"
  | "Oportunidades"
  | "Notícias"
  | "Análises"
  | "Agenda do setor";

export type RadarStatus = "Aberto" | "Em andamento" | "Encerrado" | "Informativo";

export interface RadarItem {
  id: string;
  title: string;
  category: RadarCategory;
  status: RadarStatus;
  summary: string;
  publishDate: string;
  deadline?: string;
  externalLink?: string; // Optional agora
  slug?: string; // Para artigos internos
  content?: string[]; // Parágrafos do artigo interno
}

export const radarItems: RadarItem[] = [
  {
    id: "artigo-esg-ods",
    slug: "cultura-e-sustentabilidade-esg-ods",
    title: "Cultura e Sustentabilidade: Como Integrar ESG e ODS na Produção Cultural",
    category: "Análises",
    status: "Informativo",
    summary: "Para produtores e gestores culturais, integrar essas práticas não é mais um diferencial, mas um pré-requisito para captação via leis de incentivo e relevância dos projetos.",
    publishDate: "10 de Maio de 2026",
    content: [
      "Por muito tempo, o sucesso de um projeto cultural foi medido exclusivamente por métricas de bilheteria ou pelo tamanho do público alcançado. Hoje, o cenário mudou. Patrocinadores, poder público e a própria sociedade exigem que a arte não apenas entretenha, mas transforme. É aqui que duas siglas fundamentais entram no palco: ESG (Ambiental, Social e Governança) e ODS (Objetivos de Desenvolvimento Sustentável).",
      "Para produtores e gestores culturais, integrar essas práticas não é mais um diferencial, mas um pré-requisito para aprovação em editais, captação via leis de incentivo e, acima de tudo, para garantir a relevância e a perenidade dos projetos.",
      "Mas como tirar essas siglas do papel e aplicá-las na realidade de palcos, blocos, escolas de artes e projetos literários?",
      "### A Bússola: Entendendo a Relação entre ESG e ODS",
      "Enquanto o ESG é um conjunto de práticas internas de uma organização ou projeto (como você gerencia os impactos da sua produção), os ODS da ONU são as metas globais (o impacto que você quer deixar no mundo até 2030). Um projeto cultural robusto utiliza as práticas de ESG para alcançar as metas dos ODS.",
      "### O Pilar Ambiental (Environment) na Cultura",
      "Mesmo que a cultura seja muitas vezes intangível, a produção física gera impactos. O 'E' do ESG nos convida a repensar a logística.",
      "Gestão de Resíduos: Como lidamos com o lixo gerado em grandes eventos, feiras ou desfiles de rua? A implementação de coleta seletiva e a parceria com cooperativas de reciclagem locais são passos fundamentais.",
      "Cenografia e Materiais: Priorizar a reutilização de cenários, figurinos upcycling e a eliminação de plásticos de uso único nas produções e nos bastidores.",
      "Conexão ODS: Essas práticas dialogam diretamente com o ODS 12 (Consumo e Produção Responsáveis) e o ODS 13 (Ação Contra a Mudança Global do Clima).",
      "### O Pilar Social (Social): O Coração da Produção",
      "O impacto social é, naturalmente, o território onde a cultura mais brilha. No entanto, é preciso sistematizar esse impacto para além da intuição.",
      "Democratização do Acesso: Não basta produzir; é preciso garantir que a obra chegue a todos. Isso inclui ingressos a preços populares ou gratuitos, e descentralização da cultura (levando projetos de excelência para periferias e interiores).",
      "Acessibilidade Universal: Audiodescrição, libras, espaços físicos adaptados e sessões com sensibilidade sensorial. Acessibilidade deve ser pensada na concepção do projeto, não como um adendo final.",
      "Formação e Inclusão: Projetos que integram escolas de artes para jovens em vulnerabilidade, ou que contratam e capacitam mão de obra local, geram um legado duradouro na comunidade.",
      "Conexão ODS: O pilar social alimenta o ODS 4 (Educação de Qualidade), o ODS 8 (Trabalho Decente e Crescimento Econômico) e o ODS 10 (Redução das Desigualdades).",
      "### O Pilar de Governança (Governance): A Base da Credibilidade",
      "A governança é o que sustenta a confiança dos investidores e da sociedade no seu projeto. É a espinha dorsal de uma produtora que busca longevidade.",
      "Transparência e Prestação de Contas: Uma gestão rigorosa dos recursos captados (especialmente dinheiro público ou de renúncia fiscal) é inegociável. Utilizar sistemas de gestão integrados para organizar fluxos financeiros e comprovações de despesas garante segurança jurídica.",
      "Diversidade na Ficha Técnica: A governança moderna exige que a diversidade não esteja apenas no palco, mas nas equipes de liderança, curadoria e produção.",
      "Ética e Contratos: Relações justas de trabalho, pagamentos em dia e clareza contratual com todos os fornecedores, do técnico de som ao artista principal.",
      "Conexão ODS: Governança sólida apoia o ODS 16 (Paz, Justiça e Instituições Eficazes) e o ODS 17 (Parcerias e Meios de Implementação).",
      "### Do Discurso à Prática: O Novo Normal da Gestão Cultural",
      "Incluir a pauta ESG e os ODS no seu próximo escopo de trabalho não precisa ser um processo engessado. Comece documentando o que sua produtora já faz de bom: aquele projeto de formação musical, a política de contratação inclusiva, ou o rigoroso controle financeiro que vocês já mantêm.",
      "A cultura molda o comportamento da sociedade. Quando os projetos culturais adotam práticas de gestão sustentáveis e inclusivas, eles não estão apenas cumprindo regras de editais; estão, na prática, desenhando o futuro que queremos ver."
    ]
  },
  {
    id: "edital-produtor-cultural-rio",
    title: "Edital do Produtor Cultural – Lei do ISS 2026",
    category: "Editais",
    status: "Aberto",
    summary: "Inscrição de produtores culturais para captação via Lei Municipal de Incentivo à Cultura do Rio de Janeiro.",
    publishDate: "10 de Maio de 2026",
    deadline: "31/05/2026",
    externalLink: "https://cultura.prefeitura.rio/",
  },
  {
    id: "secec-rj-acoes-continuadas",
    title: "Apoio a Ações Culturais Continuadas – SECEC RJ",
    category: "Editais",
    status: "Aberto",
    summary: "Apoio a ações culturais contínuas no Estado do RJ; prevê categorias para circos de lona, grupos/companhias e festivais/eventos.",
    publishDate: "10 de Maio de 2026",
    externalLink: "https://cultura.rj.gov.br/acoes-continuadas/",
  },
  {
    id: "funarj-teatro-glaucio-gill",
    title: "FUNARJ – Teatro Gláucio Gill / Chamamento Público 001/2026",
    category: "Chamadas abertas",
    status: "Aberto",
    summary: "Credenciamento de artistas, grupos e profissionais da cultura para programação do Teatro Gláucio Gill.",
    publishDate: "10 de Maio de 2026",
    externalLink: "http://www.funarj.rj.gov.br",
  },
  {
    id: "fiocruz-imersidades",
    title: "Fiocruz – Curso Livre Imersidades: Nas trilhas do Morro",
    category: "Oportunidades",
    status: "Aberto",
    summary: "Curso livre sobre território, cultura e clima no Salgueiro/Manguinhos.",
    publishDate: "10 de Maio de 2026",
    deadline: "31/05/2026",
    externalLink: "https://portal.fiocruz.br",
  },
  {
    id: "sesc-rj-pulsar",
    title: "Sesc RJ Pulsar / Convocatórias culturais",
    category: "Chamadas abertas",
    status: "Em andamento",
    summary: "Chamadas para compor a programação cultural do Sesc RJ. Verifique a chamada vigente.",
    publishDate: "10 de Maio de 2026",
    externalLink: "https://www.sescrio.org.br",
  },
  {
    id: "instituto-cultural-vale",
    title: "Instituto Cultural Vale 2026",
    category: "Editais",
    status: "Aberto",
    summary: "Seleção de projetos culturais incentivados, com foco em projetos via Lei Rouanet.",
    publishDate: "10 de Maio de 2026",
    deadline: "15/05/2026",
    externalLink: "https://institutoculturalvale.org",
  },
  {
    id: "premio-palmares-arte",
    title: "Fundação Cultural Palmares – V Prêmio Palmares de Arte",
    category: "Editais",
    status: "Aberto",
    summary: "Premiação de iniciativas culturais apresentadas por texto e vídeo para a população negra.",
    publishDate: "10 de Maio de 2026",
    deadline: "15/05/2026",
    externalLink: "https://www.gov.br/palmares",
  },
  {
    id: "minc-rouanet-interior",
    title: "MinC – Rouanet no Interior",
    category: "Editais",
    status: "Aberto",
    summary: "Seleção de projetos territoriais descentralizados com valores de até R$ 200 mil em várias regiões do Brasil.",
    publishDate: "10 de Maio de 2026",
    externalLink: "https://www.gov.br/cultura/pt-br",
  },
  {
    id: "secult-alagoas-cultura-popular",
    title: "Secult AL – Edital de Premiação / Cultura Popular",
    category: "Editais",
    status: "Aberto",
    summary: "Edital estadual de premiação cultural para agentes e grupos alagoanos.",
    publishDate: "10 de Maio de 2026",
    deadline: "13/05/2026",
    externalLink: "http://cultura.al.gov.br",
  }
];
