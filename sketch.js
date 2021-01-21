let bubbles =[]; 

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(255,255,250);
    
    for (let i = 0; i < bubbles.length; i++){
        //remove when out of the screen
        if (bubbles[i].x < 0 || bubbles[i].x > windowWidth || bubbles[i].y < 0 || bubbles[i].y > windowHeight) {
            bubbles.splice(i, 1)
        }
        else {
            bubbles[i].show();
            bubbles[i].move();
        }
    }   
}

function mouseMoved(){
    if((Math.floor(Math.random() * 3) + 3) % 2 == 0) {
        append(bubbles, new Bubble(mouseX,mouseY));
    }
}

class Bubble {
	constructor(tempx,tempy){
  	this.x = tempx;
    this.y = tempy;
    this.size = random(20,100);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(0, 255)
    this.directionX = random(-10,10);
    this.directionY = random(-10,10);
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