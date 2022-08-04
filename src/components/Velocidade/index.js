import React, { useEffect, useRef } from "react";
import "./Style.css";

const Velocidade = (props) => {
  const Di = useRef(null);
  const Pe = useRef(null);
  useEffect(() => {
    const sauro = Di.current;
    const pedra = Pe.current;
    console.log(sauro);
    const jump = () => {
      sauro.classList.add("jump");
      setTimeout(() => {
        sauro.classList.remove("jump");
      }, 1000);
    };

    setInterval(() => {
      const posicaoPedra = pedra.offsetLeft;
      const posicaoSauro = +window
        .getComputedStyle(sauro)
        .bottom.replace("px", "");

      if (posicaoPedra <= 65 && posicaoPedra > 0 && posicaoSauro < 60) {
        pedra.style.animation = "none";
        pedra.style.left = `${posicaoPedra}px`;
      }
      clearInterval();
    }, 10);

    document.addEventListener("keydown", jump);
  });

  return (
    <div className="fundo">
      <header>
        <h1>JOGO</h1>
      </header>
      <div className="container">
        <input type="number" id="x" readOnly />
        <input type="text" id="sinal" readOnly />
        <input type="number" id="y" readOnly />
        <input type="number" id="resposta" placeholder="qual o resultado?" />
        <button onClick={''}r>calculo</button>

        <img
          ref={Di}
          className="Dinos"
          src={require("./dinossauro.png")}
          alt="Dino"
          width={80}
          height={80}
        />
        <img
          ref={Pe}
          className="Pedras"
          src={require("./pedras.png")}
          alt="pedra"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};
export default Velocidade;
