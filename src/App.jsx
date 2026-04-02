import React, { useEffect, useRef, useState } from "react";
import { Search, Star, Scissors, Wrench, CheckCircle } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-400/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </span>
          </div>

          {/* BUSCA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[420px] group">
              <input
                placeholder="Buscar serviços..."
                className="flex-1 bg-black border border-yellow-400/20 border-r-0 rounded-l-xl px-4 py-2 text-yellow-200 outline-none group-hover:border-yellow-400 focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.4)]"
              />
              <button className="bg-yellow-400 px-4 rounded-r-xl">
                <Search className="text-black" size={18} />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 relative">
        <div className="relative">

          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {banners.map((img, i) => (
              <img key={i} src={img} className="w-full h-[550px] object-cover" />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
              Afiação de Alta Precisão
            </h2>

            <p className="text-gray-300 max-w-xl mb-6">
              Qualidade profissional para alicates, tesouras e instrumentos.
            </p>

            <a
              href="#"
              className="bg-green-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-green-400 transition"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {["Afiações", "Produtos", "Gravações", "MolAS"].map((s, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 rounded-xl border border-yellow-400/10 hover:border-yellow-400/40 transition hover:-translate-y-2"
            >
              <Scissors className="text-yellow-400 mb-4" />
              <h3 className="text-yellow-400">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">
          Por que escolher a gente?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Alta precisão", "Entrega rápida", "Atendimento profissional"].map((d, i) => (
            <div key={i} className="text-center">
              <CheckCircle className="text-yellow-400 mx-auto mb-3" />
              <p className="text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Contato", "Envio", "Entrega"].map((step, i) => (
            <div key={i}>
              <div className="text-yellow-400 text-3xl mb-2">{i + 1}</div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">
          Avaliações
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
              </div>
              <p className="text-gray-300">Excelente serviço!</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5">
        <h2 className="text-3xl text-yellow-400 mb-4">
          Pronto para afiar seus instrumentos?
        </h2>
        <a href="#" className="bg-green-500 px-6 py-3 rounded-full text-black">
          Fale conosco
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-yellow-400/10 text-gray-500">
        © 2026 Empório da Afiação
      </footer>

    </div>
  );
}
