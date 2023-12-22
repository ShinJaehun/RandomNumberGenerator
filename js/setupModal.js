// Get the modal
const settingsModal = document.getElementById("settings");

// Get the button that opens the modal
const setupBtn = document.getElementById("setup");

// Get the <span> element that closes the modal
const closeSpan = document.getElementById("close");
const cancelBtn = document.getElementById("cancel");
const initBtn=document.getElementById("init");

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
  exnumbersInput.value=storage['exnumbers'] ?? 0
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

  if (total.value == "" || exnumbers.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    storage['username']=usernameInput.value
    storage['total']=totalInput.value
    storage['exnumbers']=exnumbersInput.value
    // console.log(
    //   `This form has a 인원 of ${total.value} and 제외할 번호 of ${exnumber.value}`
    // );
    init()
    settingsModal.style.display = "none";
  }
});

initBtn.onclick=function(){
  storage.clear()
  init()
  settingsModal.style.display="none"
}