
$(document).ready(function loaded (){

	// Intro class shown; img with instructions to click. Other classes hidden

	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();

	// User clicks on img, fades out intro class, fades in first ques via play area class

	$("#introgspic").click(function introduction (e){
		e.preventDefault(); // prevent the click from happening. 
		$("#intro").fadeOut(); // hide the intro
		$("#play_area").fadeIn(); // show play area
		$(".answer_area").hide();
	});

	//Play area

	//Ask user a question
	
	var totalQuestions = questionList.length;
	var currentQues = questionList[0];
	var displayTheQues = $("#questions").append('<li class="ask">' + currentQues.ask + '</li>');
	var displayAnsChoices = currentQues.choices.forEach(function getEachAnsChoice (ansChoice) {
			$("#questions").append('<input id="choices" type="radio">' + ansChoice + '<br>')
			});

	displayTheQues;
	displayAnsChoices;

	//User Submits Answer

	var uponSubmit = $(#subbtn).click(function checkAns (){
			$("#play_area").hide; // show play area
			$(".answer_area").show();
			
			var correctAns = currentQues.correctans[0];

			currentQues.choices.forEach(function compareAns (ansChoice){
				if (ansChoice == correctAns) {

				}
				else {

				}

			} )

		})




	// User clicks for next question
	var uponNext = $(#nextbtn).click(function nextQues (){
			$()
			
		})





	var quesLoop = 
	displayTheQues.fadeIn();
	displayAnsChoices.fadeIn();
	uponSubmit;
	uponNext;
		 

		
		
		


	

	//Answer area
		
		

	 // gabe: Array of choices for current question. Alternative syntax is: currentQues['choices']
	

	 // the question. gabe: added quotes around html string
	
	// gabe: iterate over each possibleAnswer

	// possibleAnswers.forEach(function answeranalysis (possibleAnswer) {

		// var value = correctAns == possibleAnswer ? 'right' : 'wrong';
		 // gabe: added quotes around html string. listed each possibleAns
	

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


