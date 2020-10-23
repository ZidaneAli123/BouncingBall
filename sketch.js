const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world , ground , ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200 , 390 , 400 , 20 , ground_options);
  World.add(world ,ground);
  
  var ball_options = {
    restitution:1.0
  }
  ball = Bodies.circle(200 , 100 , 50 , ball_options);
  World.add(world ,ball);
  ball.debug = true;
}


function draw() {
  background(0 , 0 , 0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x , ground.position.y , 400 , 20);
  
  ellipse(RADIUS);
  ellipse(ball.position.x , ball.position.y , 50 );
  
  
  
  
  
  
  
  
  
  drawSprites();

}