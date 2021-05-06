var movingrectangle 
var rectangle  
 

function setup() {
  createCanvas(800,400);
  movingrectangle =createSprite(400, 200, 100, 100);
  rectangle =createSprite(200,200,70,70)
}

function draw() {
  background("blue");  
  drawSprites();
  movingrectangle.y= mouseY;
  movingrectangle.x= mouseX;

  console.log(movingrectangle.x - rectangle.x);
  console.log(movingrectangle.width/2 + rectangle.width/2);


if (movingrectangle.x - rectangle.x < movingrectangle.width/2 + rectangle.width/2 &&
  rectangle.x - movingrectangle.x < movingrectangle.width/2 + rectangle.width/2 &&
  movingrectangle.y - rectangle.y < movingrectangle.height/2 + rectangle.height/2 &&
  rectangle.y - movingrectangle.y < movingrectangle.height/2 + rectangle.height/2) {
  
  
  
    movingrectangle.shapeColor="red";
  rectangle.shapeColor="red"
 }
 else
 {
  movingrectangle.shapeColor="black";
  rectangle.shapeColor="black"
 }

  
}