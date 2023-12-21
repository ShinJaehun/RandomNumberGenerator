const ballDiv = document.querySelector(".ball")
const pickButton = document.getElementById("pick")

let stopped=true
let interval=null
const n=5
// const balls = [];

function main() {
  ballDiv.style.backgroundColor = "red"
  let balls=[]
  balls=initBalls(n)
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls)
    } else {
      // console.log(balls[0])

      ballDiv.innerText=balls[0].number
      ballDiv.style.backgroundColor="#"+balls[0].color

      stopped=true
      getNumber(balls)
      pickButton.innerText = "다시 시작"
      balls=initBalls(n)
    }
  })
}
  
function initBalls(numbers){
  let balls=[]
  for (let i=1; i<=numbers; i++){
    balls.push(new Ball(i, Math.floor(Math.random()*16777215).toString(16)))
  }
  // console.log(balls)
  return balls
}

