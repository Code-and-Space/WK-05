let wrenchElements = [circle01, box01, circle02, box02, circle03, box03]
let wrench =[]

let wrenchRotateElements = [circ01, rect01, circ02, rect02, circ03, rect03]
let wrenchRotate =[]

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);
  for (let i = 0; i < wrenchElements.length; i++) {
    wrench[i] = new WrenchMove(wrenchElements[i]);
  }
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i] = new WrenchRotate(wrenchRotateElements[i]);
  }

}

function draw() {
  background(100);
  noStroke();

  fill(0);
  textAlign(CENTER, BASELINE)
  textSize(25);
  text('This is not a wrench.', width/2, height-20);

  push();
  translate(0, 0);
  scale(0.5);
  for (let i = 0; i < wrenchElements.length; i++) {
    wrench[i].drawCircle();
    wrench[i].tracingObject();
    wrench[i].drawBox();
    wrench[i].tracingBoxObject();
    wrench[i].drawAngledBox();
    wrench[i].tracingAngledBox();
  }
  pop();

  push();
  translate(400, 200);
  scale(0.5);
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i].displayCircle();
    wrenchRotate[i].diagramCircle();
    wrenchRotate[i].displayRect();
    wrenchRotate[i].diagramRect();
  }
  pop();
}
