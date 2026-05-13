let jengaImg;

function preload() {
  jengaImg = loadImage("assets/images/jenga.png");
}

function setup() {
  createCanvas(800, 600);

  // background
  background(200, 170, 120);

  // text
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("Jenga Tower", width / 2, 70);

  // image
  image(jengaImg, 250, 120, 300, 300);

  // shape
  fill(139, 69, 19);
  rect(100, 500, 600, 50);
}

function draw() {

}