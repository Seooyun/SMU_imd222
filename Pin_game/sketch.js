var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var boxes = [];
var circles = [];
var bounds = [];
var boundaries = [];
//var particles = [];
var boundaries = [];
var pegs = [];
var cols = 13;
var rows = 10;

var ground;

var mConstraint;

let canvas;

function createBoundaries(thickness) {
  // boundaryObjs.push(
  //   new Rect(width * 0.5, 0, width, thickness * 2, { isStatic: true })
  // );
  boundaryObjs.push(
    new Rect(width * 0.5, height, width, thickness * 2, { isStatic: true })
  );
  boundaryObjs.push(
    new Rect(0, height * 0.5, thickness * 2, height, { isStatic: true })
  );
  boundaryObjs.push(
    new Rect(width, height * 0.5, thickness * 2, height, { isStatic: true })
  );
}

function setup() {
  createCanvas(600, 700);
  background(0);

  engine = Engine.create();
  world = engine.world;

  var spacing = width / cols;

  for (var j = -1; j < rows; j++) {
    for (var i = -1; i < cols - 0; i++) {
      var x = i * spacing;
      if (j % 4 == 0) {
        x += spacing / 4;
        if (i == 0) x -= 0;
        if (i == cols - 7) x += 7;
      }
      var y = 0 * spacing + j * spacing;
      var p = new Peg(x, y, 2);
      pegs.push(p);
    }
  }

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols - 0; i++) {
      var x = i * spacing;
      if (j % 4 == 0) {
        x += spacing / 4;
        if (i == 0) x -= 0;
        if (i == cols - 5) x += 5;
      }
      var y = 10 * spacing + j * spacing;
      var p = new Peg(x, y, 2);
      pegs.push(p);
    }
  }

  //var b = new Boundary(width / 2, height + 50, width - 4 * spacing + 10, 10);
  //bounds.push(b);

  // for (var i = 2; i < cols - 1; i++) {
  //  var x;
  //  var h;
  //  var w;

  //  if (i == 2 || i == cols - 2) {
  //   h = height;
  //  w = 10;
  //  if (i == 2) x = i * spacing;
  //  if (i == cols - 2) x = i * spacing;
  //   } else {
  //     x = i * spacing;
  //     h = 32;
  //     w = 10;
  //   }

  //    var y = height - 120 - h / 2;
  //
  {
    var b = new Boundary(width / 2, height + 50, width - 4 * spacing + 10, 10);
    bounds.push(b);

    for (var i = 0; i < cols + -2; i++) {
      var x = i * spacing;
      var h = 50;
      var w = 10;
      var y = height - h / 2;
      var b = new Boundary(x, y, w, h);
      boundaries.push(b);
    }
  }

  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(200, height, width, 50, options);

  World.add(world, ground);

  boundaries.push(new Boundary(10, 450, width, 20, 0.3));
  boundaries.push(new Boundary(500, 250, width, 20, -0.4));
  boundaries.push(new Boundary(20, 100, width, 20, 0.2));
  boundaries.push(new Boundary(200, 700, width, 50));
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 15), random(10, 15)));
}

function mousePressed() {
  circles.push(new Circle(mouseX, mouseY, random(5, 13)));
}

function draw() {
  background(250, 190, 200);
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (var i = 0; i < pegs.length; i++) {
    pegs[i].show();
  }

  //let boxImg;
  //function preload() {
  //boxImg = loadImage('.png');
  //}
  //ground.show();
  //noStroke(255);
  //fill(130, 180 ,190);
  //rectMode(CENTER);
}
