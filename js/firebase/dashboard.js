var load = false;

let enquiryDB = firebase.database().ref('enquiry-database');
let enquiryList;

enquiryDB.on("value", function(snapshot) {

   enquiryList = snapshot.val();
   load = true;
}, function (error) {

   console.log("Error: " + error.code);
});

var arrayValue = [];

function enquiryTable() {

  arrayValue = [];

  for (let key in enquiryList) {

    arrayValue.push([enquiryList[key].timestamp, enquiryList[key].name, enquiryList[key].email, enquiryList[key].mobile, enquiryList[key].message]);
  }
  arrayValue.reverse();
  enquiryHTML();
}

function enquiryHTML() {

  for (var i = 0; i < arrayValue.length; i++) {

    document.getElementById('enquiryLisiting').innerHTML += '<tr>'+
      '<td class="product-name">'+ (i+1) +'</td>'+
      '<td class="product-name">'+ arrayValue[i][0] +'</td>'+
      '<td class="product-name">'+ arrayValue[i][1] +'</td>'+
      '<td class="product-name">'+
      '<a href="mailto:'+ arrayValue[i][2] +'">'+ arrayValue[i][2] +'</a>'+
      '</td>'+
      '<td class="product-name">'+
      '<a href="tel:'+ arrayValue[i][3] +'">'+ arrayValue[i][3] +'</a>'+
      '</td>'+
      '<td class="product-name">'+ arrayValue[i][4] +'</td>'+
      '</tr>';
  }
}

setInterval(function() {

  if(firebase.auth().currentUser == null) {

    window.location.href = "/admin.html";
  }
}, 2600);

var interv = setInterval(checkLoader, 100);
function checkLoader() {

  if (load) {

    enquiryTable();
    clearInterval(interv);
  }
}
