let circle01 = {
  color: 0,
  transX: 400, // these are translate functions
  transY: 600, // these are translate functions
  speedX: -3,
  speedY: 2,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 80
}

let box01 = {
  color: 0,
  transX: 400,
  transY: 450,
  speedX: -0.5,
  speedY: 1,
  boxX: 0,
  boxY: 0,
  boxWidth: 80,
  boxHeight: 300
}

let circle02 = {
  color: 255,
  transX: 400, // these are translate functions
  transY: 600, // these are translate functions
  speedX: -1,
  speedY: -2,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 40
}

let box02 = {
  color: 255,
  transX: 400,
  transY: 470,
  speedX: -1.5,
  speedY: -0.5,
  boxX: 0,
  boxY: 0,
  boxWidth: 5,
  boxHeight: 270
}

let circle03 = {
  color: 0,
  transX: 400, // these are translate functions
  transY: 250, // these are translate functions
  speedX: -1.75,
  speedY: .5,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 150
}

let box03 = {
  color: 255,
  transX: 380,
  transY: 220,
  speedX: 1.5,
  speedY: -0.25,
  boxX: 0,
  boxY: 0,
  boxWidth: 60,
  boxHeight: 110,
  cornerRadius: 10,
  rotateAngle: 151,
}

class WrenchMove {
  constructor(incomingShape) {
    this.incomingShape = incomingShape;
  }
  drawCircle() {
    if (this.incomingShape.boxX === undefined) {
      fill(this.incomingShape.color);
      push()
      if (this.incomingShape.transX > 2*width || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speedX;
      if (this.incomingShape.transY > 2*height || this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;
      translate(this.incomingShape.transX, this.incomingShape.transY)
      ellipse(this.incomingShape.ellipseX, this.incomingShape.ellipseY, this.incomingShape.ellipseDiameter, this.incomingShape.ellipseDiameter);
      pop()
    }
  }
  tracingObject() {
    if (this.incomingShape.boxX === undefined) {
      stroke('red') // Give a white color
      line(this.incomingShape.transX, -height, this.incomingShape.transX, 2*height)
      line(-width, this.incomingShape.transY, 2*width, this.incomingShape.transY)
    }
  }

  drawBox() {
    if (this.incomingShape.boxX === 0 && this.incomingShape.rotateAngle === undefined) {
      fill(this.incomingShape.color);
      push()
      if (this.incomingShape.transX > 2*width || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speedX;
      if (this.incomingShape.transY > 2*height || this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;
      translate(this.incomingShape.transX, this.incomingShape.transY)
      rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.boxWidth, this.incomingShape.boxHeight);
      pop()
      // console.log(this.incomingShape.rotateAngle)
    }
  }

  tracingBoxObject() {
    if (this.incomingShape.boxX === 0 && this.incomingShape.rotateAngle === undefined) {
      stroke(255) // Give a white color
      line(this.incomingShape.transX, -height, this.incomingShape.transX, 2*height)
      line(-width, this.incomingShape.transY, 2*width, this.incomingShape.transY)
    }
  }

  drawAngledBox() {
    if (this.incomingShape.rotateAngle) {
      push()
      if (this.incomingShape.transX > 2*width || this.incomingShape.transX < 0) {
        this.incomingShape.speedX = this.incomingShape.speedX*-1;
      }
      this.incomingShape.transX = this.incomingShape.transX + this.incomingShape.speedX;
      if (this.incomingShape.transY > 2*height || this.incomingShape.transY < 0) {
        this.incomingShape.speedY = this.incomingShape.speedY*-1;
      }
      this.incomingShape.transY = this.incomingShape.transY + this.incomingShape.speedY;
      fill(this.incomingShape.color);
      translate(this.incomingShape.transX, this.incomingShape.transY)
      rotate(this.incomingShape.rotateAngle)
      rect(this.incomingShape.boxX, this.incomingShape.boxY, this.incomingShape.boxWidth, this.incomingShape.boxHeight, this.incomingShape.cornerRadius);
      pop()
    }
  }
  tracingAngledBox() {
    if (this.incomingShape.rotateAngle) {
      stroke(255) // Give a white color
      push()
      translate(this.incomingShape.transX, this.incomingShape.transY)
      rotate(this.incomingShape.rotateAngle)
      line(-height, -2*height, 0, 2*height)
      line(-2*width, -width, 2*width, 0)
      pop()
    }
  }
}
