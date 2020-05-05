class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/gaia.png");
    this.pig = 255;
  }
  display(){
    if (this.body.speed > 2.5){
      World.remove(world ,this.body);
      push();
      this.pig = this.pig-2.5;
      tint(255,this.pig)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop();
    }
    else{
    super.display();
    }
  }

};