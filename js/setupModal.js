// Get the modal
const settingsModal = document.getElementById("settings");

// Get the button that opens the modal
const setupBtn = document.getElementById("setup");

// Get the <span> element that closes the modal
const closeSpan = document.getElementById("close");
const cancelBtn = document.getElementById("cancel");

// When the user clicks on the button, open the modal
setupBtn.onclick = function() {
  settingsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
  settingsModal.style.display = "none";
}
cancelBtn.onclick = function() {
  settingsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
}

const settingForm = document.getElementById("setting-form");

settingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let total = document.getElementById("total");
  let exnumber = document.getElementById("exnumber");

  if (total.value == "" || exnumber.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a 인원 of ${total.value} and 제외할 번호 of ${exnumber.value}`
    );
    settingsModal.style.display = "none";
  }
});