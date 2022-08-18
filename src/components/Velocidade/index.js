import React, { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Style.css";

const Velocidade = (props) => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [res, setRes] = useState();
  const [operacao, setOperacao] = useState();

  let n1 = Math.floor(Math.random() * 10);
  let n2 = Math.floor(Math.random() * 10);

  const si = useRef(null);
  const Di = useRef(null);
  const Pe = useRef(null);

  const handleOnChangeRes = (event) => {
    let newRes = event.target.value;
    setRes(newRes);
  };

  const setRender = () => {
    const sinal = si.current;
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    setNum1(n1);
    setNum2(n2);
    let S = Math.floor(Math.random() * 2);
    console.log("chamou");

    switch (S) {
      case 0:
        sinal.value = "+";
        break;
      case 1:
        sinal.value = "-";
        break;
      default:
        sinal.value = "?";
    }
    setOperacao(sinal.value);


  };

  function render() {
    const sauro = Di.current;
    const pedra = Pe.current;
    const sinal = si.current;

    console.log("chamou");

    
    setNum1(n1);
    setNum2(n2);

    let S = Math.floor(Math.random() * 2);

    switch (S) {
      case 0:
        sinal.value = "+";
        break;
      case 1:
        sinal.value = "-";
        break;
      default:
        sinal.value = "?";
    }
    setOperacao(sinal.value);

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
    // render();
    
  },[]);

  function calcular() {
    const sauro = Di.current;

    if (operacao === "+") {
      if (res === num1 + num2) {
        console.log("acerto");
        console.log(res);
      } else {
        console.log("erro na adicao");
        console.log(res);
      }
    } else {
    }

    if (operacao === "-") {
      console.log(num1 - num2);
      console.log(res);
    } else {
    }

    sauro.classList.add("jump");
    setTimeout(() => {
      sauro.classList.remove("jump");
    }, 1000);


    n1 = Math.floor(Math.random() * 10);
    n2 = Math.floor(Math.random() * 10);
  }

  return (
    <div className="fundo">
      <header>
        <h1>JOGO</h1>
      </header>
      <div className="container">
        <input type="number" value={num1} readOnly />
        <input type="text" ref={si} readOnly />
        <input type="number" value={num2} readOnly />
        <input
          type="number"
          value={res}
          onChange={handleOnChangeRes}
          placeholder="qual o resultado?"
        />

        <button onClick={calcular}>calculo</button>

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
