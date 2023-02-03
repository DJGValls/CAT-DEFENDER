class Game {
  constructor() {
    this.ship = new Ship();
    this.shot = new Shoot();
    this.city = new City(0, 2);
    this.background = new Image();
    this.background.src = "./images/spaceBackground.jpg";
    this.shots = []; //arrary to fire a shoot
    this.foesArr = []; //array to keep foes
    this.cityArr = [];
  }

  //METODS
  gameOver = () => {
    musicSoundDOM.pause();
    meawSoundDOM.play();
    gameoverSoundDOM.play();
    isCatAlive = false;
    this.ship.imageShip.src = "./images/explosion1.png";
    this.ship.wCat = 60;
    this.ship.hCat = 100;
    this.ship.imageCat.src = "./images/endCat.png";
    this.ship.parachuteCat();

    setTimeout(function () {
      isGameOn = false;
      canvas.style.display = "none";
      gameOverScreenDom.style.display = "flex";
    }, 3000);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawBg = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  // * ship movements
  // - ship movement up
  moveUpShip = () => {
    if (upMove && this.ship.y > 0 && isCatAlive) {
      this.ship.y = this.ship.y - this.ship.speedShip;
      this.ship.yCat = this.ship.yCat - this.ship.speedCat;
    }
  };
  // - ship movement down
  moveDownShip = () => {
    if (downMove && isCatAlive) {
      this.ship.y = this.ship.y + this.ship.speedShip;
      this.ship.yCat = this.ship.yCat + this.ship.speedCat;
    }
  };
  // - ship movement Rigth
  moveRightShip = () => {
    if (rigthMove && this.ship.x + this.ship.w < canvas.width && isCatAlive) {
      this.ship.x += this.ship.speedShip;
      this.ship.xCat += this.ship.speedCat;
    }
  };
  // - ship movement Left
  moveLeftShip = () => {
    if (leftMove && this.ship.x > 0 && isCatAlive) {
      this.ship.x -= this.ship.speedShip;
      this.ship.xCat -= this.ship.speedCat;
    }
  };
  // - moveShip
  moveShip = () => {
    this.moveUpShip();
    this.moveDownShip();
    this.moveRightShip();
    this.moveLeftShip();
  };
  
  hit = (a, b) => {
    if (
      a.x < b.x + b.w &&
      a.x + a.w > b.x &&
      a.y < b.y + b.h &&
      a.h + a.y > b.y
    ) {
      return true;
    }
  };

  destroyFoe = (arrayOfFoes, foe) => {
    foe.image.src = "./images/explosion2.png";
    setTimeout(function () {
      explosionSoundDOM.load();
      explosionSoundDOM.play();
      arrayOfFoes.splice(arrayOfFoes.indexOf(foe), 1);
    }, 50);
  };
  //
  //COLISSIONS
  checkColissionShipFloor = () => {
    if (this.ship.y + this.ship.h > canvas.height) {
      explosionSoundDOM.play();
      this.gameOver();
    }
  };

  checkColissionShipFoe = () => {
    this.foesArr.forEach((eachFoe) => {
      if (this.hit(eachFoe, this.ship)) {
        explosionSoundDOM.play();
        this.gameOver();
      }
    });
  };

  checkColissionShotFoe = () => {
    this.foesArr.forEach((eachFoe) => {
      this.shots.forEach((eachShot) => {
        if (this.hit(eachFoe, eachShot)) {
          this.destroyFoe(this.foesArr, eachFoe);
          this.shots.splice(this.shots.indexOf(eachShot), 1);
          scoreSpanDOM.innerText++;
        }
      });
    });
  }; 
  //
  //SPAWNS
  spawnCity = () => {
    if (this.cityArr.length === 0 || frames % 300 === 0) {
      //every 5 seconds
      let newCity = new City(1200, 2); // move with 2 the speed and needs 5 seconds to exit the canvas
      this.cityArr.push(newCity);
    }
  };

  deleteCity = () => {
    if (this.cityArr[0].x + this.cityArr[0].w < 0) {
      this.cityArr.shift();
    }
  };

  increaseDifficutlt = (speed) => {
    if (scoreSpanDOM.innerText > 25 && scoreSpanDOM.innerText < 50) {
      return speed * 2;
    }
    if (scoreSpanDOM.innerText > 50 && scoreSpanDOM.innerText < 100) {
      return speed * 4;
    }
    if (scoreSpanDOM.innerText > 100 && scoreSpanDOM.innerText < 150) {
      return speed * 6;
    }
    if (scoreSpanDOM.innerText > 150 && scoreSpanDOM.innerText < 200) {
      return speed * 8;
    }
    return speed;
  };

  spawnFoe = () => {
    if (this.foesArr.length === 0 || frames % 300 === 0) {
      //every 5 seconds
      let randomPosY = Math.random() * -500; // => 0 y -300px
      let newFoe = new Foe(
        randomPosY,
        1200,
        100,
        80,
        this.increaseDifficutlt(1),
        "foe1"
      );
      this.foesArr.push(newFoe);
    }
    if (this.foesArr.length === 0 || frames % 200 === 0) {
      //every 3 seconds
      let randomPosY = Math.random() * 404; // => 0 to 500px
      let newFoe = new Foe(
        randomPosY,
        1200,
        100,
        80,
        this.increaseDifficutlt(5),
        "foe2"
      );
      this.foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(this.foesArr);
    }
    if (this.foesArr.length === 0 || frames % 400 === 0) {
      //every 6 seconds
      let randomPosX = Math.random() * 1212; // => 0 to 1200px
      let newFoe = new Foe(
        0,
        randomPosX,
        100,
        80,
        this.increaseDifficutlt(2),
        "foe3"
      );
      this.foesArr.push(newFoe);
      // console.log(newFoe);
      // console.log(this.foesArr);
    }
  };

  deletefoe = () => {
    if (
      this.foesArr[0].y > 800 ||
      this.foesArr[0].x < 0 ||
      this.foesArr[0].y < -100
    ) {
      this.foesArr.shift();
    }
  };

  fire = () => {
    let newShot = new Shoot(this.ship.x + 10, this.ship.y);
    this.shots.push(newShot);
    
  };

  deleteShot = () => {
    if (this.shots[0].x > 1200) {
      this.shots.shift();
    }
  };

  //THE GAME LOOP
  gameLoop = () => {
    frames++; //frame counter
    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");

    // actions
    this.city.moveCity();
    this.spawnCity();
    this.moveShip();
    this.spawnFoe();
    this.checkColissionShipFloor();
    this.checkColissionShipFoe();
    this.checkColissionShotFoe();
    if (populationSpanDOM.innerText <= 0) {
      this.gameOver();
    }
    // draws
    this.drawBg();
    this.city.drawCity();
      this.cityArr.forEach((eachCity) => {
      eachCity.moveCity();
      eachCity.drawCity();
      this.deleteCity();
    });
    this.ship.drawShipCat();
    //to draw, move and delete the foe
    this.foesArr.forEach((eachFoe) => {
      if (eachFoe.typeOfFoe === "foe1") {
        eachFoe.foe1Move();
        eachFoe.drawFoe();
        this.deletefoe();
        if (eachFoe.y > 648) {
          eachFoe.drawAbduction();
        }
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
        if (eachFoe.y > 648) {
          eachFoe.drawAbduction();
        }
      }
    });

    //to shoot (draw, move and delete the shot)
    this.shots.forEach((eachShot) => {
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
