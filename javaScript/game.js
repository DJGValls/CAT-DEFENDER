console.log("hello calss game");
class Game {
  constructor() {
    this.ship = new Ship();
    //this.foe = new Foe();
    this.shot = new Shoot();
    this.city = new City(0, 2);
    this.background = new Image();
    this.background.src = "./images/spaceBackground.jpg";
  }

  //metods
  gameOver = () => {
    isCatAlive = false;
    this.ship.imageShip.src = "./images/explosion1.png";
    this.ship.wCat = 60;
    this.ship.hCat = 100;
    this.ship.imageCat.src = "./images/endCat.png";
    this.ship.parachuteCat();

    setTimeout(function () {
      //console.log("explosion");
      isGameOn = false;
      canvas.style.display = "none";
      gameOverScreenDom.style.display = "flex";
    }, 3000);
    //console.log("game over");
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawBg = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  hit = (a, b) => {
    if (
      a.x < b.x + b.w &&
      a.x + a.w > b.x &&
      a.y < b.y + b.h &&
      a.h + a.y > b.y
    ) {
      //console.log("la nave a chocado");
      return true;
    }
  };

  destroyFoe = (arrayOfFoes, foe) => {
    foe.image.src = "./images/explosion2.png";
    setTimeout(function () {
      //console.log("explosion");
      arrayOfFoes.splice(arrayOfFoes.indexOf(foe), 1);
    }, 200);
  };

  //colissions

  checkColissionShipFloor = () => {
    if (this.ship.y + this.ship.h > canvas.height) {
      //isGameOn = false;
      this.gameOver();
    }
  };

  checkColissionShipFoe = () => {
    foesArr.forEach((eachFoe) => {
      if (this.hit(eachFoe, this.ship)) {
        //console.log("la nave a chocado");
        this.gameOver();
      }
    });
  };

  checkColissionShotFoe = () => {
    foesArr.forEach((eachFoe) => {
      shots.forEach((eachShot) => {
        if (this.hit(eachFoe, eachShot)) {
          //foesArr.splice(foesArr.indexOf(eachFoe), 1);
          this.destroyFoe(foesArr, eachFoe);
          shots.splice(shots.indexOf(eachShot), 1);
          //console.log("nave destruida");
        }
      });
    });
  };

  //spawns

  spawnCity = () => {
    if (cityArr.length === 0 || frames % 300 === 0) {
      //every 5 seconds
      let newCity = new City(1200, 2); // move with 2 the speed and needs 5 seconds to exit the canvas
      cityArr.push(newCity);
    }
  };

  deleteCity = () => {
    if (cityArr[0].x + cityArr[0].w < 0) {
      cityArr.shift();
    }
  };

  spawnFoe = () => {
    if (foesArr.length === 0 || frames % 300 === 0) {
      //every 5 seconds
      let randomPosY = Math.random() * -500; // => 0 y -300px
      let newFoe = new Foe(randomPosY, 1200, 100, 80, 1, "foe1");
      foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(foesArr);
    }
    if (foesArr.length === 0 || frames % 200 === 0) {
      //every 3 seconds
      let randomPosY = Math.random() * 404; // => 0 to 500px
      let newFoe = new Foe(randomPosY, 1200, 100, 80, 5, "foe2");
      foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(foesArr);
    }
    if (foesArr.length === 0 || frames % 400 === 0) {
      //every 6 seconds
      let randomPosX = Math.random() * 1212; // => 0 to 1200px
      let newFoe = new Foe(0, randomPosX, 100, 80, 2, "foe3");
      foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(foesArr);
    }
  };

  deletefoe = () => {
    if (foesArr[0].y > 800 || foesArr[0].x < 0) {
      foesArr.shift();
    }
  };

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
    frames++; //frame counter
    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");

    // actions
    //this.spawnFirstCity();
    this.city.moveCity();
    this.spawnCity();
    this.spawnFoe();
    this.checkColissionShipFloor();
    this.checkColissionShipFoe();
    this.checkColissionShotFoe();
    // draws
    this.drawBg();
    this.city.drawCity();
    this.ship.drawShipCat();

    //to draw the city
    cityArr.forEach((eachCity) => {
      eachCity.moveCity();
      eachCity.drawCity();
      this.deleteCity();
    });

    //to draw, move and delete the foe
    foesArr.forEach((eachFoe) => {
      if (eachFoe.typeOfFoe === "foe1") {
        eachFoe.foe1Move();
        eachFoe.drawFoe();
        this.deletefoe();
      }
      if (eachFoe.typeOfFoe === "foe2") {
        eachFoe.foe2Move();
        eachFoe.drawFoe();
        this.deletefoe();
      }
      if (eachFoe.typeOfFoe === "foe3") {
        eachFoe.foe3Move();
        eachFoe.drawFoe();
        this.deletefoe();
      }
    });

    //to shoot (draw, move and delete the shot)
    shots.forEach((eachShot) => {
      //hacer un disparo por golpeo de tecla - falta
      this.shot.moveShot(eachShot);
      this.shot.drawShot(eachShot);
      this.deleteShot();
    });

    //recursion
    if (isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
