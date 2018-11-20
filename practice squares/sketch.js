var newcol= 0;
var x;
var y;
var sqsz = 40;
//var coords[100]= x0 < x99, y0 <y99;

//var clicker;


function setup(){
createCanvas(400,400);
}

function draw() {
//  fill(newcol);

  for (let y=0; y<10; y++){
   for (let x =0; x<10; x++){
     stroke('0');
     fill(newcol);
     rect(sqsz*x, sqsz*y,sqsz,sqsz);//x 0 x50 etc
   }

}
}

function mousePressed() {
  if(mouseX,mouseY,sqsz,sqsz,newcol==100) {
  //rect(mouseX,mouseY,sqsz,sqsz);
  }
   else {
    newcol = 30;

}
}
