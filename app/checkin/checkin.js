// When the user clicks the button
$('.login').click(showLogin);
$('.register').click(showRegister);
$('.submit-login').click(submitLogin,IsEmpty);
$('.submit-register').click(submitRegister, IsEmpty1);
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
	var Org = $('#Org').val();
  var JobTitle = $('#JobTitle').val();
	var Email = $('#Email').val();
	database.ref('Users/'+ Fname).update({
  		FullName : Fname,
  		Organisation : Org,
      JobTitle : JobTitle,
  		Email : Email

 	});
  }

  if (Fname == null || Fname == ""){
  alert('Please add the appropriate line of information');  
  }else{
    return false;
  }
  if  (Org == null || Org == ""){
  alert('Please add the appropriate line of information');
  }else{
    return false;
  }
  if (JobTitle == null || JobTitle == ""){
  alert('Please add the appropriate line of information');
  }else{
    return false;
  }
  if  (Email == null || Email == ""){
  alert('Please add the appropriate line of information');
  }else{
    return false;
  }

  localStorage.setItem('Fname', Fname);
  startLoadingAnimation();
	window.location.href = '/app/initiatives';
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}

function IsEmpty(){
  var empty=$('#textbox').val();
    if (empty == null || empty== ""){
      alert("Your form is empty!!Please fill the form");
      return false;
    }else{
      submitLogin();
     
    }
}

function IsEmpty1(){
  var Fname = $('#Fname').val();
  var Org = $('#Org').val();
  var JobTitle = $('#JobTitle').val();
  var Email = $('#Email').val();
    if (Fname == null || Fname== ""){
      alert("Your form is empty!!Please fill the form");
      return false;
    }else if (Org == null || Org== ""){
      alert("Your form is empty!!Please fill the form");
      return false;      
    }else if (JobTitle == null || JobTitle== ""){
      alert("Your form is empty!!Please fill the form");
      return false;      
    }else if (Email == null || Email== ""){
      alert("Your form is empty!!Please fill the form");
      return false;      
    } else {
      submitRegister();
    }        
}






