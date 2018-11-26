//courseworkfinal
//random letter & shape faller
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//this is my array to choose the random letter from
var counter = 0; //Counting in seconds
var countdown = 20; //Counting down variable, start at 10
//var interval = setInterval();
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

function draw(){ //drawing our programme

  stroke(random(255,random(255),random(255))); //random stroke colours in rgb colour scheme
  textSize((random(200))); //text size random up to 200pts
  textFont("American Typewriter"); //declaring our font as american typewriter
  fill (random(255),random(255),random(255)); //filling font in random rgb colours
  stroke(random(255,random(255),random(255))); //outline of text is random rgb cololurs
  noFill();//no colour in our large circle or smaller circles or squares
  ellipse(280,280,500,500); //large circle stays the same size and same position constantly
  stroke(random(255),random(255),random(255));
  var shape1=ellipse(mouseX,mouseY,random(200),random(200)); //first shape is a circle at the point of the mouse position, random size
  var shape2=rect(mouseX,mouseY,50,50);//second variable shape is a square, which appears on mouse position size 50,50
}

function mouseClicked(){ //what happens when the mouse is clicked
  var r=random(0,25); //variable for the random letters of the alphabetarray, assigned 0 to 25
  fill(random(255),random(255),random(255)); //fill with random rgb colours
  var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)]; // when clicked, a random letter appears out of alphabet
  text(randomLetter,mouseX-10,mouseY-10,random(594),random(841)); //it is in text, slightly off centre from the mouseposition, and can be anywhere between these points
}
