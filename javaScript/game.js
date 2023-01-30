console.log("hello calss game");
class Game {
  constructor() {
    this.ship = new Ship();
    this.foe = new Foe();
    this.shot = new Shoot();
    this.background = new Image();
    this.background.src = "./images/spaceBackground.jpg";

    this.fireOneShot = false;
}

clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

drawBg = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  //fire and move one shot
  //to move the shots, we need one array
  /*
  
    //this function is to delete every shot when it pass de 1200 pixel of x
    this.shots = this.shots.filter(function(disparo){
        return disparo.x > 1200;
    });
};
*/
//to fire one shot
fire = () => {
    //this.fireOneShot = true;
    let newShot = new Shoot(this.ship.xShip + 40, this.ship.yShip);
    shots.push(newShot);
    this.fireOneShot = false;
    console.log(newShot);
    console.log(shots);
    
    
};

gameLoop = () => {
    this.clearCanvas();
    
    // clean canvas
    console.log("iniciando loop");
    
    // actions
    this.foe.foe1Move();
    //this.shot.moveShot();
    // draws
    this.drawBg();
    this.ship.drawShipCat();
    this.foe.drawFoe();
    //to shoot
    shots.forEach(eachShot => {
        this.shot.drawShot(eachShot);
        this.shot.moveShot(eachShot);
        //hacer un disparo por golpeo de tecla
        if (this.fireOneShot === true) {
            
        }
        //borrar cada disparo para rendimiento
        // if (eachShot.x > 1000) {
        //     this.shot.splice(this.shot.length -1)
        // }
    });
    //this.shot.drawShot();
    //console.log(this.fireOneShot);

    

    //recursion
    requestAnimationFrame(this.gameLoop);
  };
}
