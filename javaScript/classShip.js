console.log("hello class ship");

class Ship {

    constructor(){
        //ship
        this.xShip = 50;
        this.yShip = 50;
        this.hShip = 90;
        this.wShip = 50;
        this.speedShip = 15;
        this.imageShip = new Image();
        this.imageShip.src = "./images/ship.png"
        //cat
        this.xCat = 60;
        this.yCat= 60;
        this.hCat= 30;
        this.wCat= 30;
        this.speedCat = 15;
        this.imageCat = new Image();
        this.imageCat.src = "./images/cat.png"
    }
    
    //drawing ship
    drawShip = ()=>{
        ctx.drawImage(this.imageShip, this.xShip, this.yShip, this.wShip, this.hShip);
    }
    //drawing cat inside the ship
    drawCat = ()=>{
        ctx.drawImage(this.imageCat, this.xCat, this.yCat, this.wCat, this.hCat)
    }
    //drawing ship and cat function
    drawShipCat = ()=>{
        this.drawShip();
        this.drawCat();
    }


    //ship movement up
    moveUpShip = ()=>{
        this.yShip = this.yShip - this.speedShip; 
        this.yCat = this.yCat - this.speedCat;
    }
    //ship movement down
    moveDownShip = ()=>{
        this.yShip = this.yShip + this.speedShip; 
        this.yCat = this.yCat + this.speedCat;
    }
    //ship movement Rigth
    moveRightShip = ()=>{
        this.xShip += this.speedShip;
        this.xCat += this.speedCat;
    }
    //ship movement Left
    moveLeftShip = ()=>{
        this.xShip -= this.speedShip;
        this.xCat -= this.speedCat;
    }



    


}