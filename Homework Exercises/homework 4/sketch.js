    //squares

    var s = 250;
    function setup(){
      createCanvas(500,500);
    //black background

      //DECLARE SQUARE POSITIONS, SIDES AND START COLOURS
    /*  fill('blue');
    square1 = rect(0,0,55,55);
     fill('red');
    square2 = rect(55,55,55,55);
     fill('yellow');
    square3 = rect(0,55,55,55);
     fill('green');
    square4 = rect(55,0,55,55);*/
    }
    function draw(){ //STARTING TO DO THE FUNCTIONS TO CHANGE COLOURS
        background(0);
    var mousepos = map(mouseX,0,width,0,255); //MOUSEPOSITION BETWEEN THESE POINTS
    var mousepos2 = map(mouseY,0,width,0,255);
    var mousepos3 = map(mouseX,0,width,255,0);
    var mousepos4 = map(mouseY,0,width,255,0);
    //mouse position from 0 to 255 in RGB colours
    fill (255,0,0,mousepos); //THIS COLOUR VALUE WILL FILL THE SQUARE WHEN IT
    rect(0,0,s,s);           //IS AT THESE POSITIONS
    fill (0,255,0,mousepos2)
    rect(s,0,s,s);
    fill (0,0,255,mousepos3);
    rect(0,s,s,s);
    fill (255,255,0,mousepos4);
   rect(s,s,s,s);
    console.log(mousepos); //tells us where the mouse is


//if (mouseX)



}
