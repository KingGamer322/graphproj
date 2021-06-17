import './App.css';
import React from 'react';
// import peepologo from './smallestpeepo.png';
import NavBar from './NavigationBar/NavigationBar.js';
import Side from './SideBar/SideBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="SideAndGraph">
        <Side/>
        <div className="Graph"></div>
      </div>
    </div>
  );
}

export default App;
