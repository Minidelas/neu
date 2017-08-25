var points = new Array(1000);
var p;

function setup() {
  createCanvas(800, 800)
  p = new Perceptron();
  for (var i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  var inputs = [-1, 0.5];
  var guess = p.guess(inputs);
}

function draw() {
  background(255);
  stroke(0);

  // line(0, height, width, 0);
  var p1 = new Point(-1, funcionCorte(-1));
  var p2 = new Point(1, funcionCorte(1));
  line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());

  var p3 = new Point(-1, p.guessY(-1));
  var p4 = new Point(1, p.guessY(1));
  line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY());

  for (pt of points) {
    pt.show();
  }

  for (pt of points) {
    var inputs = [pt.x, pt.y, pt.bias];
    var target = pt.label;
    // p.train(inputs, target);

    var guess = p.guess(inputs);
    if (guess === target) {
      fill(0,255,0);
    } else {
      fill(255,0,0);
    }
    noStroke();
    ellipse(pt.pixelX(), pt.pixelY(), 5,5);
  }
  trainThis();
}

function mousePressed() {

}

function trainThis() {
  for (pt of points) {
    var inputs = [pt.x, pt.y, pt.bias];
    var target = pt.label;
    p.train(inputs, target);
  }
}
