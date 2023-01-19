let textures = [];
function preload() {
  let texturesNum = 7
  for (let i = 1; i <= texturesNum; i++) {
    // let textures = loadImage("Images/pattern_"+i+".png"); //concatenation
    let t = loadImage(`Images/Shape_${i}.png`);//backticks are "template literals" and dilllar sign curly brace is interpolation 
    textures.push(t);// adds texture to texture array 
  }

}
 
function setup() {
  createCanvas(800, 800);

  const CELL_SIZE = 50;
  let x = 0;
  let y = 0;
  let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
  

  let colours = [color("#f72585"), color("#b5179e"), color("#7209b7"), color("#560bad"), color("#480ca8"),color("#3a0ca3"),color("#3f37c9"),color("#4361ee"),color("#4895ef"),color("#4cc9f0")]
  noStroke();

  
  while (y < height) {
    fill(random(colours))
    triangle(x-CELL_SIZE/2, y, x+CELL_SIZE/2, y, x,y+CELL_SIZE)
    while (x < width) {
      fill(random(colours))
      
      // triangles( x, y, CELL_SIZE,CELL_SIZE);
      triangle(x, y+CELL_SIZE, x+CELL_SIZE, y+CELL_SIZE, x+CELL_SIZE/2, y)
      fill(random(colours))
      triangle(x+CELL_SIZE/2, y,x+CELL_SIZE, y +CELL_SIZE ,x+CELL_SIZE*1.5, y)
      circle( x+25, y+25, CELL_SIZE/3,CELL_SIZE/3);
    
      x += CELL_SIZE

    }
    y += CELL_SIZE
    x = 0;
  }
}
