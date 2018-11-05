//Loops
//var bgsqr = 50; //BACKGROUND GRID
//var user = 50; //USER
let size1 = 50;
function setup(){
  createCanvas (500,500);

function draw(){

  for (let y=0; y<10; y++){
   for (let x =0; x<10; x++){
     fill("brown");
      rect(size1*x, size1*y, size1,size1);//x 0 x50 etc
    }

}
}
}
