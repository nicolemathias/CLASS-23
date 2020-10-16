class box{
    constructor(x,y,width,height){
        var options = {
            restitution : 1

        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        console.log(this.body.position)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        
        rect(0,0,this.width,this.height)
        pop();

    }
}