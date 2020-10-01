//  This was adapted from Dan Shiffman's Coding Train
//  See links 3.1, 3.2, 3.3
//  https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

// list of rotated objects
// object names must be unique from other objects, i.e. objects in sketch_move.js

let box01 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 300,
  transY: 300,
  speed: 0,
  speedY: 0
}

let box02 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 200,
  transY: 200,
  speed: 0,
  speedY: 0
}

let box03 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 100,
  transY: 100,
  speed: 0,
  speedY: 0
}

// set up an array of JS Objects
let boxes = [box01, box02, box03];
// set up an empty array to store each individual element
let boxArray = []

// this is the syntax for a Class
// convention always capitalizes classes
class BoxEncaps {
  //classes require constructors for the parameters
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }
  // this is the syntax to begin a class function
  moveBox() {
    push();
    if (this.incomingShape.transX > width || this.incomingShape.transX < 0) {
      this.incomingShape.speed = this.incomingShape.speed*-1;
    }
    this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speed;
    if (this.incomingShape.transY > width || this.incomingShape.transY < 0) {
      this.incomingShape.speedY = this.incomingShape.speedY*-1;
    }
    this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;
    translate(this.incomingShape.transX, this.incomingShape.transY, 50);
    noStroke();
    fill(255);
    rect(this.incomingShape.rectX, this.incomingShape.rectY, this.incomingShape.rectWidth, this.incomingShape.rectHeight);
    pop();
  }

  trackingLines() {
    stroke(255);
    strokeWeight(1.5)
    line(this.incomingShape.transX, 0, this.incomingShape.transX, height)
    line(0, this.incomingShape.transY, height, this.incomingShape.transY)
  }
}

// function moveBox(incomingBox) {
//   push();
//   if (incomingBox.transX > width || incomingBox.transX < 0) {
//     incomingBox.speed = incomingBox.speed*-1;
//   }
//   incomingBox.transX = incomingBox.transX + incomingBox.speed;
//   translate(incomingBox.transX, 300, 50);
//   displayBox(incomingBox);
//   pop();
// }
//
// function displayBox(incomingBox) {
//   noStroke();
//   fill(255);
//   rect(incomingBox.rectX, incomingBox.rectY, incomingBox.rectWidth, incomingBox.rectHeight);
// }
//
// function trackingLines(incomingGeometry) {
//   stroke(255);
//   strokeWeight(1.5)
//   line(incomingGeometry.transX, 0, incomingGeometry.transX, height)
//   line(0, incomingGeometry.transY, height, incomingGeometry.transY)
// }
