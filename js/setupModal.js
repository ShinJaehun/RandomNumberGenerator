// Get the modal
const settingsModal = document.getElementById("settings");

// Get the button that opens the modal
const setupBtn = document.getElementById("setup");

// Get the <span> element that closes the modal
const closeSpan = document.getElementById("close");
const cancelBtn = document.getElementById("cancel");

const storage=localStorage
const usernameInput=document.getElementById("username")
const totalInput = document.getElementById("total");
const exnumbersInput = document.getElementById("exnumbers");

// When the user clicks on the button, open the modal
setupBtn.onclick = function() {
  stopped=true
  clearInterval(interval)

  settingsModal.style.display = "block";

  usernameInput.value=storage['username'] ?? "noname"
  totalInput.value=storage['total'] ?? firstN
  let exnumbers=storage['exnumbers'] ? JSON.parse(storage['exnumbers']) : 0 
  exnumbersInput.value=exnumbers
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