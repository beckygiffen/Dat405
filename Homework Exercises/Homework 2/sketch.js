  //Create three global scope variables for position and size
  var circlez; //circle variable
  var squarez; //square variable
  var trigl; //triangle variable
  var statement; //statements
  var xRandom; //x co ordinates
  var yRandom; //y coordinates
  var sizeRandom = 500; //upto size of shapes

  function setup() {
    createCanvas(1000,1000);
    //background('random');
    frameRate(10); //Drawing speed 10 fps
    noStroke();

  }
  function keyPressed() {
    if (key == 'd' || key == 'D') statement=1; background('blank'); loop();//circle
    if (key == 'a' || key == 'A') statement=2; background('blank'); loop(); //triangle
    if (key == 's' || key == 'S') statement=3; background('blank'); loop();//squares
    //console.log("x: " +xPlusOne+ ", y: " +yPlusOne);
  }

  function draw() {
    if (statement==1) circlez(random(500),random(500),random(500)); //random sie
    else if (statement==2) trigl(random(500),random(500));
    else if (statement==3) squarez(random(500),random(500),random(500));
    xRandom = random (width);
    yRandom = random (height);
    sizeRandom = random(100, 300);

  }

  //Create a custom shape. Use input parameters for position and size
  function circlez(x, y, size){
    //Outside circle - thin line, with a blue-ish fill

    stroke(134, 151, 178);
    strokeWeight(1);
    fill(239, 245, 255);
    ellipse(x, y, size, size);

    //Next circle is smaller, with thicker stroke with a pink-ish color
    strokeWeight(5);
    stroke(255, 207, 200);
    noFill();
    ellipse(x, y, size/1.2, size/1.2);

    //Next circle is smaller, with thin stroke and gray-ish color
    strokeWeight(1);
    stroke(177, 178, 174);
    ellipse(x, y, size/1.4, size/1.4);

    //Next circle is smaller, with thicker stroke with a blue-grey color
    stroke(101, 141, 166);
    strokeWeight(5);
    ellipse(x, y, size/2, size/2);

    //Next circle is smaller, with a green-ish fill, and no stroke
    noStroke();
    fill(196, 204, 171);
    ellipse(x, y, size/4, size/4);
  }

  //square shapes
  function  squarez(x, y, size){
    //Outside circle - thin line, with a blue-ish fill
    stroke(134, 151, 178);
    strokeWeight(1);
    fill(random(255),random(255),random(255));
    rect(x, y, size, size);
   //smaller square
    strokeWeight(5);
    stroke(random(255),random(255),random(255));
    noFill();
    rect(x, y, size, size);

    //smaller square again random colours, quarter size of previous
    strokeWeight(1);
    stroke(random(255),random(255),random(255));
    rect(x/4, y/4, size, size);

  }
  //triangle
  function trigl(x, y){
    //var xCoordinate = random(500);
    //var yCoordinate = random(500);
    stroke(random(255),random(255),random(255));
    strokeWeight(1);
    fill(random(255),random(255),random(255));
    triangle(x+random(500), y+random(500), x+random(500), y+random(500), x+random(500), y+random(500));


  }
