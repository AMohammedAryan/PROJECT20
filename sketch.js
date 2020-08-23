var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(40, 150);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(800, 200, 60, 800);

  car.velocityX = speed;
}

function draw() {
  background("white");


  if(isTouching()){
    deformation = 0.5 * weight * speed * speed / 22500
    car.velocityX = 0;

    if(deformation < 100){
      car.shapeColor = "green";
    } 
    else if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car.shapeColor = "red";
    }
  }
  
  drawSprites();
}

function isTouching(){
  if(wall.x - car.x < wall.width/2 + car.width/2){
     return true;
  }
  else{
     return false;
  }
}
