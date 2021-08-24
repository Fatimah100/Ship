var ship,ship_sailing,edges;
var seaImage;
var sea




function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  ship=createSprite(130,200,30,30);
  sea.addImage(seaImg);
  sea.velocityX=-2;
  sea.scale=0.3
  ship.addAnimation("sailing",ship_sailing);
  edges = createEdgeSprites();
  ship.scale = 0.5;
  ship.x = 50
 
}

function draw() {
  background("blue");
  console.log(ship.y);
  if(sea.x < 0){
    sea.x=width/2;
    }
    ship.velocityY = ship.velocityY + 0.5;
    ship.collide(sea)
    drawSprites();
}