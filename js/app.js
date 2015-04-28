
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function newGame () { 
  		numRand = Math.floor((Math.random()*100) + 1);
  		console.log("Answer:" + numRand); 
  		//Displays list of guesses to user 
  		guessList = [];
  		//Compare the current guess to previous guess 
  		guessCompare = [];
  		correctGuess = false;
  		numOfGuesses = 1;
  		$("#guesslist").empty();
  		$("#userGuess").attr("placeholder", "Enter a whole number");
  	}

  	//Starts a new game on load//
  	newGame();

  	//Starts a new game on "New Game" click//
  	$(".new").click(function() { 
  		newGame();
  	});


  	//Prevent submit button from refreshing page//
  	$('#guessButton').click(function(e){
	  	e.preventDefault();
	  	userNumber = $("#userGuess").val();
		console.log("User guess:" + userNumber);
	});

  
  	//Evaluates the user's guess//
  	function hotOrCold () {  
  		if (numOfGuesses==1) {
	  		//while (correctGuess==false)// 
	  		//Check if the user's guess is NaN or contains a decimal//
	  		if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) {
	  			alert("Enter a whole number, plz."); 
	  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
	  		}

	  		else { 
		  		var difference = Math.abs(userNumber - numRand);
		  		console.log(difference);
		  		if (difference > 50) {
		  			$("#userGuess").attr("placeholder", "Freezing!").val("");
		  		}
		  		else if (difference > 30) {
		  			$("#userGuess").attr("placeholder", "Cold").val("");
		  		}
		  		else if (difference > 20) {
		  			$("#userGuess").attr("placeholder", "Warm").val("");
		  		}
		  		else if (difference > 10) {
		  			$("#userGuess").attr("placeholder", "Hot").val("");
		  		}
		  		else if (difference > 5) {
		  			$("#userGuess").attr("placeholder", "Very hot").val("");
		  		}
		  		else if (difference > 0) {
		  			$("#userGuess").attr("placeholder", "Soo hot :)").val("");
		  		}
		  		else {
		  			alert("You win!"); 
		  			$("#userGuess").attr("placeholder", "You win!").val("");
		  			correctGuess = true;
		  		}

	  		}
	  		//Add difference between guess and answer to guessCompare 
  			guessCompare.push(Math.abs(userNumber - numRand));
			console.log("guessCompare:" + guessCompare);
	  		
	  	

	  	numOfGuesses++; 
  	}
  	else {
  		//Additional guesses 
	  		while (correctGuess==false) { 
	  			if (userNumber==numRand) {
		  			alert("You win!"); 
			  		$("#userGuess").attr("placeholder", "You win!").val("");
			  		correctGuess = true;
		  		}
		  		else if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) {
		  			alert("Enter a whole number, plz."); 
	  				$("#userGuess").attr("placeholder", "Enter a whole number").val("");
	  			}
	 			//Compare guess to previous guess 
	 			else {  
  					guessCompare.splice(0, 0, Math.abs(userNumber - numRand));
					console.log("guessCompare:" + guessCompare);
	 				compareGuess(); 
	 				numOfGuesses++;	
	 				break;
	 			}
		}
	}
  }

  //Compare current and previous guess 
  function compareGuess () { 
  	if (guessCompare[0] < guessCompare[1]) { 
  		$("#userGuess").attr("placeholder", "Warmer").val("");
  	}
  	else if (guessCompare[0] > guessCompare[1]) { 
  		$("#userGuess").attr("placeholder", "Colder").val("");
  	}
  	else { 
  		$("#userGuess").attr("placeholder", "Same distance..").val("");
  	}

  }


  	$("#guessButton").on("click", hotOrCold);

});


//Push guesses to array 
//Add guess counter 
//Compare guesses to previous guess 

