import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
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

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO REAL */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.imgur.com/your-logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </h1>
          </div>

          {/* BUSCA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-[420px] rounded-xl border-[2.5px] border-yellow-400/50 bg-black overflow-hidden
              transition-all duration-300
              shadow-[0_0_12px_rgba(250,204,21,0.15)]
              hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]
              focus-within:border-yellow-400
              focus-within:shadow-[0_0_30px_rgba(250,204,21,0.6)]">

              <div className="flex">
                <input
                  placeholder="Diga o que você procura"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-yellow-300 outline-none
                  placeholder:text-gray-500
                  focus:text-yellow-400
                  focus:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
                />

                <button className="bg-yellow-400 px-5 flex items-center justify-center hover:bg-yellow-300 transition">
                  🔍
                </button>
              </div>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            {["Início", "Serviços", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <span key={i} className="cursor-pointer relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </nav>

        </div>
      </header>

      {/* BANNER COM SLIDE REAL */}
      <section className="pt-28 w-full overflow-hidden">
        <div className="relative w-full">

          {/* SLIDER */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${bannerIndex * 100}%)`,
            }}
          >
            {banners.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-[520px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* TEXTO */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">
              Afiação Profissional
            </h2>
            <p className="text-gray-300">
              Alicates, tesouras e facas com acabamento impecável.
            </p>
          </div>

          {/* SETAS */}
          <button
            onClick={prevBanner}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl opacity-20 hover:opacity-80 transition"
          >
            ❮
          </button>

          <button
            onClick={nextBanner}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl opacity-20 hover:opacity-80 transition"
          >
            ❯
          </button>

          {/* BOLINHAS */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {banners.map((_, i) => (
              <div
                key={i}
                onClick={() => setBannerIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === bannerIndex ? "bg-yellow-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-yellow-400 mb-8">Serviços</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Alicates", "Tesouras", "Facas"].map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-yellow-400/20 p-6 rounded-xl hover:scale-105 transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
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

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5511979626107"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full"
      >
        WhatsApp
      </a>

    </div>
  );
}
