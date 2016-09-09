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
	//code to send pledge
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
	//code to send pledge
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
// Hides Dashboard Views
$('.container').hide();

// Navbar button functions
$('.init').click(processInit);
$('.speak').click(processSpeak);
$('.proj').click(processProj);

function processInit(){
	$('.add-initiative').show();
	$('.add-speaker').hide();
	$('.change-view').hide();
}
function processSpeak(){
	$('.add-initiative').hide();
	$('.add-speaker').show();
	$('.change-view').hide();
}
function processProj(){
	$('.add-initiative').hide();
	$('.add-speaker').hide();
	$('.change-view').show();	
}
