import React, { useState } from "react";

const imagensProdutos = {
  "Alicate Mundial 522": "/images/produtos/alicate-mundial-522.jpg",
  "Alicate Mundial 722": "/images/produtos/alicate-mundial-722.jpg",
  "Alicate Mundial 772": "/images/produtos/alicate-mundial-772.jpg",
  "Alicate Mundial 777": "/images/produtos/alicate-mundial-777.jpg",
};

function criarProduto(nome, descricao) {
  return {
    nome,
    descricao,
    img: imagensProdutos[nome] || "https://via.placeholder.com/400",
  };
}

const produtos = [
  criarProduto("Alicate Mundial 522", "Uso doméstico"),
  criarProduto("Alicate Mundial 722", "Uso profissional"),
  criarProduto("Alicate Mundial 772", "Uso profissional"),
  criarProduto("Alicate Mundial 777", "Uso profissional"),
];

export default function App() {
  const [selecionado, setSelecionado] = useState(null);

  if (selecionado) {
    return (
      <div style={{ padding: 40 }}>
        <h1>{selecionado.nome}</h1>
        <img src={selecionado.img} style={{ width: 300 }} />
        <p>{selecionado.descricao}</p>
        <button onClick={() => setSelecionado(null)}>Voltar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Alicates</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        {produtos.map((p, i) => (
          <div key={i} onClick={() => setSelecionado(p)} style={{ cursor: "pointer" }}>
            <img src={p.img} style={{ width: "100%" }} />
            <p>{p.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
