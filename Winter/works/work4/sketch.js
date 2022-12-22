let circleX = 100;
let circleY = 100;

let r = 0;
let g = 0;
let b = 0;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  background(0);
}

function draw() {
  noStroke();
  fill(r, g, b, 70);

  ellipse(circleX, circleY, 30, 30);

  circleX = random(0, 900);
  circleY = random(0, 900);

  r = random(140, 255);
  g = random(100, 236);
  b = random(100, 255);
}
