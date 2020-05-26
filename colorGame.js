

var colors = generateRandomColor(6);
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var squares = document.querySelectorAll('.square');
var pickedcolor = pickcolor();
var displayRgb = document.getElementById('displayColor');
var h1 = document.querySelector('h1');
var message = document.getElementById('message');
displayRgb.textContent = pickedcolor;

assigningColors();
playOn();

	function assigningColors(){
		for( var i = 0; i < colors.length; i++){
			// Asigning colors to each div
			squares[i].style.background = colors[i];
			}
	}

	function playOn(){
	  	for( var i = 0; i < colors.length; i++){
			// Responding to a click and asigning rgb to span
			squares[i].addEventListener("click", function(){
				var colorclicked = this.style.background;
		
				// comparing initial color with color picked by user
				if(colorclicked === pickedcolor){
					
					for( var i = 0; i < squares.length; i++ ){
					squares[i].style.background = h1.style.background = pickedcolor;
					}
					message.textContent = "Correct!!!";
				} else {
					message.textContent = "Wrong, Try Again!";
					this.style.background = "#232323";
				  }

			});
		}
	}
 	


easy.addEventListener("click", easyOn);
hard.addEventListener('click', hardOn);

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){		
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function easyOn(){
	colors = generateRandomColor(3);
	pickedcolor = pickcolor();
	displayRgb.textContent = pickedcolor;
	message.textContent = "";
	h1.style.background = "#232323"; 
	assigningColors();
	for(var i = 0; i < squares.length; i++){
	  	if( i >= colors.length){
	  		squares[i].style.display = "none";
	  	}
	}
	playOn();
	
}

function hardOn(){
	colors = generateRandomColor(6);
	pickedcolor = pickcolor();
	displayRgb.textContent = pickedcolor;
	message.textContent = "";
	h1.style.background = "#232323";
	for(var i = 0; i < squares.length; i++){
	  		squares[i].style.display = "block";
	}
	assigningColors();
	playOn(); 
}
	
