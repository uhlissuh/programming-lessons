var isEqual = require("./is_equal");


if (isEqual([1, 2, 3], [1, 2, 3])) {
  console.log("Pass");
} else {
  console.log("fail");
}

if (!isEqual([1], [1, 2])) {
  console.log("Pass");
} else {
  console.log("fail");
}


if(isEqual({a: 1}, {a: 1})) {
  console.log("Pass");
} else {
  console.log("fail");
}

if (!isEqual({a: 1}, {b: 1})) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(isEqual(4, 4)) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(!isEqual(4, 5)) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(isEqual("something", "something")) {
  console.log("Pass");
} else {
  console.log("fail");
}


if(!isEqual("something", "something-else")) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(!isEqual(5, "something-else")) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(!isEqual({ a: "b" }, 5)) {
  console.log("Pass");
} else {
  console.log("fail");
}

if(!isEqual([1, 2], 3)) {
  console.log("Pass");
} else {
  console.log("fail");
}
