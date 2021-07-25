class Connect{
    constructor(a, b, offSetX){
        var options = {
            bodyA = a,
            bodyB = b,
            pointB = {x: offSetX, y: 0}
        }

        this.body = Constraint.create(options);
        this.offSetX = offSetX;
        World.add(world, this.body)
    }

    display(){
        var body = this.body.bodyA.position;
        var point = this.body.bodyB.position;

        strokeWeight(3);
        stroke("black")
        line(body.x, body.y, point.x, point.y);
    }
}