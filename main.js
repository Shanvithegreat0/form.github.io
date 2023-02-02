// Initialize Firebase (ADD YOUR OWN DATA)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxkQl8XX-9dvBw8rq0hiyMCqMoZz5aRsU",
  authDomain: "open-2db39.firebaseapp.com",
  databaseURL: "https://open-2db39-default-rtdb.firebaseio.com",
  projectId: "open-2db39",
  storageBucket: "open-2db39.appspot.com",
  messagingSenderId: "609600802056",
  appId: "1:609600802056:web:ac05764ab8475ca412f0bd",
  measurementId: "G-6ZFZTYQ6CQ"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
