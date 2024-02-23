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

// Function to show tick image
function showTickImage(id) {
  var tickImage = document.querySelector("#quiz_" + id + " .tick-image");
  tickImage.style.display = "block";
}

// Function to show wrong image
function showWrongImage(id) {
  var wrongImage = document.querySelector("#quiz_" + id + " .wrong-image");
  wrongImage.style.display = "block";
}

// Function to hide tick and wrong images
function hideTickAndWrongImages(id) {
  var tickImage = document.querySelector("#quiz_" + id + " .tick-image");
  var wrongImage = document.querySelector("#quiz_" + id + " .wrong-image");
  tickImage.style.display = "none";
  wrongImage.style.display = "none";
}

// Function to handle the validation of answers
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
    showTickImage(id); // Call function to show tick image
    $("#att" + id).css("display", "block");
    $("#att" + id).attr("src", "../images/tick.png");
  } else {
    $validateText.innerHTML = "";
    $validateText.style.color = "#00000";
    $feedbackText[index].style.color = "#00000";
    $colorText[index].style.background = "#ef5b5b";
    showWrongImage(id); // Call function to show wrong image
  }
}

// Function to reset the quiz
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
  hideTickAndWrongImages(id); // Call function to hide tick and wrong images
}

// Function to clear selected input
function clearInput() {
  var inputs = document.querySelectorAll(".radio-btn");
  for (var i = 0, len = inputs.length; i < len; i++) {
    if (inputs[i].classList.contains("checked")) {
      inputs[i].classList.remove("checked");
    }
  }
}

// Event listener for radio button clicks
document.addEventListener("DOMContentLoaded", function () {
  var radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons.forEach(function (radioBtn) {
    radioBtn.addEventListener("click", function () {
      clearInput();
      this.classList.add("checked");
    });
  });
});

// Function to reset the quiz on button click
document.addEventListener("DOMContentLoaded", function () {
  var resetButtons = document.querySelectorAll(".reset");
  resetButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var quizid = this.id;
      refresh(quizid);
    });
  });
});
