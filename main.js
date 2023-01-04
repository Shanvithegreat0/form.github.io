// Initialize Firebase (ADD YOUR OWN DATA)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxUfPkB9kq0CUyZW_jyUL_m2St9CFXCL8",
  authDomain: "kisaansuvidha-2ac6f.firebaseapp.com",
  databaseURL: "https://kisaansuvidha-2ac6f-default-rtdb.firebaseio.com",
  projectId: "kisaansuvidha-2ac6f",
  storageBucket: "kisaansuvidha-2ac6f.appspot.com",
  messagingSenderId: "100049732802",
  appId: "1:100049732802:web:0a7c248f1ce3cb5a49a75b",
  measurementId: "G-LM542QTHSK"
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