//courseworkfinal
//random word generator

var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var randomLetter = alphabet[(random(25))]; //a random letter
//var mousepos; // the mouse position

//var r=random(0,25);
//var randomLetter = alphabet[r];
function setup(){
  createCanvas(594,841);
  frameRate(10);

}

function draw(){

//var randomLetter = alphabet[0];
//var r=random(0,25);
//var randomLetter = alphabet[r];
//var mousepos = map(mouseX,0,width,0,600);
//text(mousepos, (random(26)));
noFill();
stroke(random(255,random(255),random(255)));
//var shape1=ellipse(mouseX,mouseY,random(200),random(200));
//var shape2=rect(mouseX,mouseY,50,50);
noFill();
strokeWeight(random(0,20));
ellipse(280,280,500,500);
noStroke();
  textSize((random(200)));
//  rotate(PI/2.0);
  textFont("American Typewriter");
  fill (random(255),random(255),random(255));

 //randomLetter=((random(600),random(600),alphabet[(random[25])]));
}

function mouseClicked(){
  //background(random(255),random(255),random(255));
  noFill();
  stroke(random(255),random(255),random(255));
  var shape1=ellipse(mouseX,mouseY,random(200),random(200));
  var shape2=rect(mouseX,mouseY,50,50);
  //var shape1=ellipse(mouseX,mouseY,random(200),random(200));

  var r=random(0,25);
  //noFill();
//ellipse(mouseX,mouseY,random(60),random(60));
fill(random(255),random(255),random(255));
  var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
  text(randomLetter,mouseX-10,mouseY-10,random(600),random(600));


  //noFill();
  //ellipse(mouseX,mouseY,random(60),random(60));
  //background('blank');

console.log(r);
}
