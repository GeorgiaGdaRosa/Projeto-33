const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bloco1
var bloco2
var ball


function setup() 
{
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;


  bloco1 = Bodies.rectangle(150,300,100,15,{isStatic:true})
  World.add(world,bloco1)

  bloco2 = Bodies.rectangle(250,240,75,75,{isStatic:true})
  World.add(world,bloco2)
  

  ball = Bodies.circle(290,215,50)
  

  botao = createImg("./assets/botao.png")
  botao.size(75,40)
  botao.position(250,340)
  botao.mouseClicked(forcaY)

}

function draw() 
{
  background(51);
  Engine.update(engine);

  rect(bloco1.position.x,bloco1.position.y,100,15)
  rect(bloco2.position.x,bloco2.position.y,75,75)
  ellipse(ball.position.x,ball.position.y,50)

  drawSprites()
}

function forcaY(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.05})
}

 



