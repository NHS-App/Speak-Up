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
	showPledge();
}