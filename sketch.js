//Create variables here
var dog, happyDog; 
var database, foodS, foodStock;
var dogImg, happyDogImg;
function preload()
{
	//load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,350,20,20);
  dog.scale = 0.2;
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

}
function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  }

  drawSprites();
  //add styles here
  textSize = 3;
  fill("black");
  stroke(2);
  text("Food Stock : " + count,20,30);

//}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}