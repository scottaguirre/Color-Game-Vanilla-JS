

// enter maximum number to win
// button to increase player1
// button to increase player2
// scoreKeeper of both players
// show record of score of players 1 and 2
// compare score of players to maximum number
// stop when someone whin
// reset everything to start


var numInput = document.querySelector("input");
var valueEnter = document.querySelector(".valueEnter");
var scorePlayer1 = document.querySelector("#btnPlayer1");
var scorePlayer2 = document.querySelector(".btnPlayer2");
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var showWinner = document.querySelector(".showWinner");
var reset = document.querySelector('.reset');
var playAgain = document.querySelector('.playAgain');
var scoreKeeper1 = scoreKeeper2 = 0;
var gameover = false;
var maxNumberToWin = numInput.value;
var x = false;
var stop = 0;


scorePlayer1.addEventListener("click", function(){	
	if(!gameover && maxNumberToWin > 0){
		scoreKeeper1 ++;
		player1.textContent = scoreKeeper1;
		if(scoreKeeper1 === maxNumberToWin){
			gameover = true;
			player1.classList.add("winner");
			showWinner.classList.add("winner");
			showWinner.classList.remove("off");
			showWinner.textContent = "Player 1 is the winner!!!";
			playAgain.textContent = "Press Reset to play again";
			playAgain.classList.add("off");
			stop = setInterval(onOff, 2000);					
		}
	}
});
	
scorePlayer2.addEventListener("click", function(){	
	if(!gameover && maxNumberToWin > 0){
		scoreKeeper2 ++;
		player2.textContent = scoreKeeper2;
		if(scoreKeeper2 === maxNumberToWin){
			gameover = true;
			player2.classList.add("winner");
			showWinner.classList.add("winner");
			showWinner.classList.remove("off");
			showWinner.textContent = "Player 2 is the winner!!!";
			playAgain.textContent = "Press Reset to play again";
			playAgain.classList.add("off");
			stop = setInterval(onOff, 2000);						
		}
	}
});


function resetAll(){
	scoreKeeper1 = scoreKeeper2 = 0;
	player1.textContent = scoreKeeper1;
	player2.textContent = scoreKeeper2;
	gameover = false;
	maxNumberToWin = numInput.value = 0;
	valueEnter.textContent = numInput.value;
	player1.classList.remove('winner');
	player2.classList.remove('winner');
	clearInterval(stop);
	showWinner.classList.add('off');
	playAgain.classList.add('off');
	
	}

reset.addEventListener("click", function(){
	resetAll();

});

numInput.addEventListener("change", function(){
	valueEnter.textContent = numInput.value;
	maxNumberToWin = Number(numInput.value);
});


function onOff(){	
	if(!x){
		showWinner.classList.add('off');
		playAgain.classList.remove("off");
		
	 } 
	 else {
		showWinner.classList.remove('off');
		playAgain.classList.add('off'); 	
		
	 }
	x = !x;
}

	




