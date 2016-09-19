$('.btn-Send').click(sendPledge);
$('.btn-Del').click(delPledge);
$('.add-button').click(makePledge);

function delPledge(){
	document.getElementById("pledgeTitle").value="";
	document.getElementById("pledgeBody").value="";
}

function sendPledge(){

	var username = getUsername();
	var title = $('#pledgeTitle').val();
	var pledge = $('#pledgeBody').val();

	if(title.trim() == ""){
		alert("Title can not be empty!");
        $('#pledgeTitle').focus();
	}else if(pledge.trim() == ""){
		alert("Pledge can not be empty!");
        $('#pledgeBody').focus();
	}else{
		//alert("username:" +username);
		//alert("title:"+title);
		//alert("pledge"+pledge);
		//firebase.database().ref('chosen-event/').on('value', function(snapshot){
		firebase.database().ref('chosen-event/').on('value', function(snapshot){
		var event = snapshot.val().Chosen;

			// CONFIRMAR EM QUAL TABELA DEVE GRAVAR!!!
			//database.ref('event/' + event + '/pledges/' + username).push({
			database.ref('event/' + event + '/pledges/' + username).push({
		  		Title: title,
		  		Pledge: pledge
	 		});
			//code to send pledge
			delPledge();
			showPledge();
		    window.location.href = '../../app/pledges/index.html';

		});
	}
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

firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	database.ref('event/' + event + '/pledges/'+getUsername()).once('value', function(snapshot){
		snapshot.forEach(function(data){
			var title= data.val().Title;
			var pledge= data.val().Pledge;
			addPledge(title,pledge);
		});
	});
});

function addPledge(title, pledge){
		$('.pledges-list').append(   '<div class="container">'+
      	'<div class="card-block GSTT text-xs-left"">'+
        	'<h4 class="card-title">Title: '+title+'</h4>'+
            '<h4 class="card-title">Pledge: '+ pledge +'</h4>' +   
      	' </div></div> ')

}