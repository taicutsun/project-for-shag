import './../App.css';
import { Link } from "react-router-dom";
import  { useState, useEffect }  from 'react';
import { player, mats } from '../help/storage.js';
import tree from './../img/tree.jpg';
//импорты

function Farm(){//компонент для меню фарма
  const [mat, setMat] = useState(player.mats);//создаем хук для хранения ресурсов
  const [matsHp, setMatsHp] = useState(mats.hp);//создаем хук для хранения хп ресурсов
  const [dead, setDead] = useState(false);//создаем хук для хранения проверки жив ли материал

const farm=()=>{//функция фарма
  setMatsHp(matsHp-player.att)
mats.hp=mats.hp-player.att;
console.log(mats);
};

useEffect(() => {//с каждым рендером проверяем хп ресурсов
if(matsHp<0){//добил ресы
  setDead(true);setMatsHp(50);setMat(player.mats+10);
  player.mats+=10;mats.hp=50;
}
},[matsHp]);

 if(dead){//дофармил ресы
  return(
  <>
    Congrats u have farmed mats!Next time it will be harder
    <>your mats:{mat}</>
    <Link to="/"><div className='back'>Back</div></Link>
  </>
  );}
  else {//игрок ещё не добил ресурсов
    return(
      <div>
      <div className='modelsFarm playerFarm' ></div>
      <div className='modelsFarm ' onClick={farm}>
        <img src={tree} id="tree" /><div id='matsHP'>mats HP : {matsHp}</div>
      </div>
      <div >farm</div>
      <Link to="/"><div className='back'>Back</div></Link>
      </div>
    );}
}



export default Farm;