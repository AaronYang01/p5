function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  if(keyIsPressed==true)
  background(0,0,0);
  else{
    background (255,0,0);
  }
  fill (0,0,0);
  ellipse(150,150,150,150);
  if(mouseIsPressed==true)
  {fill ('green');}
  else{
    fill ("blue");
  }

  rect(400,250,150,150);
  rect(800,250,150,150);

  fill(162,82,45)
rect(450,400,50,1000)
rect(850,400,50,1000)




}
