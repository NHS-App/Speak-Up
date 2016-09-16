
$('.Speakers').click(hideAll);

function hideAll(){
	$(".extra").hide();
}


$('.speaker-list').on("click",".rate",changeWord);

function changeWord(){
	var value = $(this).attr('title');
	$('.selected').removeClass('selected');
	$(this).addClass('selected');
	$('.word').html(value);
}

firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	database.ref('event/' + event + '/speaker/').once('value', function(snapshot){
		//console.log("test");
		snapshot.forEach(function(data){
			var name= data.val().Name;
			var info= data.val().Info;
			addSpeaker(name,info)
			});
	});
});


function addSpeaker(name, info){
		var identifier = removeSpace(name);
		$('.speaker-list').append(   '<div class="container">'+
      '<div class="card-block John text-xs-center">'+
        '<h4 class="card-title">'+name+'</h4>'+
          '<div class="extra">'+
          '<p>'+ info +'</p>' +
            '<div class = "question">'+
              '<h5 class="'+identifier+'-question-title">Do you have a question?</h5>'+
              '<form class="form-inline">'+
                '<textarea type="text" class="form-control" id="'+identifier+'-question" name="datalabel" style="width:300px; height:150px;" placeholder="question"></textarea>'+
                 ' <button type="button" class="btn sub2" name="'+name+'">send</button> '+
              '</form> '+
            '</div> '+
          '</div> '+
      '</div> '+
   ' </div> ')

}
function removeSpace(word){
	word = word.replace(/\s+/g, '-');
	return word;
}


$('.speaker-list').on("click",".card-block",doClick);

function doClick(){
	$(".extra").hide();
	$(this).find('.extra').show();
}


// $('.speaker-list').on("click",".sub1",sendFeedback);

// function sendFeedback(){
// 	var speaker = $(this).attr('name');
// 	var fullname= getUsername();
// 	var rating = $('.word').html();
// 	console.log(rating, fullname);
// 	database.ref('speaker-ratings/'+ speaker+'/'+fullname).update({
//   		Name: fullname,
//   		Rating: rating
//  	});
// }

$('.speaker-list').on("click",".sub2",sendQuestion);

function sendQuestion(){
	firebase.database().ref('chosen-event/').on('value', function(snapshot){
	var event = snapshot.val().Chosen;

	var speaker = $(this).attr('name');
	var identifier = removeSpace(speaker);
	var fullname= getUsername();
	var question = $('#'+identifier+'-question').val();
	document.getElementById(identifier+'-question').value=""
	$('.'+identifier+'-question-title').html("Do you have another question?");
	database.ref('event/' + event + '/speaker-question/'+ speaker+'/'+fullname).push(question);
	});
}

