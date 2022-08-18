import React, { useEffect, useState, useRef } from "react";
import "./Style.css";

const DesafioMatematica = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [res, setRes] = useState();
  const [operacao, setOperacao] = useState();
  const [ponto, setPonto] = useState();
  const [disable, setDisable] = useState(false);
  const si = useRef(null);
  const Di = useRef(null);
  const Pe = useRef(null);

  const handleGerarNumber = () => {
    const pedra = Pe.current;
    pedra.classList.add("pedra-move");

    let score = 0;
    setPonto(score);
    setDisable(true);

    const sinal = si.current;
    let S = Math.floor(Math.random() * 4);

    switch (S) {
      case 0:
        sinal.value = "+";
        break;
      case 1:
        sinal.value = "-";
        break;
      case 2:
        sinal.value = "*";
        break;
      case 3:
        sinal.value = "/";
        break;
      default:
        sinal.value = "?";
    }
    setOperacao(sinal.value);
    handleRenderNum1();
    handleRenderNum2();
  };

  const handleRenderNum1 = () => {
    let n1 = Math.floor(Math.random() * 10 + 1);
    setNum1(n1);
  };

  const handleRenderNum2 = () => {
    let n2 = Math.floor(Math.random() * 10 + 1);
    setNum2(n2);
  };

  const handleStopStone = () => {
    const pedra = Pe.current;
    const sauro = Di.current;

    setInterval(() => {
      const posicaoPedra = pedra.offsetLeft;
      const posicaoSauro = +window
        .getComputedStyle(sauro)
        .bottom.replace("px", "");

      if (posicaoPedra <= 65 && posicaoPedra > 0 && posicaoSauro < 220) {
        pedra.style.animation = "none";
        pedra.style.left = `${posicaoPedra}px`;
      }
      clearInterval();
    }, 10);
  };

  const onClickRenderNumbers = () => {
    setDisable(true);

    const sinal = si.current;
    let S = Math.floor(Math.random() * 4);

    switch (S) {
      case 0:
        sinal.value = "+";
        break;
      case 1:
        sinal.value = "-";
        break;
      case 2:
        sinal.value = "*";
        break;
      case 3:
        sinal.value = "/";
        break;
      default:
        sinal.value = "?";
    }
    setOperacao(sinal.value);
    handleRenderNum1();
    handleRenderNum2();
  };

  const handleChangeRes = (event) => {
    let newRes = event.target.value;
    setRes(newRes);
  };

  const onClickCalcular = () => {
    const sauro = Di.current;

    if (operacao === "+") {
      if (Number(res) === num1 + num2) {
        console.log("acerto");
        setPonto(ponto + 10);
        sauro.classList.add("jump");
        setTimeout(() => {
          sauro.classList.remove("jump");
        }, 2000);

        onClickRenderNumbers();
        let reset = "";
        setRes(reset);
      } else {
        alert("vc erro a resposta seria " + num1 + num2);
        window.location.reload();
      }
    }

    if (operacao === "-") {
      if (Number(res) === num1 - num2) {
        setPonto(ponto + 10);
        sauro.classList.add("jump");
        setTimeout(() => {
          sauro.classList.remove("jump");
        }, 1500);
        onClickRenderNumbers();
        let reset = "";
        setRes(reset);
      } else {
        alert("vc erro a resposta seria " + num1 - num2);
        window.location.reload();
      }
    }

    if (operacao === "*") {
      if (Number(res) === num1 * num2) {
        console.log("acerto");
        console.log(ponto + 10);
        setPonto(ponto + 10);
        sauro.classList.add("jump");
        setTimeout(() => {
          sauro.classList.remove("jump");
        }, 1500);
        onClickRenderNumbers();
        let reset = "";
        setRes(reset);
      } else {
        alert("vc erro, a resposta correta seria: " + num1 * num2);
        window.location.reload();
      }
    }

    if (operacao === "/") {
      if (Number(res) === num1 / num2) {
        console.log("acerto");
        setPonto(ponto + 10);
        sauro.classList.add("jump");
        setTimeout(() => {
          sauro.classList.remove("jump");
        }, 1500);

        onClickRenderNumbers();

        let reset = "";
        setRes(reset);
      } else {
        alert("vc erro a resposta seria " + num1 / num2);
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    handleStopStone();
  });

  return (
    <div className="desafio-container">
      <div className="header">
        <label>MathDino</label>
      </div>
      <div className="math-score">
        <p>{ponto}</p>
      </div>
      <input type="number" value={num1} readOnly />
      <input type="text" ref={si} readOnly />
      <input type="number" value={num2} readOnly />
      <input type="number" value={res} onChange={handleChangeRes} />

      <button type="button" disabled={disable} onClick={handleGerarNumber}>
        Iniciar
      </button>
      <button type="button" onClick={onClickCalcular}>
        Calcular
      </button>

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
  );
};

export default DesafioMatematica;
