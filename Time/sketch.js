let img;
let _text;
let pg;

function preload() {
  pg = createGraphics(2000, 2000);
  galaxy = loadImage('space.jpg');
  img = loadImage('earth.jpg');
  earthIMG = loadImage('2k_earth_daymap.jpg');
  moonIMG = loadImage('moon.jpg');
}

function setup() {
  createCanvas(1920, 1080, WEBGL);
}

function draw() {
  background(0);
  pg.fill(0, 255, 0 );
  pg.background(galaxy);
  pg.text(hour() + ":" + minute() + ":" + second(), 250, 500);
  pg.textSize(250);
  pg.textFont('Helvetica');
  texture(pg);
  plane(1920, 1080);

  translate(100, 100, 200);
  translate(-340, -100, 110);
  if (hour() >= 6 && hour() < 18) {
    texture(earthIMG);
  } else {
    texture(img);
  }
  rotateY(millis() / 1000);
  let earth = sphere(150);

  rotateY(millis() / 100000);
  ambientLight(5);
  directionalLight(255, 255, 255, 100, 0, 0);
  noStroke();
  texture(moonIMG);
  translate(300, -100, 100);
  rotateY(millis() / 5000);
  let moon = sphere(50);
}