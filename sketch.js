const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var balls = [];
var plinkos=[];
var divisions=[];
var ground;
var rows;


var divisionHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisons(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    ball = new Ball(random(130, 400), 0, 7, random(0, 360));
    balls.push(ball);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

 
  for(var k = 0; k<balls.length;k++){
    balls[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


//rows.display();
 ground.display();

  
}