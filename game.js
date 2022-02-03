let res=document.getElementById("res");
let playerf=document.getElementById("playerf");
let players=document.getElementById("players");

//console.log(state);
res.onclick= function(){//button res
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
}

function helpRen(r,a,b,stringf,strings){
if(a==true && b==true){
//for img
if(r>1){
let todel=document.getElementsByClassName("del");console.log(todel);//img
for(let i=0;i<todel.length;i++){todel[i].style.display="none";}
let todelB=document.getElementsByClassName("del");console.log(todelB);//butt
for(let i=0;i<todelB.length;i++){todelB[i].style.display="none";}

let im=document.createElement("img");let imgf=document.createElement("img");
im.classList.add("del");imgf.classList.add("del");
im.src=stringf;imgf.src=strings;
playerf.append(im);players.append(imgf);

let butAf=document.createElement("button");let butAs=document.createElement("button");
butAf.classList.add("buttS");butAf.classList.add("del");
butAs.classList.add("buttS");butAs.classList.add("del");
butAf.innerText="attack";butAs.innerText="attack";
playerf.append(butAf);players.append(butAs);
}
else{
let im=document.createElement("img");im.src=stringf;im.classList.add("del");
let imgf=document.createElement("img");imgf.src=strings;imgf.classList.add("del");
playerf.append(im);players.append(imgf);
//for img

//for buttons
let butAf=document.createElement("button");butAf.classList.add("buttS");butAf.classList.add("del");
let butAs=document.createElement("button");butAs.classList.add("buttS");butAs.classList.add("del");
butAf.innerText="attack";butAs.innerText="attack";
playerf.append(butAf);players.append(butAs);
//for buttons
}
} 
}

let r=0;
function ren(){
r++;console.log(r);

helpRen(r,state.muh,state.prish,"pics/muh.jpg","pics/prish.jpg")
helpRen(r,state.muh,state.voin,"pics/muh.jpg","pics/voin.jpg")
helpRen(r,state.prish,state.voin,"pics/prish.jpg","pics/voin.jpg")

    
}

