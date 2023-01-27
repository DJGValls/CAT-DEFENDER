console.log("hello calss game");
class Game {

    constructor(){

        this.ship = new Ship;
        this.foe = new Foe;
        this.shoot = new Shoot;
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


    // draws
    this.drawBg();
    this.ship.drawShipCat();
    this.foe.drawFoe();
    //to shoot
    this.shoot.drawShoot();



    //recursion
    requestAnimationFrame(this.gameLoop);
}



}