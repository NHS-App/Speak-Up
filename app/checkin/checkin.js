// When the user clicks the button
$('.login').click(showLogin);
$('.register').click(showRegister);
$('.submit-login').click(submitLogin);
$('.submit-register').click(submitRegister);
$('.back').click(goBack);

function showLogin(){
  startLoadingAnimation();
  $('.choice-view').hide();
  $('.login-view').show();
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}
function showRegister(){
  startLoadingAnimation();
  $('.choice-view').hide();
  $('.register-view').show();
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}
function goBack(){
  startLoadingAnimation();
  $('.register-view').hide();
  $('.login-view').hide();
  $('.choice-view').show();
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}
function submitLogin(){
  startLoadingAnimation();
  window.location.href = '/app/initiatives';
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}

function submitRegister(){
	var Fname = $('#Fname').val();
	var Lname = $('#Lname').val();
	var Org = $('#Org').val();
	var Email = $('#Email').val();
	database.ref('Users/'+ Fname+Lname).update({
  		FirstName : Fname,
  		LastName: Lname,
  		Organisation: Org,
  		Email: Email

 	});
  startLoadingAnimation();
	window.location.href = '/app/initiatives';
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}
