
$(document).ready(function loaded (){

<<<<<<< 4291893ec8105260b621ffe9a69badcc56061b43
	// Intro class shown; img with instructions to click. Other classes hidden

=======
>>>>>>> now
	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();

<<<<<<< 4291893ec8105260b621ffe9a69badcc56061b43
	// User clicks on img, fades out intro class, fades in first ques via play area class

	$("#introgspic").click(function introduction (e){
		e.preventDefault(); // prevent the click from happening. 
		$("#intro").fadeOut(); // hide the intro
		$("#play_area").fadeIn(); // show play area
		$("#answer_area").hide();
	});

	//Play area
	//Ask user a question
	
	// var totalQuestions = questionList.length;
	var lastQuestion = questionList[4];
	var currentQuesIndex = 0;
	var currentQues = questionList[currentQuesIndex];
	var displayTheQues = $("#questions").append('<li class="ask">' + currentQues.ask + '</li>');
	var displayAnsChoices = currentQues.choices.forEach(function getEachAnsChoice (ansChoice) {
			$("#questions").append('<input name="choices" type="radio" value="ansChoice">' + ansChoice + '<br>')
			});
	var numCorrect = 0;

	var uponSubmit = $("#subbtn").click(function checkAns (){
			$("#question_area").hide(); 
			$("#answer_area").show();
			
			var chosenAns = $("input[name='choices' type='radio']:checked").val();
			var correctAnswer = currentQues.correctAns[0];

				if (chosenAns == correctAnswer) {
					$("#answer").text("You are correct!");
					$("#facts").append(currentQues.info);
					$("#numQuesCorrect").html(numCorrect += 1);
				}

				else {
					$("#answer").append("Sorry, you are incorrect.  The correct answer is " + correctAnswer);
					$("#facts").append(currentQues.info);
				}
		});

	// User clicks for next question
	var uponNext = $("#nextbtn").click(function nextQues (){
		$("#answer_area").fadeOut();

		if (lastQuestion == currentQues) {
				$("#done").fadeIn();
			$("#rsbtn").click(function playAgain (){
				location.reload();
			})
		}
		
		else {
			currentQuesIndex++;
			displayTheQues;
			displayAnsChoices;
			}		
	});


=======
	$("#introgspic").click(function(e){
		e.preventDefault(); // prevent the click from happening. 
		$("#play_area").fadeIn(); // show play area
		$("#intro").fadeOut(); // hide the intro
	});


(questionList).forEach(function(currentQues) { // each question in questionList Array
	var possibleAnswers = currentQues.choices; // gabe: Array of choices for current question. Alternative syntax is: currentQues['choices']
	$("#quesForm").append('<li class="ask">' + currentQues.ask + '</li>'); // the question. gabe: added quotes around html string
	$("#quesForm").append('<input id="choices" type="radio">' + possibleAnswers + '<br>');

	// gabe: iterate over each possibleAnswer
	possibleAnswers.forEach(function(possibleAnswer) {
		var value = correntans == possibleAnswer ? 'right' : 'wrong';
		 // gabe: added quotes around html string. listed each possibleAns
	})

})
	


	/* ----- when shepherd clicked, play_area id shown, question_area and header classes shown, others hidden ------  */
				/* ----- question counter needs to be coded ------  */
				/* ----- first question displayed w choices ------  */

	/* ----- when submit button pushed, answer_area class comes in ------  */
			/*need to code evaluation of answers against one another*/
			/* ----- Next Question button hit moves on to new question removes old ques------  */

	/* ----- when submit pushed on last question, done class displayed------  */

			/* ----- play again button refreshes game ------  */


});
>>>>>>> now

/*
	var quesLoop = 
	displayTheQues.fadeIn();
	displayAnsChoices.fadeIn();
	uponSubmit;
	uponNext;
*/
	
		 

})
	