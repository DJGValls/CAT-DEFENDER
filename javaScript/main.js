console.log("hello main");


// GLOBAL VARIABLES

const playtButtonDOM = document.querySelector("#play-button");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreenDOM = document.querySelector("#splash-screen");//inti screen selector
let game;
let shots = [];//arrary to fire a shoot



//GLOBAL FUNCTIONS
const startGame = ()=>{ 

    startScreenDOM.style.display = "none";
    canvas.style.display = "block";

    game = new Game;
    game.gameLoop();
};


//ADD EVENT LISTENERS
// click on "play" 
playtButtonDOM.addEventListener("click", startGame);

//ship movements
//ship goes up
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowUp") {        
        game.ship.moveUpShip();
    }
});
//ship goes down
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowDown") {        
        game.ship.moveDownShip();
    }
});
//ship goes right
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowRight") {        
        game.ship.moveRightShip();
    }
});
//ship goes Left
window.addEventListener("keydown", (event)=>{
    if (event.code === "ArrowLeft") {        
        game.ship.moveLeftShip();
    }
});

//shoot
window.addEventListener("keydown", (event)=>{
    if (event.code === "Space") {        
        game.fire();
        return true;
    } else return false;

});

