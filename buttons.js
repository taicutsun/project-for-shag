let nt=0;let np=0;let nl=0;//for picking only one button first person
let snt=0;let snp=0;let snl=0;//for picking only one button second person

//for buttons handlers
//buttons for first player "Ffunc"
function FclickA(button){//for event handler on button attack

if(np>=1 || nl>=1 || snt>=1 || snp>=1 || snl>=1){console.log("have chosen 1");}
else {
nt++;
console.log(`nt=${nt}`);
if(nt>1){nt=0}

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){
//setTimeout("alert('Привет')",1000);
  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 

  }

    }
};

function FclickH(button){//for event handler on button heal

if(nt>=1 || nl>=1 || snt>=1 || snp>=1 || snl>=1){console.log("have chosen 1")}
else{
np++;
 console.log(`np=${np}`);
 if(np>1){np=0}

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){

  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 
 
  }

    }
};

function FclickU(button){//for event handler on button ult

if(nt>=1 || np>=1 || snt>=1 || snp>=1 || snl>=1){console.log("have chosen 1")}
else{  
 nl++;
 console.log(`nl=${nl}`);
 if(nl>1){nl=0}
 

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){
 
  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 
 
  }

    }
};
//buttons for first player "Ffunc"

//buttons for second player "Sfunc"
function SclickA(button){//for event handler on button attack

if(snp>=1 || snl>=1 || nt>=1 || np>=1 || nl>=1){console.log("have chosen 1");}
else {
snt++;
console.log(`nt=${snt}`);
if(snt>1){snt=0}

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){
//setTimeout("alert('Привет')",1000);
  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 

  }

    }
};

function SclickH(button){//for event handler on button heal

if(snt>=1 || snl>=1 || nt>=1 || np>=1 || nl>=1){console.log("have chosen 1")}
else{
snp++;
 console.log(`np=${snp}`);
 if(snp>1){snp=0}

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){

  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 
 
  }

    }
};

function SclickU(button){//for event handler on button ult

if(snt>=1 || snp>=1 || nt>=1 || np>=1 || nl>=1){console.log("have chosen 1")}
else{  
 snl++;
 console.log(`nl=${snl}`);
 if(snl>1){snl=0}
 

button.classList.toggle('buttS');
button.classList.toggle('forbuttS');

if(state.muh==true && state.prish==true){
 
  }  
else if(state.muh==true && state.voin==true){

  }
else if(state.prish==true && state.voin==true){ 
 
  }

    }
};
//buttons for second player "Sfunc"
    //for buttons handlers

   