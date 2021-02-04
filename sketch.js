// I suppose this project maintains the rythm of circiles
let bubbles =[]; 
let interval = 50;

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(1)
    background(37,37,37);

    //create the array of circles
    let size = windowWidth+0;
    let colors = [new color(37, 37, 37), new color(105, 48, 195), new color(100, 233, 233), new color(128, 255, 219)]
    
    while(size > interval) {
        currColor = colors[round(random(0, 3))];
        append(bubbles, new Bubble(windowWidth/2,windowHeight/2, size, currColor.r, currColor.g, currColor.b));
        size -= interval + round(random(-20, 20))
    }
    print(bubbles)
}

function draw() {
    /*shift the colors by 1*/
    //get last color
    let tempColor = null

    //shift colors
    for(i = 0; i < bubbles.length-1; i++){
        if(tempColor != null) {
            bubbles[i].r = tempColor.r
            bubbles[i].g = tempColor.g
            bubbles[i].b = tempColor.b
            tempColor = new color(bubbles[i+1].r, bubbles[i+1].g, bubbles[i+1].b)
        } else {
            tempColor = new color(bubbles[i].r, bubbles[i].g, bubbles[i].b)
            bubbles[i].r = bubbles[i+1].r
            bubbles[i].g = bubbles[i+1].g
            bubbles[i].b = bubbles[i+1].b
        }
        print('shifted ' + i)
    }
    print(bubbles)

    //shift the first color
    if(tempColor != null) {
        bubbles[0].r = tempColor.r
        bubbles[0].g = tempColor.g
        bubbles[0].b = tempColor.b
    }

    //show the circles
    for(i = 0; i < bubbles.length; i++){
        bubbles[i].show()
    }
    //bubbles =[]
}

/*function mouseMoved(){
    if((Math.floor(Math.random() * 5) + 3) % 2 == 0) {
        append(bubbles, new Bubble(mouseX,mouseY));
    }
}*/

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