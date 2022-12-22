let n = 0;
let mode = 0;
let canChange = false;
let s = 300;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  noStroke();
}

function draw() {
  let new_n = floor((sin(frameCount / 36) + 1) * 2.5);
  if (n != new_n) {
    background(0);
    translate(width / 2, height / 2);

    stroke(0);
    noFill();
    drawHexagon(0, 0, s);

    n = new_n;
    fill(255); // change in function of n, add color?
    noStroke();
    divideHexagon(0, 0, s, n);

    if (n == 0) {
      if (canChange) {
        canChange = false;
        mode = (mode + 1) % 1;
      }
    } else {
      canChange = true;
    }
  }
}

function divideHexagon(x, y, r, k) {
  if (k <= 0) {
    drawHexagon(x, y, r);
    return;
  }

  let new_r = r / 3;
  let s;
  let theta0;
  if (mode == 0) {
    s = new_r * sqrt(3);
    theta0 = PI / 6;
  } else {
    s = new_r * 2;
    theta0 = PI / 6;
  }
  for (let theta = theta0; theta < TWO_PI; theta += PI / 3) {
    divideHexagon(x + s * cos(theta), y + s * sin(theta), new_r, k - 1);
  }
  divideHexagon(x, y, new_r, k - 1);
}

function drawHexagon(x, y, r) {
  beginShape();
  for (let theta = 0; theta < TWO_PI; theta += PI / 3) {
    vertex(r * cos(theta) + x, r * sin(theta) + y);
  }
  endShape();
}
