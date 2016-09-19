$('.btn-Send').click(sendPledge,IsEmpty);
// $('.btn-Send').insert();
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

// <input type="text" id="userInput"=>give me input</input>
//     <button onclick="test()">Submit</button>
//     <script>

function showPledge(){
	$(".make-pledge").hide();
	$(".view-pledge").show();
}

function makePledge(){
	$(".make-pledge").show();
	$(".view-pledge").hide();
}

function IsEmpty(){
	var empty=$('#pledgeTitle').val();
	var empty1=$('#pledgeBody').val();
    if (empty == null || empty== ""){
      alert("Your form is empty!!Please fill the form");
    	return false;
	}else if (empty1 == null || empty1== "") { 
      alert("Your form is empty!!Please fill the form");
    	return false;    	

    }else{
    	sendPledge();
    }
}

function limitText(limitField, limitCount, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  } else {
    limitCount.value = limitNum - limitField.value.length;
  }
}