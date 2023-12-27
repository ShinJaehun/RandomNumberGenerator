const ballDiv = document.querySelector(".ball")
const pickButton = document.getElementById("pick")
const settingForm = document.getElementById("setting-form");

const firstN=10
let stopped=true
let interval=null
let balls=[];
let n=firstN;

function main() {

  init()
  
  // console.log("main n: "+n)
  
  pickButton.addEventListener("click", function(){
    if(balls.length>1){
      picking(balls)
    // }else if(balls.length==1){
    //   // console.log(balls[0])

    //   ballDiv.innerText=balls[0].number
    //   ballDiv.style.backgroundColor=balls[0].color

    //   getBall(balls)
    //   // console.log("pickButton n: "+n)
    //   // initBalls(n)
    //   // init()
    // }else{
    //   pickButton.innerText = "다시 시작"
    //   let storage=localStorage
    //   let n=storage['total'] ?? firstN
    //   initBalls(n) // 첨에 볼 화면에 표시할 balls 

    //   // init()
    // }
  }else{
    // console.log(balls[0])

    ballDiv.innerText=balls[0].number
    ballDiv.style.backgroundColor=balls[0].color

    getBall(balls)
    // console.log("pickButton n: "+n)
    // initBalls(n)
    // init()

    pickButton.innerText = "다시 시작"
    let storage=localStorage
    let n=storage['total'] ?? firstN
    initBalls(n) // 첨에 볼 화면에 표시할 balls 
  }
})

  settingForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if(usernameInput.value=="" || totalInput.value == "" || exnumbersInput.value == ""){
      alert("빈 칸을 모두 채우세요!");
    }else if(!totalInput.value.match("^[0-9]+$")){
      alert("'인원'에는 숫자만 입력할 수 있습니다.");
    }else if(!exnumbersInput.value.match("^[0-9]*(,*[0-9]*)*$")){
      alert("'제외할 번호'에는 숫자와 쉼표만 입력할 수 있습니다.")
    }else{
      // perform operation with form input
      alert("입력한 내용을 반영합니다!");
      let username=usernameInput.value.trim()
      let total=totalInput.value.trim()
      let exnumbers=exnumbersInput.value.split(",").map(Number).filter(x=>x>0 && x<total)
      // let exnumbers=exnumbersInput.value.split(",").filter(y => y < total).map(x => x.trim())// trim은 없어도 되는게 위에서 걸러짐!

      // console.log(total)
      // console.log(exnumbers)

      storage['username']=username
      storage['total']=total
      storage['exnumbers']=exnumbers

      initBalls(total) // initBalls(total)이렇게 처리하고 init()는 시작할 때 딱 한번만 실행되게
      // event listener를 setupModal.js로 옮기고 싶은데 balls를 main() 스코프 안에서 처리해야 하기 때문에 여기 있음...

      ballDiv.innerText=total
      ballDiv.style.backgroundColor=balls[total-1].color

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

  initBalls(n) // 첨에 볼 화면에 표시할 balls 
  ballDiv.innerText=n
  ballDiv.style.backgroundColor=balls[n-1].color
}
  
function initBalls(numbers){
  console.log("initBalls n: "+numbers)
  balls=[]
  for (let i=1; i<=numbers; i++){
    balls.push(new Ball(i))
  }
  console.log(balls)
  // return balls
  // ballDiv.innerText=numbers
  // ballDiv.style.backgroundColor=balls[numbers-1].color
}

