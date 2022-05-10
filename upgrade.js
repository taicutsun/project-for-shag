import './../App.css';
import  { useState }  from 'react';
import { player } from '../help/storage.js';
//imports

export function UpgradeGun(){//компонент апгрейда оружия
    const [mat,setMat] = useState(player.mats);//создаем хук для хранения ресурсов
    const [check, setCheck] = useState(false);//создаем хук для проверки
console.log(`player.mats=${player.mats}`);
const prov=() => {//проверят можно ли апнуть оружие
if(mat>=20){
player.att+=10;player.mats-=20;
setCheck(true);setMat(mat-20)
}
};
if(check){//проверяем хватает ли ресов
return(
    <div>you have upgraded your gun!your attack : {player.att} <button onClick={prov}>upgrade your gun</button></div>
    );
}
else{
  return(//не хватает ли ресов
    <div>
        <button onClick={prov}>upgrade your gun</button>
    </div>
    );
  } 
}
