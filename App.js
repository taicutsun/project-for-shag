import './App.css';
import Fight from './Game/Fight.js';import Farm from './Game/Farm.js';
import { Routes, Route, Link } from "react-router-dom";
import logoFarm from "./img/farmButt.jpg";import logoFight from "./img/fightButt.jpg";//import mats from "./img/mats.jpg";
import { player } from './help/storage';
import { UpgradeGun } from './help/upgrade';
//импорты

function App() {
  return (//сдесь происходит проверка поддоменов
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="fight" element={<Fight />} />
    <Route path="farm" element={<Farm/>} />
  </Routes>
  );
}

function Home(){
  return (//начальный компонент на /
  <div id='main'>
    <div className="App">
       <div  id='mats' >{player.mats}</div>
      <div id='bottom'>
      <Link to="/fight" className="Butt" id="fightButt" >
        <img src={logoFight} />
      </Link>
      <Link to="/farm" className="Butt" id="farmButt">
        <img src={logoFarm}/>
      </Link></div>
    </div>
    <div id='update'><UpgradeGun /></div>
  </div>  
  );
}




export default App;
