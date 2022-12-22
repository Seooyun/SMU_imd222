let dummyArray = [];
let dummyArrayX = [];
let dummyArrayY = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  background(0);

  for (let i = 0; i < 100; i++) {
    dummyArrayX[i] = random(500);
    dummyArrayY[i] = random(500);
  }

  noStroke();
}

function draw() {
  blendMode(BLEND);
  background(0);

  push();

  blendMode(ADD);

  for (let i = 0; i <= 100; i++) {
    var size = noise(i) * 300;
    var locX = map(
      noise(i, frameCount / 1000, dummyArrayX[i]),
      0,
      1,
      -100,
      width + 100
    );
    var locY = map(
      noise(i, frameCount / 801, dummyArrayY[i]),
      0,
      1,
      -100,
      height + 100
    );
    var hue = floor(
      map(noise(i, frameCount / mouseY + 1), 0, 1, 0, noise(i) * 900)
    );

    fill(color("hsb(" + hue + ", 40%, 10%)"));
    beginShape();
    vertex(0 + locX + noise(i), size + locY + noise(i));
    vertex(size + locX + noise(i), 0 + locY + noise(i));
    vertex(0 + locX + noise(i), -size + locY + noise(i));
    vertex(-size + locX + noise(i), 0 + locY + noise(i));
    endShape(CLOSE);
  }
}
