$('.btn-Send').click(sendPledge);
$('.btn-Del').click(delPledge);
$('.add-button').click(makePledge);

function delPledge(){
	document.getElementById("text1").value="";
	document.getElementById("text2").value="";
}

function sendPledge(){
	var username = "Bob";
	var title = $('#text1').val();
	var pledge = $('#text2').val();
	database.ref('Pledges/'+ username).update({
  		Title: title,
  		Pledge: pledge
 	});
	//code to send pledge
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