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

$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel1 option:selected").text();

	database.ref('view/').update({
		currentView: view
	});

	alert("set view to " + view);


}