console.log("hello class foe");
class Foe {
  constructor(yPos, xPos, wPos, hPos, speed, typeOfFoe) {
    this.y = yPos;
    this.x = xPos; //1200
    this.w = wPos; //100
    this.h = hPos; //80
    this.speed = speed; //2
    this.image = new Image();
    this.typeOfFoe = typeOfFoe;
    switch (typeOfFoe) {
      case "foe1":
        this.image.src = "./images/ufo1.png";
        break;

      case "foe2":
        this.image.src = "./images/ufo2.png";
        break;

      case "foe3":
        this.image.src = "./images/ufo3.png";
        break;
    }
  }
  //drawing foe
  drawFoe = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  //foe movements
  foe1Move = () => {
    this.y += this.speed;
    if (this.y < 300) {
      this.x -= this.speed;
    }
  };
  foe2Move = () => {
    this.x -= this.speed;
  };
  foe3Move = () => {
    this.y += this.speed;
    //this.x += this.speed - 3;
    if (this.y > 50 && this.y < 200) {
      this.x -= this.speed;
    }
    if (this.y > 200 && this.y < 300) {
      this.x += this.speed;
    }
    if (this.y > 300 && this.y < 400) {
      this.x -= this.speed;
    }
  };
}
