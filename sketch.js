const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var points = [
  { x: 400, y: 200 },
  { x: 600, y: 50 },
  { x: 650, y: 300},
  { x: 800, y: 180}
];

stars = [
  { x: 650, y: 200 },
  { x: 700, y: 50 }
];

var bgPosX = 425;
var bgPosY = 235;

function preload(){
  bgImg = loadImage("assets/background.png");
  playerImg = loadImage("./assets/player1.png");
  starImg = loadImage("./assets/star.png");
}

function setup() {
  createCanvas(850, 470);
  engine = Engine.create();
  world = engine.world;

  player = new Player(100, 200, 30, 30, playerImg);

  sling = new Sling(points[0], player.body);

  var mouseObject = Mouse.create(canvas.elt);
  let options = {
    mouse: mouseObject
  };
  var mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);  
}


function draw() {
  background(bgImg);
  Engine.update(engine);

  resetBackground();
  
  sling.display();
  player.display();
  addPoints();
  addStars();
  handleStars();
  for(var i=0; i< points.length; i++){
    drawPoints(i);
    
    points[i].x -= 0.3;
    handlePoints(i);
    
   
  }
}


function drawPoints(i) {
  push();
  stroke("#fff9c4");
  strokeWeight(3);
  ellipseMode(RADIUS);
  fill("#4527a0");
  ellipse(points[i].x, points[i].y, 10, 10);
  pop();
}

function drawStars(i) {
  push();
  imageMode(CENTER);
  image(starImg, stars[i].x, stars[i].y, 30, 30);
  pop();
}




function addPoints() {
  if (points.length < 5) {
    points.push({
      x: random(800, 1150),
      y: random(80, 300),
    });
  }
}

function addStars(){
  if (stars.length < 4) {
    stars.push({
      x: random(800, 1300),
      y: random(50, 300)
    });
  }
}

function handlePoints(i){
  if (points[i].x < 60) {
    points.shift();
  }
}

function handleStars() {
  for (var i = 0; i < stars.length; i++) {
     drawStars(i);
     stars[i].x -= 0.3;
  
    if (stars[i].x < 60) {
      stars.shift();
    }
  }  
}


function resetBackground() {
  push();
  imageMode(CENTER);
  image(bgImg, bgPosX, bgPosY, 1900, 470);
  pop();
 
  bgPosX -= 0.3;

  if (bgPosX < 0) {
    bgPosX = 425;
  }
}

// define function mouseReleased() here






