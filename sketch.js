const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function preload() {
//preload the images here

  backgroundImg = loadImage("bg.png")
}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,600,70,70)
    box2 = new Box(820,600,70,70)
    box3 = new Box(680,600,70,70)
    box4 = new Box(890,600,70,70)
    box5 = new Box(750,530,70,70)
    box6 = new Box(820,530,70,70)
    box7 = new Box(680,530,70,70)
    box8 = new Box(890,530,70,70)
    box9 = new Box(750,460,70,70)
    box10 = new Box(820,460,70,70)
    box11 = new Box(680,460,70,70)
    box12 = new Box(890,460,70,70)
    box13 = new Box(750,390,70,70)
    box14 = new Box(820,390,70,70)
    box15 = new Box(680,390,70,70)
    box16 = new Box(890,390,70,70)
    box17 = new Box(960,600,70,70)

    enemy1 = new Enemy(990,550,100,100)


  ground1 = new Ground(1000,780,2000,20)
  ground2 = new Ground(900,650,700,20)

 
 
  hero1 = new Hero(400,800,250)

  sling1 = new Sling(hero1.body,{x:400,y:350})


  
}

function draw() {
  background(backgroundImg);
  //background(255)
 

  Engine.update(engine)

  ground1.display();
  ground2.display();
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
  enemy1.display();
  hero1.display();


 

}


function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}

