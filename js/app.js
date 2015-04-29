
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var counter; 
	var guessCompare = [];

  	function newGame () { 
  		numRand = Math.floor((Math.random()*100) + 1);
  		console.log("Answer:" + numRand); 
  		$("#guessList").empty();
  		//Array compares the current guess to previous guess 
  		guessCompare = [];
  		counter = 0;
  		$("#count").html(counter);
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
	if (counter===0) { 
		var userGuess = $("#userGuess").val().trim();
		var isInvalid = isNaN(userGuess) || (userGuess % 1 !== 0) || userGuess === "";
		if (isInvalid) {
			alert("Enter a whole number, plz."); 
		} else { 
			userNumber = $("#userGuess").val();
			console.log("User guess:" + userNumber);
  			var difference = Math.abs(userNumber - numRand);
  			console.log(difference);
  			if (difference > 50) {
  				$("#feedback").html("Freezing!");
  			}
  			else if (difference > 30) {
  				$("#feedback").html("Cold");
			}
			else if (difference > 20) {
				$("#feedback").html("Warm");
			}
			else if (difference > 10) {
				$("#feedback").html("Hot");		  		
			}
			else if (difference > 5) {
				$("#feedback").html("Very hot");
			}
			else if (difference > 0) {
				$("#feedback").html("Soo hot :)");
			} else {
				alert("You win!"); 
				$("#feedback").html("You win!");
			}
  	
		  	counter++;
			$("#count").html(counter);
			$("#guessList").append(userNumber + ", ");	
			//Add distance between guess and answer to guessCompare 
			guessCompare.push(Math.abs(userNumber - numRand));
			console.log("guessCompare:" + guessCompare);

			}	

		$("#userGuess").attr("placeholder", "Enter a whole number").val("");
	  	
  	}

  	else {
  		//Additional guesses 
		var userGuess = $("#userGuess").val().trim();
		var isInvalid = isNaN(userGuess) || (userGuess % 1 !== 0) || userGuess === "";
		if (isInvalid) {
			alert("Enter a whole number, plz."); 
		} else { 
			userNumber = $("#userGuess").val();
			console.log("User guess:" + userNumber);
			if (userNumber==numRand) {
  				alert("You win!"); 
  				$("#feedback").html("You win!");
  			} else {  
				counter++;
				$("#count").html(counter);
				$("#guessList").append(userNumber + ", ");	
				guessCompare.splice(0, 0, Math.abs(userNumber - numRand));
				console.log("guessCompare:" + guessCompare);
				compareGuess(); 
				} 
 			}

 		$("#userGuess").attr("placeholder", "Enter a whole number").val("");
		
		}
}

//Compare current and previous guess 
function compareGuess () { 
	if (guessCompare[0] < guessCompare[1]) { 
		$("#feedback").html("Warmer!");
	} else if (guessCompare[0] > guessCompare[1]) { 
		$("#feedback").html("Colder :(");
	} else { 
		$("#feedback").html("Neither warmer nor colder..");
	}
  }

  	$("#guessButton").on("click", hotOrCold);

});