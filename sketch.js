var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
fixedrect = createSprite(400, 200, 50, 50);
fixedrect.shapeColor = "green";
movingrect = createSprite(200,400,80,30);
movingrect.shapeColor = "green";
}
function draw() {
  background(0,0,0);  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  //console.log(movingrect.x-fixedrect.x);
  if (movingrect.x-fixedrect.x < fixedrect.width/2+ movingrect.width/2 //left to right
    && fixedrect.x - movingrect.x < fixedrect.width/2+ movingrect.width/2 //right to left
    && movingrect.y-fixedrect.y < fixedrect.width/2+ movingrect.width/2 //up to down
    && fixedrect.y - movingrect.y < fixedrect.width/2+ movingrect.width/2 //down to up
     ) {

    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
    
  }
  else {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
 
  drawSprites();
}
