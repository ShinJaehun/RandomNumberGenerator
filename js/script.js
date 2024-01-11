const ballDiv = document.querySelector(".ball")
const pickButton = document.getElementById("pick")
const settingForm = document.getElementById("setting-form");

const firstN=10
let stopped=true
let interval=null

function main() {
  let balls=[];
  // let n=firstN;
  
  balls=init()
  let n=balls.length
  // console.log("main n: "+n)
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls)
    } else {
      // console.log(balls[0])

      ballDiv.innerText=balls[0].number
      ballDiv.style.backgroundColor=balls[0].color

      getBall(balls)
      pickButton.innerText = "다시 시작"
      // console.log("pickButton n: "+n)
      balls=initBalls(n)
    }
  })

  settingForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (usernameInput.value=="" || totalInput.value == "" || exnumbersInput.value == "") {
      alert("빈 칸을 모두 채우세요!");
    } else {
      // perform operation with form input
      alert("입력한 내용을 반영합니다!");
      storage['username']=usernameInput.value
      storage['total']=totalInput.value
      storage['exnumbers']=exnumbersInput.value

      balls=init() 
      // event listener를 setupModal.js로 옮기고 싶은데 balls를 main() 스코프 안에서 처리해야 하기 때문에 여기 있음...
      settingsModal.style.display = "none";
    }
  });
}

function init(){
  let storage=localStorage

  let username=storage['username'] ?? "noname"
  let n=storage['total'] ?? firstN
  let exnumbers=storage['exnumbers'] ?? 0

  console.log("init n: "+n)

  let balls=[]
  balls=initBalls(n) // 첨에 볼 화면에 표시할 balls 
  ballDiv.innerText=n
  ballDiv.style.backgroundColor=balls[n-1].color

  return balls
}
  
function initBalls(numbers){
  console.log("initBalls n: "+numbers)
  let balls=[]
  for (let i=1; i<=numbers; i++){
    balls.push(new Ball(i))
  }
  console.log(balls)
  return balls
}
