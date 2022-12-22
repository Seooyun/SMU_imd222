var seed = Math.random() * 1000;
var xOff, yOff, dir, plus, wave_h, t;
var color1, color2;
let colors1 = "7fdeea-a3b7f0-a1e4f7-6d7db6-5a6696"
  .split("-")
  .map((a) => "#" + a + "40");
let colors12 = "7fdeea-a3b7f0-a1e4f7-6d7db6-5a6696"
  .split("-")
  .map((a) => "#" + a + "00");
let colorbg = "ffffff".split("-").map((a) => "#" + a);
let colorbg2 = "ffffff1a".split("-").map((a) => "#" + a);
var grad;
let filter;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  color1 = colors1;
  color2 = colors12;
  xOff = -500;
  yOff = 0;
  dir = 1;
  plus = 0.1;
  wave_h = 50;
  t = 0;
  filter = new makeFilter();
}

function draw() {
  randomSeed(seed);
  background(colorbg2);
  noStroke();
  let mountain_h = height / int(random(30, 40));
  for (let n = 0; n < height; n += random(mountain_h / 2, mountain_h)) {
    push();
    translate(0, height - n);
    grad = drawingContext.createLinearGradient(0, -mountain_h, 0, mountain_h);
    grad.addColorStop(0, random(color1));
    grad.addColorStop(1, random(color2));
    drawingContext.fillStyle = grad;
    beginShape();
    curveVertex(-n, n);
    for (let i = xOff; i < width - xOff; i += 100) {
      let p = random(-1, 1);
      curveVertex(i, cos(i + t) * p * random(yOff));
    }
    curveVertex(width + n, n);
    endShape(CLOSE);
    pop();
  }

  if (dir == 1) {
    if (yOff < wave_h) {
      dir = 1;
    } else if (yOff >= wave_h) {
      dir = -1;
      plus = random(0.1);
    }
  } else if (dir == -1) {
    if (yOff > 0) {
      dir = -1;
    } else if (yOff <= 0) {
      dir = 1;
      plus = random(0.1);
    }
  }

  yOff += plus * dir;
  t += 0.1;
  image(overAllTexture, 0, 0);
}

function makeFilter() {
  colorMode(HSB, 360, 200, 100, 200);
  drawingContext.shadowColor = color(0, 0, 95, 95);
  overAllTexture = createGraphics(width, height);
  overAllTexture.loadPixels();
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      overAllTexture.set(
        i,
        j,
        color(0, 0, 99, noise(i / 3, j / 3, (i * j) / 50) * random(5, 15))
      );
    }
  }
  overAllTexture.updatePixels();
}
