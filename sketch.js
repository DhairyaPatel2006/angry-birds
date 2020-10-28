const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,390,50,50);
    box2 = new Box(350,390,50,50);
    box3 = new Box(150,300,50,50);
    box4 = new Box(350,300,50,50);
    box5 = new Box(250,250,50,50);
 ground = new Ground(200,height,400,20)
    pig1= new Pig(250,390);
    pig2=new Pig(250,310);
    log1= new Log(250,320,295,13,PI);
    log2=new Log(250,280,295,13,PI);
    log3=new Log(190,200,134,13,-PI/7);
    log4=new Log(310,200,134,13,PI/9);
    bird1=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
}