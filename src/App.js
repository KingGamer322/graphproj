import './App.css';
import React from 'react';
import peepologo from './smallestpeepo.png';


function App() {
  return (
    <div className="App">
      <div className="Navigation">
          <img className="logo" src={peepologo} alt="peepo on chair"></img>
        <div className="graph1">
          <button className="graphButton">Доска 1</button>
        </div>
        <div className="graph2">
          <button className="graphButton second">Доска 2</button>
        </div>
        <div className="graph3">
          <button className="graphButton third">+</button>
        </div>
          <img className="logo Profile" src={peepologo} alt="peepo on chair"></img>
      </div>
      <div className="SideAndGraph">
        <div className="SideBar">
            <button className="insideButton top"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Создать</span></span></button>
            <div className="dropdownElements">
              <button className="liButton first">Вершину</button>
              <button className="liButton">Ребро</button>
              <button className="liButton">Путь</button>
              <button className="liButton last">Краткий путь от начала до вершины</button>
            </div>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Удалить</span></span></button>
            <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Изменить</span></span></button>
            <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Удалить</span></span></button>
            <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Экспортировать</span></span></button>
            <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside wide">Обновить представление</span></span></button>
            <div className="dropdownElements">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
            {/* <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside wide">Что-то новое и большое</span></span></button> */}
            <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div>
        </div>
        <div className="Graph"></div>
      </div>
    </div>
  );
}

export default App;
