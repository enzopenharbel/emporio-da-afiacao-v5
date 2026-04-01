import React, { useState, useEffect } from "react";

const banners = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371"
];

export default function App() {
  const [search,setSearch]=useState("");
  const [i,setI]=useState(0);

  useEffect(()=>{
    const t=setInterval(()=>setI(p=>(p+1)%banners.length),4000);
    return ()=>clearInterval(t);
  },[]);

  return (
    <div className="bg-[#020617] text-white min-h-screen">

      <header className="flex justify-between items-center p-4 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-black p-2 rounded">✦</div>
          <div>
            <h1 className="text-yellow-400 font-bold">Empório da Afiação</h1>
            <span className="text-xs text-gray-400">Afiação profissional e acessórios</span>
          </div>
        </div>

        <input
          placeholder="Diga o que você procura"
          className="w-32 focus:w-64 transition-all duration-300 bg-gray-900 px-4 py-2 rounded-full shadow-md focus:shadow-xl outline-none"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </header>

      <section className="p-6">
        <div className="relative">
          <img src={banners[i]} className="w-full h-80 object-cover rounded-xl"/>
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Afiação Profissional de Alta Precisão
            </h2>
            <p className="text-gray-300 mb-4">
              Alicates, tesouras e instrumentos com acabamento impecável.
            </p>
            <a href="https://wa.me/5511979626107" target="_blank"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
              Solicitar Agora
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
