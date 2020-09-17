
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,175,228,20);

	bob1=new Bob(680,400,40);
	bob2=new Bob(740,400,40);
	bob3=new Bob(800,400,40);
	bob4=new Bob(860,400,40);
	bob5=new Bob(920,400,40);
	//Create the Bodies Here.
	/*roof1=new Roof(200,200,100,20);
	roof2=new Roof(220,200,100,20);
	roof3=new Roof(240,200,100,20);
	roof4=new Roof(260,200,100,20);
	roof5=new Roof(280,200,100,20);*/
	

	rope1=new Rope(bob1.body,roof.body,-80,0);
	rope2=new Rope(bob2.body,roof.body,-40,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,40,0);
	rope5=new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
//   roof1.display();
//   roof2.display();
//   roof3.display();
//   roof4.display();
//   roof5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
  
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,{x:bob2.body.position.x,y:bob2.body.position.y},{x:-20,y:-15})
		
	}
}

