  var backgroundimg
  var sleep
  var brush
  var gym
  var eat
  var drink
  var move



function preload(){
  backgroundimg = loadImage("images/iss.png")
  brush = loadAnimation("images/brush.png")
  sleep = loadAnimation("images/sleep.png")
  gym = loadAnimation("images/gym21.png","images/gym22.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink1.png")
  move= loadAnimation("images/move.png","images/move1.png")
}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255);
  text("Up Arrow = brushing",30,30)
  text("down Arrow = eating",30,60) 
  text("space = gym",30,90)
  text("left arrow = moving",30,120)  
  text(" right Arrow = sleeping",30,30) 
  text("Up Arrow & down arrow= drinking",30,30) 
  drawSprites();
}