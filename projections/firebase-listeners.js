function showView(view) {
  $('.view').hide();
  $(view).show();
}

//Listener for the database for pledges
var pledges=[];
var nextPledge=0;
var nextPledge1=1;
var nextPledge2=2;
var nextPledge3=3;
firebase.database().ref('Pledges').on( 'child_added', function(childSnapshot, prevChildKey) {
	var title = childSnapshot.val().Title;
	var pledge = childSnapshot.val().Pledge;
	var name = childSnapshot.key;
	// console.log(name);
	// console.log(title);
	// console.log(pledge);

	pledges.push([name,title,pledge]);

	// console.log(pledges[0]);

	// setInterval(pledges, 3000);

	// $('.pledges-result1').html(name + pledges[0]);
});

setInterval(printPledges,3000);

// setTimeout(printPledges,1000);

function printPledges(){
	$('.pledges-result').html(pledges[nextPledge][0] + " Pledged:");
	$('.pledges-title').html("Title: " + pledges[nextPledge][1]);
	$('.pledges-pledge').html("Pledge: " + pledges[nextPledge][2]);
	nextPledge++;
	// console.log(pledges.length);
	if(nextPledge==pledges.length){
		nextPledge=0;
	}
}

// setInterval(printPledges1, 5000);

// function printPledges1(){
// 	$('.pledges-result1').html(pledges[nextPledge1][0] + " Pledged:");
// 	$('.pledges-title1').html("Title: " + pledges[nextPledge1][1]);
// 	$('.pledges-pledge1').html("Pledge: " + pledges[nextPledge1][2]);
// 	nextPledge1=nextPledge1+2;
// 	console.log(pledges.length);
// 	if(nextPledge1>12){
// 		nextPledge1=1;
// 	}
// }

// setInterval(printPledges2, 5000);

// function printPledges2(){
// 	$('.pledges-result2').html(pledges[nextPledge2][0] + " Pledged:");
// 	$('.pledges-title2').html("Title: " + pledges[nextPledge2][1]);
// 	$('.pledges-pledge2').html("Pledge: " + pledges[nextPledge2][2]);
// 	nextPledge2=nextPledge2+3;
// 	console.log(pledges.length);
// 	if(nextPledge2>12){
// 		nextPledge2=2;
// 	}
// }

// setInterval(printPledges3, 5000);

// function printPledges3(){
// 	$('.pledges-result3').html(pledges[nextPledge3][0] + " Pledged:");
// 	$('.pledges-title3').html("Title: " + pledges[nextPledge3][1]);
// 	$('.pledges-pledge3').html("Pledge: " + pledges[nextPledge3][2]);
// 	nextPledge3=nextPledge3+4;
// 	console.log(pledges.length);
// 	if(nextPledge3>12){
// 		nextPledge3=3;
// 	}
// }

// beginning of the review section
// global vars
	var ratings=[];
	var nextRating=0;
firebase.database().ref('initiative-ratings').on( 'child_added', function(childSnapshot, prevChildKey) {
	
	childSnapshot.forEach(function(Rating){
	var name = Rating.val().Name;
	var rating = Rating.val().Rating;
	var initiative = childSnapshot.key;
	
	ratings.push([initiative,name,rating]);
	// console.log(name)
	});
});

setInterval(printRatings,5000);

function printRatings(){
	$('.speaker-title').html("Rating results are as follows:")
	$('.speaker-ratings').html("Initiative: " + ratings[nextRating][0]);
	$('.ratings-result').html(ratings[nextRating][1] + " Chose: " + ratings[nextRating][2]);
	// $('.ratings-rate').html(ratings[nextRating][2]);
	nextRating++;
	// console.log(ratings.length);
	if(nextRating==ratings.length){
		nextRating=0;
	}
}


// beginning of the questions section
// global vars
	var questions=[];
	var nextQuestion=0;
firebase.database().ref('speaker-question').on( 'child_added', function(childSnapshot, prevChildKey) {
	
	childSnapshot.forEach(function(Question){	
	var name = Question.val().Name;
	var question = Question.val().Question;
	
	questions.push([name,question]);
	});
});

setInterval(printQuestions,5000);

function printQuestions(){
	$('.question').html(questions[nextQuestion][0] + " Asked:");
	$('.question-ask').html(questions[nextQuestion][1]);
	nextQuestion++;
	// console.log(questions.length);
	if(nextQuestion==questions.length){
		nextQuestion=0;
	}
}

// Chosen Question function 
firebase.database().ref('chosen-question/').on('value', function(snapshot){
	var chose = snapshot.val().Chosen;
	// console.log(chose);

	$('.chosen-question').html(chose);
});

// Chosen Speaker global variable 
	var questionspeaker=[];
	var nextQuestions=0;
// Chosen Speaker function
firebase.database().ref('chosen-speaker/').on('value', function(snapshot){
	var chose = snapshot.val().Chosen;
	console.log(chose);

	if (chose == chose) {
		questionspeaker=[];
	}

	$('.chose-speaker').html(chose);

// Chosen Speaker Questions
firebase.database().ref('speaker-question/' + chose).on( 'child_added', function(childSnapshot, prevChildKey) {
	
		childSnapshot.forEach(function(Question){
		var name = childSnapshot.val().Name;
		var question = childSnapshot.val().Question;
		// console.log(name);
		// console.log(question);
		questionspeaker.push([name,question]);
		});
	});
});

setInterval(printQuestions,5000);

function printQuestions(){
	$('.chose-speaker-question').html(questionspeaker[nextQuestions][0] + " Asked:");
	$('.chosen-speaker-question').html(questionspeaker[nextQuestions][1]);
	nextQuestions++;
	// console.log(questions.length);
	if(nextQuestions==questionspeaker.length){
		nextQuestions=0;
	}
}

// Switch View 
firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
switch(view) {
		   case "pledges" :
		   		showView('.pledges');
		   		break;
		   case "initiative-review" :
		   		showView('.initiative-review');
				break;
		   case "speakers-questions" :
		   		showView('.speakers-questions');
		   		break;
		   case "chosen-question" :
		   		showView('.chosen-questions');
		   		break;
		   case "chosen-speaker" :
		   		showView('.chosen-speaker');
		   		break;
		   case "Clear View"	:
		   		$('.view').hide();
		   		break;			   			
		   	}
});