// When the user clicks the button
$('.login').click(showLogin);
$('.register').click(showRegister);
$('.submit-login').click(IsEmpty, submitLogin);
$('.submit-register').click(IsEmpty1,submitRegister);
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

function IsEmpty(){
  var empty=$('#EmailLogin').val();
    if (empty == null || empty== ""){
      alert("Your form is empty!!Please fill the form");
      return false;
    }else if (validateEmail(empty)){
    $("#result").text(empty + " is valid :)");
    $("#result").css("color", "lightgreen");
    submitLogin();
    //return true;
  } else {
    $("#result").text(empty + " is not valid :(");
    $("#result").css("color", "red");
  }
    return false;
  
}

function submitLogin(){
  var EmailLogin=$('#EmailLogin').val();
  var page="../../app/checkin/index.html";
  database.ref('Users/').orderByChild('Email');
  if(!IsEmpty()){
  var page1 ="../../app/initiatives/index.html";
  var page1 = "";

    database.ref('Users/').orderByChild('Email');
    database.ref('Users/').once('value', function(snapshot){
      snapshot.forEach(function(data){
      var EmailLoginDB=data.val().Email;
      // alert("EmailLoginDB: |" + EmailLoginDB + "| email: |" + EmailLogin + "|");
      // //alert(EmailLoginDB.match(EmailLogin));
      if((EmailLoginDB.match(EmailLogin))!=null){
        page1="../../app/initiatives/index.html";

      }
      // alert(page1);
    })
  })};


firebase.database().ref('Users/').on('value', function(snapshot){
  database.ref('Users/').once('value', function(snapshot){
    snapshot.forEach(function(data){
      var title= data.val().Email;
      alert(title);
    });
  });
});

 var page1 ="../../app/initiatives/index.html";
  var page1 = "";
  // alert(page);
  if(page1!=null){
    startLoadingAnimation();
    window.location.href = page1;
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
  localStorage.setItem('Fname', Fname);
  localStorage.setItem('Org', Org);
  localStorage.setItem('JobTitle', JobTitle);
  localStorage.setItem('Email', Email);
  startLoadingAnimation();
	window.location.href = '../../app/initiatives/index.html';
  setTimeout(function() {
  stopLoadingAnimation();
  }, 500)
}

function validateEmail(empty) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(empty);
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
    } else if (validateEmails(Email)){
    $("#results").text(Email + " is valid :)");
    $("#results").css("color", "lightgreen");
    submitRegister();
  } else {
    $("#results").text(Email + " is not valid :(");
    $("#results").css("color", "red");
  }
  return false; 
}
}