export interface CaptacaoProject {
  id: string;
  codigo: string;
  title: string;
  subtitle?: string;
  summary: string;
  acoes: string[];
  mecanismo: string;
  valorTotal: string;
  valorMinimo: string;
  parceria?: string;
  proponente?: string;
  projetoSlug?: string;
  status: string;
}

export const captacaoIntro = {
  title: "Projetos em Captação",
  subtitle: "Patrocine cultura com incentivo fiscal e impacto real.",
  text: "A Fermento Cultural apresenta um portfólio de projetos aprovados e prontos para captação: projetos próprios na Lei Rouanet e, em parceria com a Can Art Change The World? Foundation — fundação do artista JR, criador do Inside Out Project —, projetos na Lei do ISS do Rio de Janeiro. Ao patrocinar via leis de incentivo, sua empresa destina parte dos impostos devidos para iniciativas de arte, educação e transformação social, com contrapartidas de visibilidade e relatórios de impacto.",
  contrapartidas: "Todos os projetos oferecem reconhecimento institucional da marca patrocinadora em materiais de comunicação no Brasil, além de depoimentos e conteúdos de impacto produzidos com autorização dos participantes. Em projetos socioeducativos, as ações de visibilidade seguem protocolos de proteção de imagem dos participantes.",
  whatsapp: "5521968848686"
};

