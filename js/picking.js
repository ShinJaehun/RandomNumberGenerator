function picking(balls, pickedBalls){
  if(stopped){
    stopped=false
    pickButton.innerText = "뽑아"
    interval = setInterval(function(){
      let pickedNumber = Math.floor(Math.random()*balls.length-1)+1
      ballDiv.innerText = balls[pickedNumber].number
      ballDiv.style.backgroundColor=balls[pickedNumber].color
      // ballDiv.style.textShadow="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }, 60)

  }else{
    stopped=true
    pickButton.innerText = "쑥쑥"
    playSoundEffect()
    clearInterval(interval)
    interval=null;
    getBall(balls, pickedBalls)
  }
}

function playSoundEffect(){
  var audio = new Audio("resources/retro_coin.wav")
  audio.play()
}

function getBall(balls, pickedBalls){
  let num=parseInt(ballDiv.textContent)
  for(let i=0; i<balls.length; i++){
    if(balls[i].number==num){
      // 이렇게 하니까 클릭 이후에 새로 그려진 pickedBalls에는 이벤트핸들러가 사라짐
      // let lastPickedBallDiv = organizeBalls(i, balls, pickedBalls)
      // lastPickedBallDiv.addEventListener("click", function(){
      //   let num = pickedBalls.findIndex(ball => ball.number == lastPickedBallDiv.id)
      //   // console.log(pickedBalls.findIndex(ball => ball.number == number))
      //   balls.push(new Ball(pickedBalls[num].number, pickedBalls[num].color))

      //   pickedBalls.splice(num, 1)
      //   console.log(balls)
      //   console.log(pickedBalls)

      //   emptyContainer()

      //   for(let i=0; i<pickedBalls.length; i++){
      //     toContainer(pickedBalls[i].number, pickedBalls[i].color)
      //   }
      // })
 
      const lastPickedBallDiv=toContainer(balls[i].number, balls[i].color)
      moveBalls(i, balls, pickedBalls)

      lastPickedBallDiv.addEventListener("click", function(e){
        let num = pickedBalls.findIndex(ball=>ball.number==e.target.id)
        moveBalls(num, pickedBalls, balls)
        e.target.remove()
      })
    }
  }
}

// function organizeBalls(num, balls, pickedBalls){
//   pickedBalls.push(new Ball(balls[num].number, balls[num].color))
//   let colDiv=toContainer(balls[num].number, balls[num].color, pickedBalls)
//   balls.splice(num, 1)
//   // console.log(balls)
//   return colDiv
// }

function moveBalls(num, ballsA, ballsB){
  ballsB.push(new Ball(ballsA[num].number, ballsA[num].color))
  ballsA.splice(num, 1)
  console.log(ballsA)
  console.log(ballsB)
}

function toContainer(number, color){
  if(document.querySelectorAll(".ball-container .row .picked-ball").length==0 ||
    document.querySelectorAll(".ball-container .row .picked-ball").length%ballContainerColNum==0){
    console.log("hello")
    let rowDiv=ballContainerDiv.appendChild(document.createElement("div"))
    rowDiv.className="row"
  }

  let lastRowDiv=ballContainerDiv.lastElementChild
  let colDiv=lastRowDiv.appendChild(document.createElement("div"))
  colDiv.className="picked-ball"
  colDiv.id=number
  colDiv.style="background-color:"+color
  colDiv.innerText=number
  return colDiv
}

function emptyContainer(){
  document.querySelectorAll(".ball-container .row .picked-ball").forEach(el => el.remove());
  document.querySelectorAll(".ball-container .row").forEach(el=>el.remove())
}

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
