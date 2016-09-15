// var username = getUsername();

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
	var title = $('#initiative-title').val();
	var initiative = $('#initiative-info').val();
	database.ref('initiative/'+ title).update({
  		Title: title,
  		Initiative: initiative
 	});
	//code to send initiative
	delInitiative();
}

// Speaker Functions
$('.btn-send-speaker').click(sendSpeaker);
$('.btn-del-speaker').click(delSpeaker);

function delSpeaker(){
	document.getElementById("speaker-name").value="";
	document.getElementById("speaker-info").value="";
}

function sendSpeaker(){
	var name = $('#speaker-name').val();
	var info = $('#speaker-info').val();
	database.ref('speaker/'+ name).update({
  		Name: name,
  		Info: info
 	});
	//code to send speaker
	delSpeaker();
}

// Change View Function
$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel1 option:selected").text();

	database.ref('view/').update({
		currentView: view
	});

	alert("set view to " + view);
}

// Choose Question Function
database.ref('speaker-question/').on('child_added', function(childSnapshot){
	childSnapshot.forEach(function(Question){
		var question = Question.val().Question;
		var name = childSnapshot.key;
		addQuestion(question, name);
		// console.log(question);
	});
});


function addQuestion(question,name){
		$('.question-list').append('<option title="'+question+'">'+question+' '+'('+'question for '+name+')'+'</option');

}

// Chooses a Question and updates the database
$('.selectq').click(processSelectq);

function processSelectq(){
	var question = $("#sel2 option:selected").text();

	database.ref('chosen-question/').update({
		Chosen: question
	});

	alert(question + " Chosen!")
}

// Delete Initiative Function
database.ref('initiative/').on('child_added', function(childSnapshot){
		var init = childSnapshot.key;
		delInit(init);
		// console.log(init);
});


function delInit(init){
		$('.initiative-list').append('<option title="'+init+'">'+init+'</option');

}

$('.selecti').click(processSelecti);

function processSelecti(){
	var init = $("#sel3 option:selected").text();

	database.ref('initiative/' + init).remove();
	$("#sel3 option:selected").remove();
	alert(init + ' Removed!');
}

// Delete Speaker Function
database.ref('speaker/').on('child_added', function(childSnapshot){
		var speak = childSnapshot.key;
		delSpeak(speak);
		// console.log(speak);
});


function delSpeak(speak){
		$('.speaker-list').append('<option title="'+speak+'">'+speak+'</option');

}

$('.selects').click(processSelects);

function processSelects(){
	var speak = $("#sel4 option:selected").text();

	database.ref('speaker/' + speak).remove();
	$("#sel4 option:selected").remove();
	alert(speak + ' Removed!');
}

// Choose Speaker Function
database.ref('speaker/').on('child_added', function(childSnapshot){
		var speak = childSnapshot.key;
		chooseSpeak(speak);
		// console.log(speak);
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
};

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
	var event = $("#sel6 option:selected").text();

	database.ref('chosen-event/').update({
		Chosen: event
	});

	alert(event + ' Chosen');
};

// Hides Dashboard Views
$('.container').hide();

// Navbar button functions
$('.event').click(processEvent);
$('.init').click(processInit);
$('.speak').click(processSpeak);
$('.speakq').click(processSpeakq);
$('.events').click(processEvents);
$('.speaker').click(processSpeaker);
$('.del-init').click(processDelInit);
$('.del-speak').click(processDelSpeak);
$('.proj').click(processProj);

function processEvent(){
	$('.add-event').show();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();
}
function processInit(){
	$('.add-event').hide();
	$('.add-initiative').show();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();
}
function processSpeak(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').show();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();	
}
function processSpeakq(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').show();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();	
}
function processEvents(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').show();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();
}
function processProj(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').show();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').hide();		
}
function processDelInit(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').show();
	$('.delete-speak').hide();		
}
function processDelSpeak(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').hide();
	$('.delete-init').hide();
	$('.delete-speak').show();		
}
function processSpeaker(){
	$('.add-event').hide();
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').hide();
	$('.choose-event').hide();
	$('.choose-question').hide();
	$('.choose-speak').show();
	$('.delete-init').hide();
	$('.delete-speak').hide();	
}