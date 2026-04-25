import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Star,
  Scissors,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

// =============================
// BANNERS DO TOPO
// =============================
const banners = [
  {
    titulo: "Afiação de Alicates",
    subtitulo: "Precisão, corte limpo e acabamento profissional para manicure e estética.",
    img: "/images/banners/banner-alicates.jpg",
  },
  {
    titulo: "Facas Sempre Afiadas",
    subtitulo: "Serviço ideal para açougues, cozinhas, churrasqueiros e uso doméstico.",
    img: "/images/banners/banner-facas.avif",
  },
  {
    titulo: "Tesouras e Espátulas",
    subtitulo: "Afiação, manutenção e venda de instrumentos com qualidade e confiança.",
    img: "/images/banners/banner-tesouras.avif",
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
  "Alicate Mundial 777": "/images/produtos/alicate-mundial-777.jpg",
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
  };
}

// =============================
// CATEGORIAS, SUBCATEGORIAS E PRODUTOS
// Para adicionar mais produtos depois, edite esta área.
// =============================
const categorias = [
  {
    nome: "Alicates",
    slug: "alicates",
    chamada: "Alicates profissionais para cutícula, unha e uso técnico.",
    img: imagensPadrao.alicates,
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

  const categoriaAberta = useMemo(
    () => categorias.find((cat) => cat.slug === rota.slug),
    [rota]
  );

  const produtoAberto = useMemo(
    () => todosProdutos.find((produto) => produto.slug === rota.slug),
    [rota]
  );

  // =============================
  // BANNER ROTATIVO
  // =============================
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4500);

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
      <div className="bg-black text-white min-h-screen">
        <Header voltarInicio={voltarInicio} />

        <main className="pt-32">
          <section className="relative min-h-[430px] overflow-hidden border-b border-yellow-400/20">
            <img
              src={produtoAberto.img}
              alt={produtoAberto.nome}
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">
              <button
                onClick={() => voltarCategoria(produtoAberto.categoriaSlug)}
                className="mb-8 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
              >
                <ArrowLeft size={18} /> Voltar para {produtoAberto.categoriaNome}
              </button>

              <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-3">
                {produtoAberto.subcategoria || produtoAberto.categoriaNome}
              </p>

              <h1 className="text-4xl md:text-6xl font-black text-yellow-400 mb-5">
                {produtoAberto.nome}
              </h1>

              <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
                {produtoAberto.descricao}
              </p>
            </div>
          </section>

          <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl overflow-hidden border border-yellow-400/20 shadow-[0_0_40px_rgba(250,204,21,0.12)]">
              <img
                src={produtoAberto.img}
                alt={produtoAberto.nome}
                className="w-full h-[430px] object-cover"
              />
            </div>

            <div className="bg-[#0b0b0b] border border-yellow-400/15 rounded-3xl p-8 shadow-[0_0_35px_rgba(250,204,21,0.08)]">
              <h2 className="text-3xl font-bold text-yellow-400 mb-5">
                Detalhes do item
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Esta página já está criada para você editar depois com preço, descrição completa, fotos reais, botão de compra ou botão de WhatsApp.
              </p>

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

        <Footer />
      </div>
    );
  }

  // =============================
  // PÁGINA DA CATEGORIA
  // =============================
  if (rota.tipo === "categoria" && categoriaAberta) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Header voltarInicio={voltarInicio} />

        <main className="pt-32">
          <section className="relative min-h-[360px] overflow-hidden border-b border-yellow-400/20">
            <img
              src={categoriaAberta.img}
              alt={categoriaAberta.nome}
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">
              <button
                onClick={voltarInicio}
                className="mb-8 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
              >
                <ArrowLeft size={18} /> Voltar para categorias
              </button>

              <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-3">
                Categoria
              </p>

              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-5">
                {categoriaAberta.nome}
              </h1>

              <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
                {categoriaAberta.chamada}
              </p>
            </div>
          </section>

          <section className="py-20 px-6 max-w-7xl mx-auto">
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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <Footer />
      </div>
    );
  }

  // =============================
  // PÁGINA INICIAL
  // =============================
  return (
    <div className="bg-black text-white min-h-screen">
      <Header voltarInicio={voltarInicio} />

      {/* HERO / BANNER ROTATIVO */}
      <section id="inicio" className="pt-32">
        <div className="relative h-[560px] md:h-[640px] overflow-hidden">
          {banners.map((banner, i) => (
            <img
              key={i}
              src={banner.img}
              alt={banner.titulo}
              className={`absolute w-full h-full object-cover transition-all duration-[2200ms] ease-in-out ${
                i === bannerIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_35%)]" />

          <div className="absolute inset-0 flex items-center px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs md:text-sm mb-4">
                Empório da Afiação
              </p>

              <h2 className="text-4xl md:text-7xl text-yellow-400 font-black mb-5 leading-tight drop-shadow-2xl">
                {banners[bannerIndex].titulo}
              </h2>

              <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                {banners[bannerIndex].subtitulo}
              </p>
            </div>
          </div>

          {/* BOLINHAS DO BANNER */}
          <div className="absolute left-1/2 bottom-8 md:bottom-10 -translate-x-1/2 z-20">
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
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/55 border border-yellow-400/30 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ChevronLeft />
          </button>

          {/* SETA DIREITA */}
          <button
            onClick={() =>
              setBannerIndex((prev) => (prev + 1) % banners.length)
            }
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/55 border border-yellow-400/30 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="produtos" className="py-20">
        <div className="bg-[#0a0a0a] py-7 text-center border-y border-yellow-400/20 mb-12">
          <h2 className="text-4xl text-yellow-400 relative inline-block group font-bold">
            Categorias de Produtos
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-6 gap-7 px-6">
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => abrirCategoria(cat.slug)}
              className="text-left bg-[#0a0a0a] rounded-3xl overflow-hidden border border-yellow-400/15 hover:border-yellow-400/70 shadow-[0_0_25px_rgba(250,204,21,0.05)] hover:shadow-[0_0_35px_rgba(250,204,21,0.22)] transition group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.nome}
                  className="h-full w-full object-cover group-hover:scale-125 transition duration-700"
                />
              </div>

              <div className="p-5">
                <p className="text-center text-yellow-400 font-bold text-xl mb-2">
                  {cat.nome}
                </p>

                <p className="text-center text-sm text-gray-400 leading-relaxed">
                  Ver produtos
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="py-20 bg-[#060606] border-y border-yellow-400/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Atendimento local com qualidade
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Afiação, manutenção e venda de instrumentos para profissionais, salões e clientes da região.
          </p>

          <div className="flex justify-center gap-2 text-yellow-400">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section id="contato" className="py-20">
        <div className="relative text-center mb-10">
          <h2 className="text-4xl text-yellow-400 inline-block relative group font-bold">
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

      <Footer />
    </div>
  );
}

// =============================
// CARD DE PRODUTO
// =============================
function ProductCard({ produto, abrirProduto }) {
  return (
    <article
      onClick={() => abrirProduto(produto.slug)}
      className="cursor-pointer bg-[#0b0b0b] border border-yellow-400/15 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(250,204,21,0.08)] hover:border-yellow-400/60 hover:shadow-[0_0_38px_rgba(250,204,21,0.2)] transition group"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={produto.img}
          alt={produto.nome}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl text-yellow-400 font-bold mb-3">
          {produto.nome}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {produto.descricao}
        </p>

        <p className="mt-5 text-sm text-yellow-400 font-semibold">
          Ver detalhes →
        </p>
      </div>
    </article>
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
function Header({ voltarInicio }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const irPara = (id) => {
    voltarInicio();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <header
      className={`fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/20 transition-all duration-700 ${
        scrolled
          ? "py-0 shadow-[0_0_18px_rgba(250,204,21,0.18)]"
          : "py-2 shadow-[0_0_0_rgba(250,204,21,0)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 gap-6 transition-all duration-700 overflow-hidden ${
          scrolled ? "min-h-[8px]" : "min-h-[120px]"
        }`}
      >
        {/* LOGOTIPO */}
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

        {/* PESQUISA ANIMADA */}
        <div
          className={`hidden md:flex flex-1 justify-center transition-all duration-700 ${
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
              placeholder="Diga o que você procura"
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
              className="relative z-10 flex-1 bg-black border-[3px] border-yellow-400/55 border-r-0 rounded-l-xl px-4 py-2 text-yellow-200 placeholder:text-gray-400 outline-none transition-all duration-500 hover:border-yellow-400 focus:border-yellow-400 focus:tracking-wide"
            />

            <button className="relative z-10 bg-yellow-400 border-[3px] border-yellow-400 border-l-0 px-4 rounded-r-xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_24px_rgba(250,204,21,0.7)]">
              <Search size={18} className="text-black" />
            </button>
          </div>
        </div>

        {/* MENU */}
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
    </header>
  );
}

// =============================
// RODAPÉ / FOOTER
// =============================
function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-24 pb-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-[#111]"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 relative">
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center gap-2">
            <Scissors size={20} /> Empório da Afiação
          </h3>

          <p>Afiação profissional de alicates, facas, tesouras e instrumentos.</p>
        </div>

        <div>
          <h4 className="text-white mb-4">Links</h4>

          <ul className="space-y-2">
            <li>Início</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Contato</h4>

          <p>São Paulo - SP</p>
          <p>(11) 97962-6107</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-600 text-sm relative">
        © 2026 Empório da Afiação
      </div>
    </footer>
  );
}
