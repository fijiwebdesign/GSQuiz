
$(document).ready(function(){

	var randomNumber;
	var clicks=0; 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$(".new").click(function(){
		location.reload();
	});

  	$("#guessButton").click(function(e) {

  		e.preventDefault();
 
  		if (randomNumber == null) {
  			randomNumber = generateNumber() 
  		};

  		clickCounter();
  		compareNumbers();

  		function clickCounter() {							
  			$("#count").html(clicks += 1);
  		};
  	
  	 	function generateNumber() {	
  			var minNumber = 1;
  			var maxNumber = 100;
  			var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  				
  			return randomNumber;
  	 	};

	  	function compareNumbers () {
	  		var userGuess = $("#userGuess").val();   
  	 		var difference = Math.abs(parseInt(userGuess - randomNumber));

  	 		$("#guessList").append("<li>" + userGuess + "</li>");

	  		function wrongNumber(message) {   
	  			confirm(message);
	  		};


			if (difference == 0) {
				alert ("You Guessed Correctly! Hooray!");

			} else if (difference >= 50 && difference <= 100) {
				wrongNumber("You are ice cold! Try again!");

			} else if (difference >= 30 && difference <= 49) {
				wrongNumber("You are cold! Try again!");

			} else if (difference >= 20 && difference <= 29)  {
				wrongNumber("You are warm! Try again!");

			} else if (difference >= 10 && difference <= 19)  {
				wrongNumber("You are hot! Try again!");

			} else if (difference >= 1 && difference <= 9)  {
				wrongNumber("You are very hot! Try again!");

			} else {
				wrongNumber("You did not enter a number between 1 and 100.  Please try again!");
			} 
		};
	});
});


