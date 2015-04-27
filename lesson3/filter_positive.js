function filterPositive(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


module.exports = filterPositive
