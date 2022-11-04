var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var boundaries = [];

var ground;

function setup() {
  createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  boundaries.push(new Boundary(100, 500, width, 30, 0.3));
  boundaries.push(new Boundary(350, 400, width, 30, -0.3));
  boundaries.push(new Boundary(20, 100, width, 30, 0.3));
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(25, 40), random(25, 40)));
}

function draw() {
  background(170, 180, 200);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  //let boxImg;
  //function preload() {
  //boxImg = loadImage('snack.png');
  //}
  //ground.show();
  //noStroke(255);
  //fill(130, 180 ,190);
  //rectMode(CENTER);

  //rect(ground.position.x, ground.position.y, width, 100);
}
