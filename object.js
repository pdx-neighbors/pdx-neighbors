function survey(submittedForm) {

  var getUserName = document.getElementById("myForm").elements[0].value;

  localStorage.setItem('userData', JSON.stringify(getUserName));
  window.location.href = "index2.html", "_self";

};


var userRetrieve = localStorage.getItem('userData');
if (userRetrieve != null) {
  getUserName = JSON.parse(userRetrieve);
};




//
// window.addEventListener("load", function() {
//
// });
