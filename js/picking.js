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
  // console.log(num)
  for(let i=0; i<balls.length; i++){
    if(balls[i].number==num){
      organizeBalls(i, balls, pickedBalls)
      
      // ballContainerDiv.innerHTML+=
      // `<div class="picked-ball" 
      //   style="background-color:${balls[i].color}">
      //   ${balls[i].number}
      // </div>`
      // balls.splice(i, 1)

    }
  }
  // console.log(balls)
}

function organizeBalls(num, balls, pickedBalls){

  pickedBalls.push(new Ball(balls[num].number, balls[num].color))
  console.log(pickedBalls)
  // console.log(document.querySelectorAll(".ball-container .row .picked-ball").length)
  toContainer(num, balls)

  balls.splice(num, 1)
  console.log(balls)
}

function toContainer(num, balls){
  if(document.querySelectorAll(".ball-container .row .picked-ball").length==0 ||
    document.querySelectorAll(".ball-container .row .picked-ball").length%ballContainerColNum==0){
  
    let rowDiv=ballContainerDiv.appendChild(document.createElement("div"))
    rowDiv.className="row"
  }
  // console.log(ballContainerDiv.lastElementChild)
  let lastRowDiv=ballContainerDiv.lastElementChild
  let colDiv=lastRowDiv.appendChild(document.createElement("div"))
  colDiv.className="picked-ball"
  colDiv.style="background-color:"+balls[num].color
  colDiv.innerText=balls[num].number

  colDiv.addEventListener("click", function(){
    console.log(colDiv.textContent)
  })
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
