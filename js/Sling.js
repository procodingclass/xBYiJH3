class Sling {
  constructor(point, body) {
    var options = {
      pointA: point,
      bodyB: body,
      stiffness: 0.2,
      length: 40
    };
    this.pointA = point;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
 

  display() {
    if (this.sling.bodyB) {
      var posA = this.sling.pointA;
      var posB = this.sling.bodyB.position;
      push();
      stroke("#ffb74d");
      strokeWeight(6);
      line(posA.x - 5, posA.y, posB.x - 10, posB.y);
      line(posA.x + 5, posA.y, posB.x + 10, posB.y);
      pop();
    }
  }

  fly() {
    this.sling.bodyB = null;
  }

  attach(pointA, body) {
    this.sling.bodyB = body;
    this.sling.pointA = pointA;
  }
}


