console.log("hello main");


// GLOBAL VARIABLES

const playtButtonDOM = document.querySelector("#play-button");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreenDOM = document.querySelector("#splash-screen");//inti screen selector
const gameOverScreenDom = document.querySelector("#gameover-screen");
const playAgainButtonDOM = document.querySelector("#restart-button");
let game;
let shots = [];//arrary to fire a shoot
let foesArr = []; //array to keep foes
let cityArr = [];
let frames = 1; //is the frames that pass in the game
let isGameOn = true;
let isCatAlive = true;



//GLOBAL FUNCTIONS
const startGame = ()=>{
    isCatAlive = true; 
    isGameOn = true;
    startScreenDOM.style.display = "none";
    gameOverScreenDom.style.display = "none";
    canvas.style.display = "block";

    game = new Game;
    game.gameLoop();
};


//ADD EVENT LISTENERS
// click on "play" 
playtButtonDOM.addEventListener("click", startGame);

playAgainButtonDOM.addEventListener("click", startGame);

//ship movements
//ship goes up
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowUp" && game.ship.y > 0 && isCatAlive) {        
        game.ship.moveUpShip();
    }
});
//ship goes down
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowDown" && isCatAlive) {        
        game.ship.moveDownShip();
    }
});
//ship goes right
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowRight" && game.ship.x + game.ship.w < canvas.width && isCatAlive) {        
        game.ship.moveRightShip();
    }
});
//ship goes Left
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowLeft" && game.ship.x > 0 && isCatAlive) {        
        game.ship.moveLeftShip();
        //console.log(game.ship.x);
    }
});

//shoot
window.addEventListener("keydown", (event)=>{
    if (event.code === "Space" && isCatAlive) { 
        game.fire();
    } 

});

