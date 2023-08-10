const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;

function setup() {
  canvas = createCanvas(1800,600);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(600, height - 10, width - 100, 100, { isStatic: true });
  World.add(world, ground);

}

function draw() {
  background(255,255,255);

  push();
  fill("brown");
  noStroke();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width - 100, 100);
  pop();

}

