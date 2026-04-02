import React, { useEffect, useMemo, useState } from "react";
import { Search, Star, Scissors, Wrench } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
];

const services = [
  {
    title: "Afiações",
    description: "Serviço principal com corte preciso e acabamento profissional.",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Venda de Produtos",
    description: "Produtos e acessórios selecionados para manicure.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gravações",
    description: "Personalização profissional de instrumentos.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Troca de Molas",
    description: "Manutenção completa para prolongar a vida útil do alicate.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setBannerIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredServices = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return services;

    return services.filter((service) => {
      return (
        service.title.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term)
      );
    });
  }, [search]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-3 min-w-fit">
            <img
              src="/logo.png"
              alt="Logo Empório da Afiação"
              className="h-14 md:h-18 w-auto object-contain scale-110 drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]"
            />
            <h1 className="text-yellow-400 font-bold text-lg md:text-xl whitespace-nowrap">
              Empório da Afiação
            </h1>
          </div>

          {/* BUSCA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div
              className="w-full max-w-[420px] rounded-xl border-[2px] border-yellow-400/40 bg-black overflow-hidden
              transition-all duration-300
              shadow-[0_0_12px_rgba(250,204,21,0.12)]
              hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]
              focus-within:border-yellow-400
              focus-within:shadow-[0_0_28px_rgba(250,204,21,0.35)]"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Buscar serviços ou produtos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-yellow-200 outline-none placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => handleScroll("servicos")}
                  className="bg-yellow-400 px-4 py-2.5 flex items-center justify-center hover:bg-yellow-300 transition text-black"
                  aria-label="Buscar"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            {[
              { label: "Início", id: "inicio" },
              { label: "Serviços", id: "servicos" },
              { label: "Produtos", id: "servicos" },
              { label: "Avaliações", id: "avaliacoes" },
              { label: "Contato", id: "contato" },
            ].map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer relative group text-white/90 hover:text-yellow-400 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </div>

        {/* BUSCA MOBILE */}
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-yellow-400/30 bg-black overflow-hidden">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Buscar serviços ou produtos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-yellow-200 outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => handleScroll("servicos")}
                className="bg-yellow-400 px-4 py-3 text-black"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* BANNER */}
      <section id="inicio" className="pt-32 md:pt-28 w-full overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {banners.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Banner ${i + 1}`}
                className="w-full h-[520px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
              Afiação Profissional
            </h2>
            <p className="text-gray-200 max-w-2xl text-base md:text-lg">
              Alicates, tesouras e facas com acabamento impecável.
            </p>
          </div>

          {/* SETA ESQUERDA */}
          <button
            type="button"
            onClick={prevBanner}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl opacity-30 hover:opacity-90 transition z-30"
            aria-label="Banner anterior"
          >
            ❮
          </button>

          {/* SETA DIREITA */}
          <button
            type="button"
            onClick={nextBanner}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white text-5xl md:text-6xl opacity-30 hover:opacity-90 transition z-30"
            aria-label="Próximo banner"
          >
            ❯
          </button>

          {/* BOLINHAS */}
          <div className="absolute bottom-5 w-full flex justify-center gap-3 z-30">
            {banners.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setBannerIndex(i)}
                aria-label={`Ir para banner ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === bannerIndex
                    ? "bg-yellow-400 scale-110 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BARRA SERVIÇOS */}
      <div className="w-full bg-[#0a0a0a] border-y border-yellow-400/20 py-6 mt-16">
        <div className="text-center relative group">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 inline-block cursor-default">
            Nossos Serviços
          </h2>
          <div className="h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2"></div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl group cursor-pointer border border-yellow-400/15"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300" />

                  <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                    <Icon className="text-yellow-400 mb-3" size={26} />
                    <h3 className="text-yellow-400 font-semibold text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="md:col-span-4 text-center border border-yellow-400/20 rounded-xl py-10 px-6 bg-[#0a0a0a]">
              <p className="text-gray-300">
                Nenhum serviço encontrado para{" "}
                <span className="text-yellow-400 font-semibold">"{search}"</span>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl text-yellow-400 mb-8">Avaliações</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 rounded-xl border border-yellow-400/10"
            >
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300">Serviço excelente!</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0a0a0a] border border-yellow-400/15 rounded-2xl p-8 text-center">
          <h2 className="text-3xl text-yellow-400 mb-3">Contato</h2>
          <p className="text-gray-300 mb-5">
            Fale conosco pelo WhatsApp para orçamento e atendimento.
          </p>
          <a
            href="https://wa.me/5511979626107"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-full font-semibold text-black"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5511979626107"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-full font-semibold text-black z-50 shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
