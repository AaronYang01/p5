let score= 0;
let x= [];
let y= [];
let timer;
let timeElapsed
let time= 0;
let loseScreen=false;
let winScreen=false;

function preload(){
  mario =loadImage("js/mario.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  for(let i =0; i<10; i++){
    x.push(random(windowWidth));
    y.push(random(windowHeight));
  }
  imageMode(CENTER)

  timer = millis() - 1000;

}

function draw(){
  background(255)
  if(mouseIsPressed==true){

  //  print('+1')
  }


   timeElapsed = millis() - timer;
  //console.log(timeElapsed);

  if (timeElapsed > 1000) {
    time++;
    console.log(time);
    timer = millis();
  }
  text(time, windowWidth/2, 50)


  for(var i = 0; i < x.length; i++){
    ellipse(x[i], y[i], 60, 60);
    if(dist(mouseX, mouseY, x[i], y[i]) < 30){
      x.splice(i, 1);
      y.splice(i, 1);

        score++;
      image(mario, 400, 400, 150,200)
    }
  }
  textSize(50);
  fill('black')


  if (score==10) {
    background(0,0,0)
    fill (255,255,255)
      text("You win!", width/2, height/2);
      winScreen()
  }
  else {
      text(score, width/2, height/2);
  }
  if(time >= 10){
    background(0,0,0)
    fill (255,255,255)
          text("You lose!", width/2, height/2);
  }

  function loseScreen(){
    time=0;
    background(0,0,0)
    fill (255,255,255)
          text("You lose!", width/2, height/2);
  }

  function winScreen(){
  time=0;
  background(0,0,0)
  fill (255,255,255)
        text("You win!", width/2, height/2);
  }

}
