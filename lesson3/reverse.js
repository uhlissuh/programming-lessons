function reverse (array) {
  var newArray = Array(array.length);
  for(var i = 1; i <= array.length; i++ ) {
    newArray[array.length - i] = array[i-1];
  }
  return newArray;
}

module.exports = reverse;
