import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  Star,
  Scissors,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

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

const categorias = [
  {
    nome: "Alicates",
    slug: "alicates",
    chamada: "Alicates profissionais para manicure, cutícula e uso técnico.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    produtos: [
      {
        nome: "Alicates de cutícula",
        descricao: "Modelos profissionais para atendimento, manutenção e venda local.",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
      },
      {
        nome: "Serviço de afiação de alicates",
        descricao: "Afiação com acabamento fino para recuperar o corte do instrumento.",
        img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    nome: "Espátulas",
    slug: "espatulas",
    chamada: "Espátulas para manicure, limpeza e acabamento profissional.",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    produtos: [
      {
        nome: "Espátulas de manicure",
        descricao: "Instrumentos para uso profissional e revenda.",
        img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    nome: "Facas",
    slug: "facas",
    chamada: "Facas para cozinha, açougue, churrasco e uso diário.",
    img: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=85",
    produtos: [
      {
        nome: "Facas profissionais",
        descricao: "Facas para corte preciso em cozinha, açougue e churrasco.",
        img: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=85",
      },
      {
        nome: "Serviço de afiação de facas",
        descricao: "Recuperação de fio para facas domésticas e profissionais.",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    nome: "Tesouras",
    slug: "tesouras",
    chamada: "Tesouras para corte, acabamento, costura e uso profissional.",
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
    produtos: [
      {
        nome: "Tesouras profissionais",
        descricao: "Tesouras para venda e manutenção com acabamento profissional.",
        img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
  {
    nome: "Outros",
    slug: "outros",
    chamada: "Acessórios, molas, gravações e itens de apoio para estética.",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    produtos: [
      {
        nome: "Troca de molas e acessórios",
        descricao: "Manutenção complementar para prolongar a vida útil dos instrumentos.",
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
      },
      {
        nome: "Gravação",
        descricao: "Identificação de instrumentos para profissionais e salões.",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
];

function slugAtual() {
  return window.location.hash.replace("#categoria/", "");
}

export default function App() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [paginaCategoria, setPaginaCategoria] = useState(slugAtual());
  const categoriaAberta = useMemo(
    () => categorias.find((cat) => cat.slug === paginaCategoria),
    [paginaCategoria]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onHashChange = () => setPaginaCategoria(slugAtual());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const abrirCategoria = (slug) => {
    window.location.hash = `categoria/${slug}`;
    setPaginaCategoria(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const voltarInicio = () => {
    window.location.hash = "inicio";
    setPaginaCategoria("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (categoriaAberta) {
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

            <div className="grid md:grid-cols-3 gap-8">
              {categoriaAberta.produtos.map((produto, i) => (
                <article
                  key={i}
                  className="bg-[#0b0b0b] border border-yellow-400/15 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(250,204,21,0.08)] hover:border-yellow-400/60 transition group"
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
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header voltarInicio={voltarInicio} />

      {/* HERO */}
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

          {/* MENU EM BOLA NA PARTE INFERIOR DO BANNER */}
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

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-7 px-6">
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

function Header({ voltarInicio }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
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
      className={`fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20 transition-all duration-700 ease-out ${
        scrolled
          ? "shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
          : "shadow-[0_0_0_rgba(0,0,0,0)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 gap-6 transition-all duration-700 ease-out ${
          scrolled ? "py-1 min-h-[78px]" : "py-2 min-h-[128px]"
        }`}
      >
        <button
          onClick={voltarInicio}
          className={`flex items-center shrink-0 transition-all duration-700 ease-out ${
            scrolled ? "min-w-[145px]" : "min-w-[210px]"
          }`}
        >
          <img
            src="/logo.png"
            alt="Empório da Afiação"
            className={`w-auto object-contain transition-all duration-700 ease-out drop-shadow-[0_0_22px_rgba(250,204,21,0.72)] ${
              scrolled ? "h-20 md:h-24 lg:h-28" : "h-28 md:h-34 lg:h-40"
            }`}
          />
        </button>

        <div className="hidden md:flex flex-1 justify-center">
          <div
            className={`flex group rounded-xl transition-all duration-500 ease-out shadow-[0_0_0_rgba(250,204,21,0)] hover:shadow-[0_0_32px_rgba(250,204,21,0.42)] focus-within:shadow-[0_0_42px_rgba(250,204,21,0.72)] ${
              scrolled
                ? "w-[300px] hover:w-[390px] focus-within:w-[390px]"
                : "w-[360px] hover:w-[470px] focus-within:w-[470px]"
            }`}
          >
            <input
              placeholder="Diga o que você procura"
              className={`flex-1 bg-black border-2 border-yellow-400/45 border-r-0 rounded-l-xl text-yellow-200 outline-none transition-all duration-500 ease-out group-hover:border-yellow-400 focus:border-yellow-400 placeholder:text-yellow-100/45 ${
                scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5"
              }`}
            />
            <button
              className={`bg-yellow-400 border-2 border-yellow-400 border-l-0 rounded-r-xl hover:bg-yellow-300 transition-all duration-500 ease-out group-hover:shadow-[0_0_24px_rgba(250,204,21,0.45)] focus:shadow-[0_0_28px_rgba(250,204,21,0.65)] ${
                scrolled ? "px-3" : "px-4"
              }`}
            >
              <Search size={scrolled ? 17 : 18} className="text-black" />
            </button>
          </div>
        </div>

        <nav
          className={`hidden md:flex items-center transition-all duration-700 ease-out ${
            scrolled ? "gap-6 text-sm" : "gap-8 text-base"
          }`}
        >
          <button onClick={() => irPara("inicio")} className="relative group hover:text-yellow-400 transition-colors">
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => irPara("produtos")} className="relative group hover:text-yellow-400 transition-colors">
            Produtos
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => irPara("avaliacoes")} className="relative group hover:text-yellow-400 transition-colors">
            Avaliações
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => irPara("contato")} className="relative group hover:text-yellow-400 transition-colors">
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </button>

          <button className="relative group">
            <ShoppingCart className="group-hover:text-yellow-400 transition" size={scrolled ? 20 : 24} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full group-hover:scale-110 transition">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
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
