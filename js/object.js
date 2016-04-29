// User Form function
function survey(submittedForm) {
  var getUserName = document.getElementById("myForm").elements[0].value;
  localStorage.setItem('userData', JSON.stringify(getUserName));
  window.location.href = "index2.html", "_self";
};

// Local Storage for user name
var userRetrieve = localStorage.getItem('userData');
if (userRetrieve != null) {
  getUserName = JSON.parse(userRetrieve);
};

// check to see if id exist
if (
  document.getElementById('displayUserName') != null) {
  document.getElementById('displayUserName').innerHTML = getUserName
}

// window load event listener
window.addEventListener('load', function () {
  if (document.getElementById('reloadButton') != null) {
    var button3 = document.getElementById('reloadButton');
    button3.addEventListener('click', function(){
    localStorage.removeItem('results', 'neighborhoods');
    window.location.reload();
    totalCount = 0;
    categoryIndex = 0;
    displayImage(categoryArray[categoryIndex]);
  })
  }
});
