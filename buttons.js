//for buttons handlers
//buttons for first player "Ffunc"
function FclickA(button){//for event handler on button attack first player 

if(state.muh==true && state.prish==true){//chicking who playing
  fight(Prishelec,Muhamed.at,"muhamed","prishelec",button); 
  }  
else if(state.muh==true && state.voin==true){
  fight(Voin,Muhamed.at,"muhamed","voin",button); 
  }
else if(state.prish==true && state.voin==true){ 
  fight(Voin,Prishelec.at,"prishelec","voin",button); 
  }

    
};

function FclickH(button){//for event handler on button heal first player

if(state.muh==true && state.prish==true){//chicking who playing
  heal(Muhamed,Muhamed.hp,"muhamed");
  }  
else if(state.muh==true && state.voin==true){
  heal(Muhamed,Muhamed.hp,"muhamed");
  }
else if(state.prish==true && state.voin==true){ 
  heal(Prishelec,Prishelec.hp,"prishelec");
  }

};

function FclickU(button){//for event handler on button ult first player

if(state.muh==true && state.prish==true){//chicking who playing
  alert("ALAX KAK BAR ");
  ult(Prishelec,Muhamed.ul,"muhamed","prishelec",button,fU); fU++;
  }  
else if(state.muh==true && state.voin==true){
  alert("ALAX KAK BAR ");
  ult(Voin,Muhamed.ul,"muhamed","voin",button,fU); fU++;
  }
else if(state.prish==true && state.voin==true){ 
  alert("PEW PEW PEW  ");
  ult(Voin,Prishelec.ul,"prishelec","voin",button,fU); fU++;
  }

};
//buttons for first player "Ffunc"

//buttons for second player "Sfunc"
function SclickA(button){//for event handler on button attack second player

if(state.muh==true && state.prish==true){//chicking who playing
  fight(Muhamed,Prishelec.at,"prishelec","muhamed",button);
  }  
else if(state.muh==true && state.voin==true){
  fight(Muhamed,Voin.at,"voin","muhamed",button);
  }
else if(state.prish==true && state.voin==true){ 
  fight(Prishelec,Voin.at,"voin","prishelec",button); 
  }

    
};

function SclickH(button){//for event handler on button heal second player

if(state.muh==true && state.prish==true){//chicking who playing
  heal(Prishelec,Prishelec.hp,"prishelec");
  }  
else if(state.muh==true && state.voin==true){
  heal(Voin,Voin.hp,"voin");
  }
else if(state.prish==true && state.voin==true){ 
  heal(Prishelec,Prishelec.hp,"prishelec");
  }

    
};

function SclickU(button){//for event handler on button ult second player

if(state.muh==true && state.prish==true){//chicking who playing
  alert("PEW PEW PEW  ");
  ult(Muhamed,Prishelec.ul,"prishelec","muhamed",button,sU);sU++;
  }  
else if(state.muh==true && state.voin==true){
  alert("SPARTA!!!");
  ult(Muhamed,Voin.ul,"voin","muhamed",button,sU);sU++;
  }
else if(state.prish==true && state.voin==true){ 
  alert("SPARTA!!!");
  ult(Prishelec,Voin.ul,"voin","prishelec",button,sU); sU++;
  }

    
};
//buttons for second player "Sfunc"
    //for buttons handlers

function fight(objj,at,nameF,nameS,button){ 
objj.hp=objj.hp-at;//attack
if(objj.hp<=0){//checking if hp below 0
 reset();//restatr the game
 alert(`${nameF} has won`);
  }
else alert(`${nameS} has hp=${objj.hp}`);
return objj.hp;//return hp of player

}

function heal(objj,hp,name){
objj.t++;
if(objj.t<=3){//u can only use heal 3 times 
 hp+=5;//giving player 5 hp
 alert(`${name} hp=${hp}`)
 return objj.hp=hp;//return hp of player
  }
else alert("already used 3 times");
}

function ult(objj,at,nameF,nameS,button,n){
  console.log(n);
if (n<1){fight(objj,at,nameF,nameS,button);}//u can use ult one time
else alert("nope");
}