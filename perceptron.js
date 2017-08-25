
// Activation function
function sign(n){
  if (n >= 0) {
    return 1;
  } else {
    return -1;
  }
}

class Perceptron {
  //Constructor
  constructor() {
    //Inicializa los pesos
    this.weights = new Array(3);
    this.lr = 0.00001;
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
  }

  guess(inputs) {
    var sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += this.weights[i] * inputs[i];
    }
    return sign(sum);
  }

  guessY(x) {
    var w0 = this.weights[0]
    var w1 = this.weights[1];
    var w2 = this.weights[2]
    return -(w2/w1) - (w0/w1) * x;
  }

  train(inputs, target){
    var guess = this.guess(inputs);
    var error = target - guess;

    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.lr;
    }
  }

}
