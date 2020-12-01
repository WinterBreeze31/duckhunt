var duck = document.getElementById('duck')
var hits = 0;
var misses = 0;

document.getElementById('theme').addEventListener("click", theme)

function theme(){
document.getElementById('quack').play();}

duck.addEventListener("click", hit)

document.getElementById('stage').addEventListener("click", miss)

function hit(){
	hits++;

	duck.style.transition = "0"
	duck.style.left = "calc(50% + -150px)";
   	duck.style.top = "calc(50% + -150px)";
   	duck. style.transition = "top 1s, left 1s"


	if (hits == 20){
		document.getElementById('hit').innerHTML = "hits: " + hits;
		alert("hits: " + hits + "\n miss: " + misses);
		hits = 0;
		misses = 0;
		document.getElementById('hit').innerHTML = "hits: " + hits;

	}
	else{
		document.getElementById('hit').innerHTML = "hits: " + hits
		document.getElementById('hitnoise').play();
	}
} 


function miss(){
	misses++

	if (misses == 20){
		document.getElementById('miss').innerHTML = "misses: " + misses;
		alert("hits: " + hits + "\n miss: " + misses);
		hits = 0;
		misses = 0;
		document.getElementById('miss').innerHTML = "misses: " + misses;
	}
	else{
	document.getElementById('miss').innerHTML = "misses: " + misses;
	}
}

function posx(){

if (xas >= 225){
	xas -= 75;
}
else {
	xas += 75;
}}
 

 function negx(){

if (xas <= -225){
	xas += 75;
}
else {
	xas -= 75;
}}

function posy(){

if (yas >= 150){
	yas -= 75;

}
else {
	yas += 75;
}}

function negy(){

if (yas <= -225){
	yas += 75;
}
else {
	yas -= 75;
}}

var xas = 0;
var yas = 0;


function fly() {

var random = Math.floor(Math.random() * 8);

switch(random) {

 
//north
  case 0:
  		negy();
		duck.style.top = "calc(50% - 150px + " + (yas) +"px)";
    	break;
//north east
  case 1:
  		negy();
  		posx();
   	 	duck.style.top = "calc(50% - 150px + " + (yas) + "px)";
   	 	duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   	 	duck.style.transform = "scaleX(1)"
    	break;
//east
   case 2:
   		posx();
   		duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   		duck.style.transform = "scaleX(1)";
   		break;
//south east
   case 3:
   		posx();
   		posy();
   		duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   		duck.style.top = "calc(50% - 150px + " + (yas) + "px)";
   		duck.style.transform = "scaleX(1)"
   		break;
//south
   case 4:
   		posy();
   		duck.style.top = "calc(50% - 150px + " + (xas) + "px)";
   		break;
//south west
   case 5:
   		negx();
   		posy();
   		duck.style.transform = "scaleX(-1)"
   		duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   		duck.style.top = "calc(50% - 150px + " + (yas) + "px)";
   		break;
//west
   case 6:
   		negx();
   		duck.style.transform = "scaleX(-1)"
   		duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   		break;
//north west
   case 7:
   		negx();
   		negy();
   		duck.style.transform = "scaleX(-1)"
   		duck.style.left = "calc(50% - 150px + " + (xas) + "px)";
   		duck.style.top = "calc(50% - 150px + " + (yas) + "px)";
 
} 
  	
} 





setInterval(fly, 500)