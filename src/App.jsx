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
    setBannerIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredServices = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return services;

    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-14 md:h-18 scale-110 drop-shadow-[0_0_14px_rgba(250,204,21,0.5)]"
            />
            <h1 className="text-yellow-400 font-bold text-lg md:text-xl">
              Empório da Afiação
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {[
              { label: "Início", id: "inicio" },
              { label: "Serviços", id: "servicos" },
              { label: "Avaliações", id: "avaliacoes" },
              { label: "Contato", id: "contato" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => handleScroll(item.id)}
                className="relative group text-white/90 hover:text-yellow-400 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/5511979626107"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full text-black font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* BANNER */}
      <section id="inicio" className="pt-28 w-full overflow-hidden">
        <div className="relative w-full">

          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {banners.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-[520px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              Afiação Profissional em São Paulo
            </h2>

            <p className="text-gray-200 max-w-2xl mb-6">
              Alicates, tesouras e facas com acabamento impecável.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="https://wa.me/5511979626107"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-full text-black font-semibold"
              >
                Falar no WhatsApp
              </a>

              <button
                onClick={() => handleScroll("servicos")}
                className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                Ver serviços
              </button>
            </div>
          </div>

          {/* SETAS */}
          <button onClick={prevBanner} className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl opacity-30 hover:opacity-90">
            ❮
          </button>

          <button onClick={nextBanner} className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl opacity-30 hover:opacity-90">
            ❯
          </button>

          {/* BOLINHAS */}
          <div className="absolute bottom-5 w-full flex justify-center gap-3">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === bannerIndex ? "bg-yellow-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* BARRA */}
      <div className="w-full bg-[#0a0a0a] border-y border-yellow-400/20 py-6 mt-16">
        <div className="text-center group">
          <h2 className="text-4xl font-bold text-yellow-400 inline-block">
            Nossos Serviços
          </h2>
          <div className="h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2"></div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {filteredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <img src={s.image} className="w-full h-[240px] object-cover group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70"></div>

                <div className="absolute bottom-4 left-4">
                  <Icon className="text-yellow-400 mb-2" />
                  <h3 className="text-yellow-400 font-semibold">{s.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl text-yellow-400 mb-8">Avaliações</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
              </div>
              <p className="text-gray-300">Serviço excelente!</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a href="https://wa.me/5511979626107" target="_blank" className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full">
        WhatsApp
      </a>

    </div>
  );
}
