import React, { useEffect, useState } from "react";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
    title: "Afiação Profissional",
    text: "Alicates, tesouras e facas com acabamento impecável.",
  },
  {
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Promoção Especial",
    text: "A cada 10 alicates afiados, o 11º sai de graça.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    title: "Seja um Parceiro",
    text: "Tenha nosso serviço no seu comércio e aumente seus ganhos.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 text-black p-2 rounded-xl font-bold shadow-md">
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

          <nav className="hidden md:flex gap-8 text-sm text-white">
            <button>Início</button>
            <button>Produtos</button>
            <button>Serviços</button>
            <button>Avaliações</button>
            <button>Contato</button>
          </nav>

          <input
            placeholder="Diga o que você procura"
            className="w-40 focus:w-72 transition-all duration-300 bg-[#0f172a] px-4 py-2 rounded-full shadow-md focus:shadow-2xl outline-none border border-yellow-400/20 focus:border-yellow-400 text-sm"
          />
        </div>
      </header>

      {/* BANNER ROTATIVO */}
     <section className="pt-28 px-6">
  <div className="relative rounded-3xl overflow-hidden shadow-2xl">

    <img
      src={banners[index].img}
      className="w-full h-[500px] object-cover transition duration-700"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/70" />

    {/* TEXTO */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

      <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
        {banners[index].title}
      </h2>

      <p className="text-gray-300 max-w-xl mb-6 text-lg">
        {banners[index].text}
      </p>

    </div>

    {/* SETA ESQUERDA */}
    <button
      onClick={() => setIndex((index - 1 + banners.length) % banners.length)}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full"
    >
      ‹
    </button>

    {/* SETA DIREITA */}
    <button
      onClick={() => setIndex((index + 1) % banners.length)}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full"
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

    </div>
  );
}
