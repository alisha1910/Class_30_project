const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;
var box9,box1,box2,box3,box4,ground,box5,box6,box7,box8,pl,sling,holder;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;

    

    box9=new Box(750,430,30,30);
    box1=new Box(780,420,30,30);
    box2=new Box(810,450,30,30);
    box3=new Box(840,400,30,30);
    box4=new Box(870,410,30,30);
    
    box5=new Box(780,420,30,30);
    box6=new Box(810,450,30,30);
    box7=new Box(840,400,30,30);
    box8=new Box(810,410,30,30);


   
    
    
    ground=new Ground(500,500,2000,20);
   
    pl=new Player(200,200);
    holder=new Holder(200,300,10);
    sling=new Slingshot(pl.body,holder.body);
    
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    box9.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
     
    pl.display();
    holder.display();
    sling.display();
    ground.display();
    
}

function mouseDragged() {
  Matter.Body.setPosition(pl.body,{x:mouseX , y:mouseY})
  
  
  }
  
  function mouseReleased() {
  sling.fly();
  
  }
  function keyPressed(){
    if(keyCode === 32){
       sling.attach(pl.body);
    }
}