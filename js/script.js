const ballDiv = document.querySelector(".ball")
const ballContainerDiv = document.querySelector(".ball-container")
const pickedBallDiv = document.querySelector(".picked-ball")

const pickButton = document.getElementById("pick")
const settingForm = document.getElementById("setting-form");
const initBtn=document.getElementById("init");

let stopped=true
let interval=null

const firstN=10
let ballContainerColNum=8

function main() {
  // console.log(window.screen.width)
  if (window.screen.width <= 550) {
    ballContainerColNum=6
  }

  if (window.screen.width <= 450) {
    ballContainerColNum=5
  }

  if (window.screen.width <= 380) {
    ballContainerColNum=4
  }

  if (window.screen.width <= 300) {
    ballContainerColNum=3
  }

  let balls=[]
  let pickedBalls=[]
  balls=init()
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls, pickedBalls)
    }else if(balls.length==1){
      ballDiv.innerText=balls[0].number
      ballDiv.style.backgroundColor=balls[0].color

      getBall(balls, pickedBalls)
      // console.log("pickButton n: "+n)
      pickButton.innerText = "다시"

    }else{

      let storage=localStorage
      let total=storage['total'] ?? firstN
      let exnumbers=storage['exnumbers'] ? JSON.parse(storage['exnumbers']) : null 

      balls=initBalls(total, exnumbers)
    }
  })

  settingForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if(usernameInput.value=="" || totalInput.value == ""){
      alert("빈 칸을 모두 채우세요!");
    }else if(!totalInput.value.match("^[0-9]+$")){
      alert("'인원'에는 숫자만 입력할 수 있습니다.");
    }else if(!exnumbersInput.value.match("^[0-9]*(,*[0-9]*)*$")){
      alert("'제외할 번호'에는 숫자와 쉼표만 입력할 수 있습니다.")
    }else{
      alert("입력한 내용을 반영합니다!");

      let username=usernameInput.value.trim()
      let total=totalInput.value.trim()
      let exnumbers=exnumbersInput.value.split(",").map(Number).filter(x=>x>0 && x<total)

      // console.log(total)
      // console.log(exnumbers)

      storage['username']=username
      storage['total']=total
      storage['exnumbers']=JSON.stringify(exnumbers)

      balls=initBalls(total, exnumbers)
    }
  });
  
  initBtn.onclick=function(){
    storage.clear()
    balls=init()
  }

  // pickedBallDiv.addEventListener("click", function(){
  //   console.log("$pickedBallDiv.textContent")
  // })
}

function init(){
  let storage=localStorage

  let username=storage['username'] ?? "noname"
  let total=storage['total'] ?? firstN
  let exnumbers=storage['exnumbers'] ? JSON.parse(storage['exnumbers']) : null 

  // console.log("init exnumbers: "+exnumbers)

  let balls=[]
  balls=initBalls(total, exnumbers)

  return balls
}
  
function initBalls(numbers, exnumbers){
  // console.log("initBalls n: "+numbers)
  // console.log("initBalls exnumbers: "+exnumbers)

  let balls=[]
  if(exnumbers != null){
    for (let i=1; i<=numbers; i++){
      if(!exnumbers.includes(i)){
        balls.push(new Ball(i, randomColor()))
      }
    }
  }else{
    for (let i=1; i<=numbers; i++){
      balls.push(new Ball(i, randomColor()))
    }
  }
  emptyContainer()  

  pickButton.innerText = "시작" 
  ballDiv.style.backgroundColor="white"
  settingsModal.style.display="none"

  // console.log(balls)
  return balls
}

function randomColor(){
  let r = Math.floor(Math.random() * 241);
  let g = Math.floor(Math.random() * 241);
  let b = Math.floor(Math.random() * 241);
  return `rgb(${r}, ${g}, ${b})`;
}