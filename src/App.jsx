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
  {
    nome: "Alicates",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Facas",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Tesouras",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Espátulas",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80",
  },
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    });

    sectionsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-6">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[420px] group">
              <input
                placeholder="Buscar produtos..."
                className="flex-1 bg-black border border-yellow-400/30 border-r-0 rounded-l-xl px-4 py-2 text-yellow-200 outline-none"
              />
              <button className="bg-yellow-400 px-4 rounded-r-xl">
                <Search size={18} className="text-black" />
              </button>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm items-center">
            {["Início", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <button key={i} className="hover:text-yellow-400 transition">
                {item}
              </button>
            ))}

            <button className="relative hover:text-yellow-400">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded-full">
                0
              </span>
            </button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-28">
        <div className="relative h-[550px] overflow-hidden">

          {banners.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                i === bannerIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
              Afiação de Alta Precisão
            </h2>

            <p className="text-gray-300 mb-6 max-w-lg">
              Qualidade profissional para alicates e instrumentos.
            </p>

            <a
              href="https://wa.me/5511979626107"
              className="bg-green-500 px-6 py-3 rounded-full text-black font-semibold w-fit"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button
            onClick={() =>
              setBannerIndex((prev) =>
                prev === 0 ? banners.length - 1 : prev - 1
              )
            }
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setBannerIndex((prev) => (prev + 1) % banners.length)
            }
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-20"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
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

      {/* PRODUTOS */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">
          Produtos
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {produtos.map((p, i) => (
            <div key={i} className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-yellow-400/10 hover:-translate-y-2 transition">

              <img src={p.img} className="w-full h-40 object-cover" />

              <div className="p-4 text-center">
                <p className="text-yellow-400 font-semibold">{p.nome}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 text-center mb-10">
          Avaliações
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <p className="text-gray-300">Excelente serviço!</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20">
        <h2 className="text-4xl text-yellow-400 text-center mb-10">
          Nossa Localização
        </h2>

        <div className="w-full border-y border-yellow-400/30">
          <iframe
            src="https://www.google.com/maps?q=Rua+Brigadeiro+Henrique+Fontenelle,+1056,+São+Paulo&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-yellow-400/10 text-gray-500">
        © 2026 Empório da Afiação
      </footer>

    </div>
  );
}
