const pickButton = document.getElementById("pick")
const ballDiv = document.querySelector(".ball")
ballDiv.style.backgroundColor = "red"

let stopped=true
const balls = [];

class Ball {
  constructor(number, color){
    this.number=number
    this.color=color
  }
}

initBalls()
let interval=null

pickButton.addEventListener("click", function(){
  if(balls.length>1){
    picking()
  } else {
    // console.log(balls[0])

    ballDiv.innerText=balls[0].number
    ballDiv.style.backgroundColor="#"+balls[0].color

    stopped=true
    getNumber()
    pickButton.innerText = "다시 시작"
    initBalls()
  }
})

// function vLerp(A,B,t){
//   const res={};
//   for(let attr in A){
//       res[attr]=lerp(A[attr],B[attr],t);
//   }
//   return res;
// }

// function lerp(a,b,t){
//   return a+(b-a)*t
// }

function picking(){
  if(stopped){
    stopped=false
    pickButton.innerText = "뽑아"
    interval = setInterval(function(){
      // ball.innerText = lottoNumbers[Math.floor(Math.random()*24)+1]
      let pickedNumber = Math.floor(Math.random()*balls.length-1)+1
      ballDiv.innerText = balls[pickedNumber].number
      ballDiv.style.backgroundColor="#"+balls[pickedNumber].color
      // ballDiv.style.textShadow="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }, 60)

  }else{
    stopped=true
    pickButton.innerText = "쑥쑥"
    playSoundEffect()
    clearInterval(interval)
    interval=null;
    getNumber()
  }
}

function playSoundEffect(){
  var audio = new Audio("resources/retro_coin.wav")
  audio.play()
}

function initBalls(){
  let numbers=25
  for (let i=1; i<=numbers; i++){
    balls.push(new Ball(i, Math.floor(Math.random()*16777215).toString(16)))
  }
  console.log(balls)
}

function getNumber(){
  let num=parseInt(ballDiv.textContent)
  // console.log(num)
  for(let i=0; i<balls.length; i++){
    if(balls[i].number==num){
      balls.splice(i, 1)
    }
  }
  console.log(balls)
}

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