console.log("hello calss game");
class Game {
  constructor() {
    this.ship = new Ship();
    this.foe = new Foe();
    this.shot = new Shoot();
    this.background = new Image();
    this.background.src = "./images/spaceBackground.jpg";
  }

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawBg = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  spawnFoe = ()=>{
    if (foesArr.length === 0 || frames % 300 === 0) {
      let randomPosY = Math.random() * (-100); // => 0 y -50
      let newFoe = new Foe(randomPosY)
      foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(foesArr);
    }
  }

  deletefoe = ()=>{
    if (foesArr[0].y > 800) {
      foesArr.shift();
    }
  }

  fire = () => {
    //this.fireOneShot = true;
    let newShot = new Shoot(this.ship.xShip + 40, this.ship.yShip);
    shots.push(newShot);
    // console.log(newShot);
    // console.log(shots);
  };

  deleteShot = () => {
    if (shots[0].x > 1200) {
      shots.shift();
    }
  };

  gameLoop = () => {
    frames++;//frame counter
    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");

    // actions
    this.spawnFoe();
    // draws
    this.drawBg();
    this.ship.drawShipCat();
    
    //to draw, move and delete the foe
    foesArr.forEach(eachFoe => {
      eachFoe.drawFoe();
      eachFoe.foe1Move();
      this.deletefoe();
    });
    

    //to shoot (draw, move and delete the shot)
    shots.forEach((eachShot) => {
      //hacer un disparo por golpeo de tecla - falta
      this.shot.drawShot(eachShot);
      this.shot.moveShot(eachShot);
      this.deleteShot();
    });
    

    //recursion
    requestAnimationFrame(this.gameLoop);
  };
}
