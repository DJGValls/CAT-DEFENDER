console.log("hello calss game");
class Game {
  constructor() {
    this.ship = new Ship();
    this.foe = new Foe();
    this.shot = new Shoot();
    this.background = new Image();
    this.background.src = "./images/spaceBackground.jpg";
  }


  //metods
  gameOver = ()=>{
    this.ship.imageShip.src = "./images/explosion1.png";
    this.ship.wCat = 60
    this.ship.hCat = 100
    this.ship.imageCat.src = "./images/endCat.png";
    this.ship.parachuteCat();

    setTimeout(function(){
      //console.log("explosion");
      isGameOn = false;
      canvas.style.display = "none"
      gameOverScreenDom.style.display = "flex";      
    }, 3000);
    //console.log("game over");
  }

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawBg = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  hit = (a,b)=>{
    if (a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.h + a.y > b.y) {
        //console.log("la nave a chocado");
        return true;
      }
  }

  destroyFoe = (arrayOfFoes, foe)=>{
    foe.image.src = "./images/explosion2.png"
    setTimeout(function(){
      //console.log("explosion");
      arrayOfFoes.splice(arrayOfFoes.indexOf(foe), 1);
    }, 200);
  }


  //colissions

  checkColissionShipFloor = ()=>{
    if (this.ship.y + this.ship.h > canvas.height ) {
      //isGameOn = false;
      this.gameOver();
    }
  }
  
  checkColissionShipFoe = ()=>{
    foesArr.forEach(eachFoe => {
      if (this.hit(eachFoe, this.ship)) {
        //console.log("la nave a chocado");
        this.gameOver();
      }
    });
  }

  checkColissionShotFoe = ()=>{
    foesArr.forEach(eachFoe => {
      shots.forEach(eachShot => {
        if (this.hit(eachFoe, eachShot)) {
          //foesArr.splice(foesArr.indexOf(eachFoe), 1);
          this.destroyFoe(foesArr, eachFoe);
          shots.splice(shots.indexOf(eachShot), 1);
          //console.log("nave destruida");
        }
      });
    });
  }



  //spawns
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
    let newShot = new Shoot(this.ship.x + 10, this.ship.y);
    shots.push(newShot);
    // console.log(newShot);
    // console.log(shots);
  };

  deleteShot = () => {
    if (shots[0].x > 1200) {
      shots.shift();
    }
  };


  //the game loop
  gameLoop = () => {
    frames++;//frame counter
    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");

    // actions
    this.spawnFoe();
    this.checkColissionShipFloor();
    this.checkColissionShipFoe();
    this.checkColissionShotFoe();
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
    if(isGameOn === true){
      requestAnimationFrame(this.gameLoop);
    }
  };
}
