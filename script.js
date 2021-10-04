var $ = function (id) {
  return document.getElementById(id);
}
var joinList = function () {
  var emailAddress1 = $("password_required").value;
  var emailAddress2 = $("password_required_again").value;
  var password = $("password").value;
  var isValid = true;
  //if the first email address is blank
  if (emailAddress1 == "") {
    $("email_address1_error").firstChild.nodeValue =
      "This field is required.";
    isValid = false;
  }
  else {
    $("email_address1_error").firstChild.nodeValue = "";
  }
  //if the second email address entered does not match the first
  if (emailAddress1 !== emailAddress2) {
    $("email_address2_error").firstChild.nodeValue =
      "The two email addresses do not match.";
    isValid = false;
  }
  else {
    $("email_address2_error").firstChild.nodeValue = "";
  }
  if ((password).length < 8) {
    $("password_error").firstChild.nodeValue =
      "Password is invalid";
    isValid = false;
  }
  else {
    $("password_error").firstChild.nodeValue = "";
  }

  //if everything is good
  if (isValid) {
    alert("You Are All Signed Up!")
  }
}


window.onload = function () {
  $("join_list").onclick = joinList;

}

$(window).on('load', function () {
  $('#mdb-preloader').addClass('loaded');
});

var submit = function () {
  window.location.href = "/index.html";
}