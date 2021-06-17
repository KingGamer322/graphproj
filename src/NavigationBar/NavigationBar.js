import React from 'react';
import peepologo from '../smallestpeepo.png';
import './NavigationBar.css';

function NavBar () {
    return (
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
    )
}

export default NavBar;