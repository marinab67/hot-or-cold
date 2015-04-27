
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
  

  	function hotOrCold (number) {  
  		if (isNaN($("#userGuess").val()) || ($("#userGuess").val())%1!=0) {alert("enter a whole number!!! thx."); }
  		else { 
	  		number = parseInt($("#userGuess").val());
	  		var difference = Math.abs(number - x);
	  		if (difference > 49) {alert("your guess is ice cold lol~"); }
	  		else if (29 < difference < 50) {alert("cold"); }
	  		else if (19 < difference < 30) {alert("warm"); }
	  		else if (9 < difference < 20) {alert("hot") ;}
	  		else {alert("very hot"); }
  		}
  	}

  	$("#guessButton").on("click", hotOrCold);

});


