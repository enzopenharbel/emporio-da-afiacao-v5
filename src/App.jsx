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
            <div className="relative w-[350px]">
              <span className="absolute left-4 top-2.5 text-yellow-400">🔍</span>
              <input
                placeholder="Diga o que você procura"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-black border border-yellow-400/20 shadow-lg focus:shadow-yellow-400/40 focus:border-yellow-400 outline-none text-sm transition-all duration-300"
              />
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
