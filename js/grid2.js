let textures = [];
function preload(){
    let texturesNum = 6
    for(let i = 1; i <= texturesNum; i++){
        // let textures = loadImage("Images/pattern_"+i+".png"); //concatenation
        let t = loadImage(`Images/pattern_${i}.png`);//backticks are "template literals" and dilllar sign curly brace is interpolation 
        textures.push(t);// adds texture to texture array 



    }

}
function setup() {
  createCanvas(800, 800);
  const CELL_SIZE = 80;
  let x = 0;
  let y = 0;
  noStroke();
  while(y  < height){
    while (x < width){
        tint(random(255))
        let t = random(textures);
        image(t, x, y, CELL_SIZE)
        x+=CELL_SIZE; 
    }
    y+=CELL_SIZE;
    x = 0;
  }
}

