function picking(balls){
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
    getBall(balls)
  }
}

function playSoundEffect(){
  var audio = new Audio("resources/retro_coin.wav")
  audio.play()
}

function getBall(balls){
  let num=parseInt(ballDiv.textContent)
  // console.log(num)
  for(let i=0; i<balls.length; i++){
    if(balls[i].number==num){
      // ballContainerDiv.innerText=balls[i].number
      // balls.splice(i, 1)x
      toContainer(i, balls)
    }
  }
  console.log(balls)
}

function toContainer(num, balls){
  ballContainerDiv.innerHTML+=
    `<div class="picked-ball" 
      style="background-color:${balls[num].color}">
      ${balls[num].number}
    </div>`
  
  balls.splice(num, 1)
}

function emptyContainer(){
  document.querySelectorAll(".picked-ball").forEach(el => el.remove());
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
