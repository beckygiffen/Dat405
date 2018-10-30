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
     fill("brown");
      rect(size1*x, size1*y, size1,size1);
    }

      //small squares

  for (let y=0; y<10; y++){
    for (let x =0; x<10; x++){
      fill(random(255),random(255),random(255));
      rect (size1*x+10, size1*y+10, size2, size2);


            //console.log("x: "+x+", y: "+y);





    }
  }
}
}
