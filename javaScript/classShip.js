console.log("hello class ship");

class Ship {

    constructor(){
        //ship
        this.xShip = 50;
        this.yShip = 50;
        this.hShip = 90;
        this.wShip = 50;
        this.speedShip = 2;
        this.imageShip = new Image();
        this.imageShip.src = "./images/ship.png"
        //cat
        this.xCat = 50;
        this.yCat= 50;
        this.hCat= 90;
        this.wCat= 50;
        this.speedCat = 2;
        this.imageCat = new Image();
        this.imageCat.src = "./images/cat.png"
    }

    

    drawShip = ()=>{
        ctx.drawImage(this.imageShip, this.xShip, this.yShip, this.wShip, this.hShip);
    }

    drawCat = ()=>{
        ctx.drawImage(this.imageCat, this.xCat, this.yCat, this.wCat, this.hCat)
    }


}