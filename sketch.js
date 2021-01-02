const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    Polyimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20);
    platform = new Ground(600,285,250,10);
    
    block1 = new Block(625,260,50,40);
    block2 = new Block(575,260,50,40);
    block3 = new Block(525,260,50,40);
    block4 = new Block(675,260,50,40);
  
    player = new Player(50,100,30,30);
  
    block6 = new Block(640,220,40,40);
    block7 = new Block(600,220,40,40);
    block8 = new Block(560,220,40,40);

    bolck10 = new Block(580,180,35,40);
 
    block12 = new Block(615,180,35,40);
    block13 = new Block(600,140,30,40);

    player = new Player(75,75,30,30);

    ball = Bodies.circle(100,160,20);
    World.add(world,ball);
  
    Sling = new sling(this.ball,{x:75,y:75});
}

function draw(){
        background(25,25,25)
        platform.display();
        ground.display();

        player.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        
        fill("orange");
        block6.display();
        block7.display();
        block8.display();
      
        fill("yellow");
        bolck10.display();
        Sling.display();
        block12.display();
        fill("white")
        block13.display();
        drawSprites();


      

     
    
      
}


function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }
  
  function keyPressed(){
      if(keyCode === 32)
      {
          Matter.Body.setPosition(player.body,{x:235, y:420})
          sling.attach(player.body);
      }
  }