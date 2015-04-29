
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
  		$("#guessList").empty();
  		//Array compares the current guess to previous guess 
  		guessCompare = [];
  		correctGuess = false;
  		counter = 0;
  		$("#count").html(counter);
  		numOfGuesses = 1;
  		$("#userGuess").attr("placeholder", "Enter a whole number");
  		$("#feedback").html("Make your guess!");
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
		
	});

  
  	//Evaluates the user's guess//
  	function hotOrCold () {  
  		if (numOfGuesses==1) {
	  		//while (correctGuess==false)// 
	  		//Check if the user's guess is NaN or contains a decimal//
	  		if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) 
				{
	  			alert("Enter a whole number, plz."); 
	  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
	  		}


	  		else { 
	  			userNumber = $("#userGuess").val();
				console.log("User guess:" + userNumber);
		  		var difference = Math.abs(userNumber - numRand);
		  		console.log(difference);
		  		if (difference > 50) {
		  			$("#feedback").html("Freezing!");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else if (difference > 30) {
		  			$("#feedback").html("Cold");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else if (difference > 20) {
		  			$("#feedback").html("Warm");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else if (difference > 10) {
		  			$("#feedback").html("Hot");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else if (difference > 5) {
		  			$("#feedback").html("Very hot");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else if (difference > 0) {
		  			$("#feedback").html("Soo hot :)");
		  			$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		  		}
		  		else {
		  			alert("You win!"); 
		  			$("#feedback").html("You win!");
		  			$("#userGuess").attr("placeholder", "").val("");
		  			correctGuess = true;
		  		}
		  	
		  	counter++;
			$("#count").html(counter);
			$("#guessList").append(userNumber + ", ");	
			//Add difference between guess and answer to guessCompare 
  			guessCompare.push(Math.abs(userNumber - numRand));
			console.log("guessCompare:" + guessCompare);
	  		numOfGuesses++; 
	  		
	  		}
	  	
  	}
  	else {
  		//Additional guesses 
	  		while (correctGuess==false) { 
		  		if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) {
		  			alert("Enter a whole number, plz."); 
	  				$("#userGuess").attr("placeholder", "Enter a whole number").val("");
	  			}
	  			else { 
	  			userNumber = $("#userGuess").val();
				console.log("User guess:" + userNumber);
		  			if (userNumber==numRand) {
			  			alert("You win!"); 
			  			$("#feedback").html("You win!");
			  			$("#userGuess").attr("placeholder", "").val("");
			  			correctGuess = true;
			  		}
	 			//Compare guess to previous guess 
		 			else {  
		 				counter++;
						$("#count").html(counter);
						$("#guessList").append(userNumber + ", ");	
	  					guessCompare.splice(0, 0, Math.abs(userNumber - numRand));
						console.log("guessCompare:" + guessCompare);
		 				compareGuess(); 
		 				numOfGuesses++;	
		 				break;
	 				} 
	 		}
		}
	}
  }

  //Compare current and previous guess 
  function compareGuess () { 
  	if (guessCompare[0] < guessCompare[1]) { 
  		$("#feedback").html("Warmer!");
  		$("#userGuess").attr("placeholder", "Enter a whole number").val("");
  	}
  	else if (guessCompare[0] > guessCompare[1]) { 
  		$("#feedback").html("Colder :(");
  		$("#userGuess").attr("placeholder", "Enter a whole number").val("");
  	}
  	else { 
  		$("#feedback").html("Neither warmer nor colder..");
  		$("#userGuess").attr("placeholder", "Enter a whole number").val("");
  	}

  }


  	$("#guessButton").on("click", hotOrCold);

});