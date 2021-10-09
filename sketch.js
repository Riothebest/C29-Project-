const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var myengine;
var myworld;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  createCanvas(1000, 500);
  myengine = Engine.create();
  myworld = myengine.world;
  frameRate(80);

  ground = new Base(0, height - 10, 2000, 20);
  leftWall = new Base(0, height / 2 + 50, 250, 100 );
  rightWall = new Base(width , height / 2 + 50, 250,100);

  //bridge = new Base(15, { x: width / 2 - 400, y: height / 2});
  //jointPoint = new Base(width - 600, height / 2 + 10, 40, 20);

  bridge = new Bridge(20,  {x: width -60, y: 250});
  jointPoint = new Base(100,250, 200, 20);

  //bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
  //jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20);

  //bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2});
  //jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20);
  jointLink = new Link(bridge, jointPoint);

  
  Composite.add(bridge.body, jointPoint);

  //Matter.Composite.add(jointPoint);
  
  //Matter.Composite.add(jointPoint, bridge.body);
  
  //Matter.Composite.add(bridge.body);



  for (var i = 0; i <= 5; i++) {
    var x = random(width / 2 - 200, width / 2 );
    var y = random(-10, 100);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(myengine);

  push();
  fill("red");
 
  bridge.show();
  pop();
  fill("lightgreen")
  leftWall.show();
  rightWall.show();

  for (var stone of stones) {
    fill("pink");
    stone.show();
  }
}
