console.log("hello class ship");

class Ship {
  constructor() {
    //ship
    this.x = 50;
    this.y = 350;
    this.h = 90;
    this.w = 50;
    this.speedShip = 8;
    this.imageShip = new Image();
    this.imageShip.src = "./images/ship.png";
    //cat
    this.xCat = 60;
    this.yCat = 360;
    this.hCat = 30;
    this.wCat = 30;
    this.speedCat = 8;
    this.imageCat = new Image();
    this.imageCat.src = "./images/cat.png";
    this.UP = false;
    this.DOWN = false;
    this.RIGTH = false;
    this.LEFT = false;

  }
  //drawing ship
  drawShip = () => {
    ctx.drawImage(this.imageShip, this.x, this.y, this.w, this.h);
  };
  //drawing cat inside the ship
  drawCat = () => {
    ctx.drawImage(this.imageCat, this.xCat, this.yCat, this.wCat, this.hCat);
  };
  //drawing ship and cat function
  drawShipCat = () => {
    this.drawShip();
    this.drawCat();
  };

  parachuteCat = () => {
    this.yCat = this.yCat - 2;
    this.xCat = this.xCat + 2;
  };
}
