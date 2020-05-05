const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingshot;
var object = [234,[343,"bggg",87,true],"neikjjbioml",234523,235,null];
object.push(23137)
object.pop()
console.log(object);
var gamestate = "start";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new Slingshot(bird.body,{x:200, y:50});
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    //getTime();
    //console.log(pig1.body.speed);
    //console.log(pig3.body.speed);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();

    ground.display();

    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingshot.display();

    bird.display();
    platform.display();
}

function mouseDragged(){
    if (gamestate === "start"){
    Matter.Body.setPosition(bird.body,{x:mouseX ,y:mouseY})
    }
}

function mouseReleased(){
    slingshot.release();
    gamestate = "play"
}

function keyPressed(){ 
    if(keyCode === 32 || bird.body.speed <= 1.5){
    bird.smoke = []
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    //bird.body.position.x = 200;
    //bird.body.position.y = 50;
    slingshot.attach(bird.body);
    }
}
 
async function getTime(){
    var waiter = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //console.log(waiter);
    var json = await waiter.json();
    console.log(json.datetime.slice(11,13))
    var hour = json.datetime.slice(11,13)
    if(hour >= 6 && hour <= 19){
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
    else{
        backgroudImg = loadImage("sprites/bg.png");
    }
}