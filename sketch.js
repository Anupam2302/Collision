var fixed,moving;

function setup() {
  createCanvas(800,400);

 fixed=createSprite(400, 200, 40, 50);
 fixed.shapeColor="yellow";
 fixed.debug=true;

moving=createSprite(400, 200, 70, 50);
 moving.shapeColor="yellow";
 moving.debug=true;
}

function draw() {
  background("blue"); 
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

if(fixed.x-moving.x<moving.width/2+fixed.width/2 &&
   moving.x-fixed.x<moving.width/2+fixed.width/2 &&
   fixed.y-moving.y<moving.height/2+fixed.height/2 &&
   moving.y-fixed.y<moving.height/2+fixed.height/2 ){
 moving.shapeColor="red";
 fixed.shapeColor="red";
}
else{
  moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
}

  drawSprites();
}