// press keys ("a-z", "A-Z", ';', '/', '.', ',') for
// a bunch of colored squares to show up
let display_text = true;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(40);
  textAlign(CENTER);
  fill("#ffffff");
  stroke(0.5,"#ffffff");
  background(0);
  text("Type to Start Drawing", width/2, height/2);
}

function keyTyped(){
  
  //red
  if(display_text == true){
    background(0);
    display_text = false;
    
  }
  
  var sq = height/10;
  if (key === 'q' || key === 'Q'){
    fill(random(200, 255), random(0, 50), random(0, 50));
    rect(random(0, width/10), random(0,height/3), sq, sq);
  }
  if (key === 'a' || key === 'A'){
    fill(random(155, 205), random(0, 50), random(0, 50));
    rect(random(0 , width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'z' || key === 'Z'){
    fill(random(105, 155), random(0, 50), random(0, 50));
    rect(random(0 , width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  //orange
  if (key === 'w' || key === 'W'){
    fill(random(200, 255), random(105, 205), random(0, 50));
    rect(random(width/10 , 2*width/10), random(0,height/3 +sq), sq, sq);
  }
  if (key === 's'|| key === 'S'){
    fill(random(155, 205), random(55, 105), random(0, 50));
    rect(random(width/10 , 2*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'x'|| key === 'X'){
    fill(random(105, 155), random(55, 105), random(0, 50));
    rect(random(width/10 , 2*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  // yellow green
  if (key === 'e'|| key === 'E'){
    fill(random(225, 255), random(225, 255), 0);
    rect(random(2*width/10 , 3*width/10), random(0,height/3 +sq), sq, sq);
  }
  if (key === 'd'|| key === 'D'){
    fill(random(100, 225), random(100, 175), 0);
    rect(random(2*width/10 , 3*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'c'|| key === 'C'){
    fill(random(105, 155), random(105, 105), random(0, 50));
    rect(random(2*width/10 , 3*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  // green
  if (key === 'r'|| key === 'R'){
    fill(random(0, 50), random(205, 255), random(0, 50));
    rect(random(3*width/10 , 4*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'f' || key === 'F'){
    fill(random(0, 50), random(155, 205), random(0, 50));
    rect(random(3*width/10 , 4*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'v' || key === 'V'){
    fill(random(0, 50), random(105, 155), random(0, 50));
    rect(random(3*width/10 , 4*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  //blue-green
  if (key === 't'|| key === 'T'){
    fill(random(0, 50), random(200, 255), random(205, 255));
    rect(random(4*width/10 , 5*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'g'|| key === 'G'){
    fill(random(0, 50), random(155, 205), random(155, 205));
    rect(random(4*width/10 , 5*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'b'|| key === 'B'){
    fill(random(0, 50), random(105, 155), random(105, 155));
    rect(random(4*width/10 , 5*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  //blue
  if (key === 'y'|| key === 'Y'){
    fill(random(0, 50), random(0, 50), random(205, 255));
    rect(random(5*width/10 , 6*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'h'|| key === 'H'){
    fill(random(0, 50), random(0, 50), random(155, 205));
    rect(random(5*width/10 , 6*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'n'|| key === 'N'){
    fill(random(0, 50), random(0, 50), random(105, 155));
    rect(random(5*width/10 , 6*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  // blue purple
  if (key === 'u'|| key === 'U'){
    fill(random(155, 205), random(0, 50), random(205, 255));
    rect(random(6*width/10 , 7*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'j'|| key === 'J'){
    fill(random(105, 155), random(0, 50), random(155, 205));
    rect(random(6*width/10 , 7*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === 'm'|| key === 'M'){
    fill(random(50, 105), random(0, 50), random(105, 155));
    rect(random(6*width/10 , 7*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  // purple
  if (key === 'i'|| key === 'I'){
    fill(random(200, 255), random(0, 50), random(200, 255));
    rect(random(7*width/10 , 8*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'k'|| key === 'K'){
    fill(random(155, 205), random(0, 50), random(155, 205));
    rect(random(7*width/10 , 8*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === ','){
    fill(random(105, 155), random(0, 50), random(105, 155));
    rect(random(7*width/10 , 8*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  // red purple
  if (key === 'o'|| key === 'O'){
    fill(random(200, 255), random(0, 50), random(155, 205));
    rect(random(8*width/10 , 9*width/10), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === 'l' || key === 'L'){
    fill(random(155, 205), random(0, 50), random(105, 155));
    rect(random(8*width/10 , 9*width/10), random(height/3,2*height/3), sq, sq);
  }
  if (key === '.'){
    fill(random(105, 155), random(0, 50), random(50, 105));
    rect(random(8*width/10 , 9*width/10), random(2*height/3,height -sq/2), sq, sq);
  }
  
  // red purple
  if (key === 'p'|| key === 'P'){
    fill(random(200, 255), random(200, 255), random(200, 255));
    rect(random(9*width/10 , width), random(0,height/3 +sq/2), sq, sq);
  }
  if (key === ';'){
    fill(random(155, 205), random(155, 205), random(155, 205));
    rect(random(9*width/10 , width), random(height/3,2*height/3), sq, sq);
  }
  if (key === '/'){
    fill(random(105, 155), random(105, 155), random(105, 155));
    rect(random(9*width/10 , width), random(2*height/3,height -sq/2), sq, sq);
  }
  
}