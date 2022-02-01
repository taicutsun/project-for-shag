let f=document.getElementById("1");
let s=document.getElementById("2");
let t=document.getElementById("3");
let start=document.getElementById("4");
 
let fc=document.getElementById("f");
let sc=document.getElementById("s");

let one=false;let a=1;
let two=false;let b=1;
let thre=false;let c=1;
let state={};

f.onclick= function(){//button 1
if(b==2 && c==2){console.log('have chosen 2 ');}
else{
f.classList.toggle('butt');
f.classList.toggle('forbutt');
a++;
if(a == 2){one=true;}
else if(a<2 || a>2){one=false;a=1;}
console.log(`one=${one}`); 
console.log(`a=${a}`); 
}

};

s.onclick= function(){//button 2
if(a==2 && c==2){console.log('have chosen 2 ');}
else{
s.classList.toggle('butt');
s.classList.toggle('forbutt');
b++;
if(b == 2){two=true;}
else if(b<2 || b>2){two=false;b=1;}
console.log(`two=${two}`); 
console.log(`b=${b}`); 
}

};

t.onclick= function(){//button 3
if(a==2 && b==2){console.log('have chosen 2 ');}
else{
t.classList.toggle('butt');
t.classList.toggle('forbutt');
c++;
if(c == 2){thre=true;}
else if(c<2 || c>2){thre=false;c=1;}
console.log(`three=${thre}`); 
console.log(`c=${c}`); 
}

};

function statusCheck(a,b){
if(a==true && b==true){
    start.style.display="none";
fc.style.display="none";
sc.style.display="block";
return true;
}
}

start.onclick= function(){//button start
let ot=statusCheck(one,two);//1 play w 2
let oth=statusCheck(one,thre);//1 play w 3
let tt=statusCheck(thre,two);// 2 play w 3
if(ot==true){
state.muh=true;state.prish=true;state.voin=false;
console.log(state);
return state;
}
if(oth==true){
state.muh=true;state.prish=false;state.voin=true;
console.log(state);
return state;
}
if(tt==true){
state.muh=false;state.prish=true;state.voin=true;
console.log(state);
return state;
}
};