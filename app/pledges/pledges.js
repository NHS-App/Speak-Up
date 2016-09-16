$('.btn-Send').click(sendPledge);
$('.btn-Del').click(delPledge);
$('.add-button').click(makePledge);

function delPledge(){
	document.getElementById("pledgeTitle").value="";
	document.getElementById("pledgeBody").value="";
}

function sendPledge(){
	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

		var username = getUsername();
		var title = $('#pledgeTitle').val();
		var pledge = $('#pledgeBody').val();
		database.ref('event/' + event + '/pledges/' + username).push({
	  		Title: title,
	  		Pledge: pledge
 		});
		//code to send pledge
		delPledge();
		showPledge();
	});
}

function showPledge(){
	$(".make-pledge").hide();
	$(".view-pledge").show();
}

function makePledge(){
	$(".make-pledge").show();
	$(".view-pledge").hide();
}
function limitText(limitField, limitCount, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  } else {
    limitCount.value = limitNum - limitField.value.length;
  }
}