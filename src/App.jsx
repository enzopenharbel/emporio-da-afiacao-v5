import React, { useEffect, useRef, useState } from "react";
import { Search, Star, Scissors, CheckCircle } from "lucide-react";

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

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </span>
          </div>

          {/* BUSCA (COM EFEITO) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[420px] group">

              <input
                placeholder="Buscar serviços..."
                className="
                  flex-1 bg-black border border-yellow-400/30 border-r-0
                  rounded-l-xl px-4 py-2 text-yellow-200 outline-none
                  transition
                  group-hover:border-yellow-400
                  focus:border-yellow-400
                  focus:shadow-[0_0_12px_rgba(250,204,21,0.5)]
                "
              />

              <button className="bg-yellow-400 hover:bg-yellow-300 px-4 rounded-r-xl transition">
                <Search size={18} className="text-black" />
              </button>

            </div>
          </div>

          {/* MENU RESTAURADO */}
          <nav className="hidden md:flex gap-8 text-sm">
            {["Início", "Serviços", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <button
                key={i}
                className="relative group hover:text-yellow-400 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-28">
  <div className="relative h-[550px] overflow-hidden">

    {/* IMAGEM COM EFEITO CINEMA */}
    <div className="absolute inset-0 scale-110 animate-[zoom_12s_linear_infinite]">
      <img
        src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
        className="w-full h-full object-cover"
      />
    </div>

    {/* OVERLAY CINEMÁTICO */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

    {/* TEXTO */}
    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
      <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 animate-fadeInUp">
        Afiação de Alta Precisão
      </h2>

      <p className="text-gray-300 mb-6 max-w-lg animate-fadeInUp delay-200">
        Qualidade profissional para alicates e instrumentos.
      </p>

      <a
        href="https://wa.me/5511979626107"
        className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-full text-black font-semibold w-fit animate-fadeInUp delay-300"
      >
        Falar no WhatsApp
      </a>
    </div>

  </div>
</section>

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
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl hover:-translate-y-2 transition border border-yellow-400/10">
              <Scissors className="text-yellow-400 mb-3" />
              <p>{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 text-center mb-10">
          Diferenciais
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Alta precisão", "Entrega rápida", "Atendimento profissional"].map((d, i) => (
            <div key={i}>
              <CheckCircle className="text-yellow-400 mx-auto mb-3" />
              <p className="text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="max-w-7xl mx-auto px-6 py-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="text-4xl text-yellow-400 text-center mb-10">
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

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-yellow-400/10 text-gray-500">
        © 2026 Empório da Afiação
      </footer>

    </div>
  );
}
