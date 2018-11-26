//Loops
var size1 = 50;
var size2 = 30;
var mousepos;



function setup(){
  createCanvas (500,500);
 //noLoop();

}
function draw(){

  for (var y=0; y<10; y++){
   for (var x =0; x<10; x++){
     var mousepos = map(mouseX,0,width,0,100); //MOUSEPOSITION BETWEEN THESE POINTS
var mousepos2 = map(mouseX,0,width,0,100);
     fill(99,96,96);
      rect(size1*x, size1*y, size1,size1);//x 0 x50 etc
      //mousepos(mouseX<10,mouseY<10);
  //if mousepos(mouseX,0<10) &&(mouseY,0<10){}
  //  fill (255,0,0);

if (mousepos1 <10) {
  fill(255,0,0);
  x<10;

}

  }
    }
  }
//}
