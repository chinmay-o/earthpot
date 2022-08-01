
let enquiryRef = firebase.database().ref('enquiry-database');

// Enquiry Form 01
document.getElementById('enquiryForm01').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('enquiryName');
  var email = getInput('enquiryEmail');
  var mobile = getInput('enquiryMobile');
	var message = getInput('enquiryMessage');
  
  saveEnquiry(name, email, mobile, message);
}

function saveEnquiry(name, email, mobile, message) {

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    email: email,
    mobile: mobile,
    message: message,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#enquiryForm01')[0].reset();
    $("#form-results").css("display", "block");
    $("#form-results").text("Successfully Submitted. Our team will contact you back.");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#form-results").css("display", "block");
    $("#form-results").text("Failed Submission. Try again after reloading.");
  });
}

// Enquiry Form 02
document.getElementById('enquiryForm02').addEventListener('submit', submitFormCB);

function submitFormCB(e) {

  e.preventDefault();

  var name = getInput('enquiryNameCB');
  var email = getInput('enquiryEmailCB');
  var mobile = getInput('enquiryMobileCB');
	var message = getInput('enquiryMessageCB');

  saveEnquiryCB(name, email, mobile, message);
}

function saveEnquiryCB(name, email, mobile, message) {

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    email: email,
    mobile: mobile,
    message: message,
  })
  .then(function() {

    console.log('Synchronization succeeded');
    $('#enquiryForm02')[0].reset();
    $("#form-cb-results").text("Successfully Submitted. Our team will call you back.");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#form-cb-results").text("Failed Submission. Try again after reloading.");
  });
}

// General Function
function getInput(id) {

  return document.getElementById(id).value;
}
