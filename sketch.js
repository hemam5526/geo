
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var canvas = createCanvas(1200,400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Hammer = new Hammer(200,100)

	Plane = new Plane(500,390,1400,20)

	Stone = new Stone(700,320,100,100,(PI/7))

	Rubber = new Rubber(800,500,90)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ADD8E6");

  Hammer.display()
  Plane.display()
  Stone.display()
  Rubber.display()
  
  drawSprites();
 
}



