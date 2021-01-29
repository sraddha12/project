 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7WEZVxe5fRP1ro43Lp7ba43GcwMJJoxQ",
  authDomain: "corona-virus-d3d71.firebaseapp.com",
  databaseURL: "https://corona-virus-d3d71-default-rtdb.firebaseio.com",
  projectId: "corona-virus-d3d71",
  storageBucket: "corona-virus-d3d71.appspot.com",
  messagingSenderId: "195564329097",
  appId: "1:195564329097:web:e45d33335e671e48458e58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var UserInputsRef=firebase.database().ref('UserInputs')// reference is a location in the database
  document.getElementById("testform").addEventListener("submit",submitform);
  function submitform(event)
  {
    event.preventDefault();
    var fname= getInputVal("firstname");
    var lname =getInputVal('lastname');
    var mobile =getInputVal('mobile');
    var state =getInputVal('state');
    var email =getInputVal('email');
    var emailstatus=validateEmail();
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var symptomsList =getSelectedCheckboxValues('symptoms');
    var selectedOption = document.querySelector('input[name = option]:checked').value;
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);
    state=state.toLowerCase();
    readState(state);
  }
  function getInputVal(id){
    return document.getElementById(id).value;
}
function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);// $ value
  let values = [];
  checkboxes.forEach((checkbox) => { // foreach-access elements in a list one by one like a loop
      values.push(checkbox.value); // push-function adds elements to the end of list
    } // pop
  );
  return values;
}
function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList){
  var newuserInputsRef = UserInputsRef.push();
  newuserInputsRef.set({// .set is a firebase function used to set values of variables
      name:name,
      mobile:mobile,
      email:email,
      profession:profession,
      dateofbirth:dateofbirth,
      selectedOption:selectedOption,
      state:state, 
      symptomsList:symptomsList
  })
  alert("Thank you, find the list of centers nearby!  ");
}

  //event.preventDefault-a function
  //going cancel the default functioning(working) option
//.TEST makes sure its lhs is equal to the function in the bracket