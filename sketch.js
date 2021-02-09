// I suppose this project maintains the rythm of circiles
class Origin {
    constructor(tempx, tempy, tempSize, tempInterval, tempColor) {
        this.x = tempx
        this.y = tempy
        this.size = tempSize
        this.bubbles = []
        this.colors = tempColor
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

    changeColor(tempColor) {
        this.colors = tempColor
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

let origins = []; 
let colorSets = [[new color(37, 37, 37), new color(105, 48, 195), new color(100, 233, 233), new color(128, 255, 219)], [new color(81, 86, 97), new color(46, 159, 130), new color(104, 193, 112), new color(214, 236, 140)], [new color(238, 238, 238), new color(104, 109, 118), new color(55, 58, 64), new color(25, 211, 218)]]
let currColorSet = colorSets.shift()
let newColorSet = colorSets.shift()

function setup() {
    /* append more colors */
    //color palette 258417: pinks
    append(colorSets, [new color(130, 38, 89), new color(179, 65, 128), new color(227, 107, 174), new color(248, 161, 209)])
    //color palette 252741: purple, yellow, pink
    append(colorSets, [new color(132, 94, 194), new color(255, 199, 95), new color(249, 248, 113), new color(255, 94, 120)])
    //color palette 252800: silver, green/blue, orange
    append(colorSets, [new color(248, 241, 241), new color(163, 210, 202), new color(94, 170, 168), new color(235, 94, 11)])
    //color palette 253254: brown, green, silver
    append(colorSets, [new color(253, 232, 205), new color(67, 53, 32), new color(0, 145, 124), new color(233, 224, 223)])
    //color palette 258285: silver, green, blue
    append(colorSets, [new color(246, 246, 246), new color(199, 255, 216), new color(152, 222, 217), new color(22, 29, 111)])

    createCanvas(windowWidth, windowHeight)
    frameRate(10)
    background(37,37,37);    
    append(origins, new Origin(windowWidth/2, windowHeight/2, windowWidth+200, 50, currColorSet))
    
    //Project description
    msg = 'Project Circles, Colors, and More Circles, and colors\n'
    msg+= '\n'
    msg+= 'The project follows a rythmic structure where colors within a single disk give a pulsing illusion. When a new disk is added, the color scheme of all previous disks are unified and the new disk introduces a new color scheme. The color schemes keep repeating in a cycle.\n'
    msg+= '\n'
    msg+= 'To add a new disk, simply left click on the place you desire to originate the disk from\n'
    msg+= '\n'
    msg+= 'Created by: Wael Mobeirek'
    alert(msg);
}

function draw() {
    //show the origins
    for(let i = 0; i < origins.length; i++) {
        if(i < origins.length-1) {
            origins[i].changeColor(currColorSet)
        }
        origins[i].show()
    }
}

function mousePressed(){
    shuffleColorSets()
    append(origins, new Origin(mouseX, mouseY, random(windowWidth/5, windowWidth/3), random(10,50), newColorSet))
}

function shuffleColorSets() {
    colorSets.push(currColorSet)
    currColorSet = newColorSet
    newColorSet = colorSets.shift()
}