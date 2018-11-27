//courseworkfinal
//random letters and shapes
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//this is my array to choose the random letter from
var counter = 0; //Counting in seconds
var countdown = 20; //Counting down variable, start at 10
function setup(){
  createCanvas(594,841); //size of the frame
  frameRate(5);//frame rate
  var timer=select('#timer'); //using a timer which is put into the index
  timer.html(countdown-counter); //starting from 10,going down 1 second at a time to 0
  var interval =  setInterval(timeIt, 1000); //1000 is the amount of miliseconds in 1 sec
  function timeIt(){ //timing function
    counter++; //counting a second at a time
    timer.html(countdown-counter); //counting down from 10, by 1 each time
    if (counter ==countdown){//once we get to zero the timer stops
      clearInterval(interval);//stops timer
    }
  }
}
window.onload = setupRefresh;//when we refresh
function setupRefresh() { //setup to refresh the page
  setTimeout("refreshPage();", 20000); // when timer gets to 10000miliseconds
}                                    //the page refreshes
function refreshPage() { //function name refresh page
  window.location = location.href; //refreshes the window
}

function trigl(x, y){ //creating the triangles which hover when the mouse moves
  stroke(random(255),random(255),random(255));//random colours of stroke
  strokeWeight(1);//stroke weight is constantly at 1pt
  fill(random(255),random(255),random(255));//random rgb colours
  triangle(x, y, x+random(100), y+random(100), x+random(100), y+random(100));//mouse positions

}
function draw(){ //drawing our programme
  stroke(random(255,random(255),random(255))); //random stroke colours in rgb colour scheme
  textSize((random(200))); //text size random up to 200pts
  textFont("American Typewriter"); //declaring our font as american typewriter
  fill (random(255),random(255),random(255),random(100)); //filling circles in random rgb colours with low opacity
  stroke(random(255,random(255),random(255))); //outline of text is random rgb cololurs
  ellipse(width/2,height/2,random(500),random(500)); //circle same position but random sizes
  trigl(mouseX,mouseY,random(50),random(50));//triangles appear where the mouse hovers over
}
function mouseClicked(){ //what happens when the mouse is clicked
  var r=random(0,25); //variable for the random letters of the alphabetarray, assigned 0 to 25
  fill(random(255),random(255),random(255)); //fill with random rgb colours
  var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)]; // when clicked, a random letter appears out of alphabet
  text(randomLetter,mouseX-10,mouseY-10,random(594),random(841)); //it is in text, slightly off centre from the mouseposition, and can be anywhere between these points
}
