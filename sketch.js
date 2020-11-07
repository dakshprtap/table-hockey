var playerPaddle,disk,computerpaddle,computerscore,gamescore,gameState;
var line1,line2,line3,line4
var playerGoal,computerGoal;


function setup(){
createCanvas(400,400);

disk = createSprite(200,200,20,20);
 playerPaddle = createSprite(200,320,40,5);
 computerpaddle = createSprite(200,80,40,5);
 playergoal = createSprite(200,350,75,20);
 computergoal = createSprite(200,50,75,20);
 line1 = createSprite(200,22,400,7);
 line2 = createSprite(20,200,7,400);
 line3 = createSprite(200,380,400,7);
 line4 = createSprite(380,200,7,400);


}

function draw(){
background("lime");

createEdgeSprites();
edges = createEdgeSprites([0]);
edges = createEdgeSprites([1]);
edges = createEdgeSprites([2]);
edges = createEdgeSprites([3]);

disk.bounceOff(playerPaddle);
disk.bounceOff(computerpaddle);

playergoal.shapeColor = ("YELLOW");
computergoal.shapeColor = ("yellow");
disk.shapeColor = ("white");

disk.velocityX = 0;
disk.velocityY = -3;

if(keyDown("RIGHT_ARROW")){
  playerPaddle.velocityX = 5;
  playerPaddle.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  playerPaddle.velocityX = -5;
  playerPaddle.velocityY = 0;
}



drawSprites();
}


