class Ground{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
        }

        this.ground = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.ground);
    }

    display(){
        var body = this.ground.position;
        fill("black");
        rect(body.x, body.y, this.w, this.h);
    }
}