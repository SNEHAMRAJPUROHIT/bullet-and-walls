var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
   weight=random(400,1500)  

  bullet= createSprite(50,200,50,50);
  bullet.velocityX=speed;

  bullet.shapeColor=("green");
thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)


}

function draw() {
  background("blue");  

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var deformation=0.5 * weight *speed* speed/22509;
if (deformation>180){
bullet.shapeColor=color("yellow")
wall.shapeColor=color("white")
}
if(deformation<180 && deformation>100)
{
bullet.shapeColor=color("green")
wall.shapeColor=color("white")
}
if (deformation<100)
{
   bullet.shapeColor=color("red")
   wall.shapeColor=color("white")

}
}




  drawSprites();
}