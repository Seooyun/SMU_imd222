let blob = [];
let star = [];
const num = 100;
const num2 = 30;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  for (let i = 0; i < num; i++) {
    blob.push(
      new Blob(
        random(width / 130, width / 60),
        createVector(random(100, width - 100), random(100, height - 100)),
        createVector(random(-2, 2), random(-2, 2))
      )
    );
  }
  for (let j = 0; j < num2; j++) {
    star.push(
      new Star(
        random(width / 160, width / 40),
        createVector(random(100, width - 100), random(100, height - 100)),
        createVector(random(-5, 5), random(-5, 5))
      )
    );
  }
}

function draw() {
  background(0);

  for (let i = 0; i < num; i++) {
    blob[i].move();
    blob[i].bounce();
    blob[i].display();
  }
  for (let j = 0; j < num2; j++) {
    star[j].move();
    star[j].bounce();
    star[j].display();
  }
}

class Blob {
  constructor(diameter, position, velocity) {
    this.diameter = diameter;
    this.position = position;
    this.velocity = velocity;
    this.speed = random(0.2);
  }
  move() {
    this.position.add(this.velocity);
  }
  bounce() {
    if (
      this.position.x < this.diameter / 2 ||
      this.position.x > width - this.diameter / 2
    ) {
      this.velocity.x *= -1;
    }
    if (
      this.position.y < this.diameter / 2 ||
      this.position.y > height - this.diameter / 2
    ) {
      this.velocity.y *= -1;
    }
  }
  display() {
    noStroke();
    fill(random(0, 255), random(0, 255), 255, 70);
    let currentDiameter =
      sin(frameCount * this.speed) * (this.diameter / 2) + this.diameter;
    circle(this.position.x, this.position.y, currentDiameter);
    fill(random(0, 255), random(0, 255), 255, 70);
    circle(
      this.position.x + currentDiameter / 2,
      this.position.y,
      currentDiameter
    );
    fill(random(0, 255), random(0, 255), 255, 70);
    circle(
      this.position.x,
      this.position.y + currentDiameter / 2,
      currentDiameter
    );
  }
}

class Star {
  constructor(diameter, position, velocity) {
    this.diameter = diameter;
    this.position = position;
    this.velocity = velocity;
    this.speed = random(0.2);
  }
  move() {
    this.position.add(this.velocity);
  }
  bounce() {
    if (
      this.position.x < this.diameter / 2 ||
      this.position.x > width - this.diameter / 2
    ) {
      this.velocity.x *= -1;
    }
    if (
      this.position.y < this.diameter / 2 ||
      this.position.y > height - this.diameter / 2
    ) {
      this.velocity.y *= -1;
    }
  }
  display() {
    noStroke();
    fill(255, 255, random(0, 150), random(0, 160));
    let currentDiameter =
      sin(frameCount * this.speed) * (this.diameter / 2) + this.diameter;
    circle(this.position.x, this.position.y, currentDiameter);
  }
}
