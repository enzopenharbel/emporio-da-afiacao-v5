import React, { useState, useEffect } from "react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371"
];

export default function App() {
  const [search, setSearch] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#020617] text-white min-h-screen">

      {/* HEADER PREMIUM */}
      <header className="flex justify-between items-center p-4 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-black p-2 rounded-xl font-bold shadow-lg">
            ✦
          </div>
          <div>
            <h1 className="text-yellow-400 font-bold text-lg">
              Empório da Afiação
            </h1>
            <span className="text-xs text-gray-400">
              Afiação profissional e acessórios
            </span>
          </div>
        </div>

        {/* PESQUISA ANIMADA */}
        <input
          placeholder="Diga o que você procura"
          className="w-32 focus:w-64 transition-all duration-300 bg-[#0f172a] px-4 py-2 rounded-full shadow-md focus:shadow-2xl outline-none border border-white/10 focus:border-yellow-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* BANNER TOP (ESTILO IMAGEM ORIGINAL) */}
      <section className="p-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          <img
            src={banners[i]}
            className="w-full h-[420px] object-cover transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70" />

          {/* TEXTO CENTRAL */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
              Afiação Profissional
            </h2>

            <p className="text-gray-300 max-w-xl mb-6 text-lg">
              Alicates, tesouras e instrumentos com acabamento impecável para profissionais exigentes.
            </p>

            <div className="flex gap-4">

              <a
                href="https://wa.me/5511979626107"
                target="_blank"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
              >
                Solicitar Agora
              </a>

              <button
                className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Ver Serviços
              </button>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
