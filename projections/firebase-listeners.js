function showView(view) {
  $('.view').hide();
  $(view).show();
}

//Listener for the database for pledges
var pledges=[];
var nextPledge=0;
firebase.database().ref('Pledges').on( 'child_added', function(childSnapshot, prevChildKey) {
	var title = childSnapshot.val().Title;
	var pledge = childSnapshot.val().Pledge;
	var name = childSnapshot.key;
	// console.log(name);
	// console.log(title);
	// console.log(pledge);

	pledges.push([name,title,pledge]);

	// console.log(pledges[0]);

	// setInterval(pledges, 3000);

	// $('.pledges-result1').html(name + pledges[0]);
});

setInterval(printPledges,1000);

// setTimeout(printPledges,1000);

function printPledges(){
	$('.pledges-result').html(pledges[nextPledge][0]);
	$('.pledges-title').html(pledges[nextPledge][1]);
	$('.pledges-pledge').html(pledges[nextPledge][2]);
	nextPledge++;
	console.log(pledges.length);
	if(nextPledge==pledges.length){
		nextPledge=0;
	}
}
firebase.database().ref('view').on('value', function(snapshot) {
	view = snapshot.val().currentView;
switch(view) {
		   case "pledges" :
		   		//code block
		   		showView('.pledges');
		   		break;
		   case "speakers-review" :
		   		showView('.speakers-review');
				break;
		   case "speakers-questions" :
		   		showView('.speakers-questions');
		   		break;
		   	}
});