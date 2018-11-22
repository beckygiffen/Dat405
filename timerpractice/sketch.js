//courseworkfinal
//random letter & shape faller

var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//this is my array to choose the random letter from
var timer = 60;
function setup(){
  createCanvas(594,841); //size of the frame
  frameRate(5);
  text(timer,width/4,height/2);
}

function draw(){
  noFill();
  stroke(random(255,random(255),random(255)));
  textSize((random(200)));
  textFont("American Typewriter");
  fill (random(255),random(255),random(255));
  stroke(random(255,random(255),random(255)));
  noFill();
  ellipse(280,280,500,500);
  noFill();
  stroke(random(255),random(255),random(255));
  var shape1=ellipse(mouseX,mouseY,random(200),random(200));
  var shape2=rect(mouseX,mouseY,50,50);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      text("Stop", width/2, height*0.7);
    }

 }

function mouseClicked(){

  var r=random(0,25);
  fill(random(255),random(255),random(255));
  var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
  text(randomLetter,mouseX-10,mouseY-10,random(600),random(600));

  console.log(r);
}
