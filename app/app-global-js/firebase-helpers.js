// File for firebase related variables and functions//


//----------VARIABLES------//
//function call to set up databse
setupFirebase();
//variable with path to database
var database = firebase.database();
// variable that will be updated with the current view in firebase field

//----FUNCTIONS---------------//
function setupFirebase(){
  var config = {
    apiKey: "AIzaSyDUvnTNswAlQ0YjP_FA33lhPneUA22gZS8",
    authDomain: "speak-up-5df57.firebaseapp.com",
    databaseURL: "https://speak-up-5df57.firebaseio.com",
    storageBucket: "speak-up-5df57.appspot.com",
  };
  firebase.initializeApp(config);
}


