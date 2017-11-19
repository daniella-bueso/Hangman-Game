
$(document).ready(function() {

// VARIABLES
	// Arrays with words for game
	var countryName=["UNITED STATES","ITALY", "SWITZERLAND", "CANADA", "FRANCE", "SPAIN", "GERMANY", "PERU", "RUSSIA", "ARGENTINA", "JAPAN", "AUSTRALIA", "CHINA"];
	
	// Chooses random word from category
	var randomWord = countryName[Math.floor(Math.random() * countryName.length)];
		console.log(randomWord);

	// GLOBAL VARIABLES
	var word;
	var answerArray= [];
	var wins = 0;
	var guessesCount = 11;
	var rightLetter = [];
	var lettersGuessed = [];
	var gameStatus = false;

	//==============================================================================================

	// FUNCTIONS
	// Function starts game by running through a loop and displaying underscores in placed of letters from random word
	function startGame () {

		gameStatus = true;
		guessesCount = 10;
		document.getElementById("guesses").innerHTML = "Guesses Left: "+ guessesCount;

		for (var i = 0; i < randomWord.length; i++) {
			answerArray[i]= "_";
		}

		word = answerArray.join(" ");
		console.log("word " + word);
		document.getElementById("random-word").innerHTML = word;
	} 

	// Function evaluating the positions of the given letter in the random word string
    function letterInWord(keyword) {
        // thhis positions the letter into the right place of the random word
        var positions = answerArray;
        console.log("positions " + positions);
        for (i = 0 ; i < randomWord.length; i++) {
            if (randomWord[i] === keyword){
                positions[i] = keyword;
	            document.getElementById("random-word").innerHTML = positions.join(" ");
	            console.log(positions);
	        }
        }
    }
	// End of functions
	//=============================================================================================

	// STARTS GAME WHEN ANY KEY IS PRESSED

	document.onkeyup = function(event) {

		if(!gameStatus){
			startGame();
		}

		var keyword = String.fromCharCode(event.keyCode).toUpperCase();

		console.log("key press " + keyword);
		letterfound = randomWord.indexOf(keyword);

		// If letter pressed is in the random word, then function letterInWord gets called

		if (letterfound != -1) {
			letterInWord (keyword);
		}
		// If letter found has been pressed already, do not allow same key to be pressed
			else if (letterfound == -1) {

			// Push letter pressed into the letters guessed section in html

				lettersGuessed.push(keyword);
				document.getElementById("letters").innerHTML = "Letters already guessed: " + lettersGuessed;

			// Guesses decreases every time a letter is pressed
				guessesCount--;
				document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesCount;
				return;
			}

		if (guessesCount === 0) {
				document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesCount;
				document.getElementById("random-word").innerHTML = "You lose, the word was: " + randomWord;
			startGame();
		}							
	}	

	//else if (letterfound === randomWord) {
			// 	wins++;
			// 	document.getElementById("wins").innerHTML = "Wins: "+ wins;
			// 	startGame();
			// }

})