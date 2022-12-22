function setup() {
  let bouncingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(bouncingRects.width, bouncingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 20;
let howManyY = 20;

function mousePressed() {
  seedValue = floor;
}

function draw() {
  background(255);
  streoke(0);
  noFill();

  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let dice = random(2);
      let tileCenterX = (width / (howManyX + 1)) * (height / (howManyY + 1));
    }
  }
}
