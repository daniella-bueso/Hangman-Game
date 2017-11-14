// VARIABLES
	// Arrays for categories in game
	var countryName=["United States","Canada", "France", "Spain", "Germany", "Peru", "Brazil", "Argentina", "Japan", "Australia", "China"];
	// var sportName=["Soccer", "Football", "Baseball", "Voleyball", "Swimming", "Tennis", "Track", "Wrestling", "Basketball", "Lacrosse", "Water Polo", "Field Hockey" ];
	// var showName=["Game of Thrones", "Big Bang Theory", "Stranger Things", "House of Cards", "Friends", "The Flash", "Black Mirror", "How I Met Your Mother", "The Arrow"];
	// var animalName=["dog", "cat", "deer", "wolf", "giraffe", "polar bear", "alligator", "elephant", "panther", "shark", "dolphin"];

// variables to number of wins, letters used, and guesses left 
    var wins = 0;
    var lettersGuessed = 0;
    var guessesLeft = 0; 

// FUNCTIONS





// MAIN PROCESS
// any pressed key will start game  
	document.onkeyup = function(event) {
		var startGame = event.key;
	}

	function (startGame) {
		// Chooses random word from category
		var chosenWord = countryName[Math.floor(Math.random() * countryName.length)];
		// Splits the chosen word into individual letters
		lettersInWord = chosenWord.split ('');
		num.Blanks = lettersInWord.length;
		

	}

	

// build results into a variable to output to HTML;
    var printWins = document.getElementById('wins').innerHTML = wins;
    var printLetters = document.getElementById('letters').innerHTML = letters;
    var printGuesses = document.getElementById('guesses').innerHTML = guesses;
   
    }