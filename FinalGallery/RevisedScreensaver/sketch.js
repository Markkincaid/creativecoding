//images from pngimg.com
//moving images learned from https://www.youtube.com/watch?v=GnhVUdMgS4Y
//star generation taken from https://editor.p5js.org/zachwhalen/sketches/Ll6g4jb7-( made by zach whalen.
let pumpkin;
let grass;
let moon;
let counter = 0;
let stars = new Array();
let x = 40;
let y = 0;
let x2 = window.innerWidth;
let y2 = 0;
let goingleft = false;
let cometcounter = 0;
let ghostY = window.innerWidth + 1000;
let goingdown = false;
let wall;
//loads all images;
function preload() {
  pumpkin = loadImage("pumpkin.png");
  grass = loadImage("grass.png");
  moon = loadImage("moon.png");
  comet = loadImage("comet.png");
  ghost = loadImage("ghost.png");
  wall = loadImage("wall-cutout.png");
  scarecrow = loadImage("scarecrow.png");
  house = loadImage("h.png");
}
//sets canvas to length and width of display
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}
//draw function for the canvas.
function draw() {
  //sets background to black
  background(0);
  //generates a new star everytime the counter is evenly divisible by ten.
  if (counter % 10 == 0) {
    stars.push(new Star(random(0, width), random(0, height)));
  }
  //draws the stars on the canvas.
  for (let s = 0; s < stars.length; s++) {
    stars[s].draw();
  }
  //counter for stars 
  counter += 1;
  //counter for comet
  cometcounter += 1;
  //uploading image to canvas with proper width and height.
  image(comet, x2, y2, comet.width / 6, comet.height / 3);
  image(moon, x, y, moon.width / 2 + 100, grass.height / 3);
  image(grass, width-1700, height - 250, grass.width, grass.height - 250);
  image(pumpkin, width - 1325, height - 450, pumpkin.width / 2, pumpkin.height / 2);
  image(ghost, width -800, ghostY, ghost.width / 2, ghost.height / 2);
  image(scarecrow,width-550, height - 600,scarecrow.width,scarecrow.height);
  image(house,width-2200, height - 970,scarecrow.width+500,scarecrow.height+500);
  //loop to draw commet every time the counter is evenly divisible by 400
  if (cometcounter % 400 == 0) {
    image(comet, x2, y2, comet.width / 6, comet.height / 3);
    x2 = window.innerWidth;
    y2 = 0;
  }
  //loops to increment and decrement the ghost's y so it moves up and down.
  if (goingdown == false) {
    ghostY = ghostY - 4;
  }
  if (ghostY >= 1000) {
    goingdown = false;
  }
  if (ghostY <= 450) {
    goingdown = true;
  }
  if (goingdown == true) {
    ghostY = ghostY + 4
  }
  //incrementing the moons x so it moves to the right.
  x = x + 2;
  //spawns moon on the left after it goes off screen on the right to simulate an orbit.
  if (x > window.innerWidth + 100) {
    x = -100;
  }
  //incrementing speeds for the comet.
  x2 = x2 - 50;
  y2 = y2 + 30;
  //image(wall,0,0);
}
//function to create the stars dimensions.
function Star(x, y) {
  this.x = x;
  this.y = y;
  this.see = 'nope';

//function to draw the stars.
this.draw = function() {
  circle(this.x, this.y, 5, 5);
  }
}