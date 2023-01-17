function setup() {
    const  CELL_SIZE = 80;
    createCanvas(800, 800);
    noStroke();
    let x = 0;
    let y = 0;
    let xVariation =0;
    let yVariation = 0;
    let widthVariation = 0;
    let heightVariation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colours = [color("#231e39"), color("#c6331b"),color("#e0b411"),color("#e6e2df"),color("#a7a9ab")];
    while(y < height){
        while(x < width) {
            fill(random(colours));
            // rect( x + random(-xVariation, xVariation),y + random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation , widthVariation ), CELL_SIZE + random(-heightVariation, heightVariation));
            rect(x, y, currentWidth, currentHeight);
            x+= currentWidth;
        }
        y+=currentHeight;
        x=0;
    }



    
}
function draw() {
}
