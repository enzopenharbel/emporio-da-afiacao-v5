import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Star,
  Scissors,
  CheckCircle,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
];

const produtos = [
  { nome: "Alicates", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600" },
  { nome: "Facas", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600" },
  { nome: "Tesouras", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600" },
  { nome: "Espátulas", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600" },
];

export default function App() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-6">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="text-yellow-400 font-bold">Empório da Afiação</span>
          </div>

          {/* BUSCA RESTAURADA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[420px] group">
              <input
                placeholder="Buscar produtos..."
                className="flex-1 bg-black border border-yellow-400/30 border-r-0 rounded-l-xl px-4 py-2 text-yellow-200 outline-none group-hover:border-yellow-400 focus:border-yellow-400 transition"
              />
              <button className="bg-yellow-400 px-4 rounded-r-xl hover:bg-yellow-300 transition">
                <Search size={18} className="text-black" />
              </button>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {["Início", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <button key={i} className="relative group hover:text-yellow-400">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </button>
            ))}

            {/* CARRINHO COM EFEITO */}
            <button className="relative group">
              <ShoppingCart className="group-hover:text-yellow-400 transition" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full group-hover:scale-110 transition">
                0
              </span>
            </button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-28">
        <div className="relative h-[500px] overflow-hidden">
          {banners.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-full h-full object-cover transition-all duration-700 ${
                i === bannerIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <h2 className="text-5xl text-yellow-400 font-bold mb-4">
                Afiação Profissional
              </h2>
              <a className="bg-green-500 px-6 py-3 rounded-full text-black">
                WhatsApp
              </a>
            </div>
          </div>

          <button
            onClick={() =>
              setBannerIndex((prev) =>
                prev === 0 ? banners.length - 1 : prev - 1
              )
            }
            className="absolute left-5 top-1/2 bg-black/50 p-3 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setBannerIndex((prev) => (prev + 1) % banners.length)
            }
            className="absolute right-5 top-1/2 bg-black/50 p-3 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-20">
        <div className="bg-[#0a0a0a] py-6 text-center border-y border-yellow-400/20 mb-10">
          <h2 className="text-4xl text-yellow-400 relative inline-block group">
            Produtos
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {produtos.map((p, i) => (
            <div key={i} className="bg-[#0a0a0a] rounded-xl overflow-hidden hover:-translate-y-2 transition">
              <img src={p.img} className="h-40 w-full object-cover" />
              <p className="text-center py-3 text-yellow-400">{p.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20">
        <div className="relative text-center mb-10">
          <h2 className="text-4xl text-yellow-400 inline-block relative group">
            Nossa Localização
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>
          <div className="mt-6 h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
        </div>

        <div className="w-full border-t border-yellow-400/30 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
          <iframe
            src="https://www.google.com/maps?q=Rua+Brigadeiro+Henrique+Fontenelle,+1056,+São+Paulo&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

      {/* FOOTER COM "CAÍDA" */}
      <footer className="bg-[#111] text-gray-400 pt-24 pb-6 relative overflow-hidden">

  {/* FUNDO COM CAÍDA INTEGRADA */}
  <div
    className="absolute top-0 left-0 w-full h-24 bg-[#111]"
    style={{
      clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
    }}
  ></div>

        {/* CORTE DIAGONAL */}
        <div className="absolute top-0 left-0 w-full h-16 bg-black clip-path-footer"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-4">
              Empório da Afiação
            </h3>
            <p>
              Afiação profissional de alicates, facas e instrumentos.
            </p>
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

        <div className="text-center mt-10 text-gray-600 text-sm">
          © 2026 Empório da Afiação
        </div>

      </footer>

    </div>
  );
}
