let res=document.getElementById("res");

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