let particles = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  for (let n = 0; n < 600; n++) {
    r = 1000;
    theta = random() * TAU;
    particles.push(new makeParticle(r, theta));
  }
}

let howManyX = 60;
let howManyY = 60;

function draw() {
  background(0);
  translate(300 + random(-2, 2) * hyperDrive, 300 + random(-2, 2) * hyperDrive);
  stroke(255);
  strokeWeight(2);

  for (let n = 0; n < 200; n++) {
    particles[n].move();
    particles[n].display();
  }

  if (hyperDrive) {
    globStep = lerp(globStep, 0.02, 0.01);
  } else {
    globStep = lerp(globStep, 0.0025, 0.1);
  }
}

function makeParticle(rad, ang) {
  this.rad = rad;
  this.ang = ang;

  this.t = random();
  this.step = 0.0025;

  this.weight = random(10);
  this.transp = random(200, 255);

  this.leng = random(100);

  this.move = function () {
    this.step = lerp(this.step, globStep, 0.01);
    this.t += this.step;
    if (this.t > 1) {
      this.t = 0.15;
    }
  };

  this.display = function () {
    let x = this.rad * cos(this.ang) * this.t * this.t;
    let y = this.rad * sin(this.ang) * this.t * this.t;

    let x2 = (this.rad - this.leng * this.t) * cos(this.ang) * this.t * this.t;
    let y2 = (this.rad - this.leng * this.t) * sin(this.ang) * this.t * this.t;

    strokeWeight(this.weight);

    let beginT = map(this.t, 0.15, 0.3, 0, 1);
    stroke(255 * beginT + 50, this.transp);
    line(x, y, x2, y2);
  };
}

let globStep = 0.0025;
let hyperDrive = false;
function mousePressed() {
  hyperDrive = true;
}

function mouseReleased() {
  hyperDrive = false;
}
