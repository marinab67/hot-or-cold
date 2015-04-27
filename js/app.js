
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
  		x = Math.floor((Math.random()*100) + 1);
  		console.log(x); 
  	}

  	//Starts a new game on load//
  	newGame();

  	//Prevent submit button from refreshing page//
  	$('#guessButton').click(function(e){
  	e.preventDefault();
	});

  

  	function hotOrCold (number) {  
  		if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) {alert("enter a whole number!!! thx."); }
  		else { 
	  		number = $("#userGuess").val();
	  		var difference = Math.abs(number - x);
	  		if (difference > 49) {alert("freezing"); }
	  		else if (29 < difference < 50) {alert("cold"); }
	  		else if (19 < difference < 30) {alert("warm"); }
	  		else if (9 < difference < 20) {alert("hot") ;}
	  		else if (0 < difference < 10) {alert("very hot"); }
	  		else if (difference==0) {alert("you guessed the number!");}
  		}
  	}

  	$("#guessButton").on("click", hotOrCold);

});


