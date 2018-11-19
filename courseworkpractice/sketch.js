//virtual lego
var x;
var y;
var squaresize = 50; //for every squaresize written, we know it is a 50 square
//var coloursquare; //0=blue,1=green,2=yellow,4=red,5=orange,6=violet,7=pink



function setup(){
  createCanvas (600,600); //size of canvas
 stroke(2,2,2); //black lines on grid
 rectMode(CENTER);
 for (y = 2; y < 22; y++){ //y coord 20 squares
   for (x = 2; x < 22; x++){ //x coord 20 squares
     var mousepos1 = map(mouseX,0,width,0,100); //MOUSEPOSITION BETWEEN THESE POINTS
    var mousepos2 = map(mouseX,0,width,0,100);
     fill('white');
      rect(squaresize*x, squaresize*y, squaresize,squaresize);//x 0 x50 etc
}
}
}


/*
function keyPressed() {
  if (key == 'b' || key == 'B') coloursquare=0;
  if (key == 'g' || key == 'G') coloursquare=1; loop();
  if (key == 'y' || key == 'Y') coloursquare=2; loop();
  if (key =='r' || key =='R') coloursquare=3;
  if (key =='o'|| key =='O')coloursquare=4;
  if (key== 'v'|| key =='V') coloursquare=5;
  if (key== 'p'|| key =='P')coloursquare=6;
*/





  function draw(){
    //Run the nested loop for x, and y, THIS IS TO DRAW THE GRID
  /*  for (var y = 2; y < 22; y++){ //y coord 20 squares
      for (var x = 2; x < 22; x++){ //x coord 20 squares
        var mousepos1 = map(mouseX,2,width,2,102); //MOUSEPOSITION BETWEEN THESE POINTS
       var mousepos2 = map(mouseX,2,width,2,102);
        fill('white');
         rect(squaresize*x, squaresize*y, squaresize,squaresize);//x 0 x50 etc
         */

        //   fill('blue');
          // rect(mouseX,mouseY,squaresize,squaresize);


//
}
function mouseClicked(){
/*if (mouseX(2<102) && mouseY(2<102));*/

fill ('blue');
rect(mouseX,mouseY,squaresize-1,squaresize-1);
}
