import React, { useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Style.css";

const Velocidade = (props) => {
  const si = useRef(null);
  const Di = useRef(null);
  const Pe = useRef(null);
  const x = useRef(null);
  const y = useRef(null);
  const res = useRef(null);

  useEffect(() => {
    const sauro = Di.current;
    const pedra = Pe.current;
    const sinal = si.current;
    const num1 = x.current;
    const num2 = y.current;
    const resp = res.current;

    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let S = Math.floor(Math.random() * 4);

    num1.value = n1;
    num2.value = n2;

    switch (S) {
      case 0:
        sinal.value = "+";

        break;
      case 1:
        sinal.value = "-";

        break;
      case 2:
        sinal.value = "/";

        break;
      case 3:
        sinal.value = "*";

        break;
      default:
    }

    function calcular() {
      sauro.classList.add("jump");
      setTimeout(() => {
        sauro.classList.remove("jump");
      }, 1000);
    }

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

    // document.addEventListener("keydown", jump);
  });

  return (
    <div className="fundo">
      <header>
        <h1>JOGO</h1>
      </header>
      <div className="container">
        <input type="number" ref={x} readOnly />
        <input type="text" ref={si} readOnly />
        <input type="number" ref={y} readOnly />
        <input type="number" ref={res} placeholder="qual o resultado?" />

        <button onClick={""}>calculo</button>

        <ReactAudioPlayer
          src={require("./som_fundo.mp3")}
          autoPlay
          loop
          hidden
        />

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
