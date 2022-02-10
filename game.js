let res=document.getElementById("res");
let playerf=document.getElementById("playerf");
let players=document.getElementById("players"); 

function reset(){//button reset game
    //res.style.display="none";
start.style.display="block";
fc.style.display="block";
sc.style.display="none";
    if(state.muh==true && state.prish==true){//1 play w 2
f.classList.toggle('butt');f.classList.toggle('forbutt');
s.classList.toggle('butt');s.classList.toggle('forbutt');

    }
    else if(state.muh==true && state.voin==true){//1 play w 3
f.classList.toggle('butt');f.classList.toggle('forbutt');
t.classList.toggle('butt');t.classList.toggle('forbutt');
    }
    else if(state.prish==true && state.voin==true){// 2 play w 3
s.classList.toggle('butt');s.classList.toggle('forbutt');
t.classList.toggle('butt');t.classList.toggle('forbutt');
    }

one=false;a=1;
two=false;b=1;
thre=false;c=1;
state.muh=false;state.prish=false;state.voin=false;

Muhamed.hp=20;Prishelec.hp=10;Voin.hp=25;
Muhamed.t=0;Prishelec.t=0;Voin.t=0;

fU=0;sU=0;
}

//help func
function addClass(f,s){//for adding class to buttons
f.classList.add("buttS");f.classList.add("del");
s.classList.add("buttS");s.classList.add("del");
}

function checkPersonU(personF,personS){//checking who playing for ult button
if(personF == state.muh && personS==state.prish){
 let butUf=document.createElement("button");let butUs=document.createElement("button");addClass(butUf,butUs);
 butUf.innerText="BOMB";butUs.innerText="LAZER";
 butUf.onclick=function(){FclickU(butUf)}; butUs.onclick=function(){ SclickU(butUs)};//eventlisteners to change class
 playerf.append(butUf);players.append(butUs);//added ult butt
    }
else if(personF == state.muh && personS==state.voin){
 let butUf=document.createElement("button");let butUs=document.createElement("button");addClass(butUf,butUs);
 butUf.innerText="BOMB";butUs.innerText="SPARTA";
 butUf.onclick=function(){FclickU(butUf)}; butUs.onclick=function(){ SclickU(butUs)};//eventlisteners to change class
 playerf.append(butUf);players.append(butUs);//added ult butt 
    }
else if(personF == state.prish && personS==state.voin){
 let butUf=document.createElement("button");let butUs=document.createElement("button");addClass(butUf,butUs);
 butUf.innerText="LAZER";butUs.innerText="SPARTA";
 butUf.onclick=function(){FclickU(butUf)}; butUs.onclick=function(){ SclickU(butUs)};//eventlisteners to change class
 playerf.append(butUf);players.append(butUs);//added ult butt
    }
}
//help func


function helpforhelp(stringf,strings,a,b){//to make smaller code in helpren func(all the same as helpren)
let im=document.createElement("img");let imgf=document.createElement("img");
im.classList.add("del");imgf.classList.add("del");
im.src=stringf;imgf.src=strings;
playerf.append(im);players.append(imgf);
//for img

let butAf=document.createElement("button");let butAs=document.createElement("button");//for attack
addClass(butAf,butAs);
butAf.innerText="attack";butAs.innerText="attack";
butAf.onclick=function(){FclickA(butAf)}; butAs.onclick=function(){ SclickA(butAs)};//eventlisteners to change class
playerf.append(butAf);players.append(butAs);//added attack butt

let butHf=document.createElement("button");let butHs=document.createElement("button");addClass(butHf,butHs);
butHf.innerText="heal";butHs.innerText="heal";
butHf.onclick=function(){FclickH(butHf)}; butHs.onclick=function(){ SclickH(butHs)};//eventlisteners to change class
playerf.append(butHf);players.append(butHs);//added heal butt

checkPersonU(a,b);//added ult button
}

function helpRen(r,a,b,stringf,strings){
if(a==true && b==true){//checking who is playing

if(r>1){//if its second game
 let todel=document.getElementsByClassName("del");console.log(todel);//rerendering img
 for(let i=0;i<todel.length;i++){todel[i].style.display="none";}

 let todelB=document.getElementsByClassName("del");console.log(todelB);//rerendering butt
 for(let i=0;i<todelB.length;i++){todelB[i].style.display="none";}

helpforhelp(stringf,strings,a,b);

 }
else{//its first game
 let im=document.createElement("img");im.src=stringf;im.classList.add("del");
 let imgf=document.createElement("img");imgf.src=strings;imgf.classList.add("del");
 playerf.append(im);players.append(imgf);
//for img

//for buttons
 let butAf=document.createElement("button");let butAs=document.createElement("button");addClass(butAf,butAs);
 butAf.innerText="attack";butAs.innerText="attack";
 butAf.onclick=function(){FclickA(butAf)}; butAs.onclick=function(){ SclickA(butAs)};//eventlisteners to change class
 playerf.append(butAf);players.append(butAs);//added attack butt

 let butHf=document.createElement("button");let butHs=document.createElement("button");addClass(butHf,butHs);
 butHf.innerText="heal";butHs.innerText="heal";
 butHf.onclick=function(){FclickH(butHf)}; butHs.onclick=function(){ SclickH(butHs)};//eventlisteners to change class
 playerf.append(butHf);players.append(butHs);//added heal butt

 checkPersonU(a,b);//added ult button
//for buttons
}
} 
}







let r=0;
function ren(){//using helpren w/diff props
r++;console.log(`r=${r}`);//to check what game it is(first or second and else...)
helpRen(r,state.muh,state.prish,"pics/muh.jpg","pics/prish.jpg")//if muh play w prish
helpRen(r,state.muh,state.voin,"pics/muh.jpg","pics/voin.jpg")//if muh play w voin
helpRen(r,state.prish,state.voin,"pics/prish.jpg","pics/voin.jpg")//if voin play w prish

}