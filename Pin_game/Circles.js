// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/uITcoKpbQq4

function Circle(x, y, r) {
  var options = {
    friction: 0.5,
    restitution: 0.95,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(0);
    stroke(0);
    fill(225, 255, 255);
    ellipse(0, 0, this.r * 2);
    pop();
  };
}
