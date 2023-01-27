console.log("hello calss game");
class Game {

    constructor(){
        this.ship = new Ship;
        this.background = new Image();
        this.background.src = "./images/spaceBackground.jpg";
    };


    clearCanvas = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    drawBg = ()=>{
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
    };


gameLoop = ()=>{

    this.clearCanvas();

    // clean canvas
    console.log("iniciando loop");


    // actions


    //draw
    this.drawBg();
    this.ship.drawShip();


    //recursion
    requestAnimationFrame(this.gameLoop);
}



}