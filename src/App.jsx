import React, { useEffect, useMemo, useState } from "react";
import { products as editableProducts } from "./data/products";
import {
  Search,
  Star,
  Scissors,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

// =============================
// CONFIGURAÇÃO DO WHATSAPP
// =============================
// Edite o número abaixo se quiser trocar o WhatsApp do site.
// Formato: DDI + DDD + número, somente números.
const whatsappNumero = "5511979626107";

function criarLinkWhatsApp(mensagem) {
  return `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}


// =============================
// BANNERS DO TOPO
// =============================
const banners = [
  {
    titulo: "Afiação de Alicates",
    subtitulo: "Precisão, corte limpo e acabamento profissional para manicure e estética.",
    img: "/images/banners/banner-alicates.jpg",
    badge: "Serviço em destaque",
    whatsappMensagem: "Olá! Quero solicitar um orçamento para afiação de alicates.",
  },
  {
    titulo: "Alicate Mundial 522",
    subtitulo: "Um dos modelos mais procurados para uso doméstico.",
    img: "/images/produtos/alicate-mundial-522.jpg",
    badge: "Mais vendido",
    produtoSlug: "alicate-mundial-522",
    whatsappMensagem: "Olá! Quero saber mais sobre o Alicate Mundial 522.",
  },
  {
    titulo: "Troca de Molas e Gravação",
    subtitulo: "Manutenção e identificação de instrumentos para profissionais e salões.",
    img: "/images/banners/banner-tesouras.avif",
    badge: "Serviços",
    produtoSlug: "troca-de-molas",
    whatsappMensagem: "Olá! Quero saber mais sobre troca de molas e gravação.",
  },
];


// =============================
// BANNERS MOBILE - MODELO OPÇÃO 4
// =============================
// Todos os textos abaixo são editáveis.
// Para trocar as imagens futuramente, coloque o arquivo em /public/images/banners
// ou /public/images/produtos e altere apenas os campos "bg", "produtoImg" e "miniImg".
const mobileBannersOpcao4 = [
  {
    tipo: "servicos",
    eyebrow: "EMPÓRIO DA AFIAÇÃO",
    titulo: "SERVIÇOS QUE",
    destaque: "FAZEM A DIFERENÇA",
    subtitulo: "Precisão, cuidado e qualidade em cada detalhe.",
    bg: "/images/banners/banner-alicates.jpg",
    produtoImg: "/images/produtos/alicate-mundial-522.jpg",
    miniImg: "/images/produtos/alicate-mundial-522.jpg",
    cta: "SAIBA MAIS",
    whatsappMensagem: "Olá! Quero conhecer os serviços do Empório da Afiação.",
    itens: [
      { icone: "✦", titulo: "AFIAÇÃO PROFISSIONAL", texto: "Cortes mais precisos e duradouros" },
      { icone: "◎", titulo: "TROCA DE MOLAS", texto: "Mais leveza e desempenho" },
      { icone: "G", titulo: "GRAVAÇÃO", texto: "Personalize com sua marca" },
      { icone: "□", titulo: "VENDA DE PRODUTOS", texto: "As melhores marcas para você" },
    ],
  },
  {
    tipo: "produto",
    eyebrow: "EMPÓRIO DA AFIAÇÃO",
    titulo: "PRODUTOS QUE",
    destaque: "VALORIZAM SEU TRABALHO",
    subtitulo: "Ferramentas selecionadas para rotina profissional.",
    bg: "/images/produtos/alicate-mundial-522.jpg",
    produtoImg: "/images/produtos/alicate-mundial-522.jpg",
    miniImg: "/images/produtos/alicate-mundial-777.jpg",
    cta: "VER PRODUTOS",
    produtoSlug: "alicate-mundial-522",
    whatsappMensagem: "Olá! Quero saber mais sobre os produtos do Empório da Afiação.",
    itens: [
      { icone: "★", titulo: "MUNDIAL 522", texto: "Um dos modelos mais procurados" },
      { icone: "✓", titulo: "COMPRA SEGURA", texto: "Atendimento direto pelo WhatsApp" },
      { icone: "↯", titulo: "ENTREGA RÁPIDA", texto: "Consulte disponibilidade" },
      { icone: "◇", titulo: "QUALIDADE", texto: "Produtos para uso profissional" },
    ],
  },
  {
    tipo: "afiacao",
    eyebrow: "SERVIÇO PREMIUM",
    titulo: "AFIAÇÃO",
    destaque: "PROFISSIONAL",
    subtitulo: "Corte preciso, limpo e pronto para o uso.",
    bg: "/images/banners/banner-alicates.jpg",
    produtoImg: "/images/banners/banner-alicates.jpg",
    miniImg: "/images/produtos/alicate-mundial-522.jpg",
    cta: "SOLICITAR SERVIÇO",
    whatsappMensagem: "Olá! Quero solicitar um orçamento para afiação profissional.",
    itens: [
      { icone: "✦", titulo: "CORTE PRECISO", texto: "Acabamento mais limpo" },
      { icone: "✓", titulo: "USO PROFISSIONAL", texto: "Ideal para manicures e salões" },
      { icone: "↯", titulo: "ATENDIMENTO RÁPIDO", texto: "Fale agora pelo WhatsApp" },
      { icone: "◎", titulo: "CUIDADO", texto: "Manutenção com atenção ao detalhe" },
    ],
  },
  {
    tipo: "gravacao",
    eyebrow: "PERSONALIZAÇÃO",
    titulo: "GRAVAÇÃO",
    destaque: "SUA MARCA",
    subtitulo: "Identificação elegante para instrumentos profissionais.",
    bg: "/images/banners/banner-facas.avif",
    produtoImg: "/images/banners/banner-facas.avif",
    miniImg: "/images/produtos/alicate-mundial-522.jpg",
    cta: "PERSONALIZAR",
    whatsappMensagem: "Olá! Quero saber mais sobre gravação em instrumentos.",
    itens: [
      { icone: "G", titulo: "GRAVAÇÃO", texto: "Nome, logo ou identificação" },
      { icone: "◇", titulo: "EXCLUSIVO", texto: "Visual mais profissional" },
      { icone: "✓", titulo: "ORÇAMENTO", texto: "Solicite pelo WhatsApp" },
      { icone: "□", titulo: "PARA SALÕES", texto: "Organização dos instrumentos" },
    ],
  },
];



// =============================
// HERO MOBILE ESTILO HOSTINGER
// =============================
// Textos e imagens 100% editáveis. Para trocar as imagens depois,
// suba os arquivos em /public/images/banners ou /public/images/produtos
// e altere somente o campo "bg".
const mobileVideoSlides = [
  {
    eyebrow: "EMPÓRIO DA AFIAÇÃO",
    titulo: "Serviços que fazem a diferença.",
    subtitulo:
      "Afiação, troca de molas, gravação e produtos para quem exige precisão no dia a dia.",
    cta: "Conhecer serviços",
    bg: "/images/banners/banner-alicates.jpg",
    whatsappMensagem: "Olá! Quero conhecer os serviços do Empório da Afiação.",
  },
  {
    eyebrow: "PRODUTO EM DESTAQUE",
    titulo: "Alicate Mundial 522.",
    subtitulo:
      "Um dos modelos mais procurados para cutículas, com acabamento limpo e atendimento direto.",
    cta: "Ver produto",
    bg: "/images/produtos/alicate-mundial-522.jpg",
    produtoSlug: "alicate-mundial-522",
    whatsappMensagem: "Olá! Quero saber mais sobre o Alicate Mundial 522.",
  },
  {
    eyebrow: "MANUTENÇÃO PROFISSIONAL",
    titulo: "Seu instrumento pronto para uso.",
    subtitulo:
      "Cuidado no corte, revisão de molas e orientação para manter suas ferramentas em dia.",
    cta: "Solicitar orçamento",
    bg: "/images/banners/banner-tesouras.avif",
    whatsappMensagem: "Olá! Quero solicitar um orçamento de manutenção.",
  },
  {
    eyebrow: "GRAVAÇÃO E IDENTIFICAÇÃO",
    titulo: "Personalize seus instrumentos.",
    subtitulo:
      "Gravação para salões, profissionais e quem quer organizar melhor seus materiais.",
    cta: "Falar no WhatsApp",
    bg: "/images/banners/banner-facas.avif",
    whatsappMensagem: "Olá! Quero saber mais sobre gravação em instrumentos.",
  },
];
// =============================
// IMAGENS PADRÃO POR CATEGORIA
// Troque depois pelas suas imagens reais.
// =============================
const imagensPadrao = {
  alicates:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  tesouras:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  facas:
    "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=85",
  espatulas:
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
  acessorios:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  servicos:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
};

// =============================
// IMAGENS PERSONALIZADAS DOS PRODUTOS
// =============================
// Para trocar a imagem de um produto, mantenha o nome do produto igual ao cadastro
// e altere apenas o caminho da imagem abaixo.
const imagensProdutos = {
  "Alicate Mundial 522": "/images/produtos/alicate-mundial-522.jpg",
  "Alicate Mundial 722": "/images/produtos/alicate-mundial-722.jpg",
  "Alicate Mundial 772": "/images/produtos/alicate-mundial-772.jpg",
  "Alicate Mundial 775": "/images/produtos/alicate-mundial-775.jpg",
  "Alicate Mundial 777": "/images/produtos/alicate-mundial-777.jpg",
  "Alicate Mundial 735": "/images/produtos/alicate-mundial-735.jpg",
  "Alicate Mundial 787": "/images/produtos/alicate-mundial-787.jpg",
  "Alicate Mundial 577": "/images/produtos/alicate-mundial-577.jpg",
  "Alicate Mundial Precision": "/images/produtos/alicate-mundial-777.jpg",
  "Alicate CAIXA BONITA": "/images/produtos/alicate-mundial-522.jpg",
  "Alicate Mundial 520": "/images/produtos/alicate-mundial-522.jpg",
  "Alicate Mundial INOX 786": "/images/produtos/alicate-mundial-787.jpg",
  "Alicate Mundial INOX 776": "/images/produtos/alicate-mundial-775.jpg",
  "Tesoura Mundial": "/images/banners/banner-tesouras.avif",
  "Tesoura Corneta": "/images/banners/banner-tesouras.avif",
  "Cutelo": "/images/banners/banner-facas.avif",
  "Faca Corneta": "/images/banners/banner-facas.avif",
  "Facas de carne": "/images/banners/banner-facas.avif",
  "Afiação": "/images/banners/banner-alicates.jpg",
  "Troca de molas": "/images/banners/banner-alicates.jpg",
  "Gravação": "/images/banners/banner-tesouras.avif",
};

// =============================
// GALERIA DE IMAGENS POR PRODUTO
// =============================
// Para adicionar mais imagens no futuro:
// "Nome do Produto": [
//   "/images/produtos/produto-1.jpg",
//   "/images/produtos/produto-2.jpg",
//   "/images/produtos/produto-3.jpg",
// ],
const imagensGaleriaProdutos = {
  "Alicate Mundial 522": ["/images/produtos/alicate-mundial-522.jpg"],
  "Alicate Mundial 722": ["/images/produtos/alicate-mundial-722.jpg"],
  "Alicate Mundial 772": ["/images/produtos/alicate-mundial-772.jpg"],
  "Alicate Mundial 777": ["/images/produtos/alicate-mundial-777.jpg"],
};

// =============================
// PRODUTOS COM BADGE / DESTAQUE
// =============================
// Adicione aqui os produtos que devem aparecer com etiqueta.
// Exemplo: "Nome do Produto": "Mais vendido"
const badgesProdutos = {
  "Alicate Mundial 522": "Mais vendido",
  "Alicate Mundial 777": "Mais vendido",
};

// =============================
// FUNÇÃO PARA CRIAR SLUGS
// =============================
function criarSlug(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// =============================
// FUNÇÃO PARA CRIAR PRODUTOS
// =============================
function criarProduto(nome, descricao, categoriaSlug, subcategoria = "") {
  return {
    nome,
    slug: criarSlug(nome),
    descricao,
    categoriaSlug,
    subcategoria,
    // Imagem personalizada se existir; caso contrário, usa a imagem padrão da categoria
    img: imagensProdutos[nome] || imagensPadrao[categoriaSlug],
    imagens: imagensGaleriaProdutos[nome] || [imagensProdutos[nome] || imagensPadrao[categoriaSlug]],
    badge: badgesProdutos[nome] || "",
  };
}

// =============================
// CATEGORIAS, SUBCATEGORIAS E PRODUTOS
// Para adicionar mais produtos depois, edite esta área.
// =============================
const categoriasBase = [
  {
    nome: "Alicates",
    slug: "alicates",
    chamada: "Alicates profissionais para cutícula, unha e uso técnico.",
    img: "/images/produtos/alicate-mundial-522.jpg",
    subcategorias: [
      {
        nome: "Alicates de Cutícula",
        produtos: [
          criarProduto("Alicate Mundial 522", "Alicate para uso doméstico.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 777", "Alicate inox para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 722", "Alicate inox cabo curto para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 772", "Alicate inox cabo longo para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 775", "Alicate cabo curto para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 735", "Alicate de cutícula para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 787", "Alicate de cutícula para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial 577", "Alicate de cutícula para uso profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate Mundial Precision", "Alicate de precisão para acabamento profissional.", "alicates", "Alicates de Cutícula"),
          criarProduto("Alicate CAIXA BONITA", "Alicate de cutícula. Detalhes para editar depois.", "alicates", "Alicates de Cutícula"),
        ],
      },
      {
        nome: "Alicates de Unha",
        produtos: [
          criarProduto("Alicate Mundial 520", "Alicate de unha para uso doméstico ou profissional.", "alicates", "Alicates de Unha"),
          criarProduto("Alicate Mundial INOX 786", "Alicate de unha inox para uso profissional.", "alicates", "Alicates de Unha"),
          criarProduto("Alicate Mundial INOX 776", "Alicate de unha inox para uso profissional.", "alicates", "Alicates de Unha"),
        ],
      },
    ],
  },
  {
    nome: "Tesouras",
    slug: "tesouras",
    chamada: "Tesouras para corte, acabamento, costura e uso profissional.",
    img: imagensPadrao.tesouras,
    produtos: [
      criarProduto("Tesoura Mundial", "Tesoura Mundial para uso profissional ou doméstico.", "tesouras"),
      criarProduto("Tesoura Corneta", "Tesoura Corneta para uso profissional ou doméstico.", "tesouras"),
    ],
  },
  {
    nome: "Facas",
    slug: "facas",
    chamada: "Facas para cozinha, açougue, churrasco e uso diário.",
    img: imagensPadrao.facas,
    produtos: [
      criarProduto("Cutelo", "Cutelo para cortes fortes e uso em cozinha ou açougue.", "facas"),
      criarProduto("Faca Corneta", "Faca Corneta para uso profissional ou doméstico.", "facas"),
      criarProduto("Facas de carne", "Facas para corte de carnes, churrasco e cozinha.", "facas"),
    ],
  },
  {
    nome: "Espátulas",
    slug: "espatulas",
    chamada: "Espátulas para manicure, limpeza e acabamento profissional.",
    img: imagensPadrao.espatulas,
    produtos: [
      criarProduto("Espátula palito c/ silicone", "Espátula palito com silicone para manicure.", "espatulas"),
      criarProduto("Espátula palito de ferro Mundial", "Espátula palito de ferro Mundial para uso profissional.", "espatulas"),
    ],
  },
  {
    nome: "Acessórios",
    slug: "acessorios",
    chamada: "Acessórios, molas e itens de apoio para instrumentos de estética.",
    img: imagensPadrao.acessorios,
    produtos: [
      criarProduto("Mola comum", "Mola comum para manutenção de alicates.", "acessorios"),
      criarProduto("Mola de silicone", "Mola de silicone para manutenção de alicates.", "acessorios"),
    ],
  },
  {
    nome: "Serviços",
    slug: "servicos",
    chamada: "Serviços de afiação, manutenção e personalização de instrumentos.",
    img: imagensPadrao.servicos,
    produtos: [
      criarProduto("Afiação", "Serviço de afiação profissional para alicates, facas, tesouras e instrumentos.", "servicos"),
      criarProduto("Troca de molas", "Serviço de troca de molas para alicates.", "servicos"),
      criarProduto("Gravação", "Serviço de gravação para identificação de instrumentos.", "servicos"),
    ],
  },
];



// =============================
// PRODUTOS EDITÁVEIS PELO GITHUB
// =============================
// Agora você pode editar produtos em src/data/products.js sem mexer neste App.jsx.
// Formato aceito em products.js:
// {
//   id: "alicate-mundial-522",
//   nome: "Alicate Mundial 522",
//   categoria: "Alicates",
//   subcategoria: "Alicates de Cutícula", // opcional
//   descricao: "Descrição do produto",
//   imagens: ["/images/produtos/foto-1.jpg", "/images/produtos/foto-2.jpg"],
//   badge: "Mais vendido" // opcional
// }
const produtosEditaveis = (Array.isArray(editableProducts) ? editableProducts : []).map((produto) => {
  const nome = produto.nome || produto.name || produto.titulo || "Produto sem nome";
  const categoriaNome = produto.categoria || produto.categoriaNome || "Acessórios";
  const categoriaSlug = produto.categoriaSlug || criarSlug(categoriaNome);
  const imagensValidas = Array.isArray(produto.imagens) && produto.imagens.length > 0
    ? produto.imagens
    : [produto.img || produto.imagem || imagensProdutos[nome] || imagensPadrao[categoriaSlug] || imagensPadrao.acessorios];

  return {
    nome,
    slug: produto.slug || produto.id || criarSlug(nome),
    descricao: produto.descricao || produto.description || "Detalhes do produto para editar depois.",
    categoriaSlug,
    subcategoria: produto.subcategoria || "",
    img: produto.img || produto.imagem || imagensValidas[0],
    imagens: imagensValidas,
    badge: produto.badge || badgesProdutos[nome] || "",
  };
});

function atualizarProdutoNaLista(lista = [], produtoNovo) {
  const indice = lista.findIndex((produto) => produto.slug === produtoNovo.slug || produto.nome === produtoNovo.nome);

  if (indice >= 0) {
    const atualizada = [...lista];
    atualizada[indice] = {
      ...atualizada[indice],
      ...produtoNovo,
      // Se você colocou várias imagens em products.js, elas entram na galeria da página do produto.
      imagens: produtoNovo.imagens?.length ? produtoNovo.imagens : atualizada[indice].imagens,
      img: produtoNovo.img || atualizada[indice].img,
    };
    return atualizada;
  }

  return [...lista, produtoNovo];
}

function mesclarProdutosEditaveis(categoriasOriginais, produtosNovos) {
  const categoriasAtualizadas = categoriasOriginais.map((categoria) => ({
    ...categoria,
    produtos: categoria.produtos ? [...categoria.produtos] : undefined,
    subcategorias: categoria.subcategorias
      ? categoria.subcategorias.map((subcategoria) => ({
          ...subcategoria,
          produtos: [...subcategoria.produtos],
        }))
      : undefined,
  }));

  produtosNovos.forEach((produtoNovo) => {
    const categoriaSlug = produtoNovo.categoriaSlug || "acessorios";
    let categoria = categoriasAtualizadas.find((cat) => cat.slug === categoriaSlug);

    if (!categoria) {
      categoria = {
        nome: categoriaSlug.replace(/-/g, " ").replace(/\b\w/g, (letra) => letra.toUpperCase()),
        slug: categoriaSlug,
        chamada: "Produtos adicionados pelo arquivo src/data/products.js.",
        img: produtoNovo.img,
        produtos: [],
      };
      categoriasAtualizadas.push(categoria);
    }

    if (categoria.subcategorias) {
      const nomeSubcategoria = produtoNovo.subcategoria || categoria.subcategorias[0]?.nome || "Produtos";
      let subcategoria = categoria.subcategorias.find((sub) => sub.nome === nomeSubcategoria);

      if (!subcategoria) {
        subcategoria = { nome: nomeSubcategoria, produtos: [] };
        categoria.subcategorias.push(subcategoria);
      }

      subcategoria.produtos = atualizarProdutoNaLista(subcategoria.produtos, {
        ...produtoNovo,
        subcategoria: nomeSubcategoria,
      });
    } else {
      categoria.produtos = atualizarProdutoNaLista(categoria.produtos || [], produtoNovo);
    }
  });

  return categoriasAtualizadas;
}

const categorias = mesclarProdutosEditaveis(categoriasBase, produtosEditaveis);

// =============================
// LISTA ÚNICA DE PRODUTOS
// =============================
const todosProdutos = categorias.flatMap((categoria) => {
  if (categoria.subcategorias) {
    return categoria.subcategorias.flatMap((sub) =>
      sub.produtos.map((produto) => ({
        ...produto,
        categoriaNome: categoria.nome,
        categoriaSlug: categoria.slug,
        subcategoria: sub.nome,
      }))
    );
  }

  return categoria.produtos.map((produto) => ({
    ...produto,
    categoriaNome: categoria.nome,
    categoriaSlug: categoria.slug,
  }));
});

// =============================
// IDENTIFICA A PÁGINA ATUAL PELO HASH
// =============================
function rotaAtual() {
  const hash = window.location.hash.replace("#", "");
  const [tipo, slug] = hash.split("/");
  return { tipo, slug };
}

export default function App() {
  // =============================
  // ESTADOS PRINCIPAIS
  // =============================
  const [bannerIndex, setBannerIndex] = useState(0);
  const [rota, setRota] = useState(rotaAtual());
  const [termoBusca, setTermoBusca] = useState("");

  const categoriaAberta = useMemo(
    () => categorias.find((cat) => cat.slug === rota.slug),
    [rota]
  );

  const produtoAberto = useMemo(
    () => todosProdutos.find((produto) => produto.slug === rota.slug),
    [rota]
  );

  // =============================
  // BUSCA REAL DE PRODUTOS
  // =============================
  const resultadosBusca = useMemo(() => {
    const termo = termoBusca.trim().toLowerCase();

    if (!termo) return [];

    return todosProdutos.filter((produto) =>
      `${produto.nome} ${produto.descricao} ${produto.categoriaNome} ${produto.subcategoria || ""}`
        .toLowerCase()
        .includes(termo)
    );
  }, [termoBusca]);

  // =============================
  // BANNER ROTATIVO
  // =============================
  useEffect(() => {
    const totalSlides = Math.max(banners.length, mobileBannersOpcao4.length);
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % totalSlides);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  // =============================
  // CONTROLE DE ROTAS PELO HASH
  // =============================
  useEffect(() => {
    const onHashChange = () => setRota(rotaAtual());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // =============================
  // FUNÇÕES DE NAVEGAÇÃO
  // =============================
  const abrirCategoria = (slug) => {
    window.location.hash = `categoria/${slug}`;
    setRota({ tipo: "categoria", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const abrirProduto = (slug) => {
    window.location.hash = `produto/${slug}`;
    setRota({ tipo: "produto", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const voltarInicio = () => {
    window.location.hash = "inicio";
    setRota({ tipo: "inicio", slug: undefined });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const voltarCategoria = (slug) => {
    window.location.hash = `categoria/${slug}`;
    setRota({ tipo: "categoria", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =============================
  // PÁGINA INDIVIDUAL DO PRODUTO
  // =============================
  if (rota.tipo === "produto" && produtoAberto) {
    return (
      <div className="bg-black text-white min-h-screen pb-20 md:pb-0">
        <Header voltarInicio={voltarInicio} termoBusca={termoBusca} setTermoBusca={setTermoBusca} abrirProduto={abrirProduto} resultadosBusca={resultadosBusca} />

        <main className="pt-[150px] md:pt-32">
          <section className="relative min-h-[430px] overflow-hidden border-b border-yellow-400/20">
            <img
              src={produtoAberto.img}
              alt={produtoAberto.nome}
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
              <button
                onClick={() => voltarCategoria(produtoAberto.categoriaSlug)}
                className="mb-8 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
              >
                <ArrowLeft size={18} /> Voltar para {produtoAberto.categoriaNome}
              </button>

              <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-3">
                {produtoAberto.subcategoria || produtoAberto.categoriaNome}
              </p>

              {produtoAberto.badge && (
                <span className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(250,204,21,0.6)]">
                  {produtoAberto.badge}
                </span>
              )}

              <h1 className="text-4xl md:text-6xl font-black text-yellow-400 mb-5">
                {produtoAberto.nome}
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-gray-200 leading-relaxed">
                {produtoAberto.descricao}
              </p>
            </div>
          </section>

          <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            {/* IMAGEM PRINCIPAL DO PRODUTO COM ZOOM */}
            <ProdutoImagemZoom
              imagens={produtoAberto.imagens || [produtoAberto.img]}
              nome={produtoAberto.nome}
            />

            <div className="bg-[#0b0b0b] border border-yellow-400/15 rounded-3xl p-8 shadow-[0_0_35px_rgba(250,204,21,0.08)]">
              <h2 className="text-3xl font-bold text-yellow-400 mb-5">
                Detalhes do item
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Esta página já está criada para você editar depois com descrição completa, fotos reais e mais detalhes do produto.
              </p>

              <a
                href={criarLinkWhatsApp(`Olá! Quero saber mais sobre o produto: ${produtoAberto.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-7 inline-flex w-full justify-center items-center rounded-xl bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(250,204,21,0.55)] transition"
              >
                WhatsApp
              </a>

              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-yellow-400 font-semibold">Categoria:</span> {produtoAberto.categoriaNome}
                </p>

                {produtoAberto.subcategoria && (
                  <p>
                    <span className="text-yellow-400 font-semibold">Subcategoria:</span> {produtoAberto.subcategoria}
                  </p>
                )}
              </div>
            </div>
          </section>
        </main>

        <WhatsAppFloat />
        <MobileBottomNav voltarInicio={voltarInicio} />
        <Footer />
      </div>
    );
  }

  // =============================
  // PÁGINA DA CATEGORIA
  // =============================
  if (rota.tipo === "categoria" && categoriaAberta) {
    return (
      <div className="bg-black text-white min-h-screen pb-20 md:pb-0">
        <Header voltarInicio={voltarInicio} termoBusca={termoBusca} setTermoBusca={setTermoBusca} abrirProduto={abrirProduto} resultadosBusca={resultadosBusca} />

        <main className="pt-[150px] md:pt-32">
          <section className="relative min-h-[290px] md:min-h-[360px] overflow-hidden border-b border-yellow-400/20">
            <img
              src={categoriaAberta.img}
              alt={categoriaAberta.nome}
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
              <button
                onClick={voltarInicio}
                className="mb-8 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
              >
                <ArrowLeft size={18} /> Voltar para categorias
              </button>

              <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-3">
                Categoria
              </p>

              <h1 className="text-4xl md:text-6xl font-black text-yellow-400 mb-4 md:mb-5">
                {categoriaAberta.nome}
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-gray-200 leading-relaxed">
                {categoriaAberta.chamada}
              </p>
            </div>
          </section>

          <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-400 mb-10">
              Produtos e serviços em {categoriaAberta.nome}
            </h2>

            {categoriaAberta.subcategorias ? (
              <div className="space-y-14">
                {categoriaAberta.subcategorias.map((subcategoria) => (
                  <div key={subcategoria.nome}>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-6 border-l-4 border-yellow-400 pl-4">
                      {subcategoria.nome}
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                      {subcategoria.produtos.map((produto) => (
                        <ProductCard
                          key={produto.slug}
                          produto={produto}
                          abrirProduto={abrirProduto}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {categoriaAberta.produtos.map((produto) => (
                  <ProductCard
                    key={produto.slug}
                    produto={produto}
                    abrirProduto={abrirProduto}
                  />
                ))}
              </div>
            )}
          </section>
        </main>

        <WhatsAppFloat />
        <MobileBottomNav voltarInicio={voltarInicio} />
        <Footer />
      </div>
    );
  }

  // =============================
  // PÁGINA INICIAL
  // =============================
  return (
    <div className="bg-black text-white min-h-screen pb-20 md:pb-0">
      <Header voltarInicio={voltarInicio} termoBusca={termoBusca} setTermoBusca={setTermoBusca} abrirProduto={abrirProduto} resultadosBusca={resultadosBusca} />

      {/* HERO / BANNER ROTATIVO */}
      <section id="inicio" className="pt-[150px] md:pt-32 bg-black">
        {/* HERO MOBILE ESTILO HOSTINGER - VÍDEO VISUAL ROTATIVO */}
        <div className="md:hidden bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.13),transparent_24%),linear-gradient(180deg,#050505,#111_42%,#050505)] px-4 pb-8 pt-5">
          {(() => {
            const mobileSlide = mobileVideoSlides[bannerIndex % mobileVideoSlides.length];
            const abrirAcaoMobile = () => {
              if (mobileSlide.produtoSlug) {
                abrirProduto(mobileSlide.produtoSlug);
              } else {
                window.open(
                  criarLinkWhatsApp(mobileSlide.whatsappMensagem),
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            };

            return (
              <div className="relative overflow-hidden rounded-[1.7rem] min-h-[520px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
                {mobileVideoSlides.map((slide, i) => (
                  <img
                    key={`${slide.titulo}-${i}`}
                    src={slide.bg}
                    alt={slide.titulo}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[4200ms] ease-out ${
                      i === bannerIndex % mobileVideoSlides.length
                        ? "opacity-100 scale-[1.08]"
                        : "opacity-0 scale-[1.16]"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-black/42" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.30)_34%,rgba(0,0,0,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(250,204,21,0.22),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(250,204,21,0.15),transparent_32%)]" />

                <div className="relative z-20 flex min-h-[520px] flex-col justify-end p-8 pb-7 animate-[fadeIn_.55s_ease-out]">
                  <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-yellow-300 drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]">
                    {mobileSlide.eyebrow}
                  </p>

                  <h1 className="max-w-[96%] text-[3.18rem] font-black leading-[0.98] tracking-[-0.07em] text-white drop-shadow-[0_10px_32px_rgba(0,0,0,0.95)]">
                    {mobileSlide.titulo}
                  </h1>

                  <p className="mt-5 max-w-[94%] text-[1.17rem] leading-[1.42] text-white/92 drop-shadow-[0_5px_18px_rgba(0,0,0,0.95)]">
                    {mobileSlide.subtitulo}
                  </p>

                  <button
                    type="button"
                    onClick={abrirAcaoMobile}
                    className="mt-7 w-full rounded-2xl bg-white px-6 py-4 text-center text-[1.05rem] font-black text-black shadow-[0_18px_42px_rgba(0,0,0,0.55)] active:scale-[0.98]"
                  >
                    {mobileSlide.cta}
                  </button>

                  <div className="mt-5 flex items-center gap-2 text-white/92">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/45 text-[13px]">✓</span>
                    <span className="text-[0.95rem] font-medium">Atendimento direto pelo WhatsApp</span>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur-md">
                  <span className="h-3.5 w-1 rounded-full bg-white/90"></span>
                  <span className="ml-1 h-3.5 w-1 rounded-full bg-white/90"></span>
                </div>

                <div className="absolute left-8 top-6 z-30 flex gap-2">
                  {mobileVideoSlides.map((slide, i) => (
                    <button
                      key={`${slide.eyebrow}-${i}`}
                      onClick={() => setBannerIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        i === bannerIndex % mobileVideoSlides.length
                          ? "w-8 bg-white shadow-[0_0_14px_rgba(255,255,255,0.75)]"
                          : "w-2.5 bg-white/45"
                      }`}
                      aria-label={`Ir para banner mobile ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        <div className="hidden md:block relative h-[390px] sm:h-[500px] md:h-[640px] overflow-hidden">
          {banners.map((banner, i) => (
            <img
              key={i}
              src={banner.img}
              alt={banner.titulo}
              className={`absolute w-full h-full object-cover object-center transition-all duration-[2200ms] ease-in-out ${
                i === bannerIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_38%)] md:bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_35%)]" />

          {/* TEXTO DO BANNER - MOBILE */}
          <div className="absolute inset-x-0 bottom-7 z-10 px-4 md:hidden">
            <div className="rounded-[1.35rem] border border-yellow-400/25 bg-black/78 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.75),0_0_26px_rgba(250,204,21,0.13)] backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-black">
                  {banners[bannerIndex % banners.length].badge || "Destaque"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-400/80">
                  Empório
                </span>
              </div>

              <h2 className="max-w-[92%] text-[1.72rem] font-black leading-[0.98] tracking-[-0.045em] text-yellow-400 drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]">
                {banners[bannerIndex % banners.length].titulo}
              </h2>

              <p className="mt-2 max-w-[95%] text-[13px] leading-snug text-gray-100">
                {banners[bannerIndex % banners.length].subtitulo}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {banners[bannerIndex % banners.length].produtoSlug ? (
                  <button
                    onClick={() => abrirProduto(banners[bannerIndex % banners.length].produtoSlug)}
                    className="rounded-xl bg-yellow-400 px-3 py-2.5 text-sm font-black text-black shadow-[0_0_20px_rgba(250,204,21,0.28)] active:scale-95"
                  >
                    Ver destaque
                  </button>
                ) : (
                  <button
                    onClick={() => document.getElementById("produtos-mobile")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-xl bg-yellow-400 px-3 py-2.5 text-sm font-black text-black shadow-[0_0_20px_rgba(250,204,21,0.28)] active:scale-95"
                  >
                    Ver produtos
                  </button>
                )}

                <a
                  href={criarLinkWhatsApp(banners[bannerIndex % banners.length].whatsappMensagem || "Olá! Vim pelo site e quero mais informações.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-yellow-400/65 bg-black/45 px-3 py-2.5 text-center text-sm font-black text-yellow-400 active:scale-95"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* TEXTO DO BANNER - DESKTOP */}
          <div className="absolute inset-0 hidden md:flex items-center px-10 pb-0">
            <div className="max-w-3xl">
              <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-4">
                Empório da Afiação
              </p>

              <h2 className="text-7xl text-yellow-400 font-black mb-5 leading-[0.98] tracking-[-0.04em] drop-shadow-2xl">
                {banners[bannerIndex % banners.length].titulo}
              </h2>

              {banners[bannerIndex % banners.length].badge && (
                <span className="inline-flex items-center mt-1 mb-4 px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-black uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(250,204,21,0.55)]">
                  {banners[bannerIndex % banners.length].badge}
                </span>
              )}

              <p className="text-2xl text-gray-100 max-w-2xl leading-relaxed">
                {banners[bannerIndex % banners.length].subtitulo}
              </p>

              <div className="flex flex-row flex-wrap gap-4 mt-8">
                {banners[bannerIndex % banners.length].produtoSlug && (
                  <button
                    onClick={() => abrirProduto(banners[bannerIndex % banners.length].produtoSlug)}
                    className="w-auto text-center px-6 py-3 rounded-xl bg-yellow-400 text-black text-base font-black hover:bg-yellow-300 hover:scale-105 transition shadow-[0_0_22px_rgba(250,204,21,0.28)]"
                  >
                    Ver destaque
                  </button>
                )}

                <a
                  href={criarLinkWhatsApp(banners[bannerIndex % banners.length].whatsappMensagem || "Olá! Vim pelo site e quero mais informações.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto text-center px-6 py-3 rounded-xl border border-yellow-400/60 text-yellow-400 text-base font-black hover:bg-yellow-400 hover:text-black hover:scale-105 transition bg-black/35"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* BOLINHAS DO BANNER */}
          <div className="absolute left-1/2 bottom-3 md:bottom-10 -translate-x-1/2 z-20">
            <div className="flex items-center justify-center gap-3">
              {banners.map((banner, i) => (
                <button
                  key={i}
                  onClick={() => setBannerIndex(i)}
                  title={banner.titulo}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border transition-all duration-300 ${
                    i === bannerIndex
                      ? "bg-yellow-400 border-yellow-300 scale-125 shadow-[0_0_14px_rgba(250,204,21,0.9)]"
                      : "bg-transparent border-yellow-400/70 hover:bg-yellow-400/70 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SETA ESQUERDA */}
          <button
            onClick={() =>
              setBannerIndex((prev) =>
                prev === 0 ? banners.length - 1 : prev - 1
              )
            }
            className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 bg-black/55 border border-yellow-400/30 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ChevronLeft />
          </button>

          {/* SETA DIREITA */}
          <button
            onClick={() =>
              setBannerIndex((prev) => (prev + 1) % banners.length)
            }
            className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 bg-black/55 border border-yellow-400/30 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <MobileMarketplaceHome abrirProduto={abrirProduto} abrirCategoria={abrirCategoria} />

      <MobileProdutosMarketplace abrirProduto={abrirProduto} abrirCategoria={abrirCategoria} />

      {/* CATEGORIAS */}
      <section id="produtos-desktop" className="hidden md:block py-14 sm:py-20">
        <div className="bg-[#0a0a0a] py-7 text-center border-y border-yellow-400/20 mb-12">
          <h2 className="text-4xl text-yellow-400 relative inline-block group font-bold">
            Categorias de Produtos
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-7 px-4 sm:px-6">
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => abrirCategoria(cat.slug)}
              className="text-left bg-[#0a0a0a] rounded-3xl overflow-hidden border border-yellow-400/15 hover:border-yellow-400/70 shadow-[0_0_25px_rgba(250,204,21,0.05)] hover:shadow-[0_0_35px_rgba(250,204,21,0.22)] transition group"
            >
              <div className="h-36 sm:h-52 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.nome}
                  className="h-full w-full object-cover group-hover:scale-125 transition duration-700"
                />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-center text-yellow-400 font-bold text-base sm:text-xl mb-2">
                  {cat.nome}
                </p>

                <p className="text-center text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Ver produtos
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <SecaoDestaque abrirProduto={abrirProduto} />

      <SecaoComoFunciona />

      <SecaoParaQuemE />

      <SecaoDiferenciais />

      <MobileAvaliacoesCompactas />

      {/* AVALIAÇÕES / PROVA SOCIAL */}
      <section id="avaliacoes" className="hidden md:block py-20 bg-[#060606] border-y border-yellow-400/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-3">
              Confiança local
            </p>

            <h2 className="text-4xl font-black text-yellow-400 mb-4">
              O que os clientes procuram aqui
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Afiação, manutenção e venda de instrumentos para profissionais, salões e clientes da região.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { numero: "+500", texto: "instrumentos atendidos" },
              { numero: "4.4★", texto: "avaliação média no Google" },
              { numero: "3", texto: "serviços principais: afiação, mola e gravação" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/50 border border-yellow-400/15 rounded-3xl p-7 text-center hover:border-yellow-400/60 hover:shadow-[0_0_28px_rgba(250,204,21,0.16)] transition"
              >
                <p className="text-4xl font-black text-yellow-400 mb-2">
                  {item.numero}
                </p>
                <p className="text-gray-400">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                nome: "Juliana",
                perfil: "Manicure",
                texto: "Meu alicate voltou com corte limpo e muito melhor para trabalhar.",
              },
              {
                nome: "Carlos",
                perfil: "Uso em cozinha",
                texto: "As facas ficaram prontas para uso novamente. Atendimento direto e rápido.",
              },
              {
                nome: "Marina",
                perfil: "Salão de beleza",
                texto: "Gosto porque consigo resolver afiação, mola e acessórios em um só lugar.",
              },
            ].map((avaliacao, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-yellow-400/15 rounded-3xl p-7 hover:border-yellow-400/60 hover:-translate-y-1 hover:shadow-[0_0_26px_rgba(250,204,21,0.14)] transition"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-5">
                  “{avaliacao.texto}”
                </p>

                <p className="text-yellow-400 font-bold">
                  {avaliacao.nome}
                </p>
                <p className="text-gray-500 text-sm">
                  {avaliacao.perfil}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section id="contato" className="py-12 md:py-20">
        <div className="relative text-center mb-10">
          <h2 className="text-2xl md:text-4xl text-yellow-400 inline-block relative group font-bold">
            Nossa Localização
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>

          <div className="mt-6 h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
        </div>

        <div className="w-full border-t border-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
          <iframe
            title="Mapa Empório da Afiação"
            src="https://www.google.com/maps?q=Rua+Brigadeiro+Henrique+Fontenelle,+1056,+São+Paulo&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <WhatsAppFloat />
      <MobileBottomNav voltarInicio={voltarInicio} />
      <Footer />
    </div>
  );
}

// =============================
// CARD DE PRODUTO
// =============================
function ProductCard({ produto, abrirProduto }) {
  const mensagem = `Olá! Quero saber mais sobre o produto: ${produto.nome}.`;

  return (
    <article
      onClick={() => abrirProduto(produto.slug)}
      className="relative cursor-pointer bg-[#0b0b0b] border border-yellow-400/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_24px_rgba(250,204,21,0.06)] hover:border-yellow-400/60 hover:shadow-[0_0_38px_rgba(250,204,21,0.2)] transition group"
    >
      {produto.badge && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-yellow-400 text-black text-[9px] sm:text-xs font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-[0_0_18px_rgba(250,204,21,0.75)]">
          {produto.badge}
        </div>
      )}

      {/* IMAGEM DO CARD DO PRODUTO */}
      <div className="h-32 sm:h-64 w-full bg-white flex items-center justify-center overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
        <img
          src={produto.img}
          alt={produto.nome}
          className="max-h-full max-w-full object-contain p-3 sm:p-4 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-3 sm:p-6">
        <h3 className="text-sm sm:text-xl text-yellow-400 font-black mb-1.5 sm:mb-3 leading-tight line-clamp-2 min-h-[38px] sm:min-h-0">
          {produto.nome}
        </h3>

        <p className="text-[11px] sm:text-base text-gray-300 leading-relaxed line-clamp-2 min-h-[34px] sm:min-h-0">
          {produto.descricao}
        </p>

        <div className="mt-3 sm:mt-5 flex flex-col gap-2 sm:gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              abrirProduto(produto.slug);
            }}
            className="rounded-xl bg-yellow-400 px-3 sm:px-4 py-2 text-center text-xs sm:text-sm font-black text-black hover:bg-yellow-300 transition"
          >
            Ver detalhes
          </button>

          <a
            href={criarLinkWhatsApp(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:inline-flex justify-center items-center rounded-xl border border-yellow-400/50 px-4 py-2 text-sm font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_22px_rgba(250,204,21,0.45)] transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

// =============================
// COMPONENTE DE IMAGEM COM ZOOM CONTROLADO PELO MOUSE
// =============================
function ProdutoImagemZoom({ imagens = [], nome }) {
  const [imagemAtiva, setImagemAtiva] = useState(imagens[0]);
  const [zoomAtivo, setZoomAtivo] = useState(false);
  const [posicao, setPosicao] = useState({ x: 50, y: 50 });

  const moverMouse = (e) => {
    const area = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - area.left) / area.width) * 100;
    const y = ((e.clientY - area.top) / area.height) * 100;
    setPosicao({ x, y });
  };

  return (
    <div className="space-y-5">
      <div
        onMouseMove={moverMouse}
        onMouseEnter={() => setZoomAtivo(true)}
        onMouseLeave={() => setZoomAtivo(false)}
        className="relative h-[350px] sm:h-[430px] md:h-[520px] bg-white rounded-3xl border border-yellow-400/20 overflow-hidden shadow-[0_0_35px_rgba(250,204,21,0.12)] cursor-zoom-in"
      >
        <img
          src={imagemAtiva}
          alt={nome}
          className={`w-full h-full object-contain p-6 transition-transform duration-300 ${
            zoomAtivo ? "scale-[2.05]" : "scale-100"
          }`}
          style={{
            transformOrigin: `${posicao.x}% ${posicao.y}%`,
          }}
        />

        <div className="absolute left-4 bottom-4 bg-black/75 text-yellow-400 text-xs px-3 py-2 rounded-full border border-yellow-400/30">
          Passe o mouse para ampliar
        </div>
      </div>

      {imagens.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {imagens.map((img, index) => (
            <button
              key={index}
              onClick={() => setImagemAtiva(img)}
              className={`w-24 h-24 shrink-0 rounded-2xl bg-white border overflow-hidden transition ${
                imagemAtiva === img
                  ? "border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.45)]"
                  : "border-yellow-400/20 hover:border-yellow-400/70"
              }`}
            >
              <img
                src={img}
                alt={`${nome} ${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// =============================
// CABEÇALHO / HEADER
// Onde editar redução do header:
// - altura normal: min-h-[120px]
// - altura ao rolar: min-h-[8px]
// - tamanho do logo normal: h-28 md:h-32 lg:h-36
// - tamanho do logo ao rolar: h-[5px]
// =============================
function Header({ voltarInicio, termoBusca, setTermoBusca, abrirProduto, resultadosBusca }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;

        // Histerese: evita piscar quando a altura do topo muda perto do ponto de corte.
        setScrolled((atual) => {
          if (!atual && y > 150) return true;
          if (atual && y < 60) return false;
          return atual;
        });

        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irPara = (id) => {
    voltarInicio();
    setMobileMenuOpen(false);

    setTimeout(() => {
      const alvo = id === "produtos" ? (window.innerWidth < 768 ? "produtos-mobile" : "produtos-desktop") : id;
      document.getElementById(alvo)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const selecionarProdutoBusca = (slug) => {
    abrirProduto(slug);
    setTermoBusca("");
    setSearchActive(false);
    setMobileMenuOpen(false);
  };

  const SearchResults = ({ mobile = false }) => {
    if (!termoBusca || !searchActive) return null;

    return (
      <div
        className={`absolute left-0 right-0 top-[calc(100%+10px)] z-[10000] max-h-[380px] overflow-y-auto rounded-2xl border border-yellow-400/35 bg-black shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(250,204,21,0.28)] backdrop-blur-xl ${
          mobile ? "mx-0" : ""
        }`}
      >
        {resultadosBusca.length > 0 ? (
          resultadosBusca.slice(0, 8).map((produto) => (
            <button
              key={produto.slug}
              onMouseDown={(e) => {
                e.preventDefault();
                selecionarProdutoBusca(produto.slug);
              }}
              onTouchStart={() => selecionarProdutoBusca(produto.slug)}
              className="flex w-full items-center gap-4 border-b border-yellow-400/10 p-4 text-left hover:bg-yellow-400/10 transition"
            >
              <div className="h-14 w-14 shrink-0 rounded-xl bg-white p-1 overflow-hidden">
                <img
                  src={produto.img}
                  alt={produto.nome}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-bold text-yellow-400">
                  {produto.nome}
                </p>
                <p className="text-xs text-gray-400">
                  {produto.categoriaNome}
                  {produto.subcategoria ? ` • ${produto.subcategoria}` : ""}
                </p>
              </div>
            </button>
          ))
        ) : (
          <div className="p-5 text-center">
            <p className="text-yellow-400 font-bold">
              Nenhum produto encontrado
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Tente buscar por outro nome.
            </p>
          </div>
        )}
      </div>
    );
  };

  const atalhosMobile = [
    { nome: "Alicates", id: "produtos" },
    { nome: "Serviços", id: "produtos" },
    { nome: "Avaliações", id: "avaliacoes" },
    { nome: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[90] bg-transparent backdrop-blur-xl border-b border-yellow-400/15 transition-all duration-500 ${
        scrolled
          ? "shadow-[0_0_18px_rgba(250,204,21,0.18)]"
          : "shadow-[0_0_0_rgba(250,204,21,0)]"
      }`}
    >
      {/* HEADER DESKTOP */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto items-center justify-between px-6 gap-6 transition-all duration-700 overflow-visible ${
          scrolled ? "min-h-[8px]" : "min-h-[120px]"
        }`}
      >
        <button
          onClick={voltarInicio}
          className={`flex items-center shrink-0 transition-all duration-700 ${
            scrolled ? "w-[34px] opacity-0 pointer-events-none" : "w-[190px] md:w-[230px]"
          }`}
        >
          <img
            src="/logo.png"
            alt="Empório da Afiação"
            className={`w-auto object-contain transition-all duration-700 ${
              scrolled
                ? "h-[5px] opacity-0"
                : "h-28 md:h-32 lg:h-36 opacity-100 drop-shadow-[0_0_24px_rgba(250,204,21,0.8)]"
            }`}
          />
        </button>

        <div
          className={`hidden md:flex flex-1 justify-center transition-all duration-700 overflow-visible ${
            scrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div
            className={`relative flex rounded-xl group transition-all duration-500 ${
              searchActive ? "w-[520px]" : "w-[390px] hover:w-[460px]"
            } hover:shadow-[0_0_34px_rgba(250,204,21,0.55)] focus-within:shadow-[0_0_48px_rgba(250,204,21,0.9)]`}
          >
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-yellow-400/10 via-yellow-300/35 to-yellow-400/10 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none"></div>

            <input
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Diga o que você procura"
              onFocus={() => setSearchActive(true)}
              onBlur={() => {
                setTimeout(() => setSearchActive(false), 180);
              }}
              className="relative z-10 flex-1 bg-black border-[3px] border-yellow-400/55 border-r-0 rounded-l-xl px-4 py-2 text-yellow-200 placeholder:text-gray-400 outline-none transition-all duration-500 hover:border-yellow-400 focus:border-yellow-400 focus:tracking-wide"
            />

            <button
              type="button"
              className="relative z-10 bg-yellow-400 border-[3px] border-yellow-400 border-l-0 px-4 rounded-r-xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_24px_rgba(250,204,21,0.7)]"
            >
              <Search size={18} className="text-black" />
            </button>

            {termoBusca && searchActive && (
              <>
                <div className="fixed inset-0 top-[120px] z-[9998] bg-black/45 backdrop-blur-[2px] pointer-events-none"></div>
                <SearchResults />
              </>
            )}
          </div>
        </div>

        <nav
          className={`hidden md:flex gap-8 items-center transition-all duration-700 ${
            scrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <button onClick={() => irPara("inicio")} className="relative group hover:text-yellow-400">
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>

          <button onClick={() => irPara("produtos")} className="relative group hover:text-yellow-400">
            Produtos
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>

          <button onClick={() => irPara("avaliacoes")} className="relative group hover:text-yellow-400">
            Avaliações
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>

          <button onClick={() => irPara("contato")} className="relative group hover:text-yellow-400">
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>

          <button className="relative group">
            <ShoppingCart className="group-hover:text-yellow-400 transition" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full group-hover:scale-110 transition">
              0
            </span>
          </button>
        </nav>
      </div>

      {/* HEADER MOBILE ESTILO HOSTINGER - TRANSPARENTE NO TOPO, SÓLIDO AO SCROLL */}
      <div className="md:hidden">
        <div
          className={`px-5 transition-[background-color,background-image,color,box-shadow,padding,border-color,backdrop-filter] duration-700 ease-out will-change-transform ${
            scrolled
              ? "bg-[linear-gradient(180deg,rgba(5,5,5,0.98)_0%,rgba(9,8,5,0.96)_58%,rgba(0,0,0,0.94)_100%)] text-white border-b border-yellow-400/25 shadow-[0_12px_38px_rgba(0,0,0,0.72),0_0_24px_rgba(250,204,21,0.12)] pt-1.5 pb-1.5 backdrop-blur-xl"
              : "bg-gradient-to-b from-black/62 via-black/34 to-transparent text-white border-b border-transparent pt-3.5 pb-4 backdrop-blur-[2px]"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <button onClick={voltarInicio} className="shrink-0">
              <img
                src="/logo.png"
                alt="Empório da Afiação"
                className={`object-contain object-left transition-[width,height,filter,transform] duration-700 ease-out [transform:scaleX(1.22)] [transform-origin:left_center] ${
                  scrolled
                    ? "h-[43px] w-[176px] drop-shadow-[0_0_10px_rgba(250,204,21,0.25)]"
                    : "h-[76px] w-[236px] drop-shadow-[0_0_24px_rgba(250,204,21,0.75)]"
                }`}
              />
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`inline-flex shrink-0 items-center justify-center rounded-2xl transition-all duration-700 ease-out active:scale-95 ${
                scrolled
                  ? "h-10 w-10 border border-yellow-400/35 bg-black/35 text-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.10)] hover:bg-yellow-400 hover:text-black"
                  : "h-12 w-12 text-yellow-400 hover:bg-yellow-400/10"
              }`}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={scrolled ? 25 : 34} strokeWidth={2.4} /> : <Menu size={scrolled ? 28 : 36} strokeWidth={2.4} />}
            </button>
          </div>

          {/* BUSCA MOBILE GRANDE */}
          <div
            className={`relative overflow-visible transition-[max-height,opacity,margin,transform] duration-700 ease-out ${
              scrolled && !mobileSearchOpen
                ? "mt-0 max-h-0 -translate-y-1 opacity-0 pointer-events-none"
                : "mt-6 max-h-24 translate-y-0 opacity-100"
            }`}
          >
            <div className="flex rounded-[1.35rem] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.24)] ring-1 ring-yellow-400/10 focus-within:shadow-[0_0_34px_rgba(250,204,21,0.50)] transition">
              <input
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                onFocus={() => setSearchActive(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setSearchActive(false);
                    if (scrolled && !termoBusca) setMobileSearchOpen(false);
                  }, 220);
                }}
                placeholder="Buscar produtos..."
                className="min-w-0 flex-1 rounded-l-[1.35rem] bg-white px-5 py-4 text-[1.08rem] text-black placeholder:text-gray-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setSearchActive(true)}
                className="m-1.5 inline-flex min-w-[72px] items-center justify-center rounded-[1.05rem] bg-yellow-400 text-black shadow-[0_10px_26px_rgba(250,204,21,0.30)]"
                aria-label="Pesquisar"
              >
                <Search size={31} strokeWidth={2.4} />
              </button>
            </div>

            {termoBusca && searchActive && <SearchResults mobile />}

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]">
              {["Alicates", "Afiação", "Tesouras"].map((atalho) => (
                <button
                  key={atalho}
                  type="button"
                  onClick={() => {
                    setTermoBusca(atalho);
                    setSearchActive(true);
                  }}
                  className="shrink-0 rounded-full border border-yellow-400/25 bg-black/42 px-3.5 py-1.5 text-xs font-bold text-yellow-300 backdrop-blur-md"
                >
                  {atalho}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE ABERTO */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-[95] border-t border-yellow-400/20 bg-black/98 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
          <nav className="px-5 py-4 flex flex-col gap-2">
            <button
              onClick={() => irPara("inicio")}
              className="rounded-xl border border-yellow-400/20 px-4 py-2.5 text-left text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Início
            </button>

            <button
              onClick={() => irPara("produtos")}
              className="rounded-xl border border-yellow-400/20 px-4 py-2.5 text-left text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Produtos
            </button>

            <button
              onClick={() => irPara("avaliacoes")}
              className="rounded-xl border border-yellow-400/20 px-4 py-2.5 text-left text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Avaliações
            </button>

            <button
              onClick={() => irPara("contato")}
              className="rounded-xl border border-yellow-400/20 px-4 py-2.5 text-left text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Contato
            </button>

            <a
              href={criarLinkWhatsApp("Olá! Vim pelo site e quero mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-xl bg-yellow-400 px-4 py-2.5 text-center text-black font-black hover:bg-yellow-300 transition"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}




// =============================
// AVALIAÇÕES COMPACTAS MOBILE
// =============================
function MobileAvaliacoesCompactas() {
  return (
    <section className="md:hidden px-4 py-7 bg-[#060606] border-y border-yellow-400/10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-yellow-400/80">
            Confiança
          </p>
          <h2 className="text-xl font-black text-yellow-400">Clientes satisfeitos</h2>
        </div>
        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-black">
          4.4★
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
        {[
          ["Juliana", "Manicure", "Meu alicate voltou com corte limpo."],
          ["Carlos", "Cozinha", "As facas ficaram prontas para uso novamente."],
          ["Marina", "Salão", "Resolvo afiação, mola e acessórios em um lugar."],
        ].map(([nome, perfil, texto]) => (
          <div
            key={nome}
            className="min-w-[230px] shrink-0 rounded-2xl border border-yellow-400/15 bg-[#0a0a0a] p-4"
          >
            <div className="mb-3 flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-300">“{texto}”</p>
            <p className="mt-4 font-black text-yellow-400">{nome}</p>
            <p className="text-xs text-gray-500">{perfil}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================
// HOME MOBILE ESTILO MARKETPLACE
// =============================
function MobileMarketplaceHome({ abrirProduto, abrirCategoria }) {
  const servicosRapidos = [
    { titulo: "Afiação", texto: "Alicates, facas e tesouras", slug: "afiacao" },
    { titulo: "Troca de molas", texto: "Manutenção rápida", slug: "troca-de-molas" },
    { titulo: "Gravação", texto: "Identificação de instrumentos", slug: "gravacao" },
  ];

  return (
    <div className="md:hidden bg-black">
      <section className="px-4 pt-5">
        <div className="rounded-[1.8rem] border border-yellow-400/20 bg-gradient-to-br from-[#15110a] via-[#080808] to-black p-4 shadow-[0_0_34px_rgba(250,204,21,0.1)]">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["4.4★", "Google"],
              ["Rápido", "Atendimento"],
              ["SP", "Local"],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-2xl border border-yellow-400/15 bg-black/55 px-2 py-4 text-center"
              >
                <p className="text-lg font-black text-yellow-400">{titulo}</p>
                <p className="text-[11px] text-gray-400">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-7">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-yellow-400/80">
              Marketplace
            </p>
            <h2 className="text-2xl font-black text-yellow-400">Categorias</h2>
          </div>
          <span className="rounded-full border border-yellow-400/25 px-3 py-1.5 text-xs font-bold text-yellow-400">
            2 por linha
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => abrirCategoria(cat.slug)}
              className="group overflow-hidden rounded-[1.35rem] border border-yellow-400/15 bg-[#0b0b0b] text-left shadow-[0_0_22px_rgba(250,204,21,0.06)] active:scale-[0.98] transition"
            >
              <div className="relative h-24 overflow-hidden bg-white">
                <img
                  src={cat.img}
                  alt={cat.nome}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div className="p-3">
                <p className="text-base font-black text-yellow-400 leading-tight">
                  {cat.nome}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-gray-500">
                  Abrir categoria
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 pt-7">
        <div className="rounded-[1.8rem] border border-yellow-400/15 bg-gradient-to-br from-[#121212] via-black to-[#090909] p-4 shadow-[0_0_30px_rgba(250,204,21,0.08)]">
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-yellow-400/80">
              Serviços
            </p>
            <h2 className="text-xl font-black text-yellow-400">Resolva em poucos passos</h2>
          </div>

          <div className="grid gap-3">
            {servicosRapidos.map((servico) => (
              <button
                key={servico.slug}
                onClick={() => abrirProduto(servico.slug)}
                className="flex items-center justify-between rounded-2xl border border-yellow-400/10 bg-black/55 p-4 text-left active:scale-[0.98] transition"
              >
                <div>
                  <p className="font-black text-yellow-400">{servico.titulo}</p>
                  <p className="text-xs text-gray-400">{servico.texto}</p>
                </div>
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-black">
                  Abrir
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-7">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-yellow-400/20 bg-yellow-400 p-5 text-black shadow-[0_0_35px_rgba(250,204,21,0.18)]">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-black/10"></div>
          <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-black/10"></div>

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Atendimento direto
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight">
              Não achou o que procura?
            </h2>
            <p className="mt-2 text-sm font-semibold text-black/75">
              Fale pelo WhatsApp e peça informação sobre produtos, afiação ou manutenção.
            </p>

            <a
              href={criarLinkWhatsApp("Olá! Vim pelo site e quero ajuda para encontrar um produto ou serviço.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-black text-yellow-400"
            >
              Chamar agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


// =============================
// PRODUTOS MOBILE EM 2 COLUNAS
// =============================
function MobileProdutosMarketplace({ abrirProduto, abrirCategoria }) {
  const produtosMobile = todosProdutos.filter((produto) =>
    [
      "Alicate Mundial 522",
      "Alicate Mundial 777",
      "Alicate Mundial 722",
      "Alicate Mundial 772",
      "Alicate Mundial 775",
      "Afiação",
    ].includes(produto.nome)
  );

  return (
    <section id="produtos-mobile" className="md:hidden px-4 py-8 bg-black">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-yellow-400/80">
            Produtos
          </p>
          <h2 className="text-2xl font-black text-yellow-400">
            Mais procurados
          </h2>
        </div>

        <button
          onClick={() => abrirCategoria("alicates")}
          className="rounded-full border border-yellow-400/25 px-3 py-1.5 text-xs font-bold text-yellow-400"
        >
          Ver mais
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {produtosMobile.map((produto) => (
          <button
            key={produto.slug}
            onClick={() => abrirProduto(produto.slug)}
            className="relative overflow-hidden rounded-[1.35rem] border border-yellow-400/15 bg-gradient-to-b from-[#101010] to-[#070707] text-left shadow-[0_0_24px_rgba(250,204,21,0.08)] active:scale-[0.98] transition"
          >
            {produto.badge && (
              <span className="absolute left-2 top-2 z-10 rounded-full bg-yellow-400 px-2 py-1 text-[9px] font-black uppercase text-black">
                {produto.badge}
              </span>
            )}

            <div className="h-32 bg-white p-3">
              <img
                src={produto.img}
                alt={produto.nome}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-3">
              <p className="line-clamp-2 min-h-[36px] text-sm font-black leading-tight text-yellow-400">
                {produto.nome}
              </p>

              <p className="mt-1 line-clamp-2 min-h-[30px] text-[11px] leading-snug text-gray-400">
                {produto.descricao}
              </p>

              <div className="mt-3 rounded-xl bg-yellow-400 py-2 text-center text-xs font-black text-black">
                Ver detalhes
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-yellow-400/15 bg-[#0a0a0a] p-4">
        <p className="text-sm font-black text-yellow-400">Atendimento rápido pelo WhatsApp</p>
        <p className="mt-1 text-xs text-gray-400">Peça informações de produtos, afiação, molas ou gravação.</p>
      </div>
    </section>
  );
}

// =============================
// BARRA INFERIOR MOBILE ESTILO MARKETPLACE
// =============================
function MobileBottomNav({ voltarInicio }) {
  const irPara = (id) => {
    voltarInicio();

    setTimeout(() => {
      const alvo = id === "produtos" ? "produtos-mobile" : id;
      document.getElementById(alvo)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[70] border-t border-yellow-400/15 bg-black/95 backdrop-blur-xl px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.75)]">
      <div className="grid grid-cols-4 gap-2 text-[11px] font-bold">
        <button onClick={() => irPara("inicio")} className="rounded-xl py-2 text-yellow-400">
          Início
        </button>
        <button onClick={() => irPara("produtos")} className="rounded-xl py-2 text-yellow-400">
          Produtos
        </button>
        <button onClick={() => irPara("avaliacoes")} className="rounded-xl py-2 text-yellow-400">
          Avaliações
        </button>
        <a
          href={criarLinkWhatsApp("Olá! Vim pelo site e quero mais informações.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-green-500 py-2 text-center text-white"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

// =============================
// BOTÃO FLUTUANTE DO WHATSAPP
// =============================
function WhatsAppFloat() {
  return (
    <a
      href={criarLinkWhatsApp("Olá! Vim pelo site e quero mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-black text-white shadow-[0_0_28px_rgba(34,197,94,0.65)] hover:scale-110 hover:bg-green-400 transition"
    >
      WhatsApp
    </a>
  );
}

// =============================
// SEÇÃO DESTAQUE / MAIS VENDIDO
// =============================
function SecaoDestaque({ abrirProduto }) {
  return (
    <section className="hidden md:block py-20 px-6 bg-[#070707] border-y border-yellow-400/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(250,204,21,0.55)]">
            Mais vendido
          </span>

          <h2 className="text-4xl md:text-6xl text-yellow-400 font-black mt-5 mb-5 leading-tight">
            Alicate Mundial 522
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            Um dos modelos mais procurados para uso doméstico. Ideal para quem busca praticidade, bom corte e confiança no dia a dia.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => abrirProduto("alicate-mundial-522")}
              className="bg-yellow-400 text-black px-7 py-3 rounded-xl font-black hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_26px_rgba(250,204,21,0.55)] transition"
            >
              Ver produto
            </button>

            <a
              href={criarLinkWhatsApp("Olá! Quero saber mais sobre o Alicate Mundial 522.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-400/60 text-yellow-400 px-7 py-3 rounded-xl font-black hover:bg-yellow-400 hover:text-black hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-yellow-400/10 blur-2xl"></div>
          <div className="relative bg-white rounded-[2rem] p-8 border border-yellow-400/20 shadow-[0_0_45px_rgba(250,204,21,0.15)] overflow-hidden group">
            <img
              src="/images/produtos/alicate-mundial-522.jpg"
              alt="Alicate Mundial 522"
              className="w-full h-[420px] object-contain transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// SEÇÃO COMO FUNCIONA
// =============================
function SecaoComoFunciona() {
  const passos = [
    "Você traz o instrumento",
    "Fazemos a avaliação",
    "Afiação profissional",
    "Entrega rápida",
  ];

  return (
    <section className="hidden md:block py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-3">
          Processo simples
        </p>

        <h2 className="text-4xl text-yellow-400 font-black mb-12">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {passos.map((item, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-7 rounded-3xl border border-yellow-400/15 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.16)] transition group"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black font-black group-hover:scale-110 transition">
                {i + 1}
              </div>

              <p className="text-gray-300 font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// SEÇÃO PARA QUEM É
// =============================
function SecaoParaQuemE() {
  const publicos = [
    "Manicures",
    "Salões de beleza",
    "Açougues",
    "Uso doméstico",
  ];

  return (
    <section className="hidden md:block py-20 px-6 bg-[#060606] border-y border-yellow-400/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-3">
          Atendimento local
        </p>

        <h2 className="text-4xl text-yellow-400 font-black mb-12">
          Para quem é
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publicos.map((item, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-8 rounded-3xl border border-yellow-400/15 hover:border-yellow-400/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.18)] transition"
            >
              <p className="text-yellow-400 text-xl font-bold mb-2">
                {item}
              </p>

              <p className="text-gray-400 text-sm">
                Soluções para corte, manutenção e reposição de instrumentos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// SEÇÃO DE DIFERENCIAIS
// =============================
function SecaoDiferenciais() {
  const diferenciais = [
    "Corte preciso",
    "Atendimento rápido",
    "Instrumentos revisados",
    "Venda e manutenção no mesmo lugar",
  ];

  return (
    <section className="hidden md:block py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-3">
            Por que escolher
          </p>

          <h2 className="text-4xl md:text-5xl text-yellow-400 font-black mb-6">
            Qualidade para quem precisa de corte de verdade
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            O Empório da Afiação reúne serviços de afiação, manutenção, acessórios e produtos para profissionais e clientes que precisam de instrumentos prontos para uso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {diferenciais.map((item, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 rounded-3xl border border-yellow-400/15 hover:border-yellow-400/60 hover:shadow-[0_0_26px_rgba(250,204,21,0.14)] transition"
            >
              <p className="text-yellow-400 font-black mb-2">
                ✓ {item}
              </p>
              <p className="text-gray-400 text-sm">
                Pensado para facilitar o dia a dia de quem depende de bons instrumentos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// =============================
// RODAPÉ / FOOTER
// =============================
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-gray-400 pt-28 pb-24 md:pb-8 border-t border-yellow-400/20">
      <div className="absolute top-0 left-0 w-full h-28 bg-[#111]"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
        }}
      ></div>

      <div className="absolute -left-24 top-24 text-[9rem] md:text-[13rem] font-black text-yellow-400/5 select-none pointer-events-none">
        EMPÓRIO
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14 rounded-[2rem] border border-yellow-400/20 bg-black/60 p-8 md:p-10 shadow-[0_0_40px_rgba(250,204,21,0.08)] grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-3">
              Atendimento direto
            </p>

            <h3 className="text-3xl md:text-4xl font-black text-yellow-400 mb-3">
              Seus instrumentos perderam o corte?
            </h3>

            <p className="text-gray-300 max-w-2xl">
              Fale com o Empório da Afiação e solicite informações sobre afiação, troca de molas, gravação ou produtos disponíveis.
            </p>
          </div>

          <a
            href={criarLinkWhatsApp("Olá! Vim pelo site e quero falar com o Empório da Afiação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-xl bg-yellow-400 px-7 py-4 font-black text-black hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_26px_rgba(250,204,21,0.55)] transition"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-10 relative">
          <div className="md:col-span-1">
            <h3 className="text-yellow-400 text-2xl font-black mb-4 flex items-center gap-2">
              <Scissors size={22} /> Empório da Afiação
            </h3>

            <p className="leading-relaxed">
              Afiação profissional de alicates, facas, tesouras e instrumentos. Venda de produtos, acessórios e serviços para estética e uso geral.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 font-bold">Categorias</h4>
            <ul className="space-y-2">
              <li>Alicates</li>
              <li>Tesouras</li>
              <li>Facas</li>
              <li>Espátulas</li>
              <li>Acessórios</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-bold">Serviços</h4>
            <ul className="space-y-2">
              <li>Afiação</li>
              <li>Troca de molas</li>
              <li>Gravação</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-bold">Contato</h4>
            <ul className="space-y-2">
              <li>São Paulo - SP</li>
              <li>(11) 97962-6107</li>
              <li>Rua Brigadeiro Henrique Fontenelle, 1056</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-yellow-400/10 text-center text-gray-600 text-sm">
          © 2026 Empório da Afiação — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
