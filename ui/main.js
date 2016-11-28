console.log('Loaded!');

var imgo =document.getElementById("madi");
var but =document.getElementById("but1");
var marginleft=0;
var h=0;
var interval = setInterval(moveleft,10);
function moveleft(){
    marginleft= marginleft + 2 ;
   
    imgo.style.marginLeft=marginleft + "px" ;
}
imgo.addEventListener("click", moveleft);
function stop(){
    window.clearInterval(interval);
    but.innerHTML="start";
    but.style.fontSize ="large";
     but.style.zIndex= 1000;
     but1.addEventListener("click" ,moveleft);
}

but.addEventListener("click" ,stop);

