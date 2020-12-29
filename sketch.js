
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof,bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,20);

	bobObj1 = new Bob(290,450,50);
	bobObj2 = new Bob(340,450,50);
	bobObj3 = new Bob(390,450,50);
	bobObj4 = new Bob(440,450,50);
	bobObj5 = new Bob(490,450,50);

	var options = {
		bodyA: roof.body,
		bodyB: bobObj1.body,
		stiffness: 0.04,
		length: 250
	}

	 rope1 = Constraint.create(options);
	 World.add(world,rope1);

	 var options = {
		bodyA: roof.body,
		bodyB: bobObj1.body,
		stiffness: 0.04,
		length: 250
	 }
	 rope1 = Constraint.create(options);
	 World.add(world,rope1);

	 var option = {
		bodyA: roof.body,
		bodyB: bobObj2.body,
		stiffness: 0.04,
		length: 240
	 }
	 rope2 = Constraint.create(option);
	 World.add(world,rope2);
  
	 var Option = {
		bodyA: roof.body,
		bodyB: bobObj3.body,
		stiffness: 0.04,
		length: 235
	 }
	 rope3 = Constraint.create(Option);
	 World.add(world,rope3);

	 var OPTION = {
		bodyA: roof.body,
		bodyB: bobObj4.body,
		stiffness: 0.04,
		length: 240,
		
	 }
	 rope4 = Constraint.create(OPTION);
	 World.add(world,rope4);

	 var OPTIONS = {
		bodyA: roof.body,
		bodyB: bobObj5.body,
		stiffness: 1,
		length: 250
	 }
	 rope5 = Constraint.create(OPTIONS);
	 World.add(world,rope5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175,175,175);
  roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  
  drawSprites();
}

 function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-80,y:-50});

	}
}

