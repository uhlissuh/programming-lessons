var sort = require("./sort");
var reverse = require("./reverse");
var filterPositive = require("./filter_positive");
var camelCase = require("./camel_case");


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

if (arraysAreEqual(sort([3, 2, 5, 1]), [1, 2, 3, 5 ])) {
  console.log("pass");
} else {
  console.log("fail");
}

if (arraysAreEqual(reverse([1, 4, 6, 2]), [2, 6, 4, 1])) {
  console.log("pass");
} else {
  console.log("fail");
}

if (arraysAreEqual(filterPositive([-1, 1, 4, -3, 5]), [1, 4, 5])) {
  console.log("pass");
} else {
  console.log("fail");
}




function expectEqual (argument1, argument2) {
  if (argument1 === argument2) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log("expected", argument1, "to equal", argument2);
  }
}

expectEqual(camelCase("one_two_three"), "oneTwoThree");
expectEqual(camelCase("one"), "one");
expectEqual(camelCase("one_two"), "oneTwo");
expectEqual(camelCase("one_two three_four"), "oneTwo threeFour");
