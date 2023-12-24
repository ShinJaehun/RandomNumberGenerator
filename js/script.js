const ballDiv = document.querySelector(".ball")
const pickButton = document.getElementById("pick")

const firstN=10
let stopped=true
let interval=null
function main() {


  let n=firstN
  let balls = [];

  n=init()
  balls=initBalls(n) // 실제 뽑기할 balls

  // console.log("main n: "+n)
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls)
    } else {
      // console.log(balls[0])

      ballDiv.innerText=balls[0].number
      ballDiv.style.backgroundColor=balls[0].color

      // stopped=true
      getBall(balls)
      pickButton.innerText = "다시 시작"
      // console.log("pickButton n: "+n)
      balls=initBalls(n)
    }
  })
}

function init(){
  // ballDiv.style.backgroundColor = "red"

  let storage=localStorage
  // let username=storage['username']
  // let n=storage['total']
  // let exnumbers=storage['exnumbers']
  let username=storage['username'] ?? "noname"
  let n=storage['total'] ?? firstN
  let exnumbers=storage['exnumbers'] ?? 0

  // if(storage['username'] ?? false){
  //   username=storage['username']
  // }else{
  //   username="noname"
  // }

  // if(storage['total'] ?? false){
  //   n=storage['total']
  // }else{
  //   n=0
  // }

  // if(storage['exnumbers'] ?? false){
  //   exnumbers=storage['exnumbers']
  // }else{
  //   exnumbers=0
  // }

  
  // let balls=[]
  // if(n!=null){
  // if(typeof n!=="undefined"){  // 다 같은 결과
  //   // console.log(username +" "+ n +" "+ exnumbers)
  //   ballDiv.innerText=n
  //   balls=initBalls(n)
  //   // console.log(balls)
  //   // ballDiv.style.backgroundColor="#"+balls[n-1].color
  //   ballDiv.style.backgroundColor=balls[n-1].color
  
  // } else {
  //   ballDiv.innerText=firstN
  //   ballDiv.style.backgroundColor="red"
  // }

  // 근데 굳이 이렇게 할 필요가...
  // balls=initBalls(n) // 첨에 볼 화면에 표시할 balls 
  // ballDiv.innerText=n
  // ballDiv.style.backgroundColor=balls[n-1].color
  
  return n
}
  
function initBalls(numbers){
  // console.log(numbers)
  let balls=[]
  for (let i=1; i<=numbers; i++){
    // balls.push(new Ball(i, Math.floor(Math.random()*16777215).toString(16)))
    
    // balls.push(new Ball(i, randomColor()))
    balls.push(new Ball(i))

  }
  // console.log(balls)
  return balls
}
