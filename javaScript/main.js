console.log("hello main");

// GLOBAL VARIABLES

const playtButtonDOM = document.querySelector("#play-button");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreenDOM = document.querySelector("#splash-screen"); //inti screen selector
const gameOverScreenDom = document.querySelector("#gameover-screen");
const playAgainButtonDOM = document.querySelector("#restart-button");
const blasterSoundDOM = document.querySelector("#blaster");
let game;
let frames = 1; //is the frames that pass in the game
let isGameOn = true;
let isCatAlive = true;
let population = 50000;
let upMove = false;
let downMove = false;
let rigthMove = false;
let leftMove = false;
let fireShot = false;

blasterSoundDOM.volume = 0.1;

//GLOBAL FUNCTIONS
const startGame = () => {
  isCatAlive = true;
  isGameOn = true;
  population = 50000;
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
};

//ADD EVENT LISTENERS
// click on "play"
playtButtonDOM.addEventListener("click", startGame);
playAgainButtonDOM.addEventListener("click", startGame);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//shoot
window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && isCatAlive) {
    game.fire();
    blasterSoundDOM.play();
  }
});
