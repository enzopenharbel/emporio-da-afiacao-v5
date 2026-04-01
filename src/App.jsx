import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <header className="fixed w-full z-50 bg-black border-b border-yellow-400/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 text-black p-2 rounded-xl font-bold shadow-md">
              ✦
            </div>

            <div className="leading-tight">
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

          <div>
            <input
              placeholder="Diga o que você procura"
              className="w-40 focus:w-72 transition-all duration-300 bg-[#0f172a] px-4 py-2 rounded-full shadow-md focus:shadow-2xl outline-none border border-yellow-400/20 focus:border-yellow-400 text-sm"
            />
          </div>

        </div>
      </header>

      <div className="pt-32 text-center">
        <h2 className="text-4xl text-yellow-400">Site em construção</h2>
      </div>

    </div>
  );
}
