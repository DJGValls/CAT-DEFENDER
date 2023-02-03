// GLOBAL VARIABLES
const playtButtonDOM = document.querySelector("#play-button");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreenDOM = document.querySelector("#splash-screen"); //inti screen selector
const gameOverScreenDom = document.querySelector("#gameover-screen");
const playAgainButtonDOM = document.querySelector("#restart-button");
const populationDOM = document.querySelector("#population");
let populationSpanDOM = document.querySelector("#population span");
const scoreDOM = document.querySelector("#score");
let scoreSpanDOM = document.querySelector("#score span");
const howToDOM = document.querySelector("#howTo");
const musicSoundDOM = document.querySelector("#music");
const gameoverSoundDOM = document.querySelector("#gameover");
const blasterSoundDOM = document.querySelector("#blaster");
const meawSoundDOM = document.querySelector("#meaw");
const explosionSoundDOM = document.querySelector("#explosion");
const abductionSoundDOM = document.querySelector("#abduction");
const screamsSoundDOM = document.querySelector("#screams");
musicSoundDOM.volume = 0.01;
gameoverSoundDOM.volume = 0.1;
blasterSoundDOM.volume = 0.1;
meawSoundDOM.volume = 0.2;
explosionSoundDOM.volume = 0.1;
abductionSoundDOM.volume = 0.1;
screamsSoundDOM.volume = 0.01;
let game;
let frames = 1; //is the frames that pass in the game
let isGameOn = true;
let isCatAlive = true;
let upMove = false;
let downMove = false;
let rigthMove = false;
let leftMove = false;
let fireShot = false;
//
//GLOBAL FUNCTIONS
const startGame = () => {
  populationSpanDOM.innerText = 50000;
  scoreSpanDOM.innerText = 0;
  populationDOM.style.display = "block";
  scoreDOM.style.display = "block";
  howToDOM.style.display = "none";
  gameoverSoundDOM.pause();
  musicSoundDOM.load();
  musicSoundDOM.play();

  isCatAlive = true;
  isGameOn = true;
  startScreenDOM.style.display = "none";
  gameOverScreenDom.style.display = "none";
  canvas.style.display = "block";

  game = new Game();
  game.gameLoop();
};

keyDownHandler = (e) => {
  if (e.keyCode == 38) {
    upMove = true;
  }
  if (e.keyCode == 40) {
    downMove = true;
  }
  if (e.keyCode == 39) {
    rigthMove = true;
  }
  if (e.keyCode == 37) {
    leftMove = true;
  }
  if (e.keyCode == 32) {
    if (!fireShot) {
      fireShot = true;
      game.fire();
      blasterSoundDOM.load();
      blasterSoundDOM.play();
    }
  } else fireShot = false;
};

keyUpHandler = (e) => {
  if (e.keyCode == 38) {
    upMove = false;
  }
  if (e.keyCode == 40) {
    downMove = false;
  }
  if (e.keyCode == 39) {
    rigthMove = false;
  }
  if (e.keyCode == 37) {
    leftMove = false;
  }
  if (e.keyCode == 32) {
    fireShot = false;
  }
};
//
//ADD EVENT LISTENERS
playtButtonDOM.addEventListener("click", startGame);
playAgainButtonDOM.addEventListener("click", startGame);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//

