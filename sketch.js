
function preload(){
  bgImage = loadImage("./images/bg.png");
  earthImage = loadImage ("./images/earth.png");
  moonImage = loadImage ("./images/moon.png");
  spacecraftImage = loadImage ("./images/spacecraft.png");
  bulletImage = loadImage ("./images/bullet.png")
}

function setup() 
{
  createCanvas(1800,800);

  backg = createSprite (0,0)
  backg.scale = 5;
  backg.addImage("bgImg", bgImage);

  wall1 = createSprite(900,780,1800,20);

  edges = createEdgeSprites();

  spaceCraft = createSprite(150,200);
  spaceCraft.addImage("spcImg", spacecraftImage);
  spaceCraft.scale = 2.2;
  
  earth = createSprite(windowWidth - 420, windowHeight - 370);
  earth.addImage("earthImg", earthImage);
  earth.scale = 0.7;

  moon = createSprite(windowWidth - 620, windowHeight - 530);
  moon.addImage("moonImg", moonImage);
  moon.scale = 0.4;

}

function draw() {
//making the background infinite
backg.velocityX = -1;

//resetting the background
if (backg.x <= -150){
  backg.x =230;
}

//making spacecraft bounce off edges
spaceCraft.bounceOff(edges);

//making spacecraft move according to mouse
spaceCraft.y = World.mouseY;
spaceCraft.setCollider("circle", 0,0,40);
spaceCraft.debug = true;

createBullet();

drawSprites();
}

/*function movingMoon(){
  radians = 0;
  velocity = 0.05;
  radians += moon.velocity;
  moon.x = moon.x +Math.cos(radians)*100;
  moon.y = moon.y +Math.sin(radians)*100;
}*/
// rotating moon
//rand num
// spacecraft collide

function createBullet(){

 
  //adding velocity and bouncing off functions to the bullets
if (keyWentDown("space")){
  bullet = createSprite ( spaceCraft.x+10,spaceCraft.y,50,50);
  bullet.addImage("bulletImg",bulletImage);
  bullet.depth = spaceCraft.depth;
  spaceCraft.depth = spaceCraft.depth+1;
  bullet.y = spaceCraft.y;
  bullet.x = spaceCraft.x+10;
  bullet.bounceOff(wall1);
  
  bullet.velocityX = random(20,40);
  bullet.velocityY = random(10,20); 
}

}

