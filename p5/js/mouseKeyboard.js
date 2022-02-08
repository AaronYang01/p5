function setup() {
  createCanvas(windowWidth, windowHeight);
  background(168, 222, 250);
  rectMode(CENTER)
  print(windowWidth);
}

//stuff in draw runs over and over (60fps)
//only make 1 draw function
function draw() {

  if(keyIsPressed == true){
    background(2, 35, 77);
  }
  else{
  background(168, 222, 250);
}

  fill(168, 250, 214);
  stroke(168, 250, 214);
  triangle(300,200,400,100,500,200);
  triangle(200,350,400,180,600,350);
  triangle(100,550,400,320,700,550);
  stroke(150, 148, 143);
  fill(150, 148, 143);
  rect(400,650,70,200);




 if(mouseIsPressed == true){
  stroke(255, 85, 162);
  strokeWeight(5);
  fill(248,185, 197);
  circle(236,480,22);
  circle(460,386,20);
  circle(445,253,26);
  circle(365,490,25);
  stroke(255, 122, 17);
  fill(255, 205, 120);
  circle(300,300,22);
  circle(420,186,20);
  circle(545,453,25);
}
  else{
    stroke(255, 175, 104);
      fill(255, 175, 104);
    if(mouseX<windowWidth/2){
      circle(30,20,300);}
    else{
        circle(1080,20,300);
    }

}
