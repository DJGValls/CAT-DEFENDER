console.log("hello class shoot");

class Shoot{
constructor(){
    this.x = 500;
    this.y = 50;
    this.h = 80;
    this.w = 100;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/shoot.png"
}

drawShoot = ()=>{
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}


}