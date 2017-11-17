// Only works with jquery
$(document).ready(function() {

// VARIABLES
	// Arrays with words for game
	var countryName=["UNITED STATES","CANADA", "FRANCE", "SPAIN", "GERMANY", "PERU", "RUSSIA", "ARGENTINA", "JAPAN", "AUSTRALIA", "CHINA"];
	
	// Chooses random word from category
	var randomWord = countryName[Math.floor(Math.random() * countryName.length)];

	// var sportName=["Soccer", "Football", "Baseball", "Voleyball", "Swimming", "Tennis", "Track", "Wrestling", "Basketball", "Lacrosse", "Water Polo", "Field Hockey" ];
	// var showName=["Game of Thrones", "Big Bang Theory", "Stranger Things", "House of Cards", "Friends", "The Flash", "Black Mirror", "How I Met Your Mother", "The Arrow"];
	// var animalName=["dog", "cat", "deer", "wolf", "giraffe", "polar bear", "alligator", "elephant", "panther", "shark", "dolphin"];

// Variables to keep count of wins, letters used, guesses left and array for answers
    var wins = 0;
    var lettersGuessed = 0;
    var guessesLeft = 10;
    var w;
    var answerArray= [];
   
// Any key pressed starts game
	document.onkeyup = function(event) {
		startGame ();
// FUNCTIONS
	function startGame () {

		for (var i = 0; i < randomWord.length; i++) {
			answerArray[i]= "_";
		}

		w = answerArray.join = (" ");
		document.getElementById("random-word").innerHTML = "Word is " + w;

	}

	function letter () {
		// letter typed by user goes into assigned box
		var letter = document.getElementById("letters").innerHTML = "Letters already guessed: " + value;

		// Checks if the user has typed a letter
		if (letter.length > 0) {
			for (var i = 0; i < randomWord.length; i++) {
				
				// Checks if random word contains the latter the user pressed
				if (randomWord[i] === letter) {
					answerArray[i] = letter;
				}
			}
			//count the user's guesses
			guessesLeft--;
			document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;
			document.getElementById("random-word").innerHTML = answerArray.join(" ");
		} 

		if (guessesLeft < 0) {
			document.getElementById("random-word").innerHTML = "You lose!";
		}


	}
}

})
