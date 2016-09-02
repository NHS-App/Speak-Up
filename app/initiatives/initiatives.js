// Js for the initiatives cards

$('.GSTT').click(showGSTT);

function showGSTT(){
	$(".extra").hide();
	$(".GSTTextra").show();
}

$('.SLAM').click(showSLAM);

function showSLAM(){
	$(".extra").hide();
	$(".SLAMextra").show();
}

$('.KCL').click(showKCL);

function showKCL(){
	$(".extra").hide();
	$(".KCLextra").show();
}

$('.Ini').click(hideAll);

function hideAll(){
	$(".extra").hide();
}