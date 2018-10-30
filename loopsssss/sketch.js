//Loops
let size = 30;

function setup(){
  createCanvas (500,500);
  noLoop();

}

function draw(){
  fill(215,200,170);
  for (let y =0; y<10; y++){
    for (let x = 0; x<10; x++){
      rect(size*x, size*y, size,size);
      console.log("x: "+x+", y: "+y);
    }
  }ggkhghj
}
