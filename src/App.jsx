import React, { useEffect, useMemo, useState } from "react";
import { Scissors, Wrench, Star } from "lucide-react";

const services = [
  { title: "Afiação de Alicates", icon: Scissors },
  { title: "Afiação de Tesouras", icon: Scissors },
  { title: "Afiação de Facas", icon: Scissors },
  { title: "Afiação de Espátulas", icon: Scissors },
  { title: "Troca de Molas", icon: Wrench },
];

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
];

// estilos
const style = document.createElement("style");
style.innerHTML = `
.banner-slide {
  animation: slideFade .8s ease;
}
@keyframes slideFade {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

.menu-link {
  position: relative;
}
.menu-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #facc15;
  transition: .3s;
}
.menu-link:hover::after {
  width: 100%;
}
`;
document.head.appendChild(style);

export default function App() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    return services.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center rounded-xl font-bold">
              ✦
            </div>
            <h1 className="text-yellow-400 font-bold tracking-wide">
              Empório da Afiação
            </h1>
          </div>

          {/* BUSCA CENTRAL */}
         <div className="hidden md:flex flex-1 justify-center">
  <div className="flex items-center w-[400px] bg-black border-2 border-yellow-400/40 rounded-xl transition-all duration-300 shadow-md hover:shadow-yellow-400/30 focus-within:shadow-yellow-400/60 focus-within:border-yellow-400">

    {/* INPUT */}
    <input
      placeholder="Diga o que você procura"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 px-4 py-2 bg-transparent text-sm outline-none placeholder-gray-400 focus:text-yellow-400"
    />

    {/* BOTÃO COM ÍCONE SVG MODERNO */}
    <button className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 flex items-center justify-center transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        />
      </svg>
    </button>

  </div>
</div>
          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            <button className="menu-link">Início</button>
            <button className="menu-link">Serviços</button>
            <button className="menu-link">Produtos</button>
            <button className="menu-link">Avaliações</button>
            <button className="menu-link">Contato</button>
          </nav>

        </div>
      </header>

      {/* BANNER */}
      <section className="pt-28 px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          <img
            key={bannerIndex}
            src={banners[bannerIndex]}
            className="w-full h-[500px] object-cover banner-slide"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              Afiação Profissional
            </h2>
            <p className="text-gray-300 max-w-xl">
              Alicates, tesouras e facas com acabamento impecável.
            </p>
          </div>

          {/* SETAS */}
          <button
            onClick={() =>
              setBannerIndex((bannerIndex - 1 + banners.length) % banners.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-3 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setBannerIndex((bannerIndex + 1) % banners.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-3 rounded-full"
          >
            ›
          </button>

          {/* BOLINHAS */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {banners.map((_, i) => (
              <div
                key={i}
                onClick={() => setBannerIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === bannerIndex ? "bg-yellow-400" : "bg-white/40"
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
          {filtered.map((s, i) => (
            <div
              key={i}
              className="bg-[#0f172a] p-6 rounded-2xl hover:scale-105 transition"
            >
              <s.icon className="text-yellow-400 mb-2" />
              <p>{s.title}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
