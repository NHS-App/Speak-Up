$('.btn-Send').click(sendPledge,IsEmpty);
// $('.btn-Send').insert();
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
	var empty=$('#text1').val();
	var empty1=$('#text2').val();
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










