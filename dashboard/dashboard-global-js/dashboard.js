// Hides Dashboard Views
$('.container').hide();

// Navbar button functions
$('.event').click(processEvent);
$('.init').click(processInit);
$('.speak').click(processSpeak);
$('.del-event').click(processDelEvent);
$('.del-init').click(processDelInit);
$('.del-speak').click(processDelSpeak);
$('.events').click(processEvents);
$('.speaker').click(processSpeaker);
$('.speakq').click(processSpeakq);
$('.proj').click(processProj);
$('.pledges').click(processPledges);

function processEvent(){
	$('.add-event').show();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processInit(){
	$('.add-event').hide();
	$('.add-initiative').show();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processSpeak(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').show();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();	
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processDelEvent(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').show();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processDelInit(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').show();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processDelSpeak(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').show();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();		
}
function processEvents(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').show();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processSpeaker(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').show();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processSpeakq(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').show();
	$('.change-view').hide();
	$('.view-pledge').hide();
}
function processProj(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').show();
	$('.view-pledge').hide();		
}
function processPledges(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.delete-event').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
	$('.choose-event').hide();
	$('.choose-speak').hide();
	$('.choose-question').hide();
	$('.change-view').hide();
	$('.view-pledge').show();	
}

// Character Limit Function
function limitText(limitField, limitCount, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  } else {
    limitCount.value = limitNum - limitField.value.length;
  }
}

// Event Functions
$('.btn-send-event').click(sendEvent);
$('.btn-del-event').click(delEvent);

function delEvent(){
	document.getElementById("event-title").value="";
	document.getElementById("event-info").value="";
}

function sendEvent(){
	var title = $('#event-title').val();
	var event = $('#event-info').val();
	database.ref('event/'+ title).update({
  		Title: title,
  		Event: event
 	});
	//code to send event
	delEvent();
}

// Initiative Functions
$('.btn-send-initiative').click(sendInitiative);
$('.btn-del-initiative').click(delInitiative);

function delInitiative(){
	document.getElementById("initiative-title").value="";
	document.getElementById("initiative-info").value="";
}

function sendInitiative(){
	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

		var title = $('#initiative-title').val();
		var initiative = $('#initiative-info').val();

		database.ref('event/'+ event +'/initiative/'+ title).update({
	  		Title: title,
	  		Initiative: initiative
	 	});
		//code to send initiative
		delInitiative();
	});
}

// Speaker Functions
$('.btn-send-speaker').click(sendSpeaker);
$('.btn-del-speaker').click(delSpeaker);

function delSpeaker(){
	document.getElementById("speaker-name").value="";
	document.getElementById("speaker-info").value="";
}

function sendSpeaker(){
	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

		var name = $('#speaker-name').val();
		var info = $('#speaker-info').val();

		database.ref('event/'+ event +'/speaker/'+ name).update({
	  		Name: name,
	  		Info: info
	 	});
		//code to send speaker
		delSpeaker();
	});
}

// Delete Event Function
database.ref('event/').on('child_added', function(childSnapshot){
		var events = childSnapshot.key;
		deleteEvents(events);
		// console.log(speak);
});


function deleteEvents(events){
		$('.event-list').append('<option title="'+events+'">'+events+'</option');

}

$('.selectevents').click(processDelEvents);

function processDelEvents(){

	var events = $("#sel1 option:selected").text();

	database.ref('event/'+ events).remove();
	$("#sel1 option:selected").remove();
	alert(events + ' Removed!');
	window.location.href = '/dashboard/index.html';
}

// Delete Initiative Function
firebase.database().ref('chosen-event/').on('value', function(snapshot){
var event = snapshot.val().Chosen;

	database.ref('event/'+ event +'/initiative/').on('child_added', function(childSnapshot){
			var init = childSnapshot.key;
			delInit(init);
			// console.log(init);
	});
});

function delInit(init){
		$('.initiative-list').append('<option title="'+init+'">'+init+'</option');

}

$('.selecti').click(processSelecti);

function processSelecti(){
firebase.database().ref('chosen-event/').on('value', function(snapshot){

	var event = snapshot.val().Chosen;

	var init = $("#sel2 option:selected").text();

	database.ref('event/'+ event +'/initiative/' + init).remove();
	$("#sel2 option:selected").remove();
	alert(init + ' Removed!');
	window.location.href = '/dashboard/index.html';
	});
}

// Delete Speaker Function
firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	database.ref('event/'+ event +'/speaker/').on('child_added', function(childSnapshot){
			var speak = childSnapshot.key;
			delSpeak(speak);
			// console.log(speak);
	});
});

