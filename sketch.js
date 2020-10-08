
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var tree1;
var mango1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(600,height,1200,20);
  
  tree1=new Tree(600,500);
  
  stone = new Stone(160,520);

  boy=new Boy(200,600);



  mango1=new Mango(600,400);
  mango2=new Mango(680,380);
  mango3=new Mango(500,460);
  mango4=new Mango(550,410);
  mango5=new Mango(640,460);
  mango6=new Mango(560,460);
  mango7=new Mango(700,400);
  mango8=new Mango(580,350);
  mango9=new Mango(630,340);

  
  chain = new Chain(stone.body,boy.body);
}


function draw() {
  rectMode(CENTER);
  background(255,255,154);
  
  tree1.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  chain.display();
  

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function detectcollision(stone1,mango){
  MangoBodyPosition=mango.body.position
  StoneBodyPosition=stone1.body.position

  var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
    if(distance<-mango.r+stone1+r)
    {
      Matter.Body.setStatic(mango.body,false);
    }

}
