import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Star, Scissors, Wrench } from "lucide-react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
];

const services = [
  { title: "Afiações", icon: Scissors, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371" },
  { title: "Venda de Produtos", icon: Wrench, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { title: "Gravações", icon: Star, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
  { title: "Troca de Molas", icon: Wrench, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70" },
];

export default function App() {
  const [search, setSearch] = useState("");
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
            entry.target.classList.remove("opacity-0", "translate-x-20", "-translate-x-20");
            entry.target.classList.add("opacity-100", "translate-x-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  const filteredServices = useMemo(() => {
    return services.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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

          {/* BUSCA COM EFEITO */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex w-full max-w-[420px] group">

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

          {/* MENU */}
          <nav className="hidden md:flex gap-8 text-sm">
            {["Início", "Serviços", "Avaliações", "Contato"].map((item, i) => (
              <button key={i} className="relative group hover:text-yellow-400">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
              </button>
            ))}
          </nav>

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

          {/* TEXTO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl text-yellow-400 font-bold">
              Afiação Profissional
            </h2>
          </div>

          {/* SETAS */}
          <button onClick={() => setBannerIndex((bannerIndex - 1 + banners.length) % banners.length)} className="absolute left-6 top-1/2 text-6xl opacity-30">❮</button>
          <button onClick={() => setBannerIndex((bannerIndex + 1) % banners.length)} className="absolute right-6 top-1/2 text-6xl opacity-30">❯</button>

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
      <section ref={(el) => (sectionsRef.current[0] = el)} className="max-w-7xl mx-auto px-6 py-16 opacity-0 translate-x-20 transition-all duration-700">
        <div className="grid md:grid-cols-4 gap-6">
          {filteredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative overflow-hidden rounded-xl group">
                <img src={s.image} className="h-[240px] w-full object-cover group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-4 left-4">
                  <Icon className="text-yellow-400 mb-2" />
                  <h3 className="text-yellow-400">{s.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section ref={(el) => (sectionsRef.current[1] = el)} className="max-w-7xl mx-auto px-6 py-16 opacity-0 -translate-x-20 transition-all duration-700">
        <h2 className="text-3xl text-yellow-400 mb-8">Por que escolher a gente?</h2>
        <ul className="space-y-4 text-gray-300">
          <li>✔ Atendimento rápido</li>
          <li>✔ Alta precisão</li>
          <li>✔ Equipamentos profissionais</li>
        </ul>
      </section>

      {/* COMO FUNCIONA */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className="max-w-7xl mx-auto px-6 py-16 opacity-0 translate-x-20 transition-all duration-700">
        <h2 className="text-3xl text-yellow-400 mb-8">Como funciona</h2>
        <p className="text-gray-300">
          Entre em contato pelo WhatsApp, envie seu material e receba o serviço com qualidade profissional.
        </p>
      </section>

      {/* CONTATO */}
      <section ref={(el) => (sectionsRef.current[3] = el)} className="max-w-7xl mx-auto px-6 pb-16 opacity-0 -translate-x-20 transition-all duration-700">
        <h2 className="text-3xl text-yellow-400 mb-6">Contato</h2>
        <a href="https://wa.me/5511979626107" className="bg-green-500 px-6 py-3 rounded-full text-black">
          Falar no WhatsApp
        </a>
      </section>

    </div>
  );
}
