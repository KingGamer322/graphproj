import './App.css';
import React from 'react';
import peepologo from './smallestpeepo.png';

function App() {
  return (
    <div className="App">
      <div className="Navigation">
          <img className="logo" src={peepologo} alt="peepo on chair"></img>
        <div className="graph1">
          <select className="graphSelect">Доска 1</select>
        </div>
        <div className="graph2">
          <select className="graphSelect">Доска 2</select>
        </div>
        <div className="Profile">
          <p>-</p>
        </div>
      </div>
      <div className="SideAndGraph">
        <div className="SideBar">
            <button className="insideButton"><span className="textinside"><img className="logoinside" src={peepologo} alt="peepo on chair"/>Создать</span></button>
            <button className="insideButton"><span className="textinside"><img className="logoinside" src={peepologo} alt="peepo on chair"/>Удалить</span></button>
            <button className="insideButton"><span className="textinside"><img className="logoinside" src={peepologo} alt="peepo on chair"/>Изменить</span></button>
        </div>
        <div className="Graph"></div>
      </div>
    </div>
  );
}

export default App;
