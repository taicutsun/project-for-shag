let f=document.getElementById("1");
let s=document.getElementById("2");
let t=document.getElementById("3");
let start=document.getElementById("4");
 
let fc=document.getElementById("f");
let sc=document.getElementById("s");

f.onclick= function(){//button 1eventlisteners
if(b==2 && c==2){console.log('have chosen 2 ');}//check ab who u have chosen if 2 do nothing
 else{//its less then 2 picked
  f.classList.toggle('butt');
  f.classList.toggle('forbutt');
  //for start button
  a++;
  if(a == 2){one=true;}
  else if(a<2 || a>2){one=false;a=1;}
  console.log(`one=${one}`); 
  console.log(`a=${a}`); 
    }
};

s.onclick= function(){//button 2 eventlisteners
if(a==2 && c==2){console.log('have chosen 2 ');}//check ab who u have chosen if 2 do nothing
 else{//its less then 2 picked
  s.classList.toggle('butt');
  s.classList.toggle('forbutt');
  //for start button
  b++;
  if(b == 2){two=true;}
  else if(b<2 || b>2){two=false;b=1;}
  console.log(`two=${two}`); 
  console.log(`b=${b}`); 
    }
};

t.onclick= function(){//button 3 eventlisteners
if(a==2 && b==2){console.log('have chosen 2 ');}//check ab who u have chosen if 2 do nothing
 else{//its less then 2 picked
  t.classList.toggle('butt');
  t.classList.toggle('forbutt');
  //for start button
  c++;
  if(c == 2){thre=true;}
  else if(c<2 || c>2){thre=false;c=1;}
  console.log(`three=${thre}`); 
  console.log(`c=${c}`); 
    }
};


function statusCheck(a,b){//checking func for start button
if(a==true && b==true){
    start.style.display="none";
 fc.style.display="none";
 sc.style.display="block";
return true;
    }
}

async function ch(cot,coth,ctt){//checking ab who gonna play

if(cot==true ){
 state.muh=true;state.prish=true;state.voin=false;
 console.log(state);
 return state;
    }
if(coth==true){
 state.muh=true;state.prish=false;state.voin=true;
 console.log(state);
 return state;
    }
if(ctt==true ){
 state.muh=false;state.prish=true;state.voin=true;
 console.log(state);
 return state;
    }

}

start.onclick= function prom(){//button start
let ot=statusCheck(one,two);//1 play w 2
let oth=statusCheck(one,thre);//1 play w 3
let tt=statusCheck(thre,two);// 2 play w 3
ch(ot,oth,tt).then(ren());//after u have picked persons game renders 

};