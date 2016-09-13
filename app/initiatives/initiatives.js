// Js for the initiatives cards

$('.Initiative c').click(hideAll);

function hideAll(){
	$(".extra").hide();
}


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
$('.initiative-list').on("click",".rate",changeWord);

function changeWord(){
	var value = $(this).attr('title');
	$('.selected').removeClass('selected');
	$(this).addClass('selected');
	$('.word').html(value);
}

database.ref('initiative').once('value', function(snapshot){
	//console.log("test");
	snapshot.forEach(function(data){
		var name= data.val().Name;
		var info= data.val().Info;
		addInitiative(name,info)
	});
});


function addInitiative(name, info){
		var identifier = removeSpace(name);
		$('.initiative-list').append(   '<div class="container">'+
      '<div class="card-block GSTT text-xs-center"">'+
        '<h4 class="card-title">'+name+'</h4>'+
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
              '<button type="button" class="btn sub1" name="'+name+'">send your feedback</button>'+
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
	var initiative = $(this).attr('name');
	var identifier = removeSpace(initiative);
	var fullname= getUsername();
	var rating = $('.word').html();
	$('.'+identifier+'-ratings').hide();
	$('.'+identifier+'-rating-title').show();
	$('.'+identifier+'-rating-title').html('Thank you for your feedback!')
	database.ref('initiative-ratings/'+ initiative+'/'+fullname).update({
  		Name: fullname,
  		Rating: rating
 	});
}