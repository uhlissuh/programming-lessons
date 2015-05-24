var objectsAreEqual = require("./objects_are_equal");

if (objectsAreEqual({}, {})) {
  console.log("pass");
} else {
  console.log("fail");
}

if (objectsAreEqual({ tuna: "good" }, { tuna: "good" }))  {
  console.log("pass");
} else {
  console.log("fail");
}

if (!objectsAreEqual({ a: 'b', c: 'd' }, { a: 'b' })) {
  console.log("pass");
} else {
  console.log("fail");
}

if (!objectsAreEqual({ a: 'b' }, { a: 'b', c: 'd' })) {
  console.log("pass");
} else {
  console.log("fail");
}

if (objectsAreEqual({ a: 'b', c: 'd' }, {  c: 'd', a: 'b' })) {
  console.log("pass");
} else {
  console.log("fail");
}
