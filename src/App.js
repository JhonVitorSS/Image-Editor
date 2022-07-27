import Effects from "./components/Effects";



import "./Sass/main.sass"
function App() {
  return (
    <>


      <div className="container disable">
        <h2>Easy Image Editor</h2>
        <div className="wrapper">
          <div className="editor-panel">
            <div className="filter">
              <label className="title">Filters</label>
              
              <div className="options">
                <Effects/>
              </div>
              <div className="slider">
                <div className="filter-info">
                  <p className="name">Brilho</p>
                  <p className="value">100%</p>
                </div>
                <input type="range" value="100" min="0" max="200"/>
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
            <img src="image-placeholder.svg" alt="preview-img"/>
          </div>
        </div>
        <div className="controls">
          <button class="reset-filter">Resetar Filtros</button>
          <div className="row">
            <input type="file" className="file-input" accept="image/*" hidden/>
              <button className="choose-img">Choose Image</button>
            <button className="save-img">Save Image</button>
          </div>
        </div>
      </div>




    </>
  );
}

export default App;
