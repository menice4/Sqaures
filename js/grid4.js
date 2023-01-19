function setup() {
  createCanvas(500, 500);
  noFill()
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(220,220,220);

  for (var y = 50; y < 500; y = y + 100) {
    for (var x = 50; x < 500; x = x + 100) {
      var r = 100;
      for (var w = 85; w > 0; w = w - r) {
        tint("#cb4306")
        circle(x, y, w, w);
        r = random(2, 50);
        
  
      }
    }
  }

  for (var y = 50; y < 500; y = y + 100) {
    for (var x = 50; x < 500; x = x + 100) {
      var r = 1000;
      for (var w = 105; w > 0; w = w - r) {
        rect(x, y, w, w);
        r = random(2, 50);
     
      }
    }
  }



}
