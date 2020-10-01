// list of rotated objects
// object names must be unique from other objects, i.e. objects in sketch_move.js

let rotatedBox01 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 300,
  transY: 300,
  angle: 0,
  speed: 0,
  speedY: 0
}

let rotatedBox02 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 200,
  transY: 200,
  angle: 0,
  speed: 0,
  speedY: 0
}

let rotatedBox03 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 100,
  transY: 100,
  angle: 0,
  speed: 0,
  speedY: 0
}

// set up an array of JS Objects
let rotatedBoxes = [rotatedBox01, rotatedBox02, rotatedBox03];
// set up an empty array to store each individual element
let rotatedBoxArray = []

// this is the syntax for a Class
// convention always capitalizes classes
class BoxEncapsRotate {
  //classes require constructors for the parameters
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }
  // this is the syntax to begin a class function
  rotate() {
    noStroke();
    fill(255);
    push();
    translate(this.incomingShape.transX, this.incomingShape.transY);
    rotate(this.incomingShape.angle);
    rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
    pop();
    this.incomingShape.angle = this.incomingShape.angle+1;
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5)
    line(this.incomingShape.transX, 0, this.incomingShape.transX, height)
    line(0, this.incomingShape.transY, height, this.incomingShape.transY)
  }
}
