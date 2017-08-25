var points = new Array(100);
var p;

function setup() {
  createCanvas(800, 800)
  p = new Perceptron();
  for (var i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  var inputs = [-1, 0.5];
  var guess = p.guess(inputs);
  console.log(guess);
}

function draw() {
  background(255);
  stroke(0);
  line(0,0,width, height);

  for (pt of points) {
    pt.show();
  }

  for (pt of points) {
    var inputs = [pt.x, pt.y];
    var target = pt.label;
    // p.train(inputs, target);

    var guess = p.guess(inputs);
    if (guess === target) {
      fill(0,255,0);
    } else {
      fill(255,0,0);
    }
    noStroke();
    ellipse(pt.x, pt.y, 15,15);
  }
}

function mousePressed() {
  for (pt of points) {
    var inputs = [pt.x, pt.y];
    var target = pt.label;
    p.train(inputs, target);
  }
}
