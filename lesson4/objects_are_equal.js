function objectsAreEqual (object1, object2) {

  var object1Properties = Object.keys(object1);
  var object2Properties = Object.keys(object2);

  if (object1Properties.length !== object2Properties.length) {
    return false;
  }

  for (var i = 0; i < object1Properties.length; i ++) {
    if (object2[object1Properties[i]] !== object1[object1Properties[i]]) {
      return false;
    }
  }
  return true;
}

module.exports = objectsAreEqual;