function delSpeak(speak){
		$('.speaker-list').append('<option title="'+speak+'">'+speak+'</option');

}

$('.selects').click(processSelects);

function processSelects(){
	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	var speak = $("#sel3 option:selected").text();

	database.ref('event/'+ event +'/speaker/' + speak).remove();
	$("#sel3 option:selected").remove();
	alert(speak + ' Removed!');
	window.location.href = '/dashboard/index.html';
	});
}

// Choose Event Function
database.ref('event/').on('child_added', function(childSnapshot){
		var event = childSnapshot.key;
		chooseEvent(event);
		// console.log(speak);
});


function chooseEvent(event){
		$('.event-choose').append('<option title="'+event+'">'+event+'</option');

}

$('.selectevent').click(processSelectEvent);

function processSelectEvent(){
	var event = $("#sel4 option:selected").text();

	database.ref('chosen-event/').update({
		Chosen: event
	});

	alert(event + ' Chosen');
	window.location.href = '/dashboard/index.html';
};

// Choose Speaker Function
firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	database.ref('event/'+ event +'/speaker/').on('child_added', function(childSnapshot){
			var speak = childSnapshot.key;
			chooseSpeak(speak);
			// console.log(speak);
	});
});

function chooseSpeak(speak){
		$('.speaker-choose').append('<option title="'+speak+'">'+speak+'</option');

}

$('.selectspeaker').click(processSelectSpeaker);

function processSelectSpeaker(){
	var speak = $("#sel5 option:selected").text();

	database.ref('chosen-speaker/').update({
		Chosen: speak
	});

	alert(speak + ' Chosen');
	window.location.href = '/dashboard/index.html';
};

// Choose Question Function
var speakerquestion=[];
var nextQuestion=0;
firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;
	var speaker = "";
	database.ref('chosen-speaker/').once('value', function(snapshot) {
		speaker = snapshot.val().Chosen;
		updateSpeakerQuestions(event, speaker);
	});
});

firebase.database().ref('chosen-speaker/').on('value', function(snapshot){
	var event = "";
	var speaker = snapshot.val().Chosen;
	database.ref('chosen-event/').once('value', function(snapshot) {
		event = snapshot.val().Chosen;
		updateSpeakerQuestions(event, speaker);
	});
});

function updateSpeakerQuestions(event, speaker) {
	// removeAllQuestions($('.question-list'));
	if (event == event) {
		speakerquestion=[];
	}

	firebase.database().ref('event/' + event + "/speaker-question/" + speaker).once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			childSnapshot.forEach(function(childSnapshot) {
				var question = childSnapshot.val();
				// addQuestion(question, speaker);
				speakerquestion.push([question,speaker]);
			});
		});
	});
}

setInterval(addQuestion,100);

function removeAllQuestions(dropDown) {
	if (typeof dropDown != 'undefined' && typeof dropDown.options != 'undefined') {
	    while (dropDown.options.length > 0) {                
	        dropDown.remove(0);
	    }
	}
}

function addQuestion(){
		$('.question-list').append('<option title="'+speakerquestion[nextQuestion][0]+'">'+speakerquestion[nextQuestion][0]+' '+'('+'question for '+speakerquestion[nextQuestion][1]+')'+'</option');
		nextQuestion++;
		if(nextQuestion==speakerquestion.length){
		breakexception;
	}		
}

$('.selectq').click(processSelectq);

function processSelectq(){
	var question = $("#sel6 option:selected").text();

	database.ref('chosen-question/').update({
		Chosen: question
	});

	alert(question + " Chosen!")
}

// Change View Function
$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel7 option:selected").text();

	database.ref('view/').update({
		currentView: view
	});

	alert("set view to " + view);
}

// View Pledge Function
var pledges=[]
var nextPledge=0;
firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	if (event == event) {
		pledges=[];
	}

	database.ref('event/' + event + '/pledges/').on('value', function(snapshot){
		snapshot.forEach(function(childSnapshot){
			childSnapshot.forEach(function(childSnapshot){
			var title= childSnapshot.val().Title;
			var pledge= childSnapshot.val().Pledge;
			// addPledge(title,pledge);
			pledges.push([title,pledge]);
			console.log(title)
			});
		});
	});
});

setInterval(addPledge,100);
var breakexception ={}
function addPledge(){
		$('.pledge-list').append('<option title="'+pledges[nextPledge][0]+'">'+pledges[nextPledge][0]+' '+'('+'Pledge: '+pledges[nextPledge][1]+')'+'</option');
		nextPledge++;
		if(nextPledge==pledges.length){
		breakexception;
	}
}

$('.selectp').click(processSelectP);

function processSelectP(){
	var question = $("#sel8 option:selected").text();
}