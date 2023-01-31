console.log("hello city");

class City {
  constructor(xPos, speed) {
    this.x = xPos;
    this.y = 500;
    this.w = 1200;
    this.h = 300;
    this.speed = speed;
    this.cityImage = new Image();
    this.cityImage.src = "./images/city.png";
  }

  drawCity = () => {
    ctx.drawImage(this.cityImage, this.x, this.y, this.w, this.h);
  };

  moveCity = () => {
    this.x -= this.speed;
  };

  drawFirstCity = () => {
    ctx.drawImage(this.cityImage, 0, this.y, this.w, this.h);
  };
}
