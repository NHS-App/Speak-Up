// Js for the initiatives cards

$('.Initiative c').click(hideAll);

function hideAll(){
	$(".extra").hide();
}

firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	database.ref('event/' + event + '/initiative/').once('value', function(snapshot){
		//console.log("test");
		snapshot.forEach(function(data){
			var title= data.val().Title;
			var info= data.val().Initiative;
			addInitiative(title,info);
		});
	});
});

function addInitiative(title, info){
		var identifier = removeSpace(title);
		$('.initiative-list').append(   '<div class="container">'+
      '<div class="card-block GSTT text-xs-center"">'+
        '<h4 class="card-title">'+title+'</h4>'+
          '<div class="extra">'+
          '<p class="txt">'+ info +'</p>' +
            '<h5 class="card-text '+identifier+'-rating-title">What did you think?</h5> '+
            '<div class="ratings '+identifier+'-ratings">'+
             '<div class="emojis">'+
                  '<img src="face1.jpg" class="rate rating1" title="Interested">'+
                  '<img src="face2.jpg" class="rate rating2" title="Inspired">'+
                  '<img src="face3.jpg" class="rate rating3" title="Impressed">'+
                  '<img src="face4.jpg" class="rate rating4" title="Excited">'+
                  '<img src="face5.jpg" class="rate rating5" title="Intrigued">'+
               '</div>'+
              '<p class="word">Interested</p>'+
              '<button type="button" class="btn sub1" name="'+title+'">send your feedback</button>'+
            '</div>'+
            // '<div class = "question">'+
            //   '<h5 class="'+identifier+'-question-title">Do you have a question?</h5>'+
            //   '<form class="form-inline">'+
            //     '<input type="text" class="form-control" id="'+identifier+'-question" name="datalabel" placeholder="question"></input>'+
            //      ' <button type="button" class="btn sub2" name="'+name+'">send</button> '+
            //   '</form> '+
            // '</div> '+

          // '</div> '+
      '</div> '+
   ' </div> ')

}

$('.initiative-list').on("click",".card-block",doClick);

function doClick(){
	$(".extra").hide();
	$(this).find('.extra').show();
}
$('.initiative-list').on("click",".rate",changeWord);

function changeWord(){
	var value = $(this).attr('title');
	$('.selected').removeClass('selected');
	$(this).addClass('selected');
	$('.word').html(value);
}

function removeSpace(word){
	word = word.replace(/\s+/g, '-');
	return word;
}


$('.initiative-list').on("click",".card-block",doClick);

function doClick(){
	$(".extra").hide();
	$(this).find('.extra').show();
}


$('.initiative-list').on("click",".sub1",sendFeedback);

function sendFeedback(){

	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

		var initiative = $(this).attr('name');
		var identifier = removeSpace(initiative);
		var fullname= getUsername();
		var rating = $('.word').html();
		$('.'+identifier+'-ratings').hide();
		$('.'+identifier+'-rating-title').show();
		$('.'+identifier+'-rating-title').html('Thank you for your feedback!')
		database.ref('event/'+ event +'/initiative-ratings/'+ initiative+'/'+fullname).update({
	  		Name: fullname,
	  		Rating: rating
 		});
	});
}