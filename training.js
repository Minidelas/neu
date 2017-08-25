function funcionCorte(x) {
  // y = mx + b
  return 0.89 * x - 0.12;
}

class Point {
  constructor() {
    if (arguments.length === 2) {
      this.x = arguments[0];
      this.y = arguments[1];
    } else {
      this.bias = 1;
      this.x = random(-1,1);
      this.y = random(-1,1);

      this.lineY = funcionCorte(this.x);
      if (this.y > this.lineY) {
        this.label = 1;
      } else {
        this.label = -1;
      }
    }
  }

  pixelX() {
    return map(this.x, -1, 1, 0, width);
  }

  pixelY() {
    return map(this.y, -1, 1, height, 0);
  }

  show() {
    stroke(0);
    if (this.label === 1) {
      fill(255);
    } else {
      fill (0);
    }

    var px = this.pixelX();
    var py = this.pixelY();

    ellipse(px, py, 8, 8);
  }
}
