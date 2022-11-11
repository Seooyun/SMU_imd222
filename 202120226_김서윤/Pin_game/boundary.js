function Boundary(x, y, w, h, a) {
  var options = {
    friction: 0,
    restitution: 0.6,
    angle: a,
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  console.log(this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke(0);
    fill(250, 100, 90);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

Boundary.prototype.show = function () {
  fill(255);
  stroke(255);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  rect(0, 0, this.w, this.h);
  pop();
};
