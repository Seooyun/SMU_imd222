function Box(x, y, w, h, c) {
  var options = {
    friction: 0,
    restitution: 0.6,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.c = c;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(250, 190, 90);

    //rectMode(CENTER)
    //image(snackImg, 0, 0, this.w, this.h);
    rect(0, 0, this.w, this.h);
    pop();
  };
}
