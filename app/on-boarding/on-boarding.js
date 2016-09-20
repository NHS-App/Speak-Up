// Any js for the on-bording page

// From the onboarding page to the login and register page
$('.btn').click(loginAndRegister);

function loginAndRegister(){
  window.location.href = '/app/checkin';
}