const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
const Render=Matter.Render

var engine, world;
var box1,box2,box3,ball;

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,650,20,100);
    box2 = new Box(1140,680,100,20);
    box3 = new Box(1090,650,20,100);
    
    ball = new paper(400,650,50,50);

    ground = new Ground(700,height,1400,20)

    var render=Render.create({
       element: document.body,
       engine:engine,
       options:{
         width: 1200,
         height:700,
         wireframes:false
       }
       
    })
    Engine.run(engine)
    
}

function draw(){
    rectMode (CENTER)
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ball.display();
    ground.display();
}

  function KeyPressed () {
   
   if (keyCode === up_arrow ){
      
      //Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}) 
       Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
   }
}