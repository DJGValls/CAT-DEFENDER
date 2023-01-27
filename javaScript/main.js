console.log("hello main");


// GLOBAL VARIABLES

const playtButtonDOM = document.querySelector("#play-button");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreenDOM = document.querySelector("#splash-screen");//inti screen selector
let game;
//GLOBAL FUNCTIONS
const startGame = ()=>{ 

    startScreenDOM.style.display = "none";
    canvas.style.display = "block";

    game = new Game;
    game.gameLoop();
}


//ADD EVENT LISTENERS
playtButtonDOM.addEventListener("click", startGame);
