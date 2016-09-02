
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