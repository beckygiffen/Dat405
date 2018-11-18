//Loops
var x;
var y;
var squaresize = 50; //for every squaresize written, we know it is a 50 square
//var mouse1;
/*
var coloursquare; //1=blue,2=green,3=yellow,4=red,5=orange,6=violet,7=pink
var mousepos1;
var mousepos2;
*/

function setup(){
  createCanvas (600,600); //size of canvas
 stroke(2,2,2); //black lines on grid
}
function keyPressed() {
/*  if (key == 'b' || key == 'B') coloursquare=1; loop();//circle
  if (key == 'g' || key == 'G') coloursquare=2; loop(); //triangle
  if (key == 'y' || key == 'Y') coloursquare=3; loop();//squares
  if (key =='r' || key =='R') coloursquare=4;
  if (key =='o'|| key =='O')coloursquare=5;
  if (key== 'v'|| key =='V') coloursquare=6;
  if (key== 'p'|| key =='P')coloursquare=7;
*/
  function draw(){
    //Run the nested loop for x, and y
    for (var y = 2; y < 22; y++){ //y coord 20 squares
      for (var x = 2; x < 22; x++){ //x coord 20 squares
        var mousepos = map(mouseX,2,width,2,102); //MOUSEPOSITION BETWEEN THESE POINTS
       var mousepos2 = map(mouseX,2,width,2,102);
        fill('white');
         rect(squaresize*x, squaresize*y, squaresize,squaresize);//x 0 x50 etc
//
}
}
}
