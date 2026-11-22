/*
 * Catálogo da loja.
 * - Para editar preços, nomes ou adicionar produtos, altere apenas este arquivo.
 * - WHATSAPP_NUMBER: DDI + DDD + número, só dígitos (ex.: 5511987654321).
 * - Textos de "evidência" e "cuidados" resumem as fichas oficiais citadas em "fonte".
 *   Alegações de rótulo no Brasil devem seguir a IN 28/2018 da ANVISA.
 */
const WHATSAPP_NUMBER = "5500000000000"; // TROQUE pelo número real da loja

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "imunidade", label: "Imunidade" },
  { id: "ossos", label: "Ossos e músculos" },
  { id: "estresse", label: "Sono e estresse" },
  { id: "digestao", label: "Digestão" },
  { id: "coracao", label: "Coração e cérebro" },
];

const PRODUCTS = [
  {
    id: "vitamina-c",
    name: "Vitamina C 500 mg",
    form: "60 cápsulas",
    price: 39.9,
    categories: ["imunidade"],
    color: "#F4B942",
    tagline: "Antioxidante que auxilia o sistema imune.",
    evidence:
      "A vitamina C é antioxidante, participa da formação de colágeno, melhora a absorção do ferro de origem vegetal e é necessária para o funcionamento normal do sistema imunológico. A ingestão recomendada para adultos é de 75 mg (mulheres) a 90 mg (homens) por dia; fumantes precisam de 35 mg a mais.",
    caution:
      "O limite máximo para adultos é 2.000 mg/dia. Doses altas podem causar diarreia, náusea e cólicas. Pessoas com hemocromatose ou em tratamento de câncer devem falar com o médico antes de usar.",
    source: { label: "NIH ODS — Vitamin C (Consumer)", url: "https://ods.od.nih.gov/factsheets/VitaminC-Consumer/" },
  },
  {
    id: "vitamina-d",
    name: "Vitamina D3 2.000 UI",
    form: "60 cápsulas softgel",
    price: 44.9,
    categories: ["ossos", "imunidade"],
    color: "#E9A23B",
    tagline: "Auxilia na absorção de cálcio e fósforo.",
    evidence:
      "A vitamina D ajuda o corpo a absorver cálcio, um dos principais componentes dos ossos, e participa do funcionamento de músculos, nervos e do sistema imune. Níveis sanguíneos a partir de 50 nmol/L (20 ng/mL) são considerados adequados para a maioria das pessoas.",
    caution:
      "Para adultos, o limite seguro é de até 4.000 UI (100 mcg) por dia somando todas as fontes. Excesso pode elevar o cálcio no sangue. O ideal é dosar a vitamina D com orientação profissional antes de suplementar.",
    source: { label: "NIH ODS — Vitamin D (Consumer)", url: "https://ods.od.nih.gov/factsheets/VitaminD-Consumer/" },
  },
  {
    id: "magnesio",
    name: "Magnésio Dimalato 300 mg",
    form: "90 cápsulas",
    price: 54.9,
    categories: ["ossos", "estresse"],
    color: "#7FB7A4",
    tagline: "Auxilia no funcionamento muscular e nervoso.",
    evidence:
      "O magnésio participa de centenas de reações no corpo: funcionamento de músculos e nervos, controle da glicose e da pressão, e formação de proteínas, ossos e DNA. O Valor Diário de referência é 420 mg para adultos.",
    caution:
      "O limite para magnésio vindo de suplementos é 350 mg/dia para adultos (o magnésio dos alimentos não tem limite). Em excesso pode causar diarreia e cólicas. Pessoas com doença renal devem ter orientação médica.",
    source: { label: "NIH ODS — Magnesium (Health Professional)", url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/" },
  },
  {
    id: "omega-3",
    name: "Ômega-3 EPA/DHA 1.000 mg",
    form: "60 cápsulas softgel",
    price: 69.9,
    categories: ["coracao"],
    color: "#5B8DB8",
    tagline: "EPA e DHA de óleo de peixe purificado.",
    evidence:
      "Ômega-3 (ALA, EPA e DHA) são gorduras importantes para as membranas das células do corpo. EPA e DHA são encontrados principalmente em peixes e frutos do mar. Recomenda-se 1,1 g (mulheres) a 1,6 g (homens) de ALA por dia; não há quantidade oficial definida para EPA e DHA.",
    caution:
      "Pode interagir com anticoagulantes e remédios para pressão. Efeitos comuns: gosto de peixe, azia, náusea e desconforto intestinal. Consulte as recomendações atuais do FDA sobre o limite diário de EPA+DHA.",
    source: { label: "NIH ODS — Omega-3 Fatty Acids (Consumer)", url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/" },
  },
  {
    id: "probiotico",
    name: "Probiótico 10 bilhões UFC",
    form: "30 cápsulas",
    price: 79.9,
    categories: ["digestao", "imunidade"],
    color: "#A3C26A",
    tagline: "Microrganismos vivos para a flora intestinal.",
    evidence:
      "Algumas formulações de probióticos mostraram resultados para diarreia aguda e diarreia associada a antibióticos. Para a maioria das outras condições, faltam evidências científicas fortes. O efeito varia de uma cepa para outra.",
    caution:
      "Em pessoas saudáveis, o histórico de segurança é bom. Pessoas com doenças graves ou imunidade comprometida devem evitar sem orientação médica — há relatos de infecções graves nesses casos, incluindo em bebês prematuros.",
    source: { label: "NCCIH — 5 Things To Know About Probiotics", url: "https://www.nccih.nih.gov/health/tips/things-to-know-about-probiotics" },
  },
  {
    id: "curcuma",
    name: "Cúrcuma com Pimenta-preta",
    form: "60 cápsulas",
    price: 49.9,
    categories: ["digestao"],
    color: "#E07A1F",
    tagline: "Extrato padronizado de curcumina.",
    evidence:
      "A cúrcuma (açafrão-da-terra) é muito estudada, mas, segundo o NCCIH, ainda não há evidência forte o suficiente para afirmar que a cúrcuma ou a curcumina trazem benefício para alguma condição de saúde específica.",
    caution:
      "Provavelmente segura por 2 a 3 meses em doses usuais. Pode causar náusea e desconforto estomacal. Pode não ser segura na gestação. Há relatos raros de lesão no fígado com suplementos de cúrcuma.",
    source: { label: "NCCIH — Turmeric: Usefulness and Safety", url: "https://www.nccih.nih.gov/health/turmeric" },
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha 500 mg",
    form: "60 cápsulas",
    price: 64.9,
    categories: ["estresse"],
    color: "#B07A56",
    tagline: "Raiz adaptógena da tradição ayurvédica.",
    evidence:
      "Pesquisas indicam que algumas preparações de ashwagandha podem ajudar com estresse e insônia. Os resultados dependem do tipo de extrato estudado.",
    caution:
      "Pode ser segura no curto prazo (até 3 meses); a segurança a longo prazo não é conhecida. Há casos raros de lesão hepática. Não usar na gestação nem na amamentação.",
    source: { label: "NCCIH — Ashwagandha: Usefulness and Safety", url: "https://www.nccih.nih.gov/health/ashwagandha" },
  },
  {
    id: "gengibre",
    name: "Gengibre 400 mg",
    form: "60 cápsulas",
    price: 34.9,
    categories: ["digestao"],
    color: "#D9B44A",
    tagline: "Raiz tradicional usada para enjoos.",
    evidence:
      "O gengibre pode ajudar a aliviar náuseas e vômitos da gravidez (sempre com acompanhamento médico). Não há evidência forte de que ajude no enjoo de movimento (carro, barco).",
    caution:
      "Efeitos colaterais costumam ser leves: azia, desconforto estomacal, diarreia e gases. Pessoas com cálculos na vesícula devem evitar, e há preocupação com interação com anticoagulantes.",
    source: { label: "NCCIH — Ginger", url: "https://www.nccih.nih.gov/health/ginger" },
  },
];
