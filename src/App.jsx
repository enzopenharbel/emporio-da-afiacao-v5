import React, { useEffect, useState } from "react";
import { Star, Scissors, Wrench } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
];

export default function App() {
  const [search, setSearch] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 md:h-20 scale-125 drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]"
            />
            <h1 className="text-yellow-400 font-bold text-xl">
              Empório da Afiação
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {["Início", "Serviços", "Produtos", "Avaliações", "Contato"].map((item, i) => (
              <span key={i} className="cursor-pointer relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </nav>

        </div>
      </header>

      {/* BANNER */}
      <section className="pt-28 w-full overflow-hidden">
        <div className="relative w-full">

          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {banners.map((img, i) => (
              <img key={i} src={img} className="w-full h-[520px] object-cover" />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">
              Afiação Profissional
            </h2>
            <p className="text-gray-300">
              Alicates, tesouras e facas com acabamento impecável.
            </p>
          </div>

        </div>
      </section>

      {/* BARRA SERVIÇOS */}
      <div className="w-full bg-[#0a0a0a] border-y border-yellow-400/20 py-6 mt-16">
        <div className="text-center relative group cursor-default">
          <h2 className="text-4xl font-bold text-yellow-400 inline-block">
            Nossos Serviços
          </h2>

          {/* LINHA ANIMADA */}
          <div className="h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2"></div>
        </div>
      </div>

      {/* SERVIÇOS COM IMAGEM */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

            <div className="absolute bottom-4 left-4">
              <Scissors className="text-yellow-400 mb-2" />
              <h3 className="text-yellow-400 font-semibold">Afiações</h3>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

            <div className="absolute bottom-4 left-4">
              <Wrench className="text-yellow-400 mb-2" />
              <h3 className="text-yellow-400 font-semibold">Produtos</h3>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

            <div className="absolute bottom-4 left-4">
              <Star className="text-yellow-400 mb-2" />
              <h3 className="text-yellow-400 font-semibold">Gravações</h3>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

            <div className="absolute bottom-4 left-4">
              <Wrench className="text-yellow-400 mb-2" />
              <h3 className="text-yellow-400 font-semibold">Troca de Molas</h3>
            </div>
          </div>

        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl text-yellow-400 mb-8">Avaliações</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
              </div>
              <p className="text-gray-300">Serviço excelente!</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5511979626107"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full"
      >
        WhatsApp
      </a>

    </div>
  );
}
