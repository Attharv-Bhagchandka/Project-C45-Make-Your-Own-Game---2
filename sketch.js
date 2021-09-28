var Lander, Shell;
var Ground, Background;
var Target, Bullseye;

function preload(){
  Shell = loadImage("Lander.png");
  Background = loadImage("Bg.jpg");
  Bullseye = loadImage("Target.png")
}

function setup() {
  createCanvas(1200, 400);
  frameRate(100);

  Lander = createSprite(100,50,100,100);
  Lander.addImage(Shell);
  Lander.scale = 0.4;
  rectMode(CENTER);
}

function draw() {
  background(Background);
  fill(12, 249, 225);
  textSize(15);
  text("Land at Less than 10 m/s. Velocity: " + Lander.velocity.y,500,15);

  fill(255);
  textSize(15);
  text("Land Here",580,320);
  
  drawSprites();
}


