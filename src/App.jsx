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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="text-yellow-400 font-bold">Empório da Afiação</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {["Início", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <button key={i} className="relative group hover:text-yellow-400">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </button>
            ))}
            <ShoppingCart />
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

          {/* Setas */}
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

      {/* MAPA COM DIVISÓRIA MELHORADA */}
      <section className="py-20">

        <div className="relative text-center mb-10">
          <h2 className="text-4xl text-yellow-400 inline-block relative group">
            Nossa Localização
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
          </h2>

          {/* LINHA DECORATIVA */}
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

      {/* FOOTER NOVO */}
      <footer className="bg-[#111] text-gray-400 pt-16 pb-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {/* LOGO */}
          <div>
            <h3 className="text-yellow-400 text-xl font-bold mb-4">
              Empório da Afiação
            </h3>
            <p>
              Afiação profissional de alicates, facas e instrumentos de estética.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>Início</li>
              <li>Produtos</li>
              <li>Avaliações</li>
              <li>Contato</li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <p>São Paulo - SP</p>
            <p>(11) 97962-6107</p>
            <p className="text-yellow-400">WhatsApp disponível</p>
          </div>

        </div>

        <div className="text-center text-gray-600 mt-10 text-sm">
          © 2026 Empório da Afiação — Todos os direitos reservados
        </div>

      </footer>

    </div>
  );
}
