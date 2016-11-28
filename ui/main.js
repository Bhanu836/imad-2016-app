console.log('Loaded!');

var imgo =document.getElementById("madi");
var but =document.getElementById("hbutton");
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
    window.clearInterval(interval);
    
     i=i+1;
     if(i%2 !== 0){
    var btn = document.createElement("BUTTON");
    btn.innerHTML="start";
    btn.style.fontSize ="large";
     btn.style.zIndex= 1000;
    but2.removechild(but);  
    but2.appendChild(btn);
     btn.addEventListener("click" ,moveleft);
       
     }
}

but.addEventListener("click" ,stop);

 