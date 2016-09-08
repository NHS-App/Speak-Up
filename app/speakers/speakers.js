
$('.John').click(showJohn);

function showJohn(){
	$(".extra").hide();
	$(".Johnextra").show();
}

$('.Claire').click(showClaire);

function showClaire(){
	$(".extra").hide();
	$(".Claireextra").show();
}

$('.Jennifer').click(showJennifer);

function showJennifer(){
	$(".extra").hide();
	$(".Jenniferextra").show();
}

$('.Speakers').click(hideAll);

function hideAll(){
	$(".extra").hide();
}

// var emojis = [['😦','amazing'],['😑', 'tremenduos'],['😀', 'fabulous'],['😍', 'great']];

// $("input").mousemove(function(){
// 	var i = $(this).val();
// 	$(".emoji").html(emojis[i][0]);
// 	$('.words').html(emojis[i][1]);
// });
$('.btn-success').click(processDecision)

var username = getUsername();
$('.username').html(username);

startCurrentView();

function processDecision() {
	var answer = parseInt($("input[name=rating]:checked").val());
	database.ref('review-david/').update({
  		[username]: answer
 	});
 	$(".card-header").html("Epoq thanks you for your data.");
 	$("#rating-form").remove();

 	database.ref('review-david').on('value', function(snapshot){
 		var userCount = 0;
 		var ratingSum = 0;
 		snapshot.forEach(function(data){
 			userCount += 1;
 			ratingSum += data.val();
 		});
 		var average = ratingSum / userCount;
 		$(".results").html(userCount + " votes recorded (" + average.toFixed(1) + " rating)");
 	}, function(err){});
}

