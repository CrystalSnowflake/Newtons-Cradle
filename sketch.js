const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var x = 380;
var y = 500;

function preload(){}

function setup(){
	//creating a canvas/base.
	createCanvas(800, 800)

	//making the world
	engine = Engine.create();
	world = engine.world;

	//ground
	roof = new Ground(255, 200, 300, 30);
	//temporary ground
	ground = new Ground(0, 780, 800, 70);

	//the bobs... they are in chronoligical order from left to right
	bob1 = new Bob( x - 100, y); 
	bob2 = new Bob(x - 50, y);
	bob3 = new Bob(x, y);
	bob4 = new Bob(x + 50, y);
	bob5 = new Bob(x + 100, y);
	bob6 = new Bob(x + 150, y);

	//rope1 = new Connect(bob1.body, roof.body, -150);
}

function draw(){
	background(rgb(216, 204, 216))
	Engine.update(engine);

	//displaying the ground class
	roof.display();
	ground.display();
	//displaying the bob class
	bob1.show();
	bob2.show();
	bob3.show();
	bob4.show();
	bob5.show();
	bob6.show();
	//displaying the connections a.k.a. the 'ropes'
	//rope1.display();

	
}

