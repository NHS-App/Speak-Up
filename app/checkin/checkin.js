// When the user clicks the button
$('.login').click(showLogin);
$('.register').click(showRegister);


function showLogin(){
  $('.choice-view').hide();
  $('.login-view').show();

}
function showRegister(){
  $('.choice-view').hide();
  $('.register-view').show();
}