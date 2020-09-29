let circ01 = {
  color: 0,
  transX: 0,
  transY: 600,
  speed: 0,
  ellipseX: 400,
  ellipseY: 0,
  diameter: 80
}

let rect01 = {
  color: 0,
  transX: 400,
  transY: 250,
  transAngle: 0,
  speed: 0,
  boxX: 0,
  boxY: 200,
  width: 80,
  height: 300,
  radius: 0
}

let circ02 = {
  color: 255,
  transX: 440,
  transY: 300,
  speed: 0,
  ellipseX: -40,
  ellipseY: 300,
  diameter: 40
}

let rect02 = {
  color: 255,
  transX: 400,
  transY: 155,
  transAngle: 0,
  speed: 0,
  boxX: 0,
  boxY: 300,
  width: 5,
  height: 270,
  radius:0
}

let circ03 = {
  color: 0,
  transX: 350,
  transY: 250,
  speed: 0,
  ellipseX: 50,
  ellipseY: 0,
  diameter: 150
}

let rect03 = {
  color: 255,
  transX: 380,
  transY: 220,
  transAngle: 151,
  speed: 0,
  boxX: 0,
  boxY: 0,
  width: 60,
  height: 110,
  radius: 10
}



// function setup() {
//   createCanvas(800, 800);
//   rectMode(CENTER)
//   angleMode(DEGREES);
  // for (let i = 0; i < wrenchRotateElements.length - 1; i++) {
  //   wrenchRotate[i] = new WrenchRotate(wrenchRotateElements[i]);
  // }
// }

// function draw() {
//   background(255);
//   noStroke();

  // for (let i = 0; i < wrenchRotateElements.length - 1; i++) {
  //   wrenchRotate[i].displayCircle();
  //   wrenchRotate[i].diagramCircle();
  //   wrenchRotate[i].displayRect();
  //   wrenchRotate[i].diagramRect();
  // }

  //bottom black circle
  // displayCircle(circ01)
  // diagramCircle(circ01);
  //
  // //black handle rectangle
  // displayRect(rect01);
  // diagramRect(rect01);
  //
  // //bottom white circle
  // displayCircle(circ02)
  // diagramCircle(circ02);
  //
  // //white thin handle part
  // displayRect(rect02)
  // diagramRect(rect02);
  //
  // //wrench head circle
  // displayCircle(circ03)
  // diagramCircle(circ03);
  //
  // //angled wrench head
  // displayRect(rect03)
  // diagramRect(rect03);

  // speed = speed + 0.25;
// }

class WrenchRotate {
  constructor(incomingShape) {
    // this.incomingCircle = incomingCircle;
    // this.incomingBox = incomingBox;
    this.incomingShape = incomingShape;
  }
  displayCircle() {
    if (this.incomingShape.boxX === undefined) {
      noStroke();
      fill(this.incomingShape.color);
      push();
      translate(this.incomingShape.transX, this.incomingShape.transY);
      rotate(this.incomingShape.speed);
      ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.diameter, this.incomingShape.diameter);
      this.incomingShape.speed = this.incomingShape.speed + 0.25;
      pop();
    }
  }

  diagramCircle() {
    if (this.incomingShape.boxX === undefined) {
      let hypotenuse = dist(0, 0, this.incomingShape.ellipseX, this.incomingShape.ellipseY);
      stroke(255);
      noFill();
      strokeWeight(0);
      point(this.incomingShape.transX, this.incomingShape.transY);
      strokeWeight(0.5);
      fill(255, 255, 255, 20);
      circle(this.incomingShape.transX, this.incomingShape.transY, hypotenuse*2 + this.incomingShape.diameter);
    }
  }

  displayRect() {
    if (this.incomingShape.ellipseX === undefined) {
      if (this.incomingShape.transAngle === 0) {
        fill(this.incomingShape.color);
        noStroke();
        push()
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.speed);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.width, this.incomingShape.height, this.incomingShape.radius);
        pop()
        this.incomingShape.speed = this.incomingShape.speed + 0.25;
      } else {
        fill(this.incomingShape.color);
        noStroke();
        push()
        translate(this.incomingShape.transX, this.incomingShape.transY);
        rotate(this.incomingShape.transAngle);
        rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.width, this.incomingShape.height, this.incomingShape.radius);
        pop()
      }
    }
  }
  diagramRect() {
    if (this.incomingShape.ellipseX === undefined) {
      stroke(255)
      strokeWeight(0.25);
      point(this.incomingShape.transX, this.incomingShape.transY)
      strokeWeight(0.5)
      fill(20, 20, 20, 20);
      circle(this.incomingShape.transX, this.incomingShape.transY, this.incomingShape.boxY*2 + this.incomingShape.height)
      circle(this.incomingShape.transX, this.incomingShape.transY, this.incomingShape.boxY*2 - this.incomingShape.height)
    }
  }
}
