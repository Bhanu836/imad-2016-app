console.log('Loaded!');

var imgo =document.getElementById("madi");
var but =document.getElementById("hbutton");
var but2 =document.getElementById("but1");
var marginleft=0;
var h=0;

function moveleft(){
    marginleft= marginleft + 2 ;
   
    imgo.style.marginLeft=marginleft + "px" ;
    var interval = setInterval(moveleft,10);
    var btn3 = document.createElement("BUTTON");
    btn3.innerHTML="stop";
    btn3.style.fontSize ="large";
     btn3.style.zIndex= 1000;
    but2.removechild(btn);  
    but2.appendChild(btn3);
     btn3.addEventListener("click" ,stop);
    
}
imgo.addEventListener("click", moveleft);
function stop(){
    window.clearInterval(interval);
    var btn = document.createElement("BUTTON");
    btn.innerHTML="start";
    btn.style.fontSize ="large";
     btn.style.zIndex= 1000;
    but2.removechild(but);  
    but2.appendChild(btn);
     btn.addEventListener("click" ,moveleft);
}

but.addEventListener("click" ,stop);

