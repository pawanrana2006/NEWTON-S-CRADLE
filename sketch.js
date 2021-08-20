
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(width/2,height/4,width/7,20);
	bobDiameter=40;
	startBobPositionX=width/2;
		startBobPositionY=height/4+500;
		bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
		bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
		bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
		bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
		bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
		//Create a Ground
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(230);
	roofObject.display();
  
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
  
	function keyPressed() {
		if (keyCode === UP_ARROW) {
  
		  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  
		}
  }
  
  
  function drawLine(constraint)
  {
	  bobBodyPosition=constraint.bodyA.position
	  roofBodyPosition=constraint.bodyB.position
  
	  roofBodyOffset=constraint.pointB;
	  
	  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
  }
  
  
  drawSprites();
 
}



