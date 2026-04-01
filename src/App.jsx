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

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold">
              ✦
            </div>
            <h1 className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </h1>
          </div>

          {/* BARRA DE PESQUISA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-[400px] rounded-xl border-2 border-yellow-400/40 bg-black shadow-md transition-all duration-300 hover:shadow-[0_0_18px_rgba(250,204,21,0.25)] focus-within:border-yellow-400 focus-within:shadow-[0_0_22px_rgba(250,204,21,0.35)] overflow-hidden">

              <div className="flex items-stretch">
                <input
                  placeholder="Diga o que você procura"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-gray-400 focus:text-yellow-400"
                />

                <button
                  type="button"
                  className="flex items-center justify-center bg-yellow-400 px-4 text-black transition hover:bg-yellow-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                    />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            {["Início", "Serviços", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <span
                key={i}
                className="cursor-pointer relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* BANNER */}
      <section className="pt-28 px-6">
        <div className="relative rounded-3xl overflow-hidden">

          <img
            src={banners[bannerIndex]}
            className="w-full h-[500px] object-cover transition-all duration-700"
          />

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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={nextBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
          >
            ▶
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
            <div
              key={i}
              className="bg-[#0a0a0a] border border-yellow-400/20 p-6 rounded-xl hover:scale-105 transition"
            >
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
