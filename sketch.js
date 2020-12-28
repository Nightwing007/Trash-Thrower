const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1,log2,log3;

var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(100,623,50);

	ground1 = new ground(600,690,1200,20);

	log1 = new Log(900,675,150,10);
	log2 = new Log(820,643,10,75);
	log3 = new Log(980,643,10,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  ground1.display();

  log1.display();
  log2.display();
  log3.display();

  UP_ARR();

  drawSprites();
 
}

function UP_ARR()
{
	if(keyWentDown("UP_ARROW"))
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{ x: 120, y: -110});
	}
}



