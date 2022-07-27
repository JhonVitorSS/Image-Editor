import React, { useState } from "react";
import Effects from "./components/Effects";
import PreviewImg from "./img/image-placeholder.svg"



import "./Sass/main.sass"
function App() {

  const [imagem, setImagem] = useState(PreviewImg)
  const [valorInput, setvalorInput]=useState(100)

  const pegarImg = () => {
    document.querySelector(".file-input").click()
  }
  const removerClassDisable = () => {
    document.querySelector(".container").classList.remove("disable")

  }
  const mostrarImg = () => {
    let arquivoEscolhido = document.querySelector(".file-input").files[0]
    if (!arquivoEscolhido) return console.log("Você não escolheu a imagem");
    setImagem(URL.createObjectURL(arquivoEscolhido))

    removerClassDisable()
  }


  let filtrosBotoes = document.querySelectorAll(".filter button")
  filtrosBotoes.forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelector(".filter .active").classList.remove("active")
      botao.classList.add("active")

      let filtroAtual = document.querySelector(".filter-info .name")
      filtroAtual.innerHTML = botao.innerText


    })
  })










  return (
    <>


      <div className="container disable">
        <h2>Easy Image Editor</h2>
        <div className="wrapper">
          <div className="editor-panel">
            <div className="filter">
              <label className="title">Filters</label>

              <div className="options">
                <Effects />
              </div>
              <div className="slider">
                <div className="filter-info">
                  <p className="name">Brilho</p>
                  <p className="value">{valorInput}%</p>
                </div>
                <input onChange={(e)=>setvalorInput(e.target.value)} type="range"  min="0" max="200" />
              </div>
            </div>
            <div className="rotate">
              <label className="title">Girar & Inverter</label>
              <div className="options">
                <button id="left"><i className="fa-solid fa-rotate-left"></i></button>
                <button id="right"><i className="fa-solid fa-rotate-right"></i></button>
                <button id="horizontal"><i className='bx bx-reflect-vertical'></i></button>
                <button id="vertical"><i className='bx bx-reflect-horizontal' ></i></button>
              </div>
            </div>
          </div>
          <div className="preview-img">
            <img src={imagem} alt="preview-img" className="imagemDaTela" />
          </div>
        </div>
        <div className="controls">
          <button class="reset-filter">Resetar Filtros</button>
          <div className="row">
            <input onChange={() => mostrarImg()} type="file" className="file-input" accept="image/*" hidden />
            <button className="choose-img" onClick={() => pegarImg()}>Escolher Imagem</button>
            <button className="save-img">Salvar Imagem</button>
          </div>
        </div>
      </div>




    </>
  );
}

export default App;
