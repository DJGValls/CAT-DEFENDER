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

  //to fire one shot
  fire = () => {
    //this.fireOneShot = true;
    let newShot = new Shoot(this.ship.xShip + 40, this.ship.yShip);
    shots.push(newShot);

    console.log(newShot);
    console.log(shots);
  };
  deleteShot = () => {
    if (shots[0].x > 1200) {
      shots.shift();
    }
  };

  gameLoop = () => {
    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");

    // actions
    this.foe.foe1Move();
    
    // draws
    this.drawBg();
    this.ship.drawShipCat();
    this.foe.drawFoe();
    
    //to shoot
    shots.forEach((eachShot) => {
      //hacer un disparo por golpeo de tecla - falta
      this.shot.drawShot(eachShot);
      this.shot.moveShot(eachShot);
      //borrar cada disparo para rendimiento
      this.deleteShot();
    });
    

    //recursion
    requestAnimationFrame(this.gameLoop);
  };
}
