// I suppose this project maintains the rythm of circiles
let origins = []; 

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(10)
    background(37,37,37);    
    append(origins, new Origin(windowWidth/2, windowHeight/2, windowWidth+200, 50))
}

function draw() {
    //show the origins
    origins.forEach(element => element.show())
}

function mousePressed(){
    append(origins, new Origin(mouseX, mouseY, windowWidth/5, 50))
}

class Origin {
    constructor(tempx, tempy, tempSize, tempInterval) {
        this.x = tempx
        this.y = tempy
        this.size = tempSize
        this.bubbles = []
        this.colors = [new color(37, 37, 37), new color(105, 48, 195), new color(100, 233, 233), new color(128, 255, 219)]
        this.interval = tempInterval;
    }

    create() {
        this.bubbles = []
        let currentSize = this.size
        while(currentSize > this.interval) {
            let currColor = this.colors[round(random(0, 3))];
            append(this.bubbles, new Bubble(this.x, this.y , currentSize, currColor.r, currColor.g, currColor.b));
            currentSize -= this.interval + round(random(-1*this.interval/2, this.interval/2))
        }
    }

    show() {
        this.create()
        for(let i = 0; i < this.bubbles.length; i++){
            this.bubbles[i].show()
        }
    }

}
class Bubble {
  constructor(tempx,tempy, tempSize, tempR, tempG, tempB){
    this.x = tempx;
    this.y = tempy;
    this.size = tempSize
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;
    this.alpha = 255;
    this.directionX = 0;
    this.directionY = 0;
}
  
  move(){
  	this.x += this.directionX
  	this.y += this.directionY
  }
  
  show(){
  	stroke(255);
  	strokeWeight(0);
  	fill(this.r,this.g,this.b, this.alpha);
  	ellipse(this.x,this.y,this.size,this.size);
  }
}

class color {
    constructor(tempR, tempG, tempB){
      this.r = tempR;
      this.g = tempG;
      this.b = tempB;
    }
  }