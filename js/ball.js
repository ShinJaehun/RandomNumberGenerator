class Ball {
    constructor(number){
        this.number=number
        this.color=this.randomColor()
    }

    randomColor(){
        let r = Math.floor(Math.random() * 241);
        let g = Math.floor(Math.random() * 241);
        let b = Math.floor(Math.random() * 241);
        return `rgb(${r}, ${g}, ${b})`;
    }
}