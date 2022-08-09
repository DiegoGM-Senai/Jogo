import React, { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Style.css";

const Velocidade = (props) => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [res, setRes] = useState();

  const si = useRef(null);
  const Di = useRef(null);
  const Pe = useRef(null);

  let n1 = Math.floor(Math.random() * 10);
  let n2 = Math.floor(Math.random() * 10);

  function render() {
    
    const sauro = Di.current;
    const pedra = Pe.current;
    const sinal = si.current;

    let S = Math.floor(Math.random() * 2);

    switch (S) {
      case 0:
        sinal.value = "+";
       
        break;
      case 1:
        sinal.value = "-";
        
        break;

      default:
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
  }
  useEffect(() => {
    render();
  });


  
  function calcular() {
    const sauro = Di.current;

    sauro.classList.add("jump");
    setTimeout(() => {
      sauro.classList.remove("jump");
    }, 1000);


  }

  return (
    <div className="fundo">
      <header>
        <h1>JOGO</h1>
      </header>
      <div className="container">
        <input type="number" value={n1} readOnly />
        <input type="text" ref={si} readOnly />
        <input type="number" value={n2} readOnly />
        <input type="number" placeholder="qual o resultado?" />

        <button onClick={calcular}>calculo</button>

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