export const captacaoProjects: CaptacaoProject[] = [
  {
    id: "tambores-pequena-africa",
    codigo: "PRONAC 269067",
    title: "Tambores da Pequena África: Escola de Música nas Escolas Públicas",
    summary: "Escola de música no contraturno de seis escolas públicas da Pequena África, com formação centrada nos instrumentos, ritmos e repertórios de matriz africana e afro-brasileira, e com as mães, avós e mulheres do território como guardiãs desse repertório.",
    acoes: [
      "Curso de formação musical de 9 meses para 300 estudantes de 9 a 17 anos, em 12 turmas",
      "Roda das Tias: 12 rodas de conversa com 360 mães, avós e mulheres do território",
      "14 apresentações gratuitas, entre elas 6 saraus e a Grande Roda de Música Decolonial da Pequena África",
      "EP autoral com no mínimo 6 faixas compostas pelos estudantes, distribuído gratuitamente",
      "Documentário de 15 minutos com Libras, legendas descritivas e audiodescrição",
      "Instrumentos e laboratório de produção musical ficam nas escolas como legado"
    ],
    mecanismo: "Lei Rouanet — Artigo 18 (dedução de 100% do valor patrocinado no Imposto de Renda, dentro do limite legal)",
    valorTotal: "R$ 1.496.731,50",
    valorMinimo: "R$ 149.673,15 (10%)",
    proponente: "Fermento Cultural",
    projetoSlug: "tambores-da-pequena-africa",
    status: "Aprovado para captação"
  },
  {
    id: "essas-mulheres",
    codigo: "PRONAC 2612405",
    title: "Essas Mulheres - Teatro Musical",
    summary: "Espetáculo de teatro musical inédito sobre a trajetória e a obra da letrista Ana Terra — autora de canções como Essa Mulher, Amor, Meu Grande Amor e Meu Menino —, com cantoras-atrizes e banda ao vivo formada só por mulheres.",
    acoes: [
      "Montagem inédita, com dramaturgia em sete movimentos criada a partir de entrevistas com a autora",
      "5 cantoras-atrizes e banda ao vivo de 5 musicistas, todas mulheres, e uma intérprete convidada a cada noite",
      "Temporada de 8 semanas no Rio de Janeiro: 32 apresentações e cerca de 12.800 lugares",
      "Libras em cena, audiodescrição e programa acessível em 100% das sessões",
      "10% dos ingressos gratuitos para escolas públicas e projetos sociais e 20% a preços populares",
      "10 encontros formativos gratuitos para 500 estudantes e professores da rede pública"
    ],
    mecanismo: "Lei Rouanet — Artigo 18 (dedução de 100% do valor patrocinado no Imposto de Renda, dentro do limite legal)",
    valorTotal: "R$ 3.107.060,50",
    valorMinimo: "R$ 310.706,05 (10%)",
    proponente: "Fermento Cultural",
    projetoSlug: "essas-mulheres-teatro-musical",
    status: "Aprovado para captação"
  },
  {
    id: "arte-cultura-escolas",
    codigo: "WEC828/03/2026",
    title: "Arte e Cultura nas Escolas: Inside Out Brasil",
    summary: "O Inside Out Project chega às escolas da rede pública do Município do Rio de Janeiro, transformando retratos de estudantes em exposições de arte pública e celebrando a identidade e as histórias da comunidade escolar.",
    acoes: [
      "5 exposições fotográficas com áudios de histórias dos participantes, abertas ao público em instituições de ensino da rede pública municipal",
      "1 exposição virtual",
      "5 workshops de slam sobre história afro-brasileira",
      "1 e-book com textos e relatos dos alunos",
      "Registro fotográfico e videográfico"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 234.700,00",
    valorMinimo: "R$ 70.410,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "arte-urbana",
    codigo: "WEC829/03/2026",
    title: "Arte Urbana: Inside Out Brasil",
    summary: "Retratos em grande formato ocupam espaços públicos de territórios periféricos do Rio de Janeiro, na metodologia mundialmente reconhecida do Inside Out Project: arte pública, gratuita e feita com a comunidade.",
    acoes: [
      "5 exposições fotográficas gratuitas em espaços públicos de territórios periféricos",
      "1 hotsite com exposição virtual",
      "2 workshops de slam sobre história afro-brasileira",
      "1 e-book com textos e relatos dos participantes",
      "Registro fotográfico e videográfico"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 213.750,00",
    valorMinimo: "R$ 64.125,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "vida-em-imagem",
    codigo: "WEC832/03/2026",
    title: "A Vida em Imagem",
    summary: "Uma homenagem em forma de arte pública a quem cuida da cidade: exposição fotográfica efêmera em unidades de saúde do Rio de Janeiro, com retratos de profissionais da saúde, trabalhadores de apoio e participantes.",
    acoes: [
      "1 exposição fotográfica efêmera, aberta ao público e gratuita, em unidades de saúde do município",
      "1 ação cultural",
      "1 exposição virtual",
      "5 workshops de 120 minutos",
      "Registro fotográfico e videográfico"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 217.800,00",
    valorMinimo: "R$ 65.340,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "corpos-em-liberdade",
    codigo: "WEC842/03/2026",
    title: "Corpos em Liberdade: Teatro e Capoeira no DEGASE",
    summary: "Teatro e capoeira com jovens em cumprimento de medida socioeducativa no DEGASE. O projeto integra o Programa Internacional de Arte em Contextos Prisionais da Can Art, que utiliza a arte como ferramenta de expressão, escuta, reabilitação e construção de novas perspectivas de futuro.",
    acoes: [
      "Oficinas de teatro e capoeira com jovens do sistema socioeducativo",
      "Fotografia e práticas criativas como ferramentas de expressão e projeto de vida",
      "Registro fotográfico e videográfico com protocolos de proteção dos participantes"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 225.000,00",
    valorMinimo: "R$ 67.500,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "olhares-em-liberdade",
    codigo: "WEC834/03/2026",
    title: "Olhares em Liberdade",
    summary: "Fotografia, identidade e projeto de vida com jovens e suas redes de apoio. As obras produzidas ganham exposição pública com áudios que dão voz às histórias de cada participante.",
    acoes: [
      "1 exposição fotográfica com áudios relacionados às obras, aberta ao público",
      "4 encontros com familiares e redes de apoio sobre arte, identidade e projeto de vida",
      "Registro fotográfico e videográfico"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 243.100,00",
    valorMinimo: "R$ 72.930,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "atelie-do-futuro",
    codigo: "WEC840/03/2026",
    title: "Ateliê do Futuro",
    summary: "Formação profissional em tranças, corte, costura e acessórios para 60 alunas, unindo estética, cultura e geração de renda — com desfile de culminância e exposição física e virtual.",
    acoes: [
      "Curso de formação em tranças, corte, costura e acessórios, com técnicas práticas, criação de estilos e preparação para atuação profissional",
      "60 portfólios profissionais das alunas",
      "1 catálogo digital",
      "3 meses de exposição (física e virtual)",
      "1 desfile de culminância",
      "Registro fotográfico e videográfico"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 284.400,00",
    valorMinimo: "R$ 85.320,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  },
  {
    id: "cozinha-ancestral",
    codigo: "WEC831/03/2026",
    title: "Cozinha Ancestral",
    summary: "Culinária, memória e empreendedorismo para 60 mulheres: formação teórico-prática que valoriza saberes ancestrais da cozinha brasileira e se encerra em uma feira gastronômica pública.",
    acoes: [
      "1 oficina teórico-prática de culinária para 60 mulheres",
      "1 oficina de empreendedorismo",
      "1 feira gastronômica pública",
      "1 e-book com receitas das alunas",
      "Registro fotográfico e vídeo institucional"
    ],
    mecanismo: "Lei do ISS — Lei Municipal de Incentivo à Cultura (Rio de Janeiro)",
    valorTotal: "R$ 212.900,00",
    valorMinimo: "R$ 63.870,00",
    parceria: "Can Art Change The World? Foundation",
    status: "Aprovado para captação"
  }
];
