// html file opens sketch_move.js, sketch_rotate.js, and sketch.js
// sketch.js is the only file that executes setup and draw
// each class is manipulated through an array

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  for (let i = 0; i < boxes.length; i++) {
    boxArray[i] = new BoxEncaps(boxes[i]);
  }
  for (let i = 0; i < rotatedBoxes.length; i++) {
    rotatedBoxArray[i] = new BoxEncapsRotate(rotatedBoxes[i]);
  }
}

function draw() {
  background(0);
  rectMode(CENTER);

  for (let i = 0; i < boxes.length; i++) {
    boxArray[i].moveBox();
    boxArray[i].trackingLines();
  }

  for (let i = 0; i < rotatedBoxes.length; i++) {
    rotatedBoxArray[i].rotate();
    rotatedBoxArray[i].trackingLines();
  }
}
