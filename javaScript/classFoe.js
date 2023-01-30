console.log("hello class foe");
class Foe{

constructor(){
    this.x = 1250;
    this.y = 0;
    this.h = 80;
    this.w = 100;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/ufo1.png"
}
//drawing foe
drawFoe = ()=>{
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}

//foe movements
foe1Move = ()=>{
    this.y += this.speed - 1;
    if (this.y < 300) {
        this.x -= this.speed;
    }
}

}



