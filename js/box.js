class CannonBall {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 200;
      this.height = 200;
      World.add(world, this.body);
    }

    display() {
     var angle = this.body.angle;
     var pos = this.body.position;
        

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
}