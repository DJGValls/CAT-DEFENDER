console.log("hello class shoot");

class Shoot {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.h = 80;
    this.w = 100;
    this.speed = 10;
    this.image = new Image();
    this.image.src = "./images/shoot.png";
  }
  //drawing shot

  drawShot = (object) => {
    ctx.drawImage(object.image, object.x, object.y, object.w, object.h);
};

moveShot = (object) => {
    
    object.x = object.x + this.speed;

  };
    
}
