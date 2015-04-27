var sort = require("./sort");

function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

if (!arraysAreEqual([], [])) {
  console.log("fail");
}

if (arraysAreEqual([1, 2], [1, 3])) {
  console.log("fail");
}

var array = [3, 2, 5, 1];
var sortedArray = [1, 2, 3, 5 ];

sort(array);

if (arraysAreEqual(array, sortedArray)) {
  console.log("pass");
} else {
  console.log("fail");
}
