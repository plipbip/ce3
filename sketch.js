var thickness , wall;
var bullet,speed, weight;


function setup() {
  createCanvas(1200,400);
  bullet = createSprite(50 , 200 , 50 , 50 );

  wall=createSprite(1200,200,thickness,height/2);

speed=random(223,321)
weight=random(30,52);
thickness=random(22,83);
zenia.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  drawSprites();
}

function hasCollieded(lbullet, lwall)
{
    bulletRightEdge=lbuller.x +lbuller.width;
    wallLeftEdge=lwasl.x;
    if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false;
    
    if(hasCollieded(bullet, wall))
    {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
     
    if(damage>10)
    {

           wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
        wall.shapeColor=color(0,255,0);
    }

    }




}



