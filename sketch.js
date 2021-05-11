
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var obstacles,banana;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  
  ground=createSprite(300,250,600,5)
  ground.velocityX=-8
   
 
  
  monkey=createSprite(100,210,20,40)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.13
   monkey.velocityY=5
   
 
   obstaclesGroup= new Group();
  bananaGroup=new Group();

  
}


function draw() {
  background("cyan")
  drawSprites()
  
 
  var score=0
  
   monkey.collide(ground)
  
  spawnObstacles()
  spawnBanana()
  
  if (ground.x<0){
     ground.x=ground.width/2;
  }
   
  
  if (keyDown("space")&&monkey.y>205){
   
   monkey.velocityY=-12 
     
  }
 monkey.velocityY=monkey.velocityY+0.45
 
var    survivalTime=0;
 stroke("black")
  textSize(30)
  fill("black")
  text("score:"+score,450,50)
  
 
  stroke("black")
  textSize(30)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)

  
}
function spawnObstacles(){
  if(frameCount % 300===0){
  obstacles=createSprite(550,222,50,40)
    obstacles.addImage(obstacleImage)
    obstacles.scale=0.13
  obstacles.velocityX=-10
    obstacles.lifetime=60
    
    obstaclesGroup.add(obstacles)
  }
  
}

function spawnBanana(){
  if (frameCount % 80===0){
  
banana=createSprite(550,Math.round(random(60,110)),20,20)
 banana.velocityX=-10
 banana.addImage(bananaImage)
    banana.scale=0.12
  banana.lifetime=60
    
  bananaGroup.add(banana)
}
    
  
}





