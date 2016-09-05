// When the user clicks the button
$('.login').click(showLogin);
$('.register').click(showRegister);
$('.submit-login').click(submitLogin);
$('.submit-register').click(submitRegister);
$('.back').click(goBack);

function showLogin(){
  $('.choice-view').hide();
  $('.login-view').show();

}
function showRegister(){
  $('.choice-view').hide();
  $('.register-view').show();
}
function goBack(){
  $('.register-view').hide();
  $('.login-view').hide();
  $('.choice-view').show();
}
function submitLogin(){
 window.location.href = './app/initiatives';
}

function submitRegister(){
	 window.location.href = './app/initiatives';

}