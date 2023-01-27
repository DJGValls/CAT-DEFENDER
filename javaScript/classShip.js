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

    drawShip = ()=>{
        ctx.drawImage(this.imageShip, this.xShip, this.yShip, this.wShip, this.hShip);
    }

    drawCat = ()=>{
        ctx.drawImage(this.imageCat, this.xCat, this.yCat, this.wCat, this.hCat)
    }

    drawShipCat = ()=>{
        this.drawShip();
        this.drawCat();
    }

    moveUpShip = ()=>{
        this.yShip = this.yShip - this.speedShip; 
        this.yCat = this.yCat - this.speedCat;
    }
    moveDownShip = ()=>{
        this.yShip = this.yShip + this.speedShip; 
        this.yCat = this.yCat + this.speedCat;
        
    }


    


}