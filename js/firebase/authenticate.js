
document.getElementById('loginForm').addEventListener('submit', loginForm);

function loginForm(e) {

  e.preventDefault();

  var username = getInput('username');
  var credential = getInput('password');

  firebase.auth().signInWithEmailAndPassword(username, credential)
    .then((userCredential) => {

      // Signed in
      var user = userCredential.user;
      console.log('Signed In');
      window.location.href = "/dashboard.html";
      // ...
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      $("#login-error").text("Error:"+ error.code +". Please check the username or password you entered.");
    });
}

function signingOut() {

  firebase.auth().signOut().then(() => {

    window.location.href = "/admin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}

function getInput(id) {

  return document.getElementById(id).value;
}
