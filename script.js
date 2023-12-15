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
    console.log(balls[0])

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
    }, 60)

  }else{
    stopped=true
    pickButton.innerText = "뽑아뽑아"
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
  let numbers=5
  for (let i=1; i<=numbers; i++){
    balls.push(new Ball(i, Math.floor(Math.random()*16777215).toString(16)))
  }
  // console.log(balls)
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

