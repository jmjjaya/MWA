Array.prototype.bubbleSort = function () {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < this.length; i++) {
      if (this[i] && this[i + 1] && this[i] > this[i + 1]) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return this;
};
console.log([0,-4,2,6,-5,9,29,-93].bubbleSort());