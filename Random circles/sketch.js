//RANDOMCIRCLESBABES
let size;
let x;
let y;

function setup() {
  createCanvas(500, 500);
  frameRate(15);
  noStroke();

}

function draw() {
  //Run the nested loop for x, and y
size = random(100,100);
x = random (width);
y = random (height);
customShape(x,y,size);

    }


function customShape(x,y,size) {

stroke(0);
strokeWeight(1);
noFill();
ellipse(x,y,size,size);

strokeWeight(5);
fill('green');
ellipse(x,y,size/2,size/2);

strokeWeight(3);
fill('blue');
rect(x,y,size/4, size/4);

strokeWeight(2);
triangle(x,y,size/8, size/8);

strokeWeight(1);
fill('yellow');
ellipse(x,y,size/10, size/10);

strokeWeight(1);
fill('white');
rect(x,y,size/12, size/12);






    }
