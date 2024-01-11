const ballDiv = document.querySelector(".ball")
const pickButton = document.getElementById("pick")
const settingForm = document.getElementById("setting-form");
const initBtn=document.getElementById("init");

let stopped=true
let interval=null

const firstN=10

function main() {
  let balls=[];
  balls=init()
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls)
    }else{
      ballDiv.innerText=balls[0].number
      ballDiv.style.backgroundColor=balls[0].color

      getBall(balls)
      // console.log("pickButton n: "+n)

      pickButton.innerText = "다시 시작"
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

      ballDiv.style.backgroundColor="white"
      settingsModal.style.display = "none";
    }
  });
  
  initBtn.onclick=function(){
    storage.clear()
    balls=init()
  }
}

function init(){
  let storage=localStorage

  let username=storage['username'] ?? "noname"
  let total=storage['total'] ?? firstN
  let exnumbers=storage['exnumbers'] ? JSON.parse(storage['exnumbers']) : null 

  // console.log("init exnumbers: "+exnumbers)

  let balls=[]
  balls=initBalls(total, exnumbers)

  ballDiv.style.backgroundColor="white"
  settingsModal.style.display="none"
  return balls
}
  
function initBalls(numbers, exnumbers){
  // console.log("initBalls n: "+numbers)
  // console.log("initBalls exnumbers: "+exnumbers)

  let balls=[]
  if(exnumbers != null){
    for (let i=1; i<=numbers; i++){
      if(!exnumbers.includes(i)){
        balls.push(new Ball(i))
      }
    }
  }else{
    for (let i=1; i<=numbers; i++){
      balls.push(new Ball(i))
    }
  }
  
  // console.log(balls)
  return balls
}