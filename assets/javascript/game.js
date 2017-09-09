
 //letter bank
 var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Updates wins
var winCount = 0;
// Updates losses
var lossCount = 0;
// Total number of guesses left to play
var guessesLeft = 10;
// Total number of guesses used
var guessesSoFar= [];

//Start Game
document.onkeyup = function(event) {

 //computer selects random letter  
var chosenLetter = letterBank[Math.floor(Math.random()*letterBank.length)]; 

//User guess
var userGuess = event.key;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

//Adds user guesses to the array
guessesSoFar.push(userGuess); 

//Checks happens if guessed correctly
    if (userGuess == chosenLetter) {
        winCount++
        alert("You guessed correctly! You win!");

        //reseting the guesses so that the user can play again
        guessesLeft = 9; 

        //starts the guesses over
        guessesSoFar.length = 0; 
    }

//If out of guesses, ends game
    else if (guessesLeft == 0){
        lossCount++
        alert("You're out of guesses. You lose!");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== chosenLetter){
        guessesLeft--; 
    }  


  // update the html with game info
  document.getElementById("lettersGuessed").innerHTML = guessesSoFar;
  document.getElementById("numberOfGuesses").innerHTML = guessesLeft;
  document.getElementById("numberOfWins").innerHTML = winCount;
  document.getElementById("numberOfLosses").innerHTML = lossCount;

}
