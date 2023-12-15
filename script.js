const pickButton = document.getElementById("pick")
const ball = document.querySelector(".ball")
ball.style.backgroundColor = "red"

let stopped=true
const lottoNumbers = [];

initNumbers()
let interval=null

pickButton.addEventListener("click", function(){
  if(lottoNumbers.length>1){
    picking()
  } else {
    stopped=true
    ball.innerText=lottoNumbers[0]
    getNumber()
    pickButton.innerText = "다시 시작"
    initNumbers()
  }
})


function picking(){
  if(stopped){
    stopped=false
    pickButton.innerText = "뽑아"
    interval = setInterval(function(){
      // ball.innerText = lottoNumbers[Math.floor(Math.random()*24)+1]
      ball.innerText = lottoNumbers[Math.floor(Math.random()*lottoNumbers.length-1)+1]
    }, 60)

  }else{
    stopped=true
    pickButton.innerText = "뽑아뽑아"
    playSoundEffect()
    clearInterval(interval)
    interval=null; // 헐 이게 필요 했음.
    //You really only need to use one variable since interval will be reset to null if the interval has been cleared. If this variable is controlled by another function feel free to change it back.
    getNumber()
  }
}

function playSoundEffect(){
  var audio = new Audio("resources/retro_coin.wav")
  audio.play()
}

function initNumbers(){
  let lottoNumbersLength=5
  for (let i=1; i<=lottoNumbersLength; i++){
    lottoNumbers.push(i)
  }
}

function getNumber(){
  let num=parseInt(ball.textContent)
  console.log(num)
  let index = lottoNumbers.indexOf(num)
  // console.log(index)
  if (index>-1){
    lottoNumbers.splice(index, 1)
    console.log(lottoNumbers)
  }
}
