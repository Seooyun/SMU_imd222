var points;
var n = 2000;
var angle;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(0);

  initCanvas();
}
function draw() {
  translate(width / 2, height / 2);
  noFill();
  stroke(255, 5);

  rectMode(CENTER);
  rect(0, 0, w, w);

  for (let i = 0; i < points.length; i++) {
    angle = noise(points[i].x / 100, points[i].y / 100) * TAU * 100;
    points[i].add(createVector(cos(angle) * TAU, sin(angle) * TAU));

    if (
      points[i].y < -wi ||
      points[i].y > wi ||
      points[i].x < -wi ||
      points[i].x > wi
    )
      points[i] = createVector(
        random(-width / 2, width / 2),
        random(-height / 2, height / 2)
      );
    else point(points[i].x, points[i].y);
  }
}

function initCanvas() {
  points = [];

  w = height - 100;
  wi = w / 2 - 20;

  for (let i = 0; i < n; i++) {
    points.push(createVector(random(-width, width), random(-height, height)));
  }
}

function mousePressed() {
  background(0);
  noiseSeed(random(100));
  initCanvas();
}
