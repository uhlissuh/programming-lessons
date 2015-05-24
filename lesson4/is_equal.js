var arraysAreEqual = require("./arrays_are_equal");
var objectsAreEqual = require("./objects_are_equal");

function isEqual (thing1, thing2) {
  if (typeof thing1 === "string" && typeof thing2 === "string") {
      if(thing1 === thing2) {
        return true;
      }
      else {
        return false;
      }
  } else if (typeof thing1 === "object" && typeof thing2 === "object") {
      if (Array.isArray(thing1)) {
        return arraysAreEqual(thing1, thing2);
      } else {
        return objectsAreEqual(thing1, thing2);
      }
  } else if (typeof thing1 === "number"  && typeof thing2 === "number") {
      if(thing1 === thing2) {
        return true;
      }
      else {
        return false;
      }
  }
}

module.exports = isEqual;
