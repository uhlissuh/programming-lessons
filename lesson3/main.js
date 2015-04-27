var sort = require("./sort");

console.log("please enter some numbers");

var numberArray = [];

process.stdin.on("data", function(data) {
  var integer = parseInt(data.toString());

  if (data.toString() === "\n") {
    sort(numberArray);

    console.log("Your array is", numberArray);
    process.exit();
  }

  numberArray.push(integer);
});
