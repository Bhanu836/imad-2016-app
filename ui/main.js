console.log('Loaded!');

var imgo =document.getElementById("madi");
var butstop =document.getElementById("hbutton");
var but2 =document.getElementById("but1");
var marginleft=0;
var h=0;
var i= 0;
var interval = setInterval(moveleft,10);
function moveleft(){
    marginleft= marginleft + 2 ;
   
    imgo.style.marginLeft=marginleft + "px" ;
   
   
    
}
imgo.addEventListener("click", moveleft);
function stop(){
      i=i+1;
     if(i %2 !== 0){
     window.clearInterval(interval);
     if( i >2)
    { 
        window.clearInterval(interval2);
    }
    var btn = document.createElement("BUTTON");
    btn.innerHTML="start";
    btn.style.fontSize ="large";
     btn.style.zIndex= 1000;
     but2.appendChild(btn);
    btn.setAttribute("id", "bttn");
     btn.addEventListener("click" ,start );
       
     }
      if(i %2 === 0){
     window.clearInterval(interval2);
     
    var btn2 = document.getElementById("bttn");
    but2.removeChild(btn2);
     
       
     }
}

butstop.addEventListener("click" ,stop);

function  start(){
     var interval2  = setInterval(moveleft,100);
        btn.removeEventListener("click" ,start );  
     }