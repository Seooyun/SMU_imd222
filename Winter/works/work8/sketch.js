class Firework {
  constructor(x, c) {
    this.x = x;
    this.c = c;
    this.t = 0;
    this.s = random(5, 10);
    this.v = random(3, 5);
    this.special = random() > 0.9;
  }
  draw() {
    this.t++;
    noStroke();
    const count = this.special ? 397 : 251;
    if (this.t < 100) {
      this.pos = createVector(
        this.x + sin(this.t / 5) * 5,
        height - this.t * this.v
      );
      fill(this.c);
      circle(this.pos.x, this.pos.y, this.s);
    } else if (this.t > 200) {
      const seed = random(0, 2100000000);
      randomSeed(frameCount - this.t);
      for (let i = 0; i < count; i++) {
        const r = (i / count) * TAU;
        const t = this.t - 200;
        const s = t * sin(i);
        if (this.special) {
          fill(random(255), 220, 255);
        } else {
          fill(this.c);
        }
        circle(
          this.pos.x + sin(r) * t,
          this.pos.y + cos(r) * s + pow(t * 0.02, 2),
          3
        );
      }
      randomSeed(seed);
    }
  }
  dead() {
    return this.t > 500;
  }
}

let objs = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  colorMode(HSB, 255);
  background(90);
  objs.push(new Firework(width / 2, color(random(255), 50, 50)));
}

function draw() {
  background(10, 10);
  for (let fw of objs) {
    fw.draw();
  }
  objs = objs.filter((fw) => !fw.dead());
}

function mouseClicked() {
  const c = color(random(255), 220, 255);
  objs.push(new Firework(mouseX, c));
}

function keyPressed() {
  save(
    "img_" +
      month() +
      "-" +
      day() +
      "_" +
      hour() +
      "-" +
      minute() +
      "-" +
      second() +
      ".jpg"
  );
}
