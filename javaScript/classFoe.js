console.log("hello class foe");
class Foe{

constructor(){
    this.x = 1000;
    this.y = 50;
    this.h = 80;
    this.w = 100;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/ufo1.png"
}

drawFoe = ()=>{
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}

}