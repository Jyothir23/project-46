var canvas;
var athlete1_img;
var athlete2_img;
var reset_img;
var track_img;
var bgimg
var form;

function preload() {
  athlete1_img=loadImage("assets/Athlete1.png")
  athlete2_img=loadImage("assets/Athlete2.png")
  reset_img=loadImage("assets/reset.png")
  track_img=loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("white");
  image(track_img, 0, -height * 5, width, height * 6);

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
