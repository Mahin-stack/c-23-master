
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;box2,Ground,ball1,gol;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,305,120,150);
    box2 = new Box(285,315,50,150);
    box3 = new Box(115,315,50,150);
    box4 = new Box(75,315,30,200);
    box5 =new Box(320,315,30,200);
    box6 =new Box(50,325,25,270);
    box7 =new Box(345,325,25,270);
    box8 =new Box(35,335,25,300);
    box9 =new Box(365,335,25,300);
    box10 =new Box(15,335,15,380);
    box11 =new Box(385,335,15,380);
    box12 = new Box(15,130,20,20);
    box13= new Box(385,130,20,20);
    box14= new Box(352,170,20,20);
    box15= new Box(42,170,20,20);
    box16= new Box(320,200,20,20);
    box17= new Box(75,200,20,20);
    box18 = new Box(280,225,20,20);
    box19 = new Box(115,225,20,20);
    box20 = new Box(200,125,60,30);

    ground = new Ground(200,390,400,20);

    
    var ball_options = {
      isStatic : true
       }
   
    ball = Bodies.circle(200,190,65,ball_options);
     World.add(world,ball);

     var gol_options = {
      isStatic : true
       }
   
    gol = Bodies.circle(195,190,15,gol_options);
     World.add(world,gol);
   
     
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ground.display();
    
    fill(255)  
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,65,65);

    fill(0)  
    ellipseMode(RADIUS);
    ellipse(gol.position.x,gol.position.y,15,15);

    fill(255)
    text("MY PALACE",160,80);
   
    drawSprites();
  }























