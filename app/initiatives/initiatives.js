// Js for the initiatives cards
database.ref('initiative').once('value', function(snapshot){
	//console.log("test");
	snapshot.forEach(function(data){
		var title= data.val().Title;
		var info= data.val().Initiative;
		addInitiative(title,info)
	});
});


function addInitiative(title, info){
		$('.initiative-list').append('<div class="container"><div class="card-block GSTT text-xs-center"><h4 class="card-title">'+title+'<h4><div class="GSTTextra extra"> <p>'+info+'</p><button type="button" class="btn">I\'m interested</button></div></div></div>')

}


$('.initiative-list').on("click",".card-block",doClick);

function doClick(){
	$(".extra").hide();
	$(this).find('.extra').show();
}
