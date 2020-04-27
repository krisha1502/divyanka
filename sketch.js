
var r1,r2;

function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 100, 50, 100);
  r2=createSprite(400, 300, 100, 50);
  r1.shapeColor="green";
  r2.shapeColor="green";
  r2.velocityY=-3;
  r1.velocityY=3;
  
}

function draw() {
  background(0); 
  if(r1.x-r2.x<r1.width/2+r2.width/2
    &&r2.x-r1.x<r2.width/2+r1.width/2){
   r1.velocityX=r1.velocityX*-1;
   r2.velocityX=r2.velocityX*-1;
  }
  if(r1.y-r2.y<r2.height/2+r1.height/2
    &&r2.y-r1.y<r2.height/2+r1.height/2){
      r1.velocityY=r1.velocityY*-1;
      r2.velocityY=r2.velocityY*-1;
    }
  drawSprites();
}