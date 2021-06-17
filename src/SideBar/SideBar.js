import React, { useState } from 'react';
import peepologo from '../smallestpeepo.png';
import './SideBar.css';

const MenuFirst = () => (
    <div className="dropdownElements">
        <button className="liButton first">Вершину</button>
        <button className="liButton">Ребро</button>
        <button className="liButton">Путь</button>
        <button className="liButton last">Краткий путь от начала до вершины</button>
    </div>
)

const MenuSecond = () => (
    <div className="dropdownElements">
        <button className="liButton first">Вершину</button>
        <button className="liButton">Ребро</button>
        <button className="liButton">Путь</button>
        <button className="liButton last">Краткий путь от начала до вершины</button>
    </div>
)
const MenuThird = () => (
    <div className="dropdownElements">
        <button className="liButton first">Вершину</button>
        <button className="liButton">Ребро</button>
        <button className="liButton">Путь</button>
        <button className="liButton last">Краткий путь от начала до вершины</button>
    </div>
)

const MenuFourth = () => (
    <div className="dropdownElements">
        <button className="liButton first">Вершину</button>
        <button className="liButton">Ребро</button>
        <button className="liButton">Путь</button>
        <button className="liButton last">Краткий путь от начала до вершины</button>
    </div>
)

function Side() {
    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [openThird, setOpenThird] = useState(false);
    const [openFourth, setOpenFourth] = useState(false);
    const clickFirst = () => setOpenFirst(!openFirst)
    const clickSecond = () => setOpenSecond(!openSecond)
    const clickThird = () => setOpenThird(!openThird)
    const clickFourth = () => setOpenFourth(!openFourth)

    return (
        <div className="SideBar">
            <button className="insideButton top" onClick={clickFirst} ><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Создать</span></span></button>
            { openFirst ? <MenuFirst/> : null }
            <button className="insideButton" onClick={clickSecond}><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Удалить</span></span></button>
            { openSecond ? <MenuSecond/> : null}
            {/* <div className="dropdownElements2">
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Вершину</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Ребро</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Путь</button></li>
              <li className="listElement" href="http://localhost:3000/"><button className="liButton">Краткий путь от начала до вершины</button></li>
            </div> */}
            <button className="insideButton" onClick={clickThird}><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Изменить</span></span></button>
            { openThird ? <MenuThird/> : null}
            <button className="insideButton" onClick={clickFourth}><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Удалить</span></span></button>
            { openFourth ? <MenuFourth/> : null}
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside">Экспортировать</span></span></button>
            <button className="insideButton"><span className="imageAndText"><img className="logoinside" src={peepologo} alt="peepo on chair"/><span class="textinside wide">Обновить представление</span></span></button>
        </div>
    )
}

export default Side;