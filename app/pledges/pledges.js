$('.send').click(sendPledge);
$('.del').click(DelPledge);
$('.submit-send').click(submitSend);
// $('.submit-register').click(submitRegister);
$('.back').click(goBack);

function sendPledge(){
  $('.choice-view').hide();
  $('.login-view').show();

}
function goBack(){
  $('.register-view').hide();
  $('.login-view').hide();
  $('.choice-view').show();
}
function sendPledge(){
 window.location.href = './app/initiatives';
}

// function submitRegister(){
// 	 window.location.href = './app/initiatives';

// }