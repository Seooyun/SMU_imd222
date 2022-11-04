class Polygon {
  constructor(x, y, sides, radius, options) {
    this.sides = sides;
    this.radius = radius;
    this.body = Matter.Bodies.Polygon(x, y, this.sides, this.radius, options);
    Matter.Composite.add(engine.world, this.body);
  }
}
