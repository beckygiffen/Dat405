//Loops
let size1 = 50;
let size2 = 30;


function setup(){
  createCanvas (500,500);
 noLoop();

}
function draw(){

  for (let y=0; y<10; y++){
   for (let x =0; x<10; x++){
     fill("white");
     strokeWeight("1");
      rect(size1*x, size1*y, size1,size1);//x 0 x50 etc
    }
}
