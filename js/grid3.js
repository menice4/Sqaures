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

  const CELL_SIZE = 160;
  let x = 0;
  let y = 0;
  let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
  

  let colours = [color("#f9f4dc"), color("#4c242d"), color("#cb4306"), color("#802147"), color("#fa8b2e"), color("#ab9594"), color("#a15b71"), color("#9f381d"), color("#5c5c5c")]
  noStroke();

  
  while (y < height) {
    while (x < width) {
      fill(random(colours))
      
      rect( x, y, CELL_SIZE,CELL_SIZE);
      tint(random(colours))
      let t = random(textures);
      image(t, x, y, CELL_SIZE,CELL_SIZE);
      x += CELL_SIZE

    }
    y += CELL_SIZE
    x = 0;
  }
}
