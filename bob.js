class Bob{
    constructor(x, y){
        var options = {
            restitution: 0.5,
            isStatic: true,
            density: 1.5,
            friction: 0.5
        }

        //making the body
        this.bob = Bodies.circle(x, y, 50, options);
        World.add(world, this.bob);
    }

    //how the body will be displayed
    show(){
        var body = this.bob.position;

        fill(rgb(246, 92, 220));
        ellipse(body.x, body.y, 50, 50);
    }
}