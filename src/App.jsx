import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Star, Scissors, Wrench } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
];

const services = [
  {
    title: "Afiações",
    description: "Olá! Gostaria de fazer uma afiação.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Venda de Produtos",
    description: "Olá! Quero saber sobre os produtos.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gravações",
    description: "Olá! Quero fazer uma gravação personalizada.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Troca de Molas",
    description: "Olá! Preciso trocar a mola do alicate.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);

  const servicosRef = useRef(null);
  const avaliacoesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = [servicosRef.current, avaliacoesRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-20", "-translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => el && observer.observe(el));
  }, []);

  const filteredServices = useMemo(() => {
    const term = search.toLowerCase();
    return services.filter((s) => s.title.toLowerCase().includes(term));
  }, [search]);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-6">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <h1 className="text-yellow-400 font-bold">Empório da Afiação</h1>
          </div>

          {/* BUSCA */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[600px]">

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar serviços..."
                className="flex-1 bg-black border border-yellow-400/40 border-r-0 rounded-l-xl px-4 py-3 text-yellow-200 outline-none"
              />

              <button className="bg-yellow-400 px-5 rounded-r-xl">
                <Search className="text-black" />
              </button>

            </div>
          </div>

        </div>
      </header>

      {/* BANNER */}
      <section className="pt-28">
        <div className="relative">

          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {banners.map((img, i) => (
              <img key={i} src={img} className="w-full h-[520px] object-cover" />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade">
            <h2 className="text-5xl text-yellow-400 font-bold mb-4">
              Afiação Profissional
            </h2>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        ref={servicosRef}
        className="max-w-7xl mx-auto px-6 py-16 opacity-0 translate-x-20 transition-all duration-700"
      >
        <div className="grid md:grid-cols-4 gap-6">

          {filteredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={`https://wa.me/5511979626107?text=${encodeURIComponent(s.description)}`}
                target="_blank"
                className="relative overflow-hidden rounded-xl group hover:scale-105 transition"
              >
                <img src={s.image} className="h-[240px] w-full object-cover group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute bottom-4 left-4">
                  <Icon className="text-yellow-400 mb-2" />
                  <h3 className="text-yellow-400">{s.title}</h3>
                </div>
              </a>
            );
          })}

        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section
        ref={avaliacoesRef}
        className="max-w-7xl mx-auto px-6 pb-16 opacity-0 -translate-x-20 transition-all duration-700"
      >
        <h2 className="text-yellow-400 mb-6 text-2xl">Avaliações</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((_, i) => (
            <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
              </div>
              <p>Excelente serviço!</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
