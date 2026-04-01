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
  {
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
    title: "Afiação Profissional",
    text: "Alicates, tesouras e facas com corte perfeito.",
  },
  {
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Promoção Especial",
    text: "A cada 10 alicates, o 11º é grátis.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    title: "Seja um Parceiro",
    text: "Ofereça nosso serviço no seu comércio.",
  },
];

// estilos globais
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideFade {
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
}
.banner-slide { animation: slideFade .8s ease; }

.menu-link { position: relative; }
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
.menu-link:hover::after { width: 100%; }
`;
document.head.appendChild(style);

export default function App() {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  const filtered = useMemo(() => {
    return services.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center rounded-xl font-bold">
              ✦
            </div>
            <h1 className="text-yellow-400 font-bold">Empório da Afiação</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <button className="menu-link">Início</button>
            <button className="menu-link">Serviços</button>
            <button className="menu-link">Produtos</button>
            <button className="menu-link">Avaliações</button>
            <button className="menu-link">Contato</button>
          </nav>

          <div className="relative">
            <span className="absolute left-3 top-2 text-yellow-400">🔍</span>
            <input
              placeholder="Diga o que você procura"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 w-36 focus:w-60 transition-all duration-300 bg-[#020617] border border-yellow-400/20 rounded-full px-4 py-2 text-sm shadow-lg focus:shadow-yellow-400/30 focus:border-yellow-400 outline-none focus:text-yellow-400"
            />
          </div>

        </div>
      </header>

      {/* BANNER */}
      <section className="pt-28 px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          <img
            key={index}
            src={banners[index].img}
            className="w-full h-[500px] object-cover banner-slide"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

            <h2 className="text-5xl font-bold text-yellow-400 mb-4">
              {banners[index].title}
            </h2>

            <p className="text-gray-200 max-w-xl mb-4">
              {banners[index].text}
            </p>

            <div className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg mb-4">
              🔥 Promoção: 10 + 1 GRÁTIS
            </div>

            <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
              Ver Serviços
            </button>

          </div>

          {/* SETAS */}
          <button
            onClick={() => setIndex((index - 1 + banners.length) % banners.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % banners.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
          >
            ›
          </button>

          {/* BOLINHAS */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {banners.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-yellow-400" : "bg-white/40"
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
            <div key={i} className="bg-[#0f172a] p-6 rounded-2xl hover:scale-105 transition">
              <s.icon className="text-yellow-400 mb-2" />
              <p>{s.title}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
