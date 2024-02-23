var $validateText = "";
var $feedbackText = "";
var $colorText = "";
var $imageText = "";

var selected_answer = "";
var resetBtn = "";
var checkBtn = "";

var clicked = false;
var index = 0;
var length = $feedbackText.length;
var length = $colorText.length;

function showStuff(id) {
  var getId = id.split("_")[1];
  reveal = document.getElementById("answer_" + getId);
  textreveal = document.getElementById("test_" + getId);
  resetreveal = document.getElementById("reset_" + getId);
  textreveal.style.display = "none";
  reveal.style.display = "block";
  resetreveal.style.display = "block";
}

function referesh(id) {
  var getId = id.split("_")[1];
  reveal = document.getElementById("answer_" + getId);
  textreveal = document.getElementById("test_" + getId);
  resetreveal = document.getElementById("reset_" + getId);
  textreveal.style.display = "block";
  reveal.style.display = "none";
  resetreveal.style.display = "none";
}

function validate_ans(quizid, crctAns) {
  var id = quizid.split("_")[1];
  $validateText = document.querySelector("#correct" + id + " #validate" + id);
  $feedbackText = document.querySelectorAll(
    "#feedback" + id + " .feedback-text"
  );
  $colorText = document.querySelectorAll("#color" + id + " .color-text");
  $imageText = document.querySelectorAll("#color" + id + " .images-icon");
  resetBtn = document.getElementById("reset_" + id);
  checkBtn = document.getElementById("check_" + id);
  selected_spans = document.querySelectorAll(
    "#color" + id + " .color-text .radio-btn"
  );

  resetBtn.removeAttribute("disabled");
  correctBox = document.getElementById("correct" + id);
  correctBox.style.display = "block";

  var selectedValue = "";
  for (var i = 0; i < selected_spans.length; i++) {
    if (selected_spans[i].classList.contains("checked")) {
      selectedValue = selected_spans[i].getAttribute("data-value");
      break;
    }
  }

  checkBtn.setAttribute("disabled", "true");

  if (selectedValue === "") {
    $validateText.innerHTML = "You did not answer this!";
    return;
  }

  checkBtn.style.background = "#fbfafa";

  index = selectedValue.charCodeAt(0) % 97;

  $feedbackText[index].style.display = "block";

  if (selectedValue === crctAns) {
    $validateText.innerHTML = "";
    $validateText.style.color = "#00000";
    $feedbackText[index].style.color = "#00000";
    $colorText[index].style.background = "#47b347";
    $imageText[index].style.display = "block";
    $imageText[index].src = "../images/bull.jpg";
    $("#att" + id).css("display", "block");
    $("#att" + id).attr("src", "../images/bull.jpg");
  } else {
    $validateText.innerHTML = "";
    $validateText.style.color = "#00000";
    $feedbackText[index].style.color = "#00000";
    $colorText[index].style.background = "#ef5b5b";
    $imageText[index].style.display = "block";
    $imageText[index].src = "../images/wrong.png";
  }
}

function refresh(quizid) {
  var id = quizid.split("_")[1];
  $validateText = document.querySelector("#correct" + id + " #validate" + id);
  $feedbackText = document.querySelectorAll(
    "#feedback" + id + " .feedback-text"
  );
  $colorText = document.querySelectorAll("#color" + id + " .color-text");
  $imageText = document.querySelectorAll("#color" + id + " .images-icon");
  resetBtn = document.getElementById("reset_" + id);
  checkBtn = document.getElementById("check_" + id);
  selected_spans = document.querySelectorAll(
    "#color" + id + " .color-text .radio-btn"
  );

  for (var i = 0; i < $feedbackText.length; i++) {
    $feedbackText[i].style.display = "none";
  }
  for (var i = 0; i < $colorText.length; i++) {
    $colorText[i].style.background = "none";
  }
  for (var i = 0; i < $imageText.length; i++) {
    $imageText[i].style.background = "none";
    $imageText[i].style.display = "none";
  }
  $validateText.innerHTML = "";
  checkBtn.removeAttribute("disabled", "false");
  checkBtn.style.background = "#E4E4E4";
  for (var i = 0; i < selected_spans.length; i++) {
    selected_spans[i].classList.remove("checked");
  }
  correctBox = document.getElementById("correct" + id);
  correctBox.style.display = "none";
  $("#attempt_" + id).html("");
  $("#att" + id).css("display", "none");
}

function clearInput() {
  var inputs = document.querySelectorAll(".radio-btn");
  for (var i = 0, len = inputs.length; i < len; i++) {
    if (inputs[i].classList.contains("checked")) {
      inputs[i].classList.remove("checked");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons.forEach(function (radioBtn) {
    radioBtn.addEventListener("click", function () {
      clearInput();
      this.classList.add("checked");
    });
  });
});
