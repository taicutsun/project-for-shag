import './../App.css';
import { Link } from "react-router-dom";
import  { useState,useEffect }  from 'react';
import { player, monster } from '../help/storage.js';
//импорты


function Fight(){//компонент для меню файта
  const [check, setCheck] = useState(false);//создаем хук для хранения хп монстра
  const [monsterHp, setMonsterHp] = useState(monster.hp);//создаем хук для хранения хп монстра
  const [deadM, setDeadM] = useState(false);//создаем хук для хранения проверки жив ли монстр
  const [deadP, setDeadP] = useState(false);//создаем хук для хранения проверки жив ли игрок
  const [playerExp, setplayerExp] = useState(player.exp);//создаем хук для хранения опыта игрока 
  const [playerHp,setPlayerHp] = useState(player.hp);//создаем хук для хранения hp игрока 

  const fight=()=>{//функция файта
   setMonsterHp(monsterHp-player.att);
   console.log(monster);
  }
  //console.log(`monsterhp=${monsterHp}`);
useEffect(() => {//с каждым рендером проверяем хп монстра
 const interval= setInterval(() => {//монстр бьет каждые 3 с
    setPlayerHp(player.hp-monster.att);
    player.hp-=monster.att;
  }, 3000);
  if(playerExp===20){//поуер ап игрока
  setDeadM(false);
  setCheck(true);
  if(player.exp===20){
    player.att+=5;player.hp+=10;
    monster.att+=10;monster.hp+=5;
  }
  player.exp=0;player.hp=50;player.hp+=10;

  }
  else if(monsterHp<=0){//просто победа
    setDeadM(true);
    setMonsterHp(50);
    player.exp+=10;
    monster.hp=50;player.hp=50;
    setplayerExp(playerExp+10);
  }
  else if(playerHp<=0){//пройгрыш игрока
    setDeadP(true);
    monster.hp=50;player.hp=50;
  }
  else if(deadP){ monster.hp=50;player.hp=50;}
console.log(player);
console.log(`Xp=${playerExp}`);
return () => clearInterval(interval);
},[playerExp,deadM,deadP,check,monsterHp,playerHp]);


 if(deadM){ //игрок выйграл
return(
  <div>
    Congrats u win!Next time it will be harder
    <Link to="/" ><div className='back'>Back</div></Link>
  </div>
);}
else if(check){ //игрок выйграл и апнулся
  return(
    <>
      Congrats u win!You have had power up!
      <div>your hp:{player.hp},attack:{player.att}</div>
      <Link to="/"><div className='back'>Back</div></Link>
    </>
  );}
else if(deadP){//игрок проиграл
  return(
  <>
  Oh no,you died!
  <Link to="/"><div className='back'>Back</div></Link>
</>
  );}
  else{//страт
    return(
<div>
  <div>fight</div>
  <div>
    <div className='wrapper'>
      <div className='modelsFight player' ></div>
      <div>player HP : {playerHp}</div>
    </div>
    <div className='wrapper'>
      <div className='modelsFight monster' onClick={fight}></div>
      <div>monster HP : {monsterHp}</div>
    </div>
  </div>
  <Link to="/"><div className='back'>Back</div></Link>
  </div>
    );
  }

}




export default Fight;