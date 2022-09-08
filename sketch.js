
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");

  
  
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x = box.x-4
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.y = box.y-4
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y = box.y+4
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.x = box.x+4

  
  
  }
  drawSprites();
  }
