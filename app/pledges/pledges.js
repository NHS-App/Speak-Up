$('.btn-Send').click(sendPledge);
$('.btn-Del').click(delPledge);
$('.add-button').click(makePledge);

function delPledge(){
	document.getElementById("text1").value="";
	document.getElementById("text2").value="";
}

function sendPledge(){
	var username = getUsername();
	var title = $('#text1').val();
	var pledge = $('#text2').val();
	database.ref('Pledges/' + username + "/UserPledges").push({
  		Title: title,
  		Pledge: pledge
 	});
	//code to send pledge
	delPledge();
	showPledge();
}

function showPledge(){
	$(".make-pledge").hide();
	$(".view-pledge").show();
}

function makePledge(){
	$(".make-pledge").show();
	$(".view-pledge").hide();
}