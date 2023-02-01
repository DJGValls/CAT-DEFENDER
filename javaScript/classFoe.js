console.log("hello class foe");
class Foe {
  constructor(yPos, xPos, wPos, hPos, speed, typeOfFoe) {
    this.y = yPos;
    this.x = xPos; //1200
    this.w = wPos; //100
    this.h = hPos; //80
    this.speed = speed; //2
    this.image = new Image();
    this.image2 = new Image();
    this.image2.src = "./images/abduction.png"
    this.typeOfFoe = typeOfFoe;
    this.foeIsDown = true;
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

  drawAbduction = ()=>{
    ctx.drawImage(this.image2, this.x, this.y + 80, this.w, this.h);
  }

  //foe movements
  foe1Move = () => {

    if (this.foeIsDown) {
      this.x -= this.speed;
      this.y += this.speed;
    } else if (this.foeIsDown === false) {
      this.y -= this.speed;
    }
      
      if (this.y > 650) {
        setTimeout(() => {
          this.speed= 2;
          population -= 1000
        }, 2000);
        this.speed = 0;
        this.y = this.y -1;
        this.foeIsDown = false;
      }
    
    
     
  };
  foe2Move = () => {
    this.x -= this.speed;
  };
  foe3Move = () => {
    if(this.foeIsDown){
    this.y += this.speed;
    
    if (this.y > 50 && this.y < 200) {
      this.x -= this.speed;
    }
    if (this.y > 200 && this.y < 300) {
      this.x += this.speed;
    }
    if (this.y > 300 && this.y < 400) {
      this.x -= this.speed;
    }
  }else if(this.foeIsDown === false){
    this.y -= this.speed;
  }
  if (this.y > 650) {
    setTimeout(() => {
      this.speed= 4;
      population -= 2000
    }, 2000);
    this.speed = 0;
    this.y = this.y -1;
    this.foeIsDown = false;
  }

  };
}
