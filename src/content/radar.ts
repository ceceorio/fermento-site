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
  publishDate: string; // Ex: "10 de Maio de 2026"
  deadline?: string;   // Ex: "Inscrições até 30/05/2026"
  externalLink: string;
}

export const radarItems: RadarItem[] = [
  {
    id: "edital-cultura-viva-2026",
    title: "Edital Cultura Viva 2026",
    category: "Editais",
    status: "Aberto",
    summary: "O Ministério da Cultura lança nova edição do edital para fomento de Pontos de Cultura em todo o território nacional, com foco em diversidade e inclusão.",
    publishDate: "05 de Maio de 2026",
    deadline: "Inscrições até 15 de Julho de 2026",
    externalLink: "https://www.gov.br/cultura/pt-br",
  },
  {
    id: "analise-impacto-social",
    title: "Análise: O Futuro do Impacto Social no Brasil",
    category: "Análises",
    status: "Informativo",
    summary: "Um estudo aprofundado sobre as tendências de financiamento privado para projetos de impacto social e territorial nas periferias urbanas.",
    publishDate: "02 de Maio de 2026",
    externalLink: "https://fermentocultural.com.br", // Link genérico para teste
  },
  {
    id: "chamada-artistas-visuais",
    title: "Chamada Aberta para Artistas Visuais - Festival XYZ",
    category: "Chamadas abertas",
    status: "Em andamento",
    summary: "Seleção de obras para exposição coletiva que discutirá a intersecção entre tecnologia, ancestralidade e sustentabilidade ambiental.",
    publishDate: "20 de Abril de 2026",
    deadline: "Inscrições até 10 de Junho de 2026",
    externalLink: "https://example.com/festival-xyz",
  },
  {
    id: "forum-economia-criativa",
    title: "Fórum Nacional de Economia Criativa 2026",
    category: "Agenda do setor",
    status: "Informativo",
    summary: "O evento reunirá os principais gestores e empreendedores do país para debater políticas públicas e modelos de negócios no setor criativo.",
    publishDate: "15 de Abril de 2026",
    deadline: "Evento em 20 e 21 de Agosto de 2026",
    externalLink: "https://example.com/forum-economia",
  },
  {
    id: "oportunidade-bolsa-pesquisa",
    title: "Bolsas de Pesquisa em Gestão Cultural",
    category: "Oportunidades",
    status: "Encerrado",
    summary: "Instituto oferece bolsas para pesquisadores interessados em documentar metodologias ágeis aplicadas à gestão de equipamentos culturais.",
    publishDate: "01 de Fevereiro de 2026",
    deadline: "Inscrições até 28 de Fevereiro de 2026",
    externalLink: "https://example.com/bolsas-pesquisa",
  },
];
