class Slingshot{
    constructor(a,b){
     var options ={
      bodyA: a,
      pointB: b,
      length: 20,
      stiffness:0.5
    }
     this.c = Matter.Constraint.create(options)
     this.d = b
     World.add(world,this.c)
     this.image1 = loadImage("sprites/sling1.png")
     this.image2 = loadImage("sprites/sling2.png")
     this.image3 = loadImage("sprites/sling3.png")
    }
    display(){
        if(this.c.bodyA){
            push()
            stroke(48,22,8);
            strokeWeight(10);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x-10,this.d.y);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x+20,this.d.y);
            if(this.c.bodyA.position.x<210){
            image(this.image3,this.c.bodyA.position.x-25,this.c.bodyA.position.y,10,20)
            }
            else{
            image(this.image3,this.c.bodyA.position.x+25,this.c.bodyA.position.y,10,20)   
            }
            pop()
        }
        image(this.image1,200,23)
        image(this.image2,170,20)
    }
     release(){
        this.c.bodyA = null;
    }
     attach(red){
        this.c.bodyA = red;
    }
}