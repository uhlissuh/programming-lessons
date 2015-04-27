

function swap(num1, num2, array) {
  var temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
}

function sort(array) {
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
      }
    }
  }
  return array;
}

module.exports = sort;
