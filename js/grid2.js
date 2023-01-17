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
  
  const CELL_SIZE = 20;
  let x = 0;
  let y = 0;
  let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
  let currentWidth = random(sizes);
  let currentHeight = random(sizes);
  let colours = [color("#1a4b74"),color("#e2ce81"),color("#9e1d28"),color("#7c9ec1"),color("#ac467a"),color("#e8652e "),color("#3c9c75") ]
  noStroke();
  while(y  < height){
    while (x < width){
        tint(random(colours))
        let t = random(textures);
        image(t, x,y, currentWidth, currentHeight);
        x+= currentWidth;
        let availableWidth = width - x;
        currentWidth = random(sizes);
        while (currentWidth > availableWidth){
            currentWidth -= CELL_SIZE;
        }
    }
    y+=currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
        while(currentHeight > availableHeight){
            currentHeight -= CELL_SIZE;
        }
    x = 0;
  }
}

