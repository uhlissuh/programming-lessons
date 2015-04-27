function camelCase (string) {
  arrayOfStrings = string.split("_");
  var finalString = arrayOfStrings[0];
  for (var i = 1; i < arrayOfStrings.length; i++) {
    var capitalized = arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].substring(1);
    finalString = finalString + capitalized;
  }
  return finalString;
}


module.exports = camelCase;
