
$('.Speakers').click(hideAll);

function hideAll(){
	$(".extra").hide();
}


$('.speaker-list').on("click",".rating",changeWord);

function changeWord(){
	var value = $(this).attr('title');
	$('.word').html(value);
}

database.ref('speaker').once('value', function(snapshot){
	//console.log("test");
	snapshot.forEach(function(data){
		var name= data.val().Name;
		var info= data.val().Info;
		addSpeaker(name,info)
	});
});


function addSpeaker(name, info){
		var identifier = removeSpace(name);
		console.log(identifier);
		$('.speaker-list').append(   '<div class="container">'+
      '<div class="card-block John text-xs-center">'+
        '<h4 class="card-title">'+name+'<h4>'+
          '<div class="extra">'+
          '<p>'+ info +'</p>' +
            '<div class="ratings">'+
              '<h5 class="card-text">What did you think?<h5> '+
              '<fieldset class="rate">' +
                  '<span class="rating1">😝</span>'+
                  '<span class="rating2">😄</span>'+
                  '<span class="rating3">😮</span>'+
                  '<span class="rating4">🙃</span>'+
                  '<span class="rating5">🤔</span>'+
              '</fieldset> '+
              '<p class="word">Interested</p>'+
              '<p class="word">Inspired</p>'+
              '<p class="word">impressed</p>'+
              '<p class="word">Excited</p>'+
              '<p class="word">Intrigued</p>'+
              '<button type="button" class="btn sub1" name="'+name+'">send</button>'+
            '</div>'+
            '<div class = "question">'+
              '<h5 class="'+identifier+'-question-title">Do you have a question?</h5>'+
              '<form class="form-inline">'+
                '<input type="text" class="form-control" id="'+identifier+'-question" name="datalabel" placeholder="question"></input>'+
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


$('.speaker-list').on("click",".sub1",sendFeedback);

function sendFeedback(){
	var speaker = $(this).attr('name');
	var fullname= 'Someone';
	var rating = $('.word').html();
	database.ref('speaker-ratings/'+ speaker+'/'+fullname).update({
  		Name: fullname,
  		Rating: rating
 	});
}

$('.speaker-list').on("click",".sub2",sendQuestion);

function sendQuestion(){
	var speaker = $(this).attr('name');
	var identifier = removeSpace(speaker);
	var fullname= 'Someone';
	var question = $('#'+identifier+'-question').val();
	document.getElementById(identifier+'-question').value=""
	$('.'+identifier+'-question-title').html("Do you have another question?");
	database.ref('speaker-question/'+ speaker+'/'+fullname).update({
  		Name: fullname,
  		Question: question
 	});
}
